import { useInfiniteQuery } from '@infra/hooks';
import { commentListService } from '@modules/feed/business/useCases/useCommentList/service';
import { QueryKeys } from '@shared/enums/queryKeys';

export function useCommentList() {
  return useInfiniteQuery<CommentItemModel>({
    queryKey: [QueryKeys.GET_COMENT_LIST],
    queryFn: commentListService,
  });
}
