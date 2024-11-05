import type { FetchOptions } from '@infra/network/httpClient/interfaces';

async function fetchClient<T>(
  url: string,
  options: FetchOptions = {},
): Promise<T> {
  const { timeout = 60000, headers = {}, ...rest } = options;

  const controller = new AbortController();

  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(url, {
    ...rest,
    headers: {
      ...headers,
    },
    signal: controller.signal,
  });

  clearTimeout(id);

  return response.json();
}

export default {
  get<T>(url: string, options: FetchOptions = {}): Promise<T> {
    return fetchClient<T>(url, { ...options, method: 'GET' });
  },
  post<T>(url: string, options: FetchOptions = {}) {
    return fetchClient<T>(url, { ...options, method: 'POST' });
  },
  put<T>(url: string, options: FetchOptions = {}) {
    return fetchClient<T>(url, { ...options, method: 'PUT' });
  },
  patch<T>(url: string, options: FetchOptions = {}) {
    return fetchClient<T>(url, { ...options, method: 'PATCH' });
  },
  delete<T>(url: string, options: FetchOptions = {}) {
    return fetchClient<T>(url, { ...options, method: 'DELETE' });
  },
};
