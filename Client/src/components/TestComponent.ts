import { ref, computed, watch } from "vue";

export interface TestComponentProps {
  message: string;
}

export interface TestComponentEmits {
  (e: "click"): void;
}

export default class TestComponent {
  protected readonly props: TestComponentProps;
  protected readonly emits: TestComponentEmits;

  constructor(props: TestComponentProps, emits: TestComponentEmits) {
    this.props = props;
    this.emits = emits;
  }

  thisIsATestFunction() {
    return "hello";
  }
}
