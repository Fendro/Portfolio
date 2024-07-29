import type { ReviewCreateDto, ReviewDto } from '@/dto';

export interface IReviewService {
  get(): Promise<ReviewDto[]>;
  getById(id: number): Promise<ReviewDto>;
  create(dto: ReviewCreateDto): Promise<void>;
}
