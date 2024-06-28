export class BaseApi {
  protected static get basePath() {
    return import.meta.env.VITE_BACKEND_URL as string;
  }
}
