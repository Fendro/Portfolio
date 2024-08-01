export interface LoginViewEmits {
  (e: ''): never;
}

export interface LoginViewProps {}

export default class LoginView {
  constructor(
    protected readonly emits: LoginViewEmits,
    protected readonly props: LoginViewProps,
  ) {}
}
