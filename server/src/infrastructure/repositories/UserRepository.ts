import type { IUserRepository } from "@/interfaces";
import type { LoginDto, UserCreateDto } from "@/dto";
import { User } from "@/entities";

export class UserRepository implements IUserRepository {
  GetByCredentials(credentials: LoginDto): Promise<User> {
    return Promise.resolve(new User("email", "password", "username"));
  }

  GetById(id: number): Promise<User> {
    return Promise.resolve(new User("email", "password", "username"));
  }

  Create(user: UserCreateDto): Promise<User> {
    return Promise.resolve(new User(user.email, user.password, user.username));
  }
}
