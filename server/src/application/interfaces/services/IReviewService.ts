import type { ReviewCreateDto, ReviewDto } from '@/dto';

export interface IReviewService {
  getAsync(): Promise<ReviewDto[]>;
  getByIdAsync(id: number): Promise<ReviewDto>;
  createAsync(dto: ReviewCreateDto): Promise<void>;
}
