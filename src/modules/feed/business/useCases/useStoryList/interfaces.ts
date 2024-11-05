export interface StoryRequestParams {}

export interface StoryRequest {}

export interface StoryResponse {
  items: {
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
  }[];
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}
