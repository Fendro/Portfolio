export interface RegisterViewEmits {
  (e: ''): never;
}

export interface RegisterViewProps {}

export default class RegisterView {
  constructor(
    protected readonly emits: RegisterViewEmits,
    protected readonly props: RegisterViewProps,
  ) {}
}
