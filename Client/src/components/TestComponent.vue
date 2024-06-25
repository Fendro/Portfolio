<template>
  <div class="greetings">
    <h1 class="green">{{ "Hello World!" }}</h1>
    <h3>This is my test component</h3>
    <div>Random number is: {{ setup.reactive.randomNumber }}</div>
    <div>
      Reactive element: {{ setup.reactive.randomNumber }} & Message props value
      <div>is: {{ setup.message() }}</div>
    </div>
    <div>while nonReactiveVariable is: {{ setup.nonReactiveVariable }}</div>
    <div>and anotherMessage test is: {{ setup.anotherMessage }}</div>
    <div>computed value is: {{ setup.computed }}</div>
  </div>
</template>

<script setup lang="ts">
import type {
  TestComponentProps,
  TestComponentEmits,
} from "@/components/TestComponent";
import TestComponent from "@/components/TestComponent";

const props = defineProps<TestComponentProps>();
const emits = defineEmits<TestComponentEmits>();
const setup = new TestComponent(props, emits);
</script>

<style scoped></style>
