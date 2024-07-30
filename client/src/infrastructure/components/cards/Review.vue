<template>
  <Card>
    <template #title>{{ review.author.username }}</template>
    <template #content>
      <p class="m-0">{{ review.content }}</p>
    </template>
  </Card>
  <Rating v-model="review.rating" readonly :cancel="false" />
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Rating from 'primevue/rating';

import { Review } from '@/core/entities';

defineProps<{ review: Review }>();
defineEmits();
</script>

<style scoped></style>
