import { Dialect, Sequelize } from "sequelize";
import mysql from "mysql2/promise";
import process from "node:process";

export interface DatabaseConfiguration {
  dbName: string;
  host: string;
  password: string;
  port: number;
  username: string;
}

export default class Database {
  public constructor(private databaseConfiguration: DatabaseConfiguration) {}

  public async CreateDatabaseIfDoesNotExistAsync() {
    const connection = await mysql.createConnection({
      host: this.databaseConfiguration.host,
      password: this.databaseConfiguration.password,
      port: this.databaseConfiguration.port,
      user: this.databaseConfiguration.username,
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${this.databaseConfiguration.dbName}\`;`,
    );

    connection.destroy();
  }

  public async SynchronizeSequelizeModelsAsync() {}

  public async ConnectAsync() {
    return new Sequelize(
      process.env.DB_NAME as string,
      process.env.DB_USERNAME as string,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT as Dialect,
      },
    );
  }
}
