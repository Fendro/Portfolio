export interface IFetchService {}

export class FetchService implements IFetchService {
  private static readonly headers: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  static getAsync<TResponse>(
    url: string,
    queryParams?: Record<string, string>,
  ) {
    return this.executeRequestAsync<never, TResponse>(
      url + new URLSearchParams(queryParams),
      {
        ...this.headers,
        method: 'GET',
      },
    );
  }

  static postAsync<TPayload, TResponse>(url: string, payload: TPayload) {
    return this.executeRequestAsync<TPayload, TResponse>(
      url,
      { ...this.headers, method: 'POST' },
      payload,
    );
  }

  static putAsync<TPayload, TResponse>(url: string, payload: TPayload) {
    return this.executeRequestAsync<TPayload, TResponse>(
      url,
      { ...this.headers, method: 'PUT' },
      payload,
    );
  }

  static patchAsync<TPayload, TResponse>(
    url: string,
    payload: Partial<TPayload>,
  ) {
    return this.executeRequestAsync<Partial<TPayload>, TResponse>(
      url,
      { ...this.headers, method: 'PATCH' },
      payload,
    );
  }

  static deleteAsync<TPayload, TResponse>(url: string, payload: TPayload) {
    return this.executeRequestAsync<TPayload, TResponse>(
      url,
      { ...this.headers, method: 'DELETE' },
      payload,
    );
  }

  private static async executeRequestAsync<TPayload, TResponse>(
    url: string,
    options: RequestInit,
    payload?: TPayload,
  ) {
    return await fetch(url, { ...options, body: JSON.stringify(payload) })
      .then(this.ensureSuccessStatusCode)
      .then(this.ensureJsonContentType)
      .then(this.deserializeToJson<TResponse>)
      .catch((err) => {
        throw new Error(err.message);
      });
  }

  private static ensureSuccessStatusCode(response: Response) {
    if (response.status >= 200 && response.status < 300) return response;

    throw new Error('Request error.');
  }

  private static ensureJsonContentType(response: Response) {
    if (response.headers.get('content-type')?.includes('application/json'))
      return response;

    throw new Error('Request error.');
  }

  private static deserializeToJson<T>(response: Response) {
    return response.json() as T;
  }
}
