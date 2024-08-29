import { AuthenticationApi } from '@/api';
import type { LoginPayload, LoginResponse, RegisterPayload } from '@/api/dto';
import type { IFetchService } from '@/core/services';
import { useUserProfileStore } from '@/core/stores';

export interface IAuthenticationService {
  loginAsync(payload: LoginPayload): Promise<void>;
  logout(): void;
  registerAsync(payload: RegisterPayload): Promise<void>;
}

export class AuthenticationService implements IAuthenticationService {
  private userProfileStore = useUserProfileStore();

  constructor(private fetchService: IFetchService) {}

  async loginAsync(payload: LoginPayload) {
    if (this.userProfileStore.isAuthenticated)
      throw new Error('Already authenticated.');

    this.fetchService
      .postAsync<
        LoginPayload,
        LoginResponse
      >(AuthenticationApi.loginUrl, payload)
      .then((response) => {
        this.userProfileStore.storeLoginResponse(response);
      });
  }

  logout() {
    if (!this.userProfileStore.isAuthenticated)
      throw new Error('Not authenticated');

    this.userProfileStore.$reset();
  }

  async registerAsync(payload: RegisterPayload) {
    await this.fetchService.postAsync<RegisterPayload>(
      AuthenticationApi.registerUrl,
      payload,
    );
  }
}
