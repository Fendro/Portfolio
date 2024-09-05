import type { LoginDto, UserCreateDto } from '@/dto';
import type { User } from '@/entities';

export interface IUserRepository {
  getByIdAsync(id: number): Promise<User>;
  getByCredentialsAsync(credentials: LoginDto): Promise<User>;
  createAsync(user: UserCreateDto): Promise<User>;
}
