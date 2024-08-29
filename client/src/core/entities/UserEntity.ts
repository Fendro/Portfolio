import { FetchedEntity } from '@/core/entities/abstract/FetchedEntity';

export class UserEntity extends FetchedEntity<UserEntity> {
  constructor(
    id: number,
    public email: string,
    public password: string,
    public username: string,
  ) {
    super(id);
  }
}
