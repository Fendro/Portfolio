<template>
  <section class="grid">
    <Textarea
      v-bind:disabled="!isAuthenticated()"
      v-bind:invalid="setup.reactive.containsProfanity"
      @input="setup.checkForProfanity"
      auto-resize
      class="mx-2 max-h-80 min-h-20"
    />
    <Button label="Leave a review" />

    <template v-for="review in setup.reactive.reviews">
      <Card>
        <template #title>{{ review.author.username }}</template>
        <template #content>
          <p class="m-0">{{ review.content }}</p>
        </template>
      </Card>
      <Rating v-model="review.rating" readonly :cancel="false" />
    </template>

    <Paginator
      :rows="10"
      :totalRecords="setup.reactive.reviews.length"
    ></Paginator>
  </section>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Paginator from 'primevue/paginator';
import Rating from 'primevue/rating';
import Textarea from 'primevue/textarea';

import { useUserProfileStore } from '@/core/stores/user/userProfileStore';
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
