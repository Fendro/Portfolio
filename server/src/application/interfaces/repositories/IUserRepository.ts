import type { LoginDto, UserCreateDto } from "@/dto";
import type { User } from "@/entities";

export interface IUserRepository {
  GetById(id: number): Promise<User>;
  GetByCredentials(credentials: LoginDto): Promise<User>;
  Create(user: UserCreateDto): Promise<User>;
}
