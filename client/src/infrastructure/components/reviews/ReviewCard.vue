<template>
  <Card>
    <template #title>
      <div class="flex items-center justify-between">
        Author
        <Rating />
      </div>
    </template>
    <template #content>{{ review.content }}</template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Rating from 'primevue/rating';

import type { ReviewDto } from '@/api/dto';

export interface CardReviewProps {
  review: ReviewDto;
}

defineProps<CardReviewProps>();
</script>

<style scoped></style>
