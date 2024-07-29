import type { LoginDto, UserCreateDto } from '@/dto';
import { User } from '@/entities';
import type { IUserRepository } from '@/interfaces';

export class UserRepository implements IUserRepository {
  getByCredentials(credentials: LoginDto): Promise<User> {
    return Promise.resolve(
      new User(
        credentials?.identifier ?? 'email',
        credentials?.password ?? 'password',
        credentials?.identifier ?? 'username',
      ),
    );
  }

  getById(id: number): Promise<User> {
    return Promise.resolve(
      new User(`email${id}`, `password${id}`, `username${id}`),
    );
  }

  create(user: UserCreateDto): Promise<User> {
    return Promise.resolve(new User(user.email, user.password, user.username));
  }
}
