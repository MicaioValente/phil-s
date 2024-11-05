import { storyListAdapter } from '@modules/feed/business/useCases/useStoryList/adapter';
import type { StoryResponse } from '@modules/feed/business/useCases/useStoryList/interfaces';
import { QueryKey } from '@tanstack/react-query';
import { addStory } from '@modules/feed/business/stores/useStories/methods';

const testStory: StoryItemModel = {
  personId: '2',
  person: 'Other Person',
  image:
    'https://s3-alpha-sig.figma.com/img/9d49/8baf/f4c9e44d993cdd291e1bce0663314f1c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfNTCQDhajicRYe7cNQ50j8HJ5~W3A1Pf0WSvkBsE7Ckm4WBDg5YkBsyV9o8~zlyxEw0K4EnRkkUfGUIJs0gu6N9AKS7G-4Xn3vYwZ0lSEwMhcsCtq8h7PE99O2xPTbpO8VL1aLxMJS4lVOycmvEoTjFfw66xN6vEqSx9D-1itZIJoGuwUk58Hth6IOV~fJX6LmuJ936tVL0NdL-Bc7hdpZxkKzrQpkCOvmzF1I0X1bVZNbOopgjh69u8Y9EOCQHIGkN7A1jsZt-PbWHjeqh3FV34T5K5e2QsAoqK9MNAlplXwATX3lWfE9iBu5P5AGe4V6FBKqZ-RV~db~62sO1ew__',
  story: [
    {
      id: '1',
      seen: false,
      url: 'https://s3-alpha-sig.figma.com/img/9d49/8baf/f4c9e44d993cdd291e1bce0663314f1c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfNTCQDhajicRYe7cNQ50j8HJ5~W3A1Pf0WSvkBsE7Ckm4WBDg5YkBsyV9o8~zlyxEw0K4EnRkkUfGUIJs0gu6N9AKS7G-4Xn3vYwZ0lSEwMhcsCtq8h7PE99O2xPTbpO8VL1aLxMJS4lVOycmvEoTjFfw66xN6vEqSx9D-1itZIJoGuwUk58Hth6IOV~fJX6LmuJ936tVL0NdL-Bc7hdpZxkKzrQpkCOvmzF1I0X1bVZNbOopgjh69u8Y9EOCQHIGkN7A1jsZt-PbWHjeqh3FV34T5K5e2QsAoqK9MNAlplXwATX3lWfE9iBu5P5AGe4V6FBKqZ-RV~db~62sO1ew__',
      type: 'IMAGE',
      data_created: '2024-08-23',
      available: true,
      location: 'Duabi, UAE',
      duration: 12000,
    },
  ],
};

const testStory2: StoryItemModel = {
  personId: '3',
  person: 'Other Person',
  image:
    'https://s3-alpha-sig.figma.com/img/41d1/55d4/6f407dec0b4a750f0b5956c9c29da37e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BzKPC7IOK7DFQm1jQCDOll5v~Or7NgYgzC96PyWyy11AhGeME-zDGX5R~0R-aJJqjx4DGUCBXs5KrhEAN0sL97QDNCdVtUsTu~F4tGpQI0~s245Wq1kzarq11Fy~tejhzcZpyP3ymbj9l6hnssyixqJgf7XRsUZNCd0I-mMPj97-JrO6s3y9QuDkKEswDQGeOdphOHAofrh50v~hFXrVeeLbRV2rxNJJky10k6StKkT2EalJ3QdFvNq1KdKYaW8uGTqHNEpcLLgGE5ikdUQ7ACpuG29KotGoWgn7zBCOJw2Bz0ZyMKpmMYf-oYtuIAwnsfeWe0-qSqU7CU2iTjtXdw__',
  story: [
    {
      id: '1',
      seen: false,
      url: 'https://s3-alpha-sig.figma.com/img/41d1/55d4/6f407dec0b4a750f0b5956c9c29da37e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BzKPC7IOK7DFQm1jQCDOll5v~Or7NgYgzC96PyWyy11AhGeME-zDGX5R~0R-aJJqjx4DGUCBXs5KrhEAN0sL97QDNCdVtUsTu~F4tGpQI0~s245Wq1kzarq11Fy~tejhzcZpyP3ymbj9l6hnssyixqJgf7XRsUZNCd0I-mMPj97-JrO6s3y9QuDkKEswDQGeOdphOHAofrh50v~hFXrVeeLbRV2rxNJJky10k6StKkT2EalJ3QdFvNq1KdKYaW8uGTqHNEpcLLgGE5ikdUQ7ACpuG29KotGoWgn7zBCOJw2Bz0ZyMKpmMYf-oYtuIAwnsfeWe0-qSqU7CU2iTjtXdw__',
      type: 'IMAGE',
      data_created: '2024-08-23',
      available: true,
      location: 'Duabi, UAE',
      duration: 12000,
    },
    {
      id: '2',
      seen: false,
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'VIDEO',
      data_created: '2024-08-23',
      available: true,
      location: 'Duabi, UAE',
      duration: 12000,
    },
    {
      id: '3',
      seen: false,
      url: 'https://s3-alpha-sig.figma.com/img/41d1/55d4/6f407dec0b4a750f0b5956c9c29da37e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BzKPC7IOK7DFQm1jQCDOll5v~Or7NgYgzC96PyWyy11AhGeME-zDGX5R~0R-aJJqjx4DGUCBXs5KrhEAN0sL97QDNCdVtUsTu~F4tGpQI0~s245Wq1kzarq11Fy~tejhzcZpyP3ymbj9l6hnssyixqJgf7XRsUZNCd0I-mMPj97-JrO6s3y9QuDkKEswDQGeOdphOHAofrh50v~hFXrVeeLbRV2rxNJJky10k6StKkT2EalJ3QdFvNq1KdKYaW8uGTqHNEpcLLgGE5ikdUQ7ACpuG29KotGoWgn7zBCOJw2Bz0ZyMKpmMYf-oYtuIAwnsfeWe0-qSqU7CU2iTjtXdw__',
      type: 'IMAGE',
      data_created: '2024-08-23',
      available: true,
      location: 'Duabi, UAE',
      duration: 12000,
    },
  ],
};

const yourStory = {
  personId: '1',
  person: 'Your Story',
  image:
    'https://s3-alpha-sig.figma.com/img/9edd/8897/f727f3e39b2dd0d33b89ae629b4987ce?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dpxe373gUfJ5cqGgo6Y9V5GGjeb0JeIKlWQKQ4w2bc5GJfZbgmzYC52DgR~CbX65ZBVKCL9xleQENbG0kBDFGICstv4sabTBaYv1N~Tmd~ULCQLTGrNg36iz-oO0deSEcv7EnJTCelMFushZlR24p6Hr13ZsjilTl~ffc2~MECMcz6miugMCe0UGfgO~VyOUx4zSJ1ipILWCcRNrq5AmHz3KB5joLzsZAtzlJW8CDpEkCtX4z9Vtkb9ynpyQ71HmFFf96jewDowLPp2zB2gupeDItoe8rsc~YTDtPES-PnFd3qE0L5P3S9hpQy4s4C77bTr4~CZlazKWf56JpKKNMw__',
  story: [],
};

export async function storyListService(pageParam: number, _: QueryKey) {
  const response: StoryResponse = {
    items: [yourStory, testStory, testStory2],
    page: 0,
    pageCount: 0,
    pageSize: 0,
    total: 0,
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  await delay(2000);
  addStory(response.items);

  return storyListAdapter(response);
}
