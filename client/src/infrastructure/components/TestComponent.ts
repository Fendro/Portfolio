import { AuthenticationService } from "@/core/services";
import { type IToastService, ToastService } from "@/core/services/ToastService";
import { computed, onUnmounted, reactive } from "vue";

export interface TestComponentProps {
  message: string;
}

export interface TestComponentEmits {
  (e: "click"): void;
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
    this.authenticationService = new AuthenticationService();
    this.toastService = new ToastService();

    const interval = setInterval(async () => {
      this.reactive.randomNumber = Math.floor(Math.random() * 10);
    }, 2000);

    onUnmounted(() => {
      clearInterval(interval);
      console.log("cleared");
    });
  }

  async loginAsync() {
    return this.authenticationService
      .loginAsync({ email: "hello", password: "world" })
      .then(() => this.toastService.success("Login successful."))
      .catch((err) => {
        this.toastService.error(err.message);
      });
  }

  logout() {
    this.authenticationService.logout();
    this.toastService.info("Logged out.");
  }
}
