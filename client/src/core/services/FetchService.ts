export interface IFetchService {
  deleteAsync: {
    <TPayload>(url: string, payload: TPayload): Promise<void>;
    <TPayload, TResponse>(url: string, payload: TPayload): Promise<TResponse>;
  };

  getAsync: <TResponse>(
    url: string,
    queryParams?: Record<string, string>,
  ) => Promise<TResponse>;

  patchAsync: {
    <TPayload>(url: string, payload: Partial<TPayload>): Promise<void>;
    <TPayload, TResponse>(
      url: string,
      payload: Partial<TPayload>,
    ): Promise<TResponse>;
  };

  postAsync: {
    <TPayload>(url: string, payload: TPayload): Promise<void>;
    <TPayload, TResponse>(url: string, payload: TPayload): Promise<TResponse>;
  };

  putAsync: {
    <TPayload>(url: string, payload: TPayload): Promise<void>;
    <TPayload, TResponse>(url: string, payload: TPayload): Promise<TResponse>;
  };
}

export class FetchService implements IFetchService {
  private headers: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  private static ensureSuccessStatusCode = (response: Response) => {
    if (response.status >= 200 && response.status < 300) return response;

    throw new Error('Request error.');
  };

  private static ensureJsonContentType = (response: Response) => {
    if (response.headers.get('content-type')?.includes('application/json'))
      return response;

    throw new Error('Request error.');
  };

  private static deserializeToJson = <T>(response: Response) => {
    return response.json() as T;
  };

  getAsync = <TResponse>(url: string, queryParams?: Record<string, string>) => {
    return this.executeRequestAsync<never, TResponse>(
      url + new URLSearchParams(queryParams),
      {
        headers: { ...this.headers },
        method: 'GET',
      },
    );
  };

  postAsync = <TPayload, TResponse>(url: string, payload: TPayload) => {
    return this.executeRequestAsync<TPayload, TResponse>(
      url,
      {
        headers: { ...this.headers },
        method: 'POST',
      },
      payload,
    );
  };

  putAsync = <TPayload, TResponse>(url: string, payload: TPayload) => {
    return this.executeRequestAsync<TPayload, TResponse>(
      url,
      {
        headers: { ...this.headers },
        method: 'PUT',
      },
      payload,
    );
  };

  patchAsync = <TPayload, TResponse>(
    url: string,
    payload: Partial<TPayload>,
  ) => {
    return this.executeRequestAsync<Partial<TPayload>, TResponse>(
      url,
      {
        headers: { ...this.headers },
        method: 'PATCH',
      },
      payload,
    );
  };

  deleteAsync = <TPayload, TResponse>(url: string, payload: TPayload) => {
    return this.executeRequestAsync<TPayload, TResponse>(
      url,
      {
        headers: { ...this.headers },
        method: 'DELETE',
      },
      payload,
    );
  };

  private executeRequestAsync = <TPayload, TResponse>(
    url: string,
    options: RequestInit,
    payload?: TPayload,
  ) => {
    return fetch(url, { ...options, body: JSON.stringify(payload) })
      .then(FetchService.ensureSuccessStatusCode)
      .then(FetchService.ensureJsonContentType)
      .then(FetchService.deserializeToJson<TResponse>);
  };
}
