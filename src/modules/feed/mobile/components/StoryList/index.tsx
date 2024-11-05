import { If, Text, XStack } from '@dls/components';
import { useTranslation } from '@shared/hooks/useTranslation';
import { FlashList } from '@shopify/flash-list';
import StoryButton from '@modules/feed/mobile/components/StoryButton';
import { selectStory } from '@modules/feed/business/stores/useStories/methods';
import { useStoryList } from '@modules/feed/business/useCases';
import { useNavigation } from '@shared/hooks';

export function StoryList() {
  const { t } = useTranslation('feedHome');
  const nav = useNavigation();
  const { data } = useStoryList();

  const checkStoryToSee = (item: StoryItemModel): boolean => {
    return item.story.some(s => !s.seen);
  };

  const pressStory = (item: StoryItemModel) => {
    if (item.personId == '1') return nav.navigate('feed/createStory');

    selectStory(item);
  };

  return (
    <XStack w={'100%'} h={100} bg={'$background'} px="$3" py="$3">
      <If condition={!!data.items.length}>
        <FlashList
          data={data.items}
          horizontal
          estimatedItemSize={100}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text>No products found</Text>}
          renderItem={({ item }) => (
            <StoryButton
              image={item.image}
              text={item.person}
              onPress={() => pressStory(item)}
              addIcon={item.personId == '1'}
              hasStory={checkStoryToSee(item)}
            />
          )}
        />
      </If>
    </XStack>
  );
}

export default StoryList;
