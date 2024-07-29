import { NextFunction, Request, Response } from 'express';

import type { IAuthenticationService } from '@/interfaces';

export default class AuthenticationController {
  constructor(private authenticationService: IAuthenticationService) {}

  login = async (req: Request, res: Response, next: NextFunction) => {
    const response = await this.authenticationService.login(req.body);
    res.status(200).json(response);
    next();
  };

  register = async (req: Request, res: Response, next: NextFunction) => {
    await this.authenticationService.register(req.body);
    res.status(200).json();
    next();
  };
}
