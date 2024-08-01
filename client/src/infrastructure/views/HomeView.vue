<template>
  <section>
    <TestComponent message="First component" />
    <TestComponent message="Second component" />
    <TestComponent message="Third component" />
    <TestComponent message="Fourth component" />
    <TestComponent message="Fifth component" />
  </section>
</template>

<script setup lang="ts">
import TestComponent from '@/infrastructure/components/TestComponent.vue';
import HomeView, {
  type HomeViewEmits,
  type HomeViewProps,
} from '@/infrastructure/views/HomeView';

const emits = defineEmits<HomeViewEmits>();
const props = defineProps<HomeViewProps>();
const setup = new HomeView(emits, props);
</script>

<style scoped></style>
