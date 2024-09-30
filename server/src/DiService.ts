import { ReviewController } from '@/infrastructure/controllers';
import { ReviewRepository } from '@/repositories';
import { ReviewService } from '@/services';

export class DiService {
  readonly reviewControllerInstance: ReviewController;

  constructor() {
    this.reviewControllerInstance = new ReviewController(
      new ReviewService(new ReviewRepository()),
    );
  }
}
