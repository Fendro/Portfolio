import { UserDto } from '@/dto';

export type ReviewDto = {
  readonly author: UserDto;
  readonly content: string;
};
