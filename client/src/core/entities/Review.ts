import type { User } from '@/core/entities/User';
import { BaseEntity } from '@/core/entities/abstract/BaseEntity';

export interface IReviewProperties {
  author: User;
  content: string;
}

export class Review extends BaseEntity<Review> implements IReviewProperties {
  constructor(
    id: number,
    public author: User,
    public content: string,
    public rating: number,
  ) {
    super(id);
  }
}
