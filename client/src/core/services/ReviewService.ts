import { ReviewApi } from '@/api';
import type { ReviewCreateDto, ReviewDto } from '@/api';
import type { IFetchService } from '@/core/services';

export interface IReviewStore {
  reviews: ReviewDto[];
  setReviews: (reviews: ReviewDto[]) => void;
  userReview: ReviewCreateDto;
}

export interface IReviewService {
  getReviews: () => ReviewDto[];
  refreshStoreReviewsAsync: () => Promise<void>;
  postUserReviewAsync: () => Promise<void>;
}

export class ReviewService implements IReviewService {
  constructor(
    private fetchService: IFetchService,
    private reviewStore: IReviewStore,
  ) {}

  getReviews(): ReviewDto[] {
    return this.reviewStore.reviews;
  }

  refreshStoreReviewsAsync = (): Promise<void> => {
    return this.fetchService
      .getAsync<ReviewDto[]>(ReviewApi.getReviewsUrl)
      .then(this.reviewStore.setReviews);
  };

  postUserReviewAsync = (): Promise<void> => {
    return this.fetchService.postAsync(
      ReviewApi.postReviewUrl,
      this.reviewStore.userReview,
    );
  };
}
