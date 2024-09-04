import { ReviewApi } from '@/api/ReviewApi';
import { ReviewEntity } from '@/core/entities';
import type { IFetchService } from '@/core/services';

export interface IReviewService {
  getReviewsAsync(): Promise<ReviewEntity[]>;
  postReviewAsync(): Promise<void>;
}

export class ReviewService implements IReviewService {
  constructor(private fetchService: IFetchService) {}

  getReviewsAsync(): Promise<ReviewEntity[]> {
    return this.fetchService.getAsync<ReviewEntity[]>(ReviewApi.getReviewsUrl);
  }

  postReviewAsync(): Promise<void> {
    return Promise.resolve();
  }
}
