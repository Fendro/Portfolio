export class BaseApi {
  public static get basePath() {
    return import.meta.env.VITE_API_URL as string;
  }
}
