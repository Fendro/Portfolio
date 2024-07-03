import type { UserCreateDto } from "@/dto";
import type { User } from "@/entities";

export interface IUserRepository {
  GetUserById(id: number): Promise<User>;
  CreateUser(user: UserCreateDto): Promise<User>;
}
