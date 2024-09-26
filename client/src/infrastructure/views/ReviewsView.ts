import { type Reactive, onBeforeMount, reactive } from 'vue';

import type { IReviewService, IToastService } from '@/core/services';

export interface ReviewsViewState {
  containsProfanity: boolean;
  isFetching: boolean;
  isPosting: boolean;
  page: number;
  rowCount: number;
}

export default class ReviewsView {
  readonly state: Reactive<ReviewsViewState> = reactive({
    containsProfanity: false,
    isFetching: false,
    isPosting: false,
    page: 0,
    rowCount: 10,
  });

  constructor(
    private reviewService: IReviewService,
    private toastService: IToastService,
  ) {
    onBeforeMount(async () => {
      await this.fetchReviews();
    });
  }

  postReview = async (): Promise<void> => {
    this.state.isPosting = true;
    this.reviewService
      .postUserReviewAsync()
      .then(async () => await this.fetchReviews())
      .catch((err) => this.toastService.error(err.message))
      .finally(() => (this.state.isPosting = false));
  };

  setPage(page: number) {
    this.state.page = page;
  }

  private fetchReviews = async (): Promise<void> => {
    this.state.isFetching = true;
    this.reviewService
      .refreshStoreReviewsAsync()
      .catch((err) => this.toastService.error(err.message))
      .finally(() => (this.state.isFetching = false));
  };

  get rowCount() {
    return this.state.rowCount;
  }

  get paginatedReviews() {
    const reviews = this.reviewService.getReviews();

    return reviews.slice(
      this.state.page * this.state.rowCount,
      Math.min((this.state.page + 1) * this.state.rowCount, reviews.length),
    );
  }
}
