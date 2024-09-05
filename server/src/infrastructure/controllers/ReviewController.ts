import { NextFunction, Request, Response } from 'express';

import type { IReviewService } from '@/interfaces';

export class ReviewController {
  constructor(private _reviewService: IReviewService) {}

  get = async (req: Request, res: Response, next: NextFunction) => {
    this._reviewService
      .get()
      .then((response) => {
        res.status(200).json(response);
        next();
      })
      .catch((error) => next(error));
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    this._reviewService
      .getById(req.body.id)
      .then((response) => {
        res.status(200).json(response);
        next();
      })
      .catch((error) => next(error));
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    console.log('controller', req.body);
    this._reviewService
      .create(req.body)
      .then(() => {
        res.status(200);
        next();
      })
      .catch((error) => next(error));
  };
}
