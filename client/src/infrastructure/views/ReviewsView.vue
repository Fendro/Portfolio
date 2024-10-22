<template>
  <section class="flex flex-col gap-2">
    <div class="flex flex-col gap-2">
      <template v-if="setup.state.isFetching">
        <template v-for="_ in setup.state.rowCount">
          <ReviewSkeleton class="ml-2 mr-2" />
        </template>
        <ReviewPaginatorSkeleton />
      </template>
      <template v-else>
        <template v-if="setup.paginatedReviews.length">
          <template v-for="review in setup.paginatedReviews">
            <ReviewCard :review="review" class="ml-2 mr-2" />
          </template>
          <Paginator
            :rows="setup.state.rowCount"
            :totalRecords="reviewStore.reviews.length"
            @page="({ page }) => (setup.state.page = page)"
            class="ml-2 mr-2"
          />
        </template>
        <template v-else>
          <ReviewPlaceholderCard
            :author="'Tristan Schmitt'"
            :message="localized.text['reviews']['no-reviews-message']"
            class="ml-2 mr-2"
          />
        </template>
      </template>
    </div>

    <ReviewTextArea
      :user-review="reviewStore.userReview"
      @submit="setup.postReview"
    />
  </section>
</template>

<script setup lang="ts">
import Paginator from 'primevue/paginator';

import { FetchService, ReviewService, ToastService } from '@/core/services';
import { useLocalizationStore, useReviewStore } from '@/core/stores';
import ReviewCard from '@/infrastructure/components/reviews/ReviewCard.vue';
import ReviewPaginatorSkeleton from '@/infrastructure/components/reviews/ReviewPaginatorSkeleton.vue';
import ReviewPlaceholderCard from '@/infrastructure/components/reviews/ReviewPlaceholderCard.vue';
import ReviewSkeleton from '@/infrastructure/components/reviews/ReviewSkeleton.vue';
import ReviewTextArea from '@/infrastructure/components/reviews/ReviewTextArea.vue';
import ReviewsView from '@/infrastructure/views/ReviewsView';

const localized = useLocalizationStore();
const reviewStore = useReviewStore();

const setup = new ReviewsView(
  new ReviewService(new FetchService(), reviewStore),
  new ToastService(),
);
</script>

<style scoped></style>
