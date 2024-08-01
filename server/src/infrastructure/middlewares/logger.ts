import { NextFunction, Request, Response } from 'express';
import winston, { Logger } from 'winston';

interface LoggerOptions {
  appName: string;
  environment: string;
  logsPath: string;
}

export const createLogger = (options: LoggerOptions) => {
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
};

export const loggerMiddleware =
  (logger: Logger) => (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    console.info(`${req.method} ${req.url} - request initiated`);
    res.on('finish', () => {
      const end = Date.now();
      console.info(
        `${req.method} ${req.url} - request finished in ${end - start} ms`,
      );
    });
    next();
  };
