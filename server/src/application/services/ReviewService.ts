import type { ReviewCreateDto, ReviewDto } from '@/dto';
import type { IReviewRepository, IReviewService } from '@/interfaces';

export class ReviewService implements IReviewService {
  constructor(private _reviewRepository: IReviewRepository) {}

  async getAsync(): Promise<ReviewDto[]> {
    return await this._reviewRepository.getAsync();
  }
  async getByIdAsync(id: number): Promise<ReviewDto> {
    return await this._reviewRepository.getByIdAsync(id);
  }
  async createAsync(dto: ReviewCreateDto): Promise<void> {
    await this._reviewRepository.createAsync(dto);
  }
}
