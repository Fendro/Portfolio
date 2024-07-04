import type { ToastServiceMethods } from "primevue/toastservice";
import { useToast } from "primevue/usetoast";

export interface IToastService {
  contrast(message: string): void;
  error(message: string): void;
  info(message: string): void;
  secondary(message: string): void;
  success(message: string): void;
  warn(message: string): void;
}

export class ToastService implements IToastService {
  private primeToast: ToastServiceMethods = useToast();

  contrast(message: string): void {
    this.primeToast.add({
      severity: "contrast",
      detail: message,
      life: 3000,
    });
  }

  error(message: string): void {
    this.primeToast.add({
      severity: "error",
      detail: message,
      life: 3000,
    });
  }

  info(message: string): void {
    this.primeToast.add({
      severity: "info",
      detail: message,
      life: 3000,
    });
  }

  secondary(message: string): void {
    this.primeToast.add({
      severity: "secondary",
      detail: message,
      life: 3000,
    });
  }

  success(message: string): void {
    this.primeToast.add({
      severity: "success",
      detail: message,
      life: 3000,
    });
  }

  warn(message: string): void {
    this.primeToast.add({
      severity: "warn",
      detail: message,
      life: 3000,
    });
  }
}
