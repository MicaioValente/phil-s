declare interface PostModel {
  items: PostItemModel[];
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

declare interface PostItemModel {

    id: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    subscriberOnly: boolean;
    location: string;

  user: {
    id: string;
    name: string;
    image: string;
  };
  media: {
    id: string;
    song: {
      id: string;
      name: string;
      author: string;
      createdAt: string;
    } | null;
    type: 'IMAGE' | 'VIDEO' | 'SONG';
    url: string;
  }[];

  likes: number;
  comments: number;
  shares: number;
}
