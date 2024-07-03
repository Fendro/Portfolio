import { Router } from "express";
import AuthenticationController from "./AuthenticationController";
import { AuthenticationService, HashService } from "@/services";
import { UserRepository } from "@/repositories";

const controllers = Router();

const authController = new AuthenticationController(
  new AuthenticationService(new UserRepository()),
  new HashService(),
);

controllers
  .post("/authentication/register", authController.Register)
  .post("/authentication/login", authController.Login);

export default controllers;
