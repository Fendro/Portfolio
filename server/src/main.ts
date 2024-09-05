import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import * as process from 'node:process';
import { Dialect } from 'sequelize';
import { Server } from 'socket.io';
import { Database } from '@/database/Database';
import {
  createLogger,
  loggerMiddleware,
  rateLimiterMiddleware,
  sessionMiddleware,
} from '@/middlewares';
import type { EnvironmentVariables } from '@/types';

import router from './Router';

dotenv.config();

const environmentVariables = process.env as EnvironmentVariables;
const databaseConfiguration = {
  dbName: environmentVariables.DB_NAME,
  host: environmentVariables.DB_HOST,
  password: environmentVariables.DB_PASSWORD,
  port: environmentVariables.DB_PORT as number,
  provider: environmentVariables.DB_PROVIDER as Dialect,
  username: environmentVariables.DB_USERNAME,
};
(async () => {
  await Database.createDatabaseIfDoesNotExist(databaseConfiguration);
  await Database.synchronizeDatabaseWithModels();
})();

const app = express();
const io = new Server(http.createServer(app));

if (environmentVariables.NODE_ENV === 'development') {
  app.use(cors());
} else {
  app.use(cors()); // TODO
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
  .use(router);

app.listen(environmentVariables.APP_PORT, () => {
  console.info(
    `[server]: Server is running at http://${environmentVariables.APP_HOST}:${environmentVariables.APP_PORT}`,
  );
});

io.on('connection', (socket) => {
  console.info('[server]: Socket connection established', socket.id);
});
