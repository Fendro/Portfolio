import { NextFunction, Request, Response } from 'express';

import type { IUserService } from '@/interfaces';

export class UserController {
  constructor(private userService: IUserService) {}

  get = async (req: Request, res: Response, next: NextFunction) => {};
  create = async (req: Request, res: Response, next: NextFunction) => {};
  update = async (req: Request, res: Response, next: NextFunction) => {};
  delete = async (req: Request, res: Response, next: NextFunction) => {};
}
