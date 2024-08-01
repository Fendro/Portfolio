<template>
  <section>
    <h1>This is the account page</h1>
  </section>
</template>

<script setup lang="ts">
import AccountView, {
  type AccountViewEmits,
  type AccountViewProps,
} from '@/infrastructure/views/AccountView';

const emits = defineEmits<AccountViewEmits>();
const props = defineProps<AccountViewProps>();
const setup = new AccountView(emits, props);
</script>

<style scoped></style>
