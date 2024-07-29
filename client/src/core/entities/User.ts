import { BaseEntity } from '@/core/entities/abstract/BaseEntity';

export class User extends BaseEntity<User> {
  constructor(
    id: number,
    public email: string,
    public password: string,
    public username: string,
  ) {
    super(id);
  }
}
