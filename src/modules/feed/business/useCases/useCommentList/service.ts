import { QueryKey } from '@tanstack/react-query';
import { comments } from '@modules/feed/business/useCases/useCommentList/mock';

export async function commentListService(
  pageParam: number,
  _: QueryKey,
): Promise<CommentModel> {
  const response = {
    items: comments,
    page: 0,
    pageCount: 0,
    pageSize: 10,
    total: 0,
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  await delay(2000);

  return response;
}
