<template>
  <div class="greetings">
    <h1 class="green">{{ "Hello World!" }}</h1>
    <h3>This is my test component</h3>
  </div>
</template>

<script lang="ts">
import TestComponent from "@/components/TestComponent";
import type {
  TestComponentProps,
  TestComponentEmits,
} from "@/components/TestComponent";
import { defineComponent } from "vue";

const [props, emits] = [
  defineProps<TestComponentProps>(),
  defineEmits<TestComponentEmits>(),
];
const setup = new TestComponent(props, emits);

export default defineComponent({
  name: "TestComponent",
});
</script>

<style scoped></style>
