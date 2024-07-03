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
  .post("/Authentication/Register", authController.Register)
  .post("/Authentication/Login", authController.Login);

export default controllers;
