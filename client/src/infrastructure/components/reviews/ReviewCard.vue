<template>
  <Card>
    <template #header> </template>
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
