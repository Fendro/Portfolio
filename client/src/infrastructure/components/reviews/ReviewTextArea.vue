<template>
  <Textarea
    v-model="userReview.content"
    :name="'ReviewsView-TextArea'"
    :label="'Review text area'"
    class="m-2 max-h-80 min-h-40"
    auto-resize
  />
  <div class="m-2 flex items-center gap-2 self-start">
    <p class="text-lg text-primary-900 dark:text-primary-100">
      {{ ReviewTextContent['rating'][preference.language] }} :
    </p>
    <Rating v-model="userReview.rating" />
  </div>
  <Button
    :label="ReviewTextContent['leave-a-review'][preference.language]"
    class="mr-2 w-fit self-end"
    @click="$emit('submit')"
  />
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Rating from 'primevue/rating';
import Textarea from 'primevue/textarea';

import type { ReviewCreateDto } from '@/api/dto';
import ReviewTextContent from '@/assets/text/reviews.json';
import { useUserPreferenceStore } from '@/core/stores';

interface ReviewTextAreaEmits {
  (e: 'submit'): void;
}
interface ReviewTextAreaProps {
  userReview: ReviewCreateDto;
}

defineEmits<ReviewTextAreaEmits>();
defineProps<ReviewTextAreaProps>();

const preference = useUserPreferenceStore();
</script>

<style scoped></style>
