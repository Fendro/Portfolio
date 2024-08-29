export class BaseApi {
  protected static get basePath() {
    return import.meta.env.VITE_BACKEND_URL as string;
  }

  public static formatQueryParams(
    ...params: Record<string, string | number | boolean>[]
  ) {
    return params
      .map((param) => {
        return Object.entries(param)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join('&');
      })
      .join('&');
  }
}
