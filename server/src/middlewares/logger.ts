import winston from "winston";
import process from "node:process";

export const loggerMiddleware = winston.createLogger({
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

if (process.env.NODE_ENV !== "production")
  loggerMiddleware.add(new winston.transports.Console());
