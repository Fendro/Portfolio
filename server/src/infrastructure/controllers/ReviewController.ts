import { NextFunction, Request, Response } from 'express';

import type { IReviewService } from '@/interfaces';

export default class ReviewController {
  constructor(private _reviewService: IReviewService) {}

  get = async (req: Request, res: Response, next: NextFunction) => {
    const response = await this._reviewService.get();
    res.status(200).json(response);
    next();
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    const response = await this._reviewService.getById(req.body.id);
    res.status(200).json(response);
    next();
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    await this._reviewService.create(req.body);
    res.status(200).json();
    next();
  };
}
