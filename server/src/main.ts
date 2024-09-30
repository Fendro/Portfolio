import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import * as process from 'node:process';
import { Server } from 'socket.io';

import { instantiateDatabase } from '@/database/dbContext';
import {
  loggerMiddleware,
  rateLimiterMiddleware,
  sessionMiddleware,
} from '@/middlewares';
import { EnvironmentVariables } from '@/types/EnvironmentVariables';

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

if (environmentVariables.NODE_ENV === 'development') {
  app.use(cors({ origin: '*' }));
}

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(sessionMiddleware(environmentVariables.SESSION_SECRET))
  .use(loggerMiddleware)
  .use(
    rateLimiterMiddleware({
      requestCount: environmentVariables.RATE_LIMITER_REQUEST_COUNT as number,
      timeWindowMs: environmentVariables.RATE_LIMITER_TIME_WINDOW_MS as number,
    }),
  )
  .use(router);

app.listen(environmentVariables.SERVER_PORT, () => {
  console.info(
    `[server]: Server is running at http://${environmentVariables.SERVER_HOST}:${environmentVariables.SERVER_PORT}`,
  );
});

io.on('connection', (socket) => {
  console.info('[server]: Socket connection established', socket.id);
});
