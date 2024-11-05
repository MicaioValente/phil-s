import { QueryKey } from '@tanstack/react-query';
import {
  SearchRequestParams,
  SearchResponse,
} from '@modules/feed/business/useCases/useSearchList/interfaces';
import { searchListAdapter } from '@modules/feed/business/useCases/useSearchList/adapter';

const items: SearchItemModel[] = [
  {
    id: '1',
    url: 'https://s3-alpha-sig.figma.com/img/d513/d832/dd363df556f86ae386748486c3e6be7d?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXAPOjq9tAsHlFK1CDTSfb~Utf~MK2p6xO5eJPXr8jCyJ6XmQBAwYAckJGODcywtuae7Nsc6LxIn4q~jtittspcz-9IXIwBOoR9JbKUUkZ06fF-jcKv90HO3w1HEM8RhCCpe4Wb5JLVrwQ2b5KdXnZTUUI00DjAOTMNSwgHJxLUrm8gF-7lmdvULMXWvl~XYnkWtavVEMSeSrjPW9pluXDXWz1NpX-gI2CddF3OowQYxxukrowjHYFc2OUP1NarDdIMMQsn1on9BxDS~xgWdodgbr~cO8rvi3dPU0l8t4pGTWsbrh05PtnqhtxtwvGQpBdykkibMWWtkttc8gLItBw__',
    type: 'IMAGE',
  },
  {
    id: '3',
    url: 'https://s3-alpha-sig.figma.com/img/f29e/ac19/e341f9851a02503ef2a262492470719e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LAbg1TZetxZoHi9l8vIpQjDO4fgwf005fTyvb~~jJ5SVwH6I7vHqmTXRm9zAJd7l6GAaxhN3L0EsxecREyT951qUI29rWs1uGTNBD0~JULmw-FyTUbCc9aM3yUGsA1VxPfTAdk4BOcL77aml-gHvFIZNJgK-XVeRUSTwD8obI-7ftdeOF~TcsbHyEKWSIPyOWEV-fUFPD3KOTbLcY4b56hlpkuSAuXmQnMj2v4emIAbDvzBL8pIUHlNgCUtKIYOyHO3qXIHY5ZrmW8HfWB-2u1qPUAvDP36w5bdnn~txXXvhlUIZNaKncvQb3uzslvElus3MyBhQvxB3aOi3VxvPeA__',
    type: 'VIDEO',
  },
  {
    id: '2',
    url: 'https://s3-alpha-sig.figma.com/img/125e/519f/c35e07fb41873dde87b9c0769112c74a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q1Vvy4cOxirZF3JwZk2YHcZX1~BJ5otWmDNLe3HGKRgTMec4FDIJQxBvUqWbKrc64v6Gr05~QVNIZEDfJya51JgqUCD3BOaFl67FX-ET8gLsxnWJAvpnGIiZea8gr5FA4RRMYy~SKRWULxrsT7edV8psPSZmv6rE6eQzEuYkDKHwIIPImv9Uxlo-mS71K8hl-fjnggnQXmV-jhxpmF8j2NrXyGykERdNmQ1kb237g7YtJ60oeBPngpHcDmB3l1E7k90yxOKqcJrrDsfX89F7fRK9pO8-~nto5SRBS0Bb7MauocmBowiCj8nuQ4GF3zwze~eqAYbrmT2TCMAgMaTJRg__',
    type: 'IMAGE',
  },
];

export async function searchListService(
  pageParam: number,
  _: QueryKey,
  params?: SearchRequestParams,
) {
  const response: SearchResponse = {
    items: items.filter(f => f.id.includes(params?.search as string)),
    page: 0,
    pageCount: 0,
    pageSize: 0,
    total: 0,
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  await delay(2000);

  return searchListAdapter(response);
}
