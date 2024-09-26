import { NextFunction, Request, Response } from 'express';

import type { IReviewService } from '@/interfaces';

export class ReviewController {
  constructor(private _reviewService: IReviewService) {}

  getAsync = async (req: Request, res: Response, next: NextFunction) => {
    this._reviewService
      .getAsync()
      .then((response) => {
        res.status(200).json(response);
        next();
      })
      .catch(next);
  };

  createAsync = async (req: Request, res: Response, next: NextFunction) => {
    console.log('controller', req.body);
    this._reviewService
      .createAsync(req.body)
      .then(() => {
        res.status(200).json({});
        next();
      })
      .catch(next);
  };
}
