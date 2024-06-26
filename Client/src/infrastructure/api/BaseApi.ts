export class BaseApi {
  protected static get baseUrl() {
    return import.meta.env.VITE_BACKEND_URL as string;
  }
}
