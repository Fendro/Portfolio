import { Request, Response } from "express";

export default class AuthenticationController {
  public Login() {
    return (req: Request, res: Response) => {
      res.send({
        token: "test",
        userProfile: {
          email: "test@test.com",
          firstname: "firstname",
          lastname: "lastname",
          username: "username",
        },
      });
    };
  }

  public Register() {
    return (req: Request, res: Response) => {
      res.send("Express + TypeScript Server");
    };
  }
}
