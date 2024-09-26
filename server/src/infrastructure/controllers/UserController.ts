import { NextFunction, Request, Response } from 'express';

import type { IUserService } from '@/interfaces';

export class UserController {
  constructor(private userService: IUserService) {}

  getAsync = async (req: Request, res: Response, next: NextFunction) => {};
  createAsync = async (req: Request, res: Response, next: NextFunction) => {};
  updateAsync = async (req: Request, res: Response, next: NextFunction) => {};
  deleteAsync = async (req: Request, res: Response, next: NextFunction) => {};
}
