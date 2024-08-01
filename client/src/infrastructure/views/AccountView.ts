export interface AccountViewEmits {
  (e: ''): never;
}

export interface AccountViewProps {}

export default class AccountView {
  constructor(
    protected readonly emits: AccountViewEmits,
    protected readonly props: AccountViewProps,
  ) {}
}
