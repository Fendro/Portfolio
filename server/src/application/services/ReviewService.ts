import type { ReviewCreateDto, ReviewDto } from '@/dto';
import type { IReviewRepository, IReviewService } from '@/interfaces';

export class ReviewService implements IReviewService {
  constructor(private _reviewRepository: IReviewRepository) {}

  async get(): Promise<ReviewDto[]> {
    return await this._reviewRepository.getAsync();
  }
  async getById(id: number): Promise<ReviewDto> {
    return await this._reviewRepository.getByIdAsync(id);
  }
  async create(dto: ReviewCreateDto): Promise<void> {
    await this._reviewRepository.createAsync(dto);
  }
}
