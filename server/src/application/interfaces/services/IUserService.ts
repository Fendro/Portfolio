import type { UserCreateDto } from "@/application/dto/UserCreateDto";
import type { User } from "@/entities";

export interface IUserService {
  Get(): User;
  Create(dto: UserCreateDto): void;
  Update(): void;
  Delete(): void;
}
