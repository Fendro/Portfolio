import { type Reactive, reactive } from 'vue';

import type { RegisterPayload } from '@/api/dto';
import { RouteEnum } from '@/core/enums';
import type { IAuthenticationService, IToastService } from '@/core/services';
import router from '@/infrastructure/router';

export interface ReviewViewState {
  submitting: boolean;
}

export default class RegisterView {
  readonly state: Reactive<ReviewViewState> = reactive({
    submitting: false,
  });

  constructor(
    private authenticationService: IAuthenticationService,
    private toastService: IToastService,
  ) {}

  async register(formData: RegisterPayload) {
    this.state.submitting = true;
    this.authenticationService
      .registerAsync(formData)
      .then(() => {
        this.toastService.success('Registered successfully');
        router.push(RouteEnum.Login);
      })
      .catch((error) => this.toastService.error(error.message))
      .finally(() => {
        this.state.submitting = false;
      });
  }
}
