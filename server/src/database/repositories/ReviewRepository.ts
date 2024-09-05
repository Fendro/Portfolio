import { ReviewTableModel } from '@/database/models/ReviewTableModel';
import { UserTableModel } from '@/database/models/UserTableModel';
import { Review, User } from '@/entities';
import { IReviewRepository } from '@/interfaces';

export class ReviewRepository implements IReviewRepository {
  async getAsync(): Promise<Review[]> {
    const reviews = await ReviewTableModel.findAll();

    return reviews.map(
      (review) =>
        new Review(
          review.id,
          new User(0, '', '', ''),
          review.content,
          review.rating,
        ),
    );
  }

  async getByIdAsync(id: number): Promise<Review> {
    const reviewModel = await ReviewTableModel.findByPk(id);
    if (!reviewModel) {
      throw new Error('Review not found.');
    }

    const userModel = await UserTableModel.findByPk(reviewModel.author_id);
    if (!userModel) {
      throw new Error('User not found.');
    }

    return new Review(
      reviewModel.id,
      new User(
        userModel.id,
        userModel.email,
        userModel.password,
        userModel.username,
      ),
      reviewModel.content,
      reviewModel.rating,
    );
  }

  async createAsync(review: Review): Promise<Review> {
    const reviewModel = await ReviewTableModel.create({
      author_id: review.author.id,
      content: review.content,
      rating: review.rating,
    });

    return new Review(0, new User(0, '', '', ''), '', 0);
  }
}
