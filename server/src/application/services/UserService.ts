import type { UserCreateDto } from "@/dto";
import type { IUserRepository, IUserService } from "@/interfaces";
import { User } from "@/entities";

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  Get(): User {
    throw new Error("Method not implemented.");
  }
  Create(dto: UserCreateDto): void {
    throw new Error("Method not implemented.");
  }
  Update(): void {
    throw new Error("Method not implemented.");
  }
  Delete(): void {
    throw new Error("Method not implemented.");
  }
}
