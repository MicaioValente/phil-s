import { SectionList } from 'react-native';

import { Button, XStack, YStack } from '@dls/components';

import { Screen } from '@core/navigation/interfaces';
import {
  CommentItem,
  FooterLoading,
  Header,
  PostItem,
  SendInput,
} from '@modules/feed/mobile/components';
import { useNavigation, useTranslation } from '@shared/hooks';
import { EntypoIcon, GiftIcon } from '@modules/feed/mobile/screens/Post/styles';
import { useCommentList } from '@modules/feed/business/useCases';
import { groupCommentsIntoSections } from '@modules/feed/business/helpers';
import { SmileEmojiIcon } from '@modules/feed/mobile/assets/index';

function Component() {
  const navigation = useNavigation();

  const item = navigation.getScreenParams('feed/post').post;
  const heightBar = 90;

  const { data, refetch, fetchNextPage, isLoading, isRefetching } =
    useCommentList();
  const { t } = useTranslation('feedPost');

  const renderHeaderComponent = (
    <YStack mb={'$-2'}>
      <Header>
        <Header.IconBack />
        <Header.Text>{t('post')}</Header.Text>
        <Header.IconRight>
          <EntypoIcon name="dots-three-horizontal" />
        </Header.IconRight>
      </Header>

      <PostItem {...{ item }} />
    </YStack>
  );

  const sections = groupCommentsIntoSections(data.items);

  return (
    <YStack bg={'$contrast'} f={1}>
      <SectionList
        sections={sections}
        refreshing={isRefetching}
        contentContainerStyle={{
          paddingBottom: heightBar,
        }}
        onRefresh={refetch}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        keyExtractor={item => item.comment.id}
        renderItem={props => (
          <XStack ml={'$5'} gap={'$4'}>
            <YStack w={1} h={'100%'} bg={'$white1'} />
            <CommentItem item={props.item} />
          </XStack>
        )}
        renderSectionHeader={({ section }) => (
          <YStack px={'$4'} mb={12}>
            <YStack h={24} w={'100%'} />
            <CommentItem item={section.parent} />
          </YStack>
        )}
        ListFooterComponent={<FooterLoading {...{ isLoading }} />}
        ListHeaderComponent={renderHeaderComponent}
      />

      <XStack w={'100%'} h={heightBar} pos={'absolute'} bottom={0} bg={'$background'}>
        <SendInput>
          <SendInput.Avatar />

          <SendInput.ContainerInput>
            <SendInput.Input
              placeholder={t('inputPlaceholder')}
            />
            <SendInput.ContainerIcons>
              <Button onPress={() => {}}>
                <GiftIcon name="gift" size={18} />
              </Button>
              <Button onPress={() => {}}>
                <SmileEmojiIcon width={18} height={18} />
              </Button>
            </SendInput.ContainerIcons>
          </SendInput.ContainerInput>
          <SendInput.SendButton />
        </SendInput>
      </XStack>
    </YStack>
  );
}

const Post: Screen = {
  name: 'feed/post',
  component: Component,
  isPrivate: true,
};

export default Post;
