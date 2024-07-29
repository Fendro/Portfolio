import { UserDto } from '@/dto';

export type ReviewCreateDto = {
  readonly author: UserDto;
  readonly content: string;
};
