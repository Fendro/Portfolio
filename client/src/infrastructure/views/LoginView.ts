import { type Reactive, reactive } from 'vue';

import type { LoginPayload } from '@/api/dto';
import { RouteEnum } from '@/core/enums';
import type { IAuthenticationService, IToastService } from '@/core/services';
import router from '@/infrastructure/router';

export interface LoginViewState {
  submitting: boolean;
}

export default class LoginView {
  readonly state: Reactive<LoginViewState> = reactive({
    submitting: false,
  });

  constructor(
    private authenticationService: IAuthenticationService,
    private toastService: IToastService,
  ) {}

  async login(formData: LoginPayload) {
    this.state.submitting = true;
    this.authenticationService
      .loginAsync(formData)
      .then(() => {
        this.toastService.success('Logged in successfully');
        router.push(RouteEnum.Home);
      })
      .catch((error) => this.toastService.error(error.message))
      .finally(() =>
        setTimeout(() => {
          this.state.submitting = false;
        }, 5000),
      );
  }
}
