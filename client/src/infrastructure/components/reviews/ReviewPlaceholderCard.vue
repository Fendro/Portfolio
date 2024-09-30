<template>
  <Card>
    <template #title>
      <div class="flex items-center justify-between">
        {{ author }}
      </div>
    </template>
    <template #content>{{ message }}</template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';

export interface ReviewPlaceholderCardProps {
  author: string;
  message: string;
}

defineProps<ReviewPlaceholderCardProps>();
</script>

<style scoped></style>
