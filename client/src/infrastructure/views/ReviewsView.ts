import { onBeforeMount, reactive } from 'vue';
import type { Reactive } from 'vue';

import { Review } from '@/core/entities';
import { FetchService, ReviewService, ToastService } from '@/core/services';
import type { IReviewService, IToastService } from '@/core/services';

export interface ReviewsViewEmits {
  (e: ''): never;
}

export interface ReviewsViewProps {}

export default class ReviewsView {
  private reviewService: IReviewService;
  private toastService: IToastService;

  readonly reactive: Reactive<{
    containsProfanity: boolean;
    isFetching: boolean;
    reviews: Review[];
  }> = reactive({
    containsProfanity: false,
    isFetching: false,
    reviews: [],
  });

  constructor(
    protected readonly emits: ReviewsViewEmits,
    protected readonly props: ReviewsViewProps,
  ) {
    this.reviewService = new ReviewService(new FetchService());
    this.toastService = new ToastService();

    onBeforeMount(async () => {
      await this.fetchReviews();
    });
  }

  checkForProfanity = (event: Event) => {
    const textarea = event.target as HTMLTextAreaElement;
    this.reactive.containsProfanity = textarea.value.includes('fuck');
  };

  private async fetchReviews() {
    this.reactive.isFetching = true;
    this.reviewService
      .getReviewsAsync()
      .then((reviews) => {
        this.reactive.reviews = reviews;
      })
      .catch((err) => this.toastService.error(err.message))
      .finally(() => (this.reactive.isFetching = false));
  }
}
