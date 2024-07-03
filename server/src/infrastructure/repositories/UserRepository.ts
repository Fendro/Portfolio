import type { IUserRepository } from "@/interfaces";
import type { UserCreateDto } from "@/dto";
import { User } from "@/entities";

export class UserRepository implements IUserRepository {
  GetUserById(id: number): Promise<User> {
    return Promise.resolve(new User("name", "email", "password"));
  }

  CreateUser(user: UserCreateDto): Promise<User> {
    return Promise.resolve(new User(user.username, user.email, user.password));
  }
}
