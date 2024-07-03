import type { NextFunction, Request, Response } from "express";
import type {
  IAuthenticationService,
  IHashService,
} from "@/application/interfaces";

export default class AuthenticationController {
  constructor(
    private authenticationService: IAuthenticationService,
    private hashService: IHashService,
  ) {}

  Login = async (req: Request, res: Response, next: NextFunction) => {
    console.log(
      this.authenticationService.Login(
        req.body?.email,
        this.hashService.HashPassword(req.body?.password),
      ),
    );
    res.status(200).json({
      token: "test",
      userProfile: {
        email: "test@test.com",
        firstname: "firstname",
        lastname: "lastname",
        username: "username",
      },
    });
    next();
  };

  Register = async (req: Request, res: Response, next: NextFunction) => {
    await this.authenticationService.Register(req.body);
    res.status(200).json("Express + TypeScript Server");
    next();
  };
}
