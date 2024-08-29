import { BaseApi } from '@/api/BaseApi';

export class AuthenticationApi extends BaseApi {
  private static get path() {
    return `${this.basePath}/authentication`;
  }

  public static get loginUrl() {
    return `${this.path}/login`;
  }

  public static get registerUrl() {
    return `${this.path}/register`;
  }
}
