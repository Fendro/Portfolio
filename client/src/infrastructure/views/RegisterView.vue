<template>
  <section>
    <h1>This is the register page</h1>
  </section>
</template>

<script setup lang="ts">
import RegisterView, {
  type RegisterViewEmits,
  type RegisterViewProps,
} from '@/infrastructure/views/RegisterView';

const emits = defineEmits<RegisterViewEmits>();
const props = defineProps<RegisterViewProps>();
const setup = new RegisterView(emits, props);
</script>

<style scoped></style>
