import { Router } from "express";
import AuthenticationController from "@/controllers/AuthenticationController";

const controllers = Router();

controllers.post(
  "/Authentication/Register",
  () => new AuthenticationController().Register,
);

controllers.post(
  "/Authentication/Login",
  () => new AuthenticationController().Login,
);

export default controllers;
