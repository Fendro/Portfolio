import mysql from 'mysql2/promise';
import { Dialect } from 'sequelize';

import context from '@/database/context';

export interface DatabaseConfiguration {
  dbName: string;
  host: string;
  password: string;
  port: number;
  provider: Dialect;
  username: string;
}

export default class Database {
  static async createDatabaseIfDoesNotExist(
    databaseConfiguration: DatabaseConfiguration,
  ) {
    const connection = await mysql.createConnection({
      host: databaseConfiguration.host,
      password: databaseConfiguration.password,
      port: databaseConfiguration.port,
      user: databaseConfiguration.username,
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${databaseConfiguration.dbName}\`;`,
    );

    connection.destroy();
  }

  static async synchronizeDatabaseWithModels() {
    context.sync();
  }
}
