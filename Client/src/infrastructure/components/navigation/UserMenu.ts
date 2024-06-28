import { computed, onUnmounted, reactive } from "vue";
import { AuthenticationService } from "@/app/services";
import { useToast } from "primevue/usetoast";
import type { ToastServiceMethods } from "primevue/toastservice";

export interface UserMenuProps {
  message: string;
}

export interface UserMenuEmits {
  (e: "click"): void;
}

export default class UserMenu {
  private authenticationService: AuthenticationService;
  private toast: ToastServiceMethods;

  readonly reactive = reactive({
    randomNumber: 0,
  });
  readonly computed = computed(() => this.reactive.randomNumber * 5);

  constructor(
    protected readonly props: UserMenuProps,
    protected readonly emits: UserMenuEmits,
  ) {
    this.authenticationService = new AuthenticationService();
    this.toast = useToast();
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
