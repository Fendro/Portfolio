<template>
  <div class="greetings">
    <h1 class="green">{{ 'Hello World!' }}</h1>
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
    <ButtonConfirm @click="setup.loginAsync()" label="Login" />
    <ButtonCancel @click="setup.logout()" label="Logout" />
  </div>
</template>

<script setup lang="ts">
import type {
  TestComponentEmits,
  TestComponentProps,
} from '@/infrastructure/components/TestComponent';
import TestComponent from '@/infrastructure/components/TestComponent';
import ButtonCancel from '@/infrastructure/components/buttons/ButtonCancel.vue';
import ButtonConfirm from '@/infrastructure/components/buttons/ButtonConfirm.vue';

const props = defineProps<TestComponentProps>();
const emits = defineEmits<TestComponentEmits>();
const setup = new TestComponent(props, emits);
</script>

<style scoped></style>
