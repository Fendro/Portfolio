import type { UserDto } from "@/dto";

export type LoginResponse = {
  readonly token: string;
  readonly userProfile: UserDto;
};
