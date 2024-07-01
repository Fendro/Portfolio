import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import { rateLimit } from "express-rate-limit";
import winston from "winston";
import { Dialect, Sequelize } from "sequelize";
import mysql from "mysql2/promise";

dotenv.config();

(async function initialize() {
  try {
    const { host, port, user, password, database } = {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as unknown as number,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    };
    const connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
    });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    const sequelize = new Sequelize(
      process.env.DB_NAME as string,
      process.env.DB_USERNAME as string,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT as Dialect,
      },
    );

    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully.",
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

(async () => {})();

const app: Express = express();
const port = process.env.APP_PORT || 3000;
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: process.env.APP_NAME },
  transports: [
    new winston.transports.File({
      filename: `${process.env.LOGS_PATH}/error.log`,
      level: "error",
    }),
    new winston.transports.File({
      filename: `${process.env.LOGS_PATH}/combined.log`,
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  app.use(cors());
  logger.add(new winston.transports.Console());
}

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, httpOnly: true },
  }),
);
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    limit: 30,
  }),
);

app.post("/Authentication/Login", (req: Request, res: Response) => {
  res.send({
    token: "test",
    userProfile: {
      email: "test@test.com",
      firstname: "firstname",
      lastname: "lastname",
      username: "username",
    },
  });
});

app.post("/Authentication/Register", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
