import { Button, If, LinearGradientText, Text } from '@dls/components';
import { ProfileLinksProps } from '@modules/profile/mobile/components/ProfileLinks/interfaces';
import Linking from '@core/linking';

function ProfileLinks({ links }: ProfileLinksProps) {
  const onGoToLink = async (link: string) => {
    await Linking.openUrl(link);
  };

  return (
    <If condition={!!links}>
      {links?.map((link, index) => (
        <Button
          als={'center'}
          onPress={() => onGoToLink(link)}
          mb="$2"
          key={index}>
          <LinearGradientText numberOfLines={1}>
            <Text fos={14} numberOfLines={2}>
              {link}
            </Text>
          </LinearGradientText>
        </Button>
      ))}
    </If>
  );
}

export default ProfileLinks;
