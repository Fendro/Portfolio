import { ReviewApi, ReviewDto } from '@/api';
import { diManager } from '@/diManager.ts';

export const listReviews = () => {
  return diManager.fetchService
    .getAsync<ReviewDto[]>(ReviewApi.getReviewsUrl)
    .then(diManager.reviewStore.setReviews);
};
