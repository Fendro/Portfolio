import type { UserCreateDto, UserDto } from "@/dto";

export interface IAuthenticationService {
  Register(registerDto: UserCreateDto): Promise<void>;
  Login(username: string, password: string): Promise<UserDto>;
}
