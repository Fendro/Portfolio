export interface IReviewService {
  getReviews(): Promise<Review[]>;
  postReview(): Promise<void>;
}

export class ReviewService implements IReviewService {}
