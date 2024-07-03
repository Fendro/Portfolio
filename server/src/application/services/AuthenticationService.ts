import type { LoginDto, LoginResponse, UserCreateDto } from "@/dto";
import type {
  IAuthenticationService,
  IHashService,
  IUserRepository,
} from "@/interfaces";

export class AuthenticationService implements IAuthenticationService {
  constructor(
    private userRepository: IUserRepository,
    private hashService: IHashService,
  ) {}

  async register(userDto: UserCreateDto): Promise<void> {
    await this.userRepository.Create({
      ...userDto,
      password: this.hashService.hashPassword(userDto.password),
    });
  }

  async login(dto: LoginDto): Promise<LoginResponse> {
    const user = await this.userRepository.GetByCredentials(dto);
    return {
      token: "token",
      userProfile: {
        email: user.email,
        username: user.username,
      },
    };
  }
}
