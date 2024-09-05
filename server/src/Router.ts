import { Router } from 'express';

import { DIService } from '@/DIService';

const diService = new DIService();
const router = Router();

router
  .post(
    '/authentication/register',
    diService.authenticationControllerInstance.register,
  )
  .post(
    '/authentication/login',
    diService.authenticationControllerInstance.login,
  )
  .get('/reviews', diService.reviewControllerInstance.get)
  .get('/reviews/{id}', diService.reviewControllerInstance.getById)
  .post('/reviews', diService.reviewControllerInstance.create);

export default router;
