import { QueryKey } from '@tanstack/react-query';
import { hightlightListAdapter } from '@modules/profile/business/useCases/useHightlightList/adapter';
import type { HightlightResponse } from '@modules/profile/business/useCases/useHightlightList/interfaces';

const testStory: HightlightItemModel = {
  personId: '2',
  person: 'Other Person',
  image:
    'https://s3-alpha-sig.figma.com/img/d513/d832/dd363df556f86ae386748486c3e6be7d?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXAPOjq9tAsHlFK1CDTSfb~Utf~MK2p6xO5eJPXr8jCyJ6XmQBAwYAckJGODcywtuae7Nsc6LxIn4q~jtittspcz-9IXIwBOoR9JbKUUkZ06fF-jcKv90HO3w1HEM8RhCCpe4Wb5JLVrwQ2b5KdXnZTUUI00DjAOTMNSwgHJxLUrm8gF-7lmdvULMXWvl~XYnkWtavVEMSeSrjPW9pluXDXWz1NpX-gI2CddF3OowQYxxukrowjHYFc2OUP1NarDdIMMQsn1on9BxDS~xgWdodgbr~cO8rvi3dPU0l8t4pGTWsbrh05PtnqhtxtwvGQpBdykkibMWWtkttc8gLItBw__',
  story: [],
};

const testStory2: HightlightItemModel = {
  personId: '3',
  person: 'Other Person',
  image:
    'https://s3-alpha-sig.figma.com/img/125e/519f/c35e07fb41873dde87b9c0769112c74a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q1Vvy4cOxirZF3JwZk2YHcZX1~BJ5otWmDNLe3HGKRgTMec4FDIJQxBvUqWbKrc64v6Gr05~QVNIZEDfJya51JgqUCD3BOaFl67FX-ET8gLsxnWJAvpnGIiZea8gr5FA4RRMYy~SKRWULxrsT7edV8psPSZmv6rE6eQzEuYkDKHwIIPImv9Uxlo-mS71K8hl-fjnggnQXmV-jhxpmF8j2NrXyGykERdNmQ1kb237g7YtJ60oeBPngpHcDmB3l1E7k90yxOKqcJrrDsfX89F7fRK9pO8-~nto5SRBS0Bb7MauocmBowiCj8nuQ4GF3zwze~eqAYbrmT2TCMAgMaTJRg__',
  story: [],
};

export async function hightlightListService(pageParam: number, _: QueryKey) {
  const response: HightlightResponse = {
    items: [
      testStory,
      testStory2,
      testStory,
      testStory2,
      testStory,
      testStory2,
    ],
    page: 0,
    pageCount: 0,
    pageSize: 0,
    total: 0,
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  await delay(2000);

  return hightlightListAdapter(response);
}
