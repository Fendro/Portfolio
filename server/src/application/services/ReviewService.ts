import type { ReviewCreateDto, ReviewDto } from '@/dto';
import type { IReviewRepository, IReviewService } from '@/interfaces';

export class ReviewService implements IReviewService {
  constructor(private _reviewRepository: IReviewRepository) {}

  async get(): Promise<ReviewDto[]> {
    return await this._reviewRepository.get();
  }
  async getById(id: number): Promise<ReviewDto> {
    return await this._reviewRepository.getById(id);
  }
  async create(dto: ReviewCreateDto): Promise<void> {
    await this._reviewRepository.create(dto);
  }
}
