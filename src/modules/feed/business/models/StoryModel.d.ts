declare interface StoryModel {
  page: number;
  pageCount: number;
  pageSize: number;
  items: StoryItemModel[];
  total: number;
}

declare interface StoryItemModel {
  personId: string;
  person: string;
  image: string;
  story: {
    id: string;
    seen: boolean;
    url: string;
    type: 'IMAGE' | 'VIDEO';
    data_created: string;
    available: boolean;
    location: string;
    duration: number;
  }[];
}
