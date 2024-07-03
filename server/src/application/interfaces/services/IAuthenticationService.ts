import type { UserCreateDto, UserDto } from "@/dto";

export interface IAuthenticationService {
  register(registerDto: UserCreateDto): Promise<void>;
  login(username: string, password: string): Promise<UserDto>;
}
