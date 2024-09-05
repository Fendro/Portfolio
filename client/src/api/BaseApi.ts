export class BaseApi {
  public static get basePath() {
    return import.meta.env.VITE_API_URL as string;
  }

  public static formatQueryParams = (
    ...params: Record<string, string | number | boolean>[]
  ) => {
    return params
      .map((param) => {
        return Object.entries(param)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join('&');
      })
      .join('&');
  };
}
