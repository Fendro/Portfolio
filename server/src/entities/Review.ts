import { User } from '@/entities';

export class Review {
  constructor(
    public id: number,
    public author: User,
    public content: string,
    public rating: number,
  ) {}
}
