import type { UserCreateDto } from "@/dto";
import type { IUserRepository, IUserService } from "@/interfaces";
import { User } from "@/entities";

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  get(): User {
    throw new Error("Method not implemented.");
  }

  create(dto: UserCreateDto): void {
    throw new Error("Method not implemented.");
  }

  update(): void {
    throw new Error("Method not implemented.");
  }

  delete(): void {
    throw new Error("Method not implemented.");
  }
}
