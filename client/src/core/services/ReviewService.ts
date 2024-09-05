import { ReviewApi } from '@/api/ReviewApi';
import type { ReviewCreateDto } from '@/api/dto/Review/ReviewCreateDto';
import { ReviewEntity } from '@/core/entities';
import type { IFetchService } from '@/core/services';

export interface IReviewService {
  getReviewsAsync: () => Promise<ReviewEntity[]>;
  postReviewAsync: (review: ReviewCreateDto) => Promise<void>;
}

export class ReviewService implements IReviewService {
  constructor(private fetchService: IFetchService) {}

  getReviewsAsync = (): Promise<ReviewEntity[]> => {
    return this.fetchService.getAsync<ReviewEntity[]>(ReviewApi.getReviewsUrl);
  };

  postReviewAsync = (review: ReviewCreateDto): Promise<void> => {
    return this.fetchService.postAsync(ReviewApi.postReviewUrl, review);
  };
}
