import { BaseApi } from "@/api/BaseApi";

export class AuthenticationApi extends BaseApi {
  static readonly path = "Authentication";

  public static get loginUri() {
    return `${this.basePath}/${this.path}/Login`;
  }

  public static get registerUri() {
    return `${this.basePath}/${this.path}/Register`;
  }
}
