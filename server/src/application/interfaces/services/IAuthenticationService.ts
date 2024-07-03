import type { LoginDto, LoginResponse, RegisterDto } from "@/dto";

export interface IAuthenticationService {
  register(registerDto: RegisterDto): Promise<void>;
  login(dto: LoginDto): Promise<LoginResponse>;
}
