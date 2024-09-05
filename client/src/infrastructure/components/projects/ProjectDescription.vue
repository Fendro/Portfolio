<template>
  <div></div>
  <div></div>
  <div></div>
</template>

<script setup lang="ts">
export interface ProjectTechnology {
  name: string;
  image: string;
}

export interface ProjectDescriptionProps {
  name: string;
  description: string;
  technologies: ProjectTechnology[];
}

defineProps<ProjectDescriptionProps>();
</script>

<style scoped></style>
