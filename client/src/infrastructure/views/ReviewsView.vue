<template>
  <section class="flex flex-col">
    <Textarea
      @input="setup.checkForProfanity"
      :name="'ReviewsView-TextArea'"
      :label="'Review text area'"
      class="m-2 max-h-80 min-h-40"
      auto-resize
    />
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
      <template v-for="review in setup.state.reviews">
        <ReviewCard :review="review" class="m-2" />
      </template>
      <Paginator
        :rows="10"
        :totalRecords="setup.state.reviews.length"
        class="m-2"
      ></Paginator>
    </template>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Paginator from 'primevue/paginator';
import Skeleton from 'primevue/skeleton';
import Textarea from 'primevue/textarea';

import ReviewTextContent from '@/assets/text/reviews.json';
import { FetchService, ReviewService, ToastService } from '@/core/services';
import { useUserPreferenceStore, useUserProfileStore } from '@/core/stores';
import ReviewCard from '@/infrastructure/components/reviews/ReviewCard.vue';
import ReviewsView from '@/infrastructure/views/ReviewsView';

const userPreference = useUserPreferenceStore();
const userProfile = useUserProfileStore();
const setup = new ReviewsView(
  new ReviewService(new FetchService()),
  new ToastService(),
);
</script>

<style scoped></style>
