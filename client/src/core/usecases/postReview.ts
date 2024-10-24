import { ReviewApi, ReviewCreateDto } from '@/api';
import { listReviews } from '@/core/usecases';
import { diManager } from '@/diManager.ts';

export const postReview = async (review: ReviewCreateDto) => {
  return diManager.fetchService
    .postAsync(ReviewApi.postReviewUrl, review)
    .then(() => diManager.toastService.success('Review posted successfully'))
    .then(listReviews)
    .catch((err) => diManager.toastService.error(err.message));
};
