<template>
  <Card>
    <template #title>
      <div class="flex items-center justify-between">
        Anonymous
        <Rating v-model="review.rating" :readonly="true" />
      </div>
    </template>
    <template #content>{{ review.content }}</template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Rating from 'primevue/rating';

import type { ReviewDto } from '@/api';

export interface ReviewCardProps {
  review: ReviewDto;
}

defineProps<ReviewCardProps>();
</script>

<style scoped></style>
