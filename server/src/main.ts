import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import * as process from 'node:process';
import { Server } from 'socket.io';

import controllers from '@/controllers';
import Database from '@/database/Database';
import {
  loggerMiddleware,
  rateLimiterMiddleware,
  sessionMiddleware,
} from '@/middlewares';
import { createLogger } from '@/middlewares';
import type { EnvironmentVariables } from '@/types';

dotenv.config();

const environmentVariables = process.env as EnvironmentVariables;
const database = new Database({
  dbName: environmentVariables.DB_NAME,
  host: environmentVariables.DB_HOST,
  password: environmentVariables.DB_PASSWORD,
  port: environmentVariables.DB_PORT as number,
  username: environmentVariables.DB_USERNAME,
});

(async () => {
  await database.createDatabaseIfDoesNotExist();
  await database.synchronizeSequelizeModels();
  await database.connect();
})();

const app = express();
const io = new Server(http.createServer(app));

if (environmentVariables.NODE_ENV === 'development') {
  app.use(cors());
}

app
  .use(sessionMiddleware(environmentVariables.SESSION_SECRET))
  .use(
    loggerMiddleware(
      createLogger({
        appName: environmentVariables.APP_NAME,
        environment: environmentVariables.NODE_ENV,
        logsPath: environmentVariables.LOGS_PATH,
      }),
    ),
  )
  .use(
    rateLimiterMiddleware({
      requestCount: environmentVariables.RATE_LIMITER_REQUEST_COUNT as number,
      timeWindowMs: environmentVariables.RATE_LIMITER_REQUEST_COUNT as number,
    }),
  )
  .use(controllers);

app.listen(environmentVariables.APP_PORT, () => {
  console.info(
    `[server]: Server is running at http://${environmentVariables.APP_HOST}:${environmentVariables.APP_PORT}`,
  );
});

io.on('connection', (socket) => {
  console.info('[server]: Socket connection established', socket.id);
});
