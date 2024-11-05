import { QueryClient } from '@tanstack/react-query';

import type { QueryApi } from '@core/query/interfaces';

const client = new QueryClient();

function clear() {
  client.clear();
}

function getClient() {
  return client;
}

async function invalidate({ queryKey }: any) {
  await client.invalidateQueries({
    queryKey,
  });
}

async function prefetch({ queryKey, queryFn }: any) {
  await client.prefetchQuery({
    queryKey,
    queryFn: ({ queryKey }) => queryFn(queryKey),
  });
}

const Query: QueryApi = {
  getClient,
  invalidate,
  prefetch,
  clear,
};

export default Query;
