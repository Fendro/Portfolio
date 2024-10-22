<template>
  <div class="flex flex-col gap-4">
    <Textarea
      v-model="userReview.content"
      :label="'Review text area'"
      :name="'ReviewsView-TextArea'"
      auto-resize
      class="m-2 max-h-80 min-h-40"
    />
    <div class="ml-2 flex items-center gap-2 self-start">
      <p class="text-lg text-primary-900 dark:text-primary-100">
        {{ localized.text['ui']['label']['rating'] }} :
      </p>
      <Rating v-model="userReview.rating" />
    </div>
    <Button
      :label="localized.text['ui']['button']['leave-a-review']"
      class="mr-2 w-fit self-end"
      @click="$emit('submit')"
    />
  </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import Rating from 'primevue/rating';
import Textarea from 'primevue/textarea';

import type { ReviewCreateDto } from '@/api';
import { useLocalizationStore } from '@/core/stores';

interface ReviewTextAreaEmits {
  (e: 'submit'): void;
}

interface ReviewTextAreaProps {
  userReview: ReviewCreateDto;
}

defineEmits<ReviewTextAreaEmits>();
defineProps<ReviewTextAreaProps>();

const localized = useLocalizationStore();
</script>

<style scoped></style>
