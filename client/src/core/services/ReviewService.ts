import { ReviewApi } from '@/api/ReviewApi';
import { Review } from '@/core/entities';
import type { IFetchService } from '@/core/services';

export interface IReviewService {
  getReviewsAsync(): Promise<Review[]>;
  postReviewAsync(): Promise<void>;
}

export class ReviewService implements IReviewService {
  constructor(private fetchService: IFetchService) {}

  async getReviewsAsync(): Promise<Review[]> {
    return Promise.resolve(
      this.fetchService.getAsync<Review[]>(ReviewApi.getReviewsUri),
    );
  }

  async postReviewAsync(): Promise<void> {
    return Promise.resolve();
  }
}
