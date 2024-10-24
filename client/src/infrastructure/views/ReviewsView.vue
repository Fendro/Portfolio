<template>
  <section class="flex flex-col gap-2 p-2">
    <PaginatedList
      :gap="2"
      :is-fetching-data="isFetching"
      :items="reviewStore.reviews"
      :rows-per-page="10"
    >
      <template #contentSkeleton>
        <ReviewSkeleton />
      </template>
      <template #content="{ item }: { item: ReviewDto }">
        <ReviewCard :review="item" />
      </template>
    </PaginatedList>

    <ReviewTextArea
      :user-review="reviewStore.userReview"
      @submit="() => postReview(reviewStore.userReview)"
    />
  </section>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';

import { ReviewDto } from '@/api';
import { listReviews, postReview } from '@/core/usecases';
import { diManager } from '@/diManager.ts';
import ReviewCard from '@/infrastructure/components/reviews/ReviewCard.vue';
import ReviewSkeleton from '@/infrastructure/components/reviews/ReviewSkeleton.vue';
import ReviewTextArea from '@/infrastructure/components/reviews/ReviewTextArea.vue';
import PaginatedList from '@/infrastructure/components/shared/PaginatedList.vue';

const reviewStore = diManager.reviewStore;
let isFetching = ref(false);

onBeforeMount(() => {
  isFetching.value = true;
  listReviews().finally(() => (isFetching.value = false));
});
</script>

<style scoped></style>
