<template>
  <Card>
    <template #header>
      <Rating
        v-model="review.rating"
        readonly
        :cancel="false"
        class="flex justify-end pr-2 pt-2"
      />
    </template>
    <template #title>{{ review.author.username }}</template>
    <template #content>{{ review.content }}</template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Rating from 'primevue/rating';

import { ReviewEntity } from '@/core/entities';

export interface CardReviewProps {
  review: ReviewEntity;
}

defineProps<CardReviewProps>();
</script>

<style scoped></style>
