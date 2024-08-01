<template>
  <section>
    <h1>This is the projects page</h1>
    <CarouselProjects class="max-w-fit" />
  </section>
</template>

<script setup lang="ts">
import CarouselProjects from '@/infrastructure/components/carousels/CarouselProjects.vue';
import ProjectsView, {
  type ProjectsViewEmits,
  type ProjectsViewProps,
} from '@/infrastructure/views/ProjectsView';

const emits = defineEmits<ProjectsViewEmits>();
const props = defineProps<ProjectsViewProps>();
const setup = new ProjectsView(emits, props);
</script>

<style scoped></style>
