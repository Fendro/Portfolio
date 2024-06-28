<template>
  <div class="greetings">
    <h1 class="green">{{ "Hello World!" }}</h1>
    <h3>This is my test component</h3>
    <div>Prop message is: {{ props.message }}</div>
    <div>Prop message is: {{ props.message }}</div>
    <div>Prop message is: {{ props.message }}</div>
    <div>Prop message is: {{ props.message }}</div>
    <div>Prop message is: {{ props.message }}</div>
    <div>Prop message is: {{ props.message }}</div>
    <div>Prop message is: {{ props.message }}</div>
    <div>Random reactive number is: {{ setup.reactive.randomNumber }}</div>
    <div>Computed value is: {{ setup.computed }}</div>
    <ConfirmButton @click="setup.testFetchAsync()" />
  </div>
</template>

<script setup lang="ts">
import type {
  TestComponentProps,
  TestComponentEmits,
} from "@/infrastructure/components/TestComponent";
import TestComponent from "@/infrastructure/components/TestComponent";

const props = defineProps<TestComponentProps>();
const emits = defineEmits<TestComponentEmits>();
const setup = new TestComponent(props, emits);
</script>

<style scoped></style>
