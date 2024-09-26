import { AuthenticationApi } from '@/api';
import type { LoginPayload, LoginResponse, RegisterPayload } from '@/api/dto';
import type { IFetchService } from '@/core/services';
import { useProfileStore } from '@/core/stores';

export interface IAuthenticationService {
  loginAsync: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
  registerAsync: (payload: RegisterPayload) => Promise<void>;
}

export class AuthenticationService implements IAuthenticationService {
  private userProfileStore = useProfileStore();

  constructor(private fetchService: IFetchService) {}

  loginAsync = async (payload: LoginPayload) => {
    if (this.userProfileStore.isAuthenticated)
      throw new Error('Already authenticated.');

    this.fetchService
      .postAsync<
        LoginPayload,
        LoginResponse
      >(AuthenticationApi.loginUrl, payload)
      .then(this.userProfileStore.storeLoginResponse);
  };

  logout = () => {
    if (!this.userProfileStore.isAuthenticated)
      throw new Error('Not authenticated');

    this.userProfileStore.$reset();
  };

  registerAsync = async (payload: RegisterPayload) => {
    await this.fetchService.postAsync<RegisterPayload>(
      AuthenticationApi.registerUrl,
      payload,
    );
  };
}
