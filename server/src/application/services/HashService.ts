import type { IHashService } from "@/interfaces";

export class HashService implements IHashService {
  HashPassword(password: string) {
    return password;
  }
}
