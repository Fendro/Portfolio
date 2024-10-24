import { BaseApi } from '@/api/BaseApi';

export class ReviewApi extends BaseApi {
  public static get getReviewsUrl() {
    return `${this.path}`;
  }

  public static get postReviewUrl() {
    return `${this.path}`;
  }

  private static get path() {
    return `${this.basePath}/reviews`;
  }
}
