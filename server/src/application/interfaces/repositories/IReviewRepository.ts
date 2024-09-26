import type { ReviewCreateDto } from '@/dto';
import type { Review } from '@/entities';

export interface IReviewRepository {
  getAsync(): Promise<Review[]>;
  createAsync(Review: ReviewCreateDto): Promise<Review>;
}
