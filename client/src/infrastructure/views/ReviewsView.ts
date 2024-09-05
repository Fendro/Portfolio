import { type Reactive, onBeforeMount, reactive } from 'vue';

import type { ReviewCreateDto } from '@/api/dto/Review/ReviewCreateDto';
import { ReviewEntity } from '@/core/entities';
import type { IReviewService, IToastService } from '@/core/services';

export interface ReviewsViewState {
  containsProfanity: boolean;
  isFetching: boolean;
  isPosting: boolean;
  newReview: ReviewCreateDto;
  reviews: ReviewEntity[];
}

export default class ReviewsView {
  readonly state: Reactive<ReviewsViewState> = reactive({
    containsProfanity: false,
    isFetching: false,
    isPosting: false,
    newReview: { content: '', rating: 0 },
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
    this.state.newReview.content = textarea.value;
  };

  postReview = async (): Promise<void> => {
    this.state.isPosting = true;
    this.reviewService
      .postReviewAsync(this.state.newReview)
      .then(async () => await this.fetchReviews())
      .catch((err) => this.toastService.error(err.message))
      .finally(() => (this.state.isPosting = false));
  };

  private fetchReviews = async (): Promise<void> => {
    this.state.isFetching = true;
    this.reviewService
      .getReviewsAsync()
      .then((reviews) => (this.state.reviews = reviews))
      .catch((err) => this.toastService.error(err.message))
      .finally(() => (this.state.isFetching = false));
  };
}
