<template>
  <section class="flex flex-col">
    <review-text-area
      :user-review="reviewStore.userReview"
      @submit="setup.postReview"
    />

    <template v-if="setup.state.isFetching">
      <template v-for="_ in setup.rowCount">
        <ReviewSkeleton />
      </template>
    </template>
    <template v-else>
      <template v-for="review in setup.paginatedReviews">
        <ReviewCard :review="review" class="m-2" />
      </template>
      <Paginator
        :rows="setup.rowCount"
        :totalRecords="reviewStore.reviews.length"
        class="m-2"
        @page="({ page }) => setup.setPage(page)"
      ></Paginator>
    </template>
  </section>
</template>

<script setup lang="ts">
import Paginator from 'primevue/paginator';

import { FetchService, ReviewService, ToastService } from '@/core/services';
import { useReviewStore } from '@/core/stores';
import ReviewCard from '@/infrastructure/components/reviews/ReviewCard.vue';
import ReviewSkeleton from '@/infrastructure/components/reviews/ReviewSkeleton.vue';
import ReviewTextArea from '@/infrastructure/components/reviews/ReviewTextArea.vue';
import ReviewsView from '@/infrastructure/views/ReviewsView';

const reviewStore = useReviewStore();

const setup = new ReviewsView(
  new ReviewService(new FetchService(), reviewStore),
  new ToastService(),
);
</script>

<style scoped></style>
