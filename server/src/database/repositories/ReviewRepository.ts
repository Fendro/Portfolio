import { ReviewTableModel } from '@/database/models/ReviewTableModel';
import { ReviewCreateDto } from '@/dto';
import { Review } from '@/entities';
import { IReviewRepository } from '@/interfaces';

export class ReviewRepository implements IReviewRepository {
  async getAsync(): Promise<Review[]> {
    const reviews = await ReviewTableModel.findAll();

    return reviews.map(
      (review) => new Review(review.id, review.content, review.rating),
    );
  }

  async getByIdAsync(id: number): Promise<Review> {
    const reviewModel = await ReviewTableModel.findByPk(id);
    if (!reviewModel) {
      throw new Error('Review not found.');
    }

    return new Review(reviewModel.id, reviewModel.content, reviewModel.rating);
  }

  async createAsync(review: ReviewCreateDto): Promise<Review> {
    console.log('repository', review);
    const reviewModel = await ReviewTableModel.create({
      content: review.content,
      rating: review.rating,
    });

    return new Review(reviewModel.id, reviewModel.content, reviewModel.rating);
  }
}
