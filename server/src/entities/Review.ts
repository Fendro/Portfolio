import { User } from '@/entities';

export class Review {
  constructor(
    public author: User,
    public content: string,
    public rating: number,
  ) {}
}
