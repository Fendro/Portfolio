import { computed, onUnmounted, reactive } from 'vue';

import {
  AuthenticationService,
  FetchService,
  ToastService,
} from '@/core/services';
import type { IToastService } from '@/core/services';

export interface TestComponentProps {
  message: string;
}

export interface TestComponentEmits {
  (e: 'click'): void;
}

export default class TestComponent {
  private authenticationService: AuthenticationService;
  private toastService: IToastService;

  readonly reactive = reactive({
    randomNumber: 0,
  });
  readonly computed = computed(() => this.reactive.randomNumber * 5);

  constructor(
    protected readonly props: TestComponentProps,
    protected readonly emits: TestComponentEmits,
  ) {
    this.authenticationService = new AuthenticationService(new FetchService());
    this.toastService = new ToastService();

    const interval = setInterval(async () => {
      this.reactive.randomNumber = Math.floor(Math.random() * 10);
    }, 2000);

    onUnmounted(() => {
      clearInterval(interval);
      console.log('cleared');
    });
  }

  loginAsync() {
    this.authenticationService
      .loginAsync({ email: 'hello', password: 'world' })
      .then(() => {
        this.toastService.success('Login successful.');
      })
      .catch((err) => {
        this.toastService.error(err.message);
      });
  }

  logout() {
    this.authenticationService.logout();
    this.toastService.info('Logged out.');
  }
}
