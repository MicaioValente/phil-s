export interface PostRequestParams {}

export interface PostRequest {}

export interface PostResponse {
  items: {
    id: string;
    description: string;
    created_at: string;
    updated_at: string;
    subscriber_only: boolean;
    location: string;
    user: {
      id: string;
      name: string;
      image: string;
    };
    media: {
      id: string;
      song?: {
        id: string;
        name: string;
        author: string;
        created_at: string;
      } | null;
      type: 'IMAGE' | 'VIDEO' | 'SONG';
      url: string;
    }[];

    likes: number;
    comments: number;
    shares: number;
  }[];
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
