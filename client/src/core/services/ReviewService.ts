import { ReviewApi } from '@/api/ReviewApi';
import type { ReviewCreateDto, ReviewDto } from '@/api/dto';
import type { IFetchService } from '@/core/services';

export interface IReviewStore {
  setReviews: (reviews: ReviewDto[]) => void;
  userReview: ReviewCreateDto;
}

export interface IReviewService {
  refreshStoreReviewsAsync: () => Promise<void>;
  postUserReviewAsync: () => Promise<void>;
}

export class ReviewService implements IReviewService {
  constructor(
    private fetchService: IFetchService,
    private reviewStore: IReviewStore,
  ) {}

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
