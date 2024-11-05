declare interface CommentModel {
  items: CommentItemModel[];
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

declare interface CommentItemModel {
  parentCommentId: string;
  createdAt: string;
  comment: {
    id: string;
    content: string;
    likes: number;
    isDeleted: boolean;
  };
  post: {
    id: string;
  };
  user: {
    id: string;
    name: string;
    image: string;
    address: string;
  };
}
