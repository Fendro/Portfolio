import { onBeforeMount, reactive } from 'vue';
import type { Reactive } from 'vue';

import { Review } from '@/core/entities';
import { FetchService, ReviewService, ToastService } from '@/core/services';
import type { IReviewService, IToastService } from '@/core/services';

export interface ReviewsViewProps {}

export interface ReviewsViewEmits {
  (e: 'none'): void;
}

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
    protected readonly props: ReviewsViewProps,
    protected readonly emits: ReviewsViewEmits,
  ) {
    this.reviewService = new ReviewService(new FetchService());
    this.toastService = new ToastService();

    onBeforeMount(async () => {
      this.reactive.isFetching = true;
      await this.fetchReviews();
      this.reactive.isFetching = false;
    });
  }

  checkForProfanity = (event: Event) => {
    const textarea = event.target as HTMLTextAreaElement;
    this.reactive.containsProfanity = textarea.value.includes('fuck');
  };

  private async fetchReviews() {
    this.reactive.reviews = await this.reviewService.getReviewsAsync();
  }
}
