import type { UserCreateDto } from "@/application/dto/UserCreateDto";
import type { User } from "@/entities";

export interface IUserRepository {
  GetUserById(id: number): Promise<User>;
  CreateUser(user: UserCreateDto): Promise<User>;
}
