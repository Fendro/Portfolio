<template>
  <section class="flex flex-col">
    <Textarea
      v-model="reviewStore.userReview.content"
      :name="'ReviewsView-TextArea'"
      :label="'Review text area'"
      class="m-2 max-h-80 min-h-40"
      auto-resize
    />
    <div class="m-2 flex items-center gap-2 self-start">
      <p class="text-lg text-primary-900 dark:text-primary-100">
        {{
          userPreference.language === LanguageEnum.English
            ? 'Rating:'
            : 'Note :'
        }}
      </p>
      <Rating v-model="reviewStore.userReview.rating" />
    </div>
    <Button
      :label="ReviewTextContent['leave-a-review'][userPreference.language]"
      class="mr-2 w-fit self-end"
      @click="setup.postReview"
    />

    <template v-if="setup.state.isFetching">
      <template v-for="_ in 10">
        <Skeleton width="100%" height="6rem" rounded="4rem" class="m-2" />
      </template>
    </template>
    <template v-else>
      <template v-for="review in reviewStore.reviews">
        <ReviewCard :review="review" class="m-2" />
      </template>
      <Paginator
        :rows="10"
        :totalRecords="reviewStore.reviews.length"
        class="m-2"
      ></Paginator>
    </template>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Paginator from 'primevue/paginator';
import Rating from 'primevue/rating';
import Skeleton from 'primevue/skeleton';
import Textarea from 'primevue/textarea';

import ReviewTextContent from '@/assets/text/reviews.json';
import { LanguageEnum } from '@/core/enums';
import { FetchService, ReviewService, ToastService } from '@/core/services';
import { useReviewStore, useUserPreferenceStore } from '@/core/stores';
import ReviewCard from '@/infrastructure/components/reviews/ReviewCard.vue';
import ReviewsView from '@/infrastructure/views/ReviewsView';

const reviewStore = useReviewStore();

const userPreference = useUserPreferenceStore();
const setup = new ReviewsView(
  new ReviewService(new FetchService(), reviewStore),
  new ToastService(),
);
</script>

<style scoped></style>
