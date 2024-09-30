import { NextFunction, Request, Response } from 'express';

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const start = new Date(Date.now());
  console.info(
    `${start.toUTCString()}: ${req.method} ${req.url} - request initiated`,
  );

  res.on('finish', () => {
    const end = new Date(Date.now());
    console.info(
      `${end.toUTCString()}: ${req.method} ${req.url} - request finished in ${end.getTime() - start.getTime()} ms`,
    );
  });

  next();
};
