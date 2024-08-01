export interface HomeViewEmits {
  (e: ''): never;
}

export interface HomeViewProps {}

export default class HomeView {
  constructor(
    protected readonly emits: HomeViewEmits,
    protected readonly props: HomeViewProps,
  ) {}
}
