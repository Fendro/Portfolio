import { FetchService } from "@/core/services/FetchService";
import { AuthenticationApi } from "@/api";
import type { LoginPayload, LoginResponse, RegisterPayload } from "@/api/dto";
import { useUserProfileStore } from "@/core/stores/user/userProfileStore";

export class AuthenticationService {
  private userProfileStore = useUserProfileStore();

  async loginAsync(payload: LoginPayload) {
    return FetchService.postAsync<LoginPayload, LoginResponse>(
      AuthenticationApi.loginUri,
      payload,
    ).then((response) => {
      this.userProfileStore.storeLoginResponse(response);
    });
  }

  async registerAsync(payload: RegisterPayload) {
    return await FetchService.postAsync<RegisterPayload, void>(
      AuthenticationApi.registerUri,
      payload,
    );
  }
}
