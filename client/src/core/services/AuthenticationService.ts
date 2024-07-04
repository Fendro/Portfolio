import { AuthenticationApi } from "@/api";
import type { LoginPayload, LoginResponse, RegisterPayload } from "@/api/dto";
import { FetchService } from "@/core/services/FetchService";
import { useUserProfileStore } from "@/core/stores/user/userProfileStore";

export interface IAuthenticationService {
  loginAsync(payload: LoginPayload): Promise<LoginResponse>;
  logout(): void;
  registerAsync(payload: RegisterPayload): Promise<void>;
}

export class AuthenticationService implements IAuthenticationService {
  private userProfileStore = useUserProfileStore();

  async loginAsync(payload: LoginPayload) {
    if (this.userProfileStore.isAuthenticated())
      throw new Error("Already authenticated.");

    return FetchService.postAsync<LoginPayload, LoginResponse>(
      AuthenticationApi.loginUri,
      payload,
    ).then((response) => {
      this.userProfileStore.storeLoginResponse(response);
      return response;
    });
  }

  logout() {
    if (!this.userProfileStore.isAuthenticated())
      throw new Error("Not authenticated");

    this.userProfileStore.$reset();
  }

  async registerAsync(payload: RegisterPayload) {
    return await FetchService.postAsync<RegisterPayload, void>(
      AuthenticationApi.registerUri,
      payload,
    );
  }
}
