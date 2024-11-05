import { List, XStack } from '@dls/components';
import { useFeedList } from '@modules/feed/business/useCases';
import { PostItem } from '@modules/feed/mobile/components/PostItem';
import { PostListProps } from '@modules/feed/mobile/components/PostList/interfaces';
import { FooterLoading } from '@modules/feed/mobile/components';

function PostList({ renderHeader }: PostListProps) {
  const {
    data: feed,
    fetchNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useFeedList();


  return (
    <XStack f={1}>
      <List<PostItemModel>
        data={feed.items}
        onRefresh={refetch}
        estimatedItemSize={120}
        refreshing={isRefetching}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterLoading {...{ isLoading }} />}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={() => null}
        children={(item) => <PostItem {...{item}}/>}
     />
     
    </XStack>
  );
}

export default PostList;
