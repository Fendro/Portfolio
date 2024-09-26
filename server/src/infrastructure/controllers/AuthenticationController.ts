import { NextFunction, Request, Response } from 'express';

import type { IAuthenticationService } from '@/interfaces';

export class AuthenticationController {
  constructor(private authenticationService: IAuthenticationService) {}

  loginAsync = async (req: Request, res: Response, next: NextFunction) => {
    this.authenticationService
      .login(req.body)
      .then((response) => {
        res.status(200).json(response);
        next();
      })
      .catch(next);
  };

  registerAsync = async (req: Request, res: Response, next: NextFunction) => {
    this.authenticationService
      .register(req.body)
      .then(() => {
        res.status(201);
        next();
      })
      .catch(next);
  };
}
