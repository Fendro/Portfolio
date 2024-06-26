import { FetchService } from "@/app/services/FetchService";
import { AuthenticationApi } from "@/infrastructure/api";
import type {
  AuthenticationPayload,
  AuthenticationResponse,
} from "@/infrastructure/dto";

export class AuthenticationService {
  async loginAsync(email: string, password: string) {
    return await FetchService.postAsync<
      AuthenticationPayload,
      AuthenticationResponse
    >(AuthenticationApi.loginUrl, {
      email,
      password,
    });
  }
}
