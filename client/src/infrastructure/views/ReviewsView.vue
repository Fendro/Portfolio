<template>
  <section class="flex flex-col">
    <review-text-area
      :user-review="reviewStore.userReview"
      @submit="setup.postReview"
    />

    <template v-if="setup.state.isFetching">
      <template v-for="_ in setup.rowCount">
        <Skeleton width="100%" height="6rem" rounded="4rem" class="m-2" />
      </template>
    </template>
    <template v-else>
      <template v-for="review in reviewStore.reviews">
        <ReviewCard :review="review" class="m-2" />
      </template>
      <Paginator
        :rows="setup.rowCount"
        :totalRecords="reviewStore.reviews.length"
        class="m-2"
      ></Paginator>
    </template>
  </section>
</template>

<script setup lang="ts">
import Paginator from 'primevue/paginator';
import Skeleton from 'primevue/skeleton';

import { FetchService, ReviewService, ToastService } from '@/core/services';
import { useReviewStore } from '@/core/stores';
import ReviewCard from '@/infrastructure/components/reviews/ReviewCard.vue';
import ReviewTextArea from '@/infrastructure/components/reviews/ReviewTextArea.vue';
import ReviewsView from '@/infrastructure/views/ReviewsView';

const reviewStore = useReviewStore();

const setup = new ReviewsView(
  new ReviewService(new FetchService(), reviewStore),
  new ToastService(),
);
</script>

<style scoped></style>
