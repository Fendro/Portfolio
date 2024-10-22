import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';

import { initializationFunctions } from '@/database/models';

interface DbConfig {
  dbName: string;
  host: string;
  password: string;
  port: number;
  username: string;
}

class Database {
  private readonly _context: Sequelize;

  get context() {
    return this._context;
  }

  constructor(dbConfig: DbConfig) {
    this._context = new Sequelize(
      dbConfig.dbName,
      dbConfig.username,
      dbConfig.password,
      {
        host: dbConfig.host,
        dialect: 'mysql',
      },
    );
  }

  static createIfDoesNotExist = async (databaseConfiguration: DbConfig) => {
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
  };
}

let database: Database;

export const instantiateDatabase = async (dbConfig: DbConfig) => {
  if (database !== undefined)
    throw new Error('Database has already been instantiated.');

  await Database.createIfDoesNotExist(dbConfig);
  database = new Database(dbConfig);
  initializationFunctions.forEach((fn) => fn(database.context));
};
