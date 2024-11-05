import type { PostResponse } from '@modules/feed/business/useCases/usePostList/interfaces';

export function postListAdapter(data: PostResponse): PostModel {
  return {
    items: data.items.map(item => ({
      id: item.id,
      description: item.description,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
      subscriberOnly: item.subscriber_only,
      location: item.location,
      comments: item.comments,
      shares: item.shares,
      likes: item.likes,
      media: item.media.map(media => ({
        id: media.id,
        type: media.type,
        url: media.url,
        song: media.song
          ? {
              id: media.song?.id,
              name: media.song?.name,
              author: media.song?.author,
              createdAt: media.song?.created_at,
            }
          : null,
      })),
      user: {
        id: item.user.id,
        name: item.user.name,
        image: item.user.image,
      },
    })),
    page: data.page,
    pageCount: data.pageCount,
    pageSize: data.pageSize,
    total: data.total,
  };
}
