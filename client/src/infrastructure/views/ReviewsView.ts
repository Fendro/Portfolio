import { type Reactive, onBeforeMount, reactive } from 'vue';

import { ReviewEntity } from '@/core/entities';
import type { IReviewService, IToastService } from '@/core/services';

export interface ReviewsViewState {
  containsProfanity: boolean;
  isFetching: boolean;
  reviews: ReviewEntity[];
}

export default class ReviewsView {
  readonly state: Reactive<ReviewsViewState> = reactive({
    containsProfanity: false,
    isFetching: false,
    reviews: [],
  });

  constructor(
    private reviewService: IReviewService,
    private toastService: IToastService,
  ) {
    onBeforeMount(async () => {
      await this.fetchReviews();
    });
  }

  checkForProfanity = (event: Event) => {
    const textarea = event.target as HTMLTextAreaElement;
    this.state.containsProfanity = textarea.value.includes('fuck');
  };

  private async fetchReviews() {
    this.state.isFetching = true;
    this.reviewService
      .getReviewsAsync()
      .then((reviews) => {
        this.state.reviews = reviews;
      })
      .catch((err) => this.toastService.error(err.message))
      .finally(() => (this.state.isFetching = false));
  }
}
