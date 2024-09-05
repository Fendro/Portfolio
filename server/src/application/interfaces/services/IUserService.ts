import type { UserCreateDto } from '@/dto';
import type { User } from '@/entities';

export interface IUserService {
  getAsync(): Promise<User>;
  createAsync(dto: UserCreateDto): Promise<void>;
  updateAsync(): Promise<void>;
  deleteAsync(): Promise<void>;
}
