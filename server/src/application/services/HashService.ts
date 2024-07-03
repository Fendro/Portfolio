import type { IHashService } from "@/interfaces";

export class HashService implements IHashService {
  hashPassword(password: string) {
    return password;
  }
}
