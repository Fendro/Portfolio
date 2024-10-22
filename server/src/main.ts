import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import * as process from 'node:process';
import { Server } from 'socket.io';

import { getCorsOptions } from '@/config';
import { instantiateDatabase } from '@/database/dbContext';
import {
  loggerMiddleware,
  rateLimiterMiddleware,
  sessionMiddleware,
} from '@/middlewares';
import { EnvironmentVariables } from '@/types';

import router from './router';

dotenv.config();
const environmentVariables = process.env as EnvironmentVariables;

const dbConfig = {
  dbName: environmentVariables.DB_NAME,
  host: environmentVariables.DB_HOST,
  password: environmentVariables.DB_PASSWORD,
  port: environmentVariables.DB_PORT as number,
  username: environmentVariables.DB_USERNAME,
};
(async () => {
  await instantiateDatabase(dbConfig);
})();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(
  cors(getCorsOptions(environmentVariables.NODE_ENV)),
  express.urlencoded({ extended: false }),
  express.json(),
  sessionMiddleware(environmentVariables.SESSION_SECRET),
  loggerMiddleware,
  rateLimiterMiddleware({
    requestCount: Number(environmentVariables.RATE_LIMITER_REQUEST_COUNT),
    timeWindowMs: Number(environmentVariables.RATE_LIMITER_TIME_WINDOW_MS),
  }),
  router,
);

app.listen(environmentVariables.SERVER_PORT, () => {
  console.info(
    `[server]: Server is running at http://${environmentVariables.SERVER_HOST}:${environmentVariables.SERVER_PORT}`,
  );
});

io.on('connection', (socket) => {
  console.info('[server]: Socket connection established', socket.id);
});
