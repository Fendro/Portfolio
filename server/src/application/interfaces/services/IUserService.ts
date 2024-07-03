import type { UserCreateDto } from "@/dto";
import type { User } from "@/entities";

export interface IUserService {
  get(): User;
  create(dto: UserCreateDto): void;
  update(): void;
  delete(): void;
}
