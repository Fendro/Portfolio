import { BaseApi } from "@/infrastructure/api/BaseApi";

export class AuthenticationApi extends BaseApi {
  static readonly path = "Authentication";

  public static get loginUrl() {
    return `${this.baseUrl}/${this.path}/Login`;
  }
}
