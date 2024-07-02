export interface IHashService {
  HashPassword: (password: string) => string;
}

export default class HashService implements IHashService {
  public HashPassword(password: string) {
    return password;
  }
}
