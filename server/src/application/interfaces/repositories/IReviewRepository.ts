import type { ReviewCreateDto } from '@/dto';
import type { Review } from '@/entities';

export interface IReviewRepository {
  get(): Promise<Review[]>;
  getById(id: number): Promise<Review>;
  create(Review: ReviewCreateDto): Promise<Review>;
}
