import { computed, reactive, ref } from "vue";

export interface TestComponentProps {
  message: string;
}

export interface TestComponentEmits {
  (e: "click"): void;
}

export default class TestComponent {
  protected readonly props: TestComponentProps;
  protected readonly emits: TestComponentEmits;

  readonly reactive = reactive({
    randomNumber: 0,
  });

  readonly computed = computed(() => this.reactive.randomNumber * 5);

  public nonReactiveVariable = "another message";

  constructor(props: TestComponentProps, emits: TestComponentEmits) {
    this.props = props;
    this.emits = emits;

    setInterval(() => {
      this.reactive.randomNumber = Math.floor(Math.random() * 10);
      this.nonReactiveVariable = "refreshed" + Math.random();
    }, 2000);
  }

  message() {
    return this.props.message;
  }

  get anotherMessage() {
    return this.nonReactiveVariable;
  }

  set anotherMessage(value: string) {
    this.nonReactiveVariable = value;
  }
}
