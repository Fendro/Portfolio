import { NextFunction, Request, Response } from 'express';

import type { IAuthenticationService } from '@/interfaces';

export default class AuthenticationController {
  constructor(private authenticationService: IAuthenticationService) {}

  login = async (req: Request, res: Response, next: NextFunction) => {
    this.authenticationService
      .login(req.body)
      .then((response) => {
        res.status(200).json(response);
        next();
      })
      .catch((error) => next(error));
  };

  register = async (req: Request, res: Response, next: NextFunction) => {
    this.authenticationService
      .register(req.body)
      .then(() => {
        res.status(200);
        next();
      })
      .catch((error) => next(error));
  };
}
