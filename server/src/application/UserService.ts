import { User } from "@/entities";

export interface IUserRepository {
  GetUserById(id: string): object;
}

export interface IUserService {
  Get(): User;
  Create(): void;
  Update(): void;
  Delete(): void;
}

export default class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  Get(): User {
    throw new Error("Method not implemented.");
  }
  Create(): void {
    throw new Error("Method not implemented.");
  }
  Update(): void {
    throw new Error("Method not implemented.");
  }
  Delete(): void {
    throw new Error("Method not implemented.");
  }
}
