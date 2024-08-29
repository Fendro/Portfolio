import { ReviewApi } from '@/api/ReviewApi';
import { ReviewEntity } from '@/core/entities';
import type { IFetchService } from '@/core/services';

export interface IReviewService {
  getReviewsAsync(): Promise<ReviewEntity[]>;
  postReviewAsync(): Promise<void>;
}

export class ReviewService implements IReviewService {
  constructor(private fetchService: IFetchService) {}

  async getReviewsAsync(): Promise<ReviewEntity[]> {
    return Promise.resolve(
      this.fetchService.getAsync<ReviewEntity[]>(ReviewApi.getReviewsUrl),
    );
  }

  async postReviewAsync(): Promise<void> {
    return Promise.resolve();
  }
}
