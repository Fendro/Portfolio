import type { UserEntity } from '@/core/entities/UserEntity';
import { FetchedEntity } from '@/core/entities/abstract/FetchedEntity';

export class ReviewEntity extends FetchedEntity<ReviewEntity> {
  constructor(
    id: number,
    public author: UserEntity,
    public content: string,
    public rating: number,
  ) {
    super(id);
  }
}
