import { NextFunction, Request, Response } from 'express';
import winston from 'winston';

interface LoggerOptions {
  appName: string;
  environment: string;
  logsPath: string;
}

function createLogger(options: LoggerOptions) {
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { middleware: 'Incoming request' },
    transports: [
      new winston.transports.File({
        filename: `${options.logsPath}/error.log`,
        level: 'error',
      }),
      new winston.transports.File({
        filename: `${options.logsPath}/combined.log`,
      }),
    ],
  });

  if (options.environment !== 'production')
    logger.add(new winston.transports.Console());

  return logger;
}

export const loggerMiddleware =
  (options: LoggerOptions) =>
  (req: Request, res: Response, next: NextFunction) => {
    const logger = createLogger(options);
    console.info(`${req.url} - ${req.method} request initiated`);
    next();
  };
