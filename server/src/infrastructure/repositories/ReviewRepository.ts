import type { ReviewCreateDto } from '@/dto';
import { Review, User } from '@/entities';
import type { IReviewRepository } from '@/interfaces';

export class ReviewRepository implements IReviewRepository {
  get(): Promise<Review[]> {
    let result: Review[] = [];
    for (let i = 0; i < 100; i++) {
      result.push(
        new Review(
          new User(`email${i}`, `password${i}`, `username${i}`),
          `content${i}`,
          Math.floor(Math.random() * 5),
        ),
      );
    }
    return Promise.resolve(result);
  }

  getById(id: number): Promise<Review> {
    return Promise.resolve(
      new Review(
        new User(`email${id}`, `password${id}`, `username${id}`),
        `password${id}`,
        Math.floor(Math.random() * 5),
      ),
    );
  }

  create(dto: ReviewCreateDto): Promise<Review> {
    return Promise.resolve(
      new Review(
        new User(dto.author.email, 'password', dto.author.username),
        dto.content,
        Math.floor(Math.random() * 5),
      ),
    );
  }
}
