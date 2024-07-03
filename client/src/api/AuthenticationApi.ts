import { BaseApi } from "@/api/BaseApi";

export class AuthenticationApi extends BaseApi {
  static readonly path = "authentication";

  public static get loginUri() {
    return `${this.basePath}/${this.path}/login`;
  }

  public static get registerUri() {
    return `${this.basePath}/${this.path}/register`;
  }
}
