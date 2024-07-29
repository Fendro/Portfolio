import { Router } from 'express';

import { ReviewRepository, UserRepository } from '@/repositories';
import { AuthenticationService, HashService, ReviewService } from '@/services';

import AuthenticationController from './AuthenticationController';
import ReviewController from './ReviewController';

const controllers = Router();

const authController = new AuthenticationController(
  new AuthenticationService(new UserRepository(), new HashService()),
);
const reviewController = new ReviewController(
  new ReviewService(new ReviewRepository()),
);

controllers
  .post('/authentication/register', authController.register)
  .post('/authentication/login', authController.login)
  .get('/reviews', reviewController.get)
  .get('/reviews/{id}', reviewController.getById)
  .post('/reviews', reviewController.create);

export default controllers;
