import type { StoryResponse } from '@modules/feed/business/useCases/useStoryList/interfaces';

export function storyListAdapter(data: StoryResponse): StoryModel {
  return {
    items: data.items,
    page: data.page,
    pageCount: data.pageCount,
    pageSize: data.pageSize,
    total: data.total,
  };
}
