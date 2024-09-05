import type { UserEntity } from '@/core/entities/UserEntity';

export class ReviewEntity {
  constructor(
    public id: number,
    public author: UserEntity,
    public content: string,
    public rating: number,
  ) {}
}
