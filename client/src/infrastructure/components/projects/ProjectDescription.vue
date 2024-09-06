<template>
  <div class="rounded-lg p-4 shadow-md">
    <div class="text-xl font-semibold">{{ name }}</div>
    <div class="mt-2 text-primary-900 dark:text-primary-100">
      {{ description }}
    </div>
    <div class="mt-4 flex flex-wrap gap-4">
      <div
        v-for="tech in technologies"
        :key="tech.name"
        class="flex items-center"
      >
        <img :src="tech.image" :alt="tech.name" class="mr-2 h-16 w-16" />
      </div>
    </div>
  </div>
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
