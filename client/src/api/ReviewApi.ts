import { BaseApi } from '@/api/BaseApi';

export class ReviewApi extends BaseApi {
  static readonly path = 'reviews';

  public static get getReviewsUri() {
    return `${this.basePath}/${this.path}`;
  }

  public static get postReviewUri() {
    return `${this.basePath}/${this.path}`;
  }
}
