<template>
  <section class="grid">
    <Textarea
      name="ReviewsView-TextArea"
      v-bind:disabled="!isAuthenticated()"
      v-bind:invalid="setup.reactive.containsProfanity"
      @input="setup.checkForProfanity"
      auto-resize
      class="mx-2 max-h-80 min-h-20"
    />
    <Button label="Leave a review" />

    <template v-if="setup.reactive.isFetching">
      <Spinner />
    </template>
    <template v-else>
      <template v-for="review in setup.reactive.reviews">
        <Review :review="review" />
      </template>
      <Paginator
        :rows="10"
        :totalRecords="setup.reactive.reviews.length"
      ></Paginator>
    </template>
  </section>
</template>

<script setup lang="ts">
import Paginator from 'primevue/paginator';
import Textarea from 'primevue/textarea';

import { useUserProfileStore } from '@/core/stores/user/userProfileStore';
import Review from '@/infrastructure/components/cards/Review.vue';
import Spinner from '@/infrastructure/components/loaders/Spinner.vue';
import ReviewsView, {
  type ReviewsViewEmits,
  type ReviewsViewProps,
} from '@/infrastructure/views/ReviewsView';

const { isAuthenticated } = useUserProfileStore();
const props = defineProps<ReviewsViewProps>();
const emits = defineEmits<ReviewsViewEmits>();
const setup = new ReviewsView(props, emits);
</script>

<style scoped></style>
