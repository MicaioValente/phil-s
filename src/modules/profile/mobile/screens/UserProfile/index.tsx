import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList } from 'react-native';

import {
  Button,
  If,
  Image,
  LinearGradientText,
  Spinner,
  Text,
  XStack,
  YStack,
} from '@dls/components';
import {
  Actions,
  Header,
  ProfileContactMethods,
  ProfileLinks,
  ProfileMenu,
  ProfileStats,
  SubscribeAlert,
  VerifiedProfile,
} from '@modules/profile/mobile/components';
import { useNavigation, useTranslation } from '@shared/hooks';
import { showBottomSheet } from '@dls/components/BottomSheet/methods';
import { Screen } from '@core/navigation/interfaces';
import { useGetOtherUser } from '@modules/profile/business/useCases';
import { useFollow } from '@modules/profile/business/useCases/useFollow';
import { useHightlightList } from '@modules/profile/business/useCases/useHightlightList';
import { useSuggestionsList } from '@modules/feed/business/useCases';
import { CardSuggestionsFollowing } from '@modules/feed/mobile/components';
import { useSearchList } from '@modules/feed/business/useCases/useSearchList';
import { ImageSearch } from '@modules/feed/mobile/screens/Search/styles';

function Component() {
  const { t } = useTranslation('profile');
  const navigation = useNavigation();
  const profileUserParams = navigation.getScreenParams('profile/user');

  const options = [
    { id: 2, name: t('optionsRender.media') },
    { id: 1, name: t('optionsRender.causes') },
  ];
  const [optionSelected, setOptionSelected] = useState(options[0]);
  const { data, isLoading, refetch } = useGetOtherUser();
  const {
    data: { items: dataHightlight },
  } = useHightlightList();
  const dataSuggestions = useSuggestionsList();

  //change later to media and causes - currently it is mock
  const dataSearch = useSearchList({ search: '' });

  const setFollow = useFollow();

  const [user, setUser] = useState<UserOtherProfileModel>();
  const isSubscribe = useMemo(() => data.isSubscribe, [data]);

  const onGoBack = () => {
    navigation.goBack();
  };

  const openDm = () => {
    showBottomSheet({
      isBlur: true,
      component: <ProfileContactMethods {...{ data }} />,
    });
  };

  const openAlert = () => {
    showBottomSheet({
      isBlur: true,
      component: <SubscribeAlert {...{ data }} />,
    });
  };

  const pressBtnFollow = useCallback(async () => {
    try {
      const e = await setFollow.mutateAsync({
        followedUserId: data.id as string,
        typeRequest: user?.isFollowing ? 'UNFOLLOW' : 'FOLLOW',
      });

      const typeFollow = e?.typeRequest === 'FOLLOW';
      const followerCount = user?.followerCount as number;

      setUser({
        ...user,
        followerCount: typeFollow ? followerCount + 1 : followerCount - 1,
        isFollowing: typeFollow,
      } as UserOtherProfileModel);
    } catch (error) {}
  }, [user?.isFollowing]);

  function openSelect() {
    showBottomSheet({
      isBlur: true,
      component: <ProfileMenu />,
    });
  }

  useEffect(() => {
    if (data?.id && data?.id != user?.id) setUser(data);
  }, [data]);

  if (isLoading || user?.id === undefined) {
    return (
      <YStack fullscreen bg={'$background'} pt={'$it'}>
        <Spinner size="large" />
      </YStack>
    );
  }

  return (
    <YStack fullscreen bg={'$background'}>
      <Header>
        <Header.Wallpaper url={data.wallpaperUrl} isProtectedImage />
        <Header.Top>
          <Header.IconBack onPress={onGoBack} />
          <Header.IconGrid onPress={openAlert} />
        </Header.Top>

        <Header.Bottom>
          <Header.Tag />
          <Header.IconDotsHorizontal onPress={openSelect} />
        </Header.Bottom>

        <Header.Container>
          <Header.Avatar url={data.avatarUrl} isProtectedImage />
        </Header.Container>
      </Header>

      <XStack jc={'center'} ai={'center'} mb={5} mt={'$10'} px={30}> 
        <Text
          numberOfLines={2}
          col={'$white1'}
          fos={20}
          fow={'bold'}
          textAlign="center">
          {data?.firstName} {data?.lastName}
        </Text>

        <VerifiedProfile isVerified={true} isVisibleIconCheck={false} />
      </XStack>

      <YStack px={30} mb={5}>
        <Text numberOfLines={3} col={'$white1'} fos={'$2'} textAlign="center">
          {data?.biography}
        </Text>
      </YStack>

      <XStack gap={'$2'} ai={'center'} jc={'center'} px={30}>
        <ProfileLinks links={data?.links ?? []} />
      </XStack>

      <ProfileStats {...{ data }} />

      <Actions>
        <Actions.SmallLeftButton type="add" />
        <Actions.SmallRightButton type="email" onPress={openDm} />
        <Actions.MediumLeftButton
          type="subscribe"
          isLinearGradientEnable={isSubscribe}
        />
        <Actions.MediumRightButton
          type="following"
          isLinearGradientEnable={user?.isFollowing ?? false}
          onPress={pressBtnFollow}
          opacity={setFollow.isLoading ? 0.5 : 1}
          loading={setFollow.isLoading || isLoading}
          disabled={setFollow.isLoading || isLoading}
        />
      </Actions>

      <YStack px={'$3'} pb={'$2'} pt={'$2'}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          onEndReached={dataSuggestions.fetchNextPage}
          onEndReachedThreshold={0.1}
          horizontal={true}
          data={dataSuggestions?.data?.items?.filter(
            i => i.id != profileUserParams.userId,
          )}
          renderItem={({ item }) => (
            <CardSuggestionsFollowing
              styleContainer={{
                maxWidth: '100%',
                w: 120,
                mb: 0,
                p: 0,
                backgroundColor: '#181818',
              }}
              styleImage={{
                w: 54,
                h: 54,
                borderWidth: 1,
                borderColor: '$white1',
              }}
              styleBtn={{ h: 23, borderRadius: 5, w: '70%' }}
              {...item}
            />
          )}
          ListFooterComponent={
            <If condition={isLoading}>
              <YStack>
                <Spinner color={'$secondary'} size="large" />
              </YStack>
            </If>
          }
        />
      </YStack>

      <YStack w={'100%'} h={1} backgroundColor={'#181818'} mb={'$3'} />

      <YStack px={'$4'} mb={'$2'}>
        <FlatList
          data={dataHightlight}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <Button
              p={1}
              w={45}
              h={45}
              borderRadius={45}
              mr={'$4'}
              backgroundColor={'$white1'}>
              <Image
                source={{ uri: item.image }}
                w={'100%'}
                h={'100%'}
                borderRadius={45}
              />
            </Button>
          )}
        />
      </YStack>

      <YStack width={'100%'} fd={'row'} ai={'center'} pt={'$2'}>
        {options.map((option, index) => (
          <Button
            f={1}
            textAlign="center"
            jc={'center'}
            backgroundColor={'#181818'}
            color={'$gray1'}
            key={`optino${index}`}
            py={'$2'}
            onPress={() => setOptionSelected(option)}>
            <If
              condition={option.id == optionSelected.id}
              elseRender={
                <Text color={'$gray1'} textAlign="center" fontSize={16}>
                  {option.name}
                </Text>
              }>
              <LinearGradientText textAlign="center" fontSize={16}>
                {option.name}
              </LinearGradientText>
            </If>
          </Button>
        ))}
      </YStack>

      <YStack f={1} backgroundColor={'#454545'}>
        <FlatList
          style={{ height: '100%', marginTop: 10 }}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={dataSearch.data?.items}
          onEndReached={dataSearch.fetchNextPage}
          onEndReachedThreshold={0.1}
          keyExtractor={(data, index) => `item-${optionSelected.name}-${index}`}
          renderItem={({ item }) => (
            <YStack w={'32.5%'} borderRadius={'$4'} m={'$1'}>
              <ImageSearch source={{ uri: item.url }} resizeMode="cover" />
            </YStack>
          )}
          ListFooterComponent={
            <If condition={dataSearch.isLoading}>
              <YStack>
                <Spinner color={'$secondary'} size="large" />
              </YStack>
            </If>
          }
        />
      </YStack>

      <XStack w={'100%'} height={60}></XStack>
    </YStack>
  );
}

const UserProfile: Screen = {
  component: Component,
  name: 'profile/user',
  isPrivate: true,
};

export default UserProfile;
