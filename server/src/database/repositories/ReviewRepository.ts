import { ReviewTable } from '@/database/models';
import { ReviewCreateDto } from '@/dto';
import { Review } from '@/entities';
import { IReviewRepository } from '@/interfaces';

export class ReviewRepository implements IReviewRepository {
  async getAsync(): Promise<Review[]> {
    const reviews = await ReviewTable.findAll({
      order: [['createdAt', 'DESC']],
    });

    return reviews.map(
      (review) => new Review(review.id, review.content, review.rating),
    );
  }

  async createAsync(review: ReviewCreateDto): Promise<Review> {
    const reviewModel = await ReviewTable.create({
      content: review.content,
      rating: review.rating,
    });

    return new Review(reviewModel.id, reviewModel.content, reviewModel.rating);
  }
}
