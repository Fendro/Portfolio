import dotenv from 'dotenv';
import process from 'node:process';
import { Dialect, Sequelize } from 'sequelize';

import { DatabaseConfiguration } from '@/database/Database';
import type { EnvironmentVariables } from '@/types';

dotenv.config();

const environmentVariables = process.env as EnvironmentVariables;
const databaseConfiguration: DatabaseConfiguration = {
  dbName: environmentVariables.DB_NAME,
  host: environmentVariables.DB_HOST,
  password: environmentVariables.DB_PASSWORD,
  port: environmentVariables.DB_PORT as number,
  provider: environmentVariables.DB_PROVIDER as Dialect,
  username: environmentVariables.DB_USERNAME,
};

const context = new Sequelize(
  databaseConfiguration.dbName,
  databaseConfiguration.username,
  databaseConfiguration.password,
  {
    host: databaseConfiguration.host,
    dialect: 'mysql',
  },
);

export default context;
