import { computed, onUnmounted, reactive } from "vue";
import { AuthenticationService } from "@/app/services";
import { useToast } from "primevue/usetoast";
import type { ToastServiceMethods } from "primevue/toastservice";

export interface TestComponentProps {
  message: string;
}

export interface TestComponentEmits {
  (e: "click"): void;
}

export default class TestComponent {
  private authenticationService: AuthenticationService;
  private toast: ToastServiceMethods;

  readonly reactive = reactive({
    randomNumber: 0,
  });
  readonly computed = computed(() => this.reactive.randomNumber * 5);

  constructor(
    protected readonly props: TestComponentProps,
    protected readonly emits: TestComponentEmits,
  ) {
    this.authenticationService = new AuthenticationService();
    this.toast = useToast();

    const interval = setInterval(async () => {
      this.reactive.randomNumber = Math.floor(Math.random() * 10);
      // await this.testFetchAsync();
    }, 2000);

    onUnmounted(() => {
      clearInterval(interval);
      console.log("cleared");
    });
  }

  get message() {
    return this.props.message;
  }

  private async testFetchAsync() {
    return this.authenticationService
      .loginAsync("hello", "world")
      .catch((err) => {
        this.toast.add({
          severity: "error",
          summary: "Error",
          detail: err.message,
          life: 3000,
        });
      });
  }
}
