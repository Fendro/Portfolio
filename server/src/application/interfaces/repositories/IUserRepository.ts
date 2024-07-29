import type { LoginDto, UserCreateDto } from '@/dto';
import type { User } from '@/entities';

export interface IUserRepository {
  getById(id: number): Promise<User>;
  getByCredentials(credentials: LoginDto): Promise<User>;
  create(user: UserCreateDto): Promise<User>;
}
