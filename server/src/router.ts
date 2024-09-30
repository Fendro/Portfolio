import { Router } from 'express';

import { DiService } from '@/DiService';

const diService = new DiService();
const router = Router();

router
  .get('/reviews', diService.reviewControllerInstance.getAsync)
  .post('/reviews', diService.reviewControllerInstance.createAsync);

export default router;
