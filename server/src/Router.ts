import { Router } from 'express';

import { DIService } from '@/DIService';

const diService = new DIService();
const router = Router();

router
  .post(
    '/authentication/register',
    diService.authenticationControllerInstance.registerAsync,
  )
  .post(
    '/authentication/login',
    diService.authenticationControllerInstance.loginAsync,
  )
  .get('/reviews', diService.reviewControllerInstance.getAsync)
  .post('/reviews', diService.reviewControllerInstance.createAsync);

export default router;
