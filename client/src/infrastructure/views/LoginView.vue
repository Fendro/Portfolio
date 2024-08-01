<template>
  <section>
    <h1>This is the login page</h1>
  </section>
</template>

<script setup lang="ts">
import LoginView, {
  type LoginViewEmits,
  type LoginViewProps,
} from '@/infrastructure/views/LoginView';

const emits = defineEmits<LoginViewEmits>();
const props = defineProps<LoginViewProps>();
const setup = new LoginView(emits, props);
</script>

<style scoped></style>
