import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import { computed, ref } from 'vue';

import type { ReviewCreateDto, ReviewDto } from '@/api';

export const useReviewStore = defineStore('reviewStore', () => {
  const _reviews: Ref<ReviewDto[]> = ref([]);
  const _userReview: Ref<ReviewCreateDto> = ref({ content: '', rating: 0 });

  const reviews = computed(() => _reviews.value);
  const userReview = computed(() => _userReview.value);

  function setReviews(reviews: ReviewDto[]) {
    _reviews.value = reviews;
  }

  function $reset() {
    _reviews.value = [];
    _userReview.value = { content: '', rating: 0 };
  }

  return {
    reviews,
    setReviews,
    userReview,
    $reset,
  };
});
