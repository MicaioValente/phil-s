import { If, Image, XStack } from '@dls/components';
import VerifiedIcon from '@modules/profile/mobile/assets/VerifiedIcon.png';
import VerifiedIconCheck from '@modules/profile/mobile/assets/VerifiedIconCheck.png';
import type { VerifiedProfileProps } from '@modules/profile/mobile/components/VerifiedProfile/interfaces';

function VerifiedProfile({
  isVisibleIconCheck,
  isVerified,
}: VerifiedProfileProps) {
  return (
    <If condition={isVerified}>
      <XStack ai={'center'}>
        <Image source={VerifiedIcon} w={24} h={24} marginLeft={5} />
        <If condition={isVisibleIconCheck}>
          <Image source={VerifiedIconCheck} w={17} h={17} marginLeft={5} />
        </If>
      </XStack>
    </If>
  );
}

export default VerifiedProfile;
