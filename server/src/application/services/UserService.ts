import type { UserCreateDto } from '@/dto';
import { User } from '@/entities';
import type { IUserRepository, IUserService } from '@/interfaces';

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  async getAsync(): Promise<User> {
    return await this.userRepository.getByIdAsync(0);
  }

  async createAsync(dto: UserCreateDto): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async updateAsync(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async deleteAsync(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
