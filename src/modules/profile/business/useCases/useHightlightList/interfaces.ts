export interface HightlightRequestParams {}

export interface HightlightRequest {}

export interface HightlightResponse {
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
