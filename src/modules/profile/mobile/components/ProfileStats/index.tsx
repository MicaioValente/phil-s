import { useNavigation, useTranslation } from '@shared/hooks';

import { Button, Text, XStack } from '@dls/components';

import { ProfileStatsProps } from '@modules/profile/mobile/components/ProfileStats/interfaces';
import {
  styleDividers,
  styleFollowers,
  styleFollowersSubtext,
} from '@modules/profile/mobile/screens/UserProfile/styles';

function ProfileStats({ data }: ProfileStatsProps) {
  const { t } = useTranslation('profile');

  const navigation = useNavigation();

  const onGoToFollowers = () => {
    navigation.navigate('profile/followers');
  };
  const onGoToFollowing = () => {
    navigation.navigate('profile/following');
  };
  const onGoToSubscribers = () => {
    navigation.navigate('profile/subscribers');
  };

  return (
    <XStack jc={'center'} mb={15}>
      <Button onPress={onGoToFollowers} fd={'row'}>
        <Text {...styleFollowers}>{data.followerCount ?? '0'}</Text>
        <Text {...styleFollowersSubtext}>{t('followers')}</Text>
      </Button>

      <XStack {...styleDividers} />

      <Button onPress={onGoToFollowing} fd={'row'}>
        <Text {...styleFollowers}>{data.followingCount ?? '0'}</Text>
        <Text {...styleFollowersSubtext}>{t('following')}</Text>
      </Button>

      <XStack {...styleDividers} />

      <Button onPress={onGoToSubscribers} fd={'row'}>
        <Text {...styleFollowers}>{data.subscriptionCount ?? '0'}</Text>
        <Text {...styleFollowersSubtext}>{t('Subscribers')}</Text>
      </Button>
    </XStack>
  );
}

export default ProfileStats;
