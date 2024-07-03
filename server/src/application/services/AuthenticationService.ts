import type { UserCreateDto, UserDto } from "@/dto";
import type { IAuthenticationService, IUserRepository } from "@/interfaces";

export class AuthenticationService implements IAuthenticationService {
  constructor(private userRepository: IUserRepository) {}

  async Register(userDto: UserCreateDto): Promise<void> {
    await this.userRepository.CreateUser(userDto);
    return Promise.resolve();
  }

  async Login(username: string, password: string): Promise<UserDto> {
    return Promise.resolve({
      username,
      lastname: "lastname",
      email: "email",
      firstname: "firstname",
    });
  }
}
