import { XStack, Button, Text } from '@dls/components';
import { useTranslation } from '@shared/hooks';

import DocumentIcon from '@modules/chat/mobile/assets/images/document.svg';
import GalleryIcon from '@modules/chat/mobile/assets/images/gallery.svg';
import LocationIcon from '@modules/chat/mobile/assets/images/location.svg';
import ContactIcon from '@modules/chat/mobile/assets/images/contact.svg';
import Transfer from '@modules/chat/mobile/assets/images/transfer.svg';
import type {
  Actions,
  CompositionActionsProps,
} from '@modules/chat/mobile/components/CompositionActions/interfaces';

function CompositionActions({ onPress}: CompositionActionsProps) {
  const { t } = useTranslation('chat');
  const actions = [
    { text: t('document'), icon: <DocumentIcon />, value: 'document' },
    { text: t('gallery'), icon: <GalleryIcon />, value: 'gallery' },
    { text: t('location'), icon: <LocationIcon />, value: 'location' },
    { text: t('contact'), icon: <ContactIcon />, value: 'contact' },
    { text: t('transfer'), icon: <Transfer />, value: 'transfer' },
  ];

  return (
    <XStack ai={'center'} jc={'space-around'} w={'100%'} >
      {actions.map((action, index) => (
        <Button
          ai={'center'}
          jc={'center'}
          key={index}
          flexDirection="column"
        
          onPress={() => onPress(action.value as Actions)}>
          <XStack
            ai={'center'}
            jc={'center'}
            backgroundColor={'$contrast'}
            height={56}
            width={56}
            mt={-3}
            br={8}>
            {action.icon}
          </XStack>
          <Text color={'$white1'} fow={'200'} fos={'$2'} mt={-8}>
            {action.text}
          </Text>
        </Button>
      ))}
    </XStack>
  );
}

export default CompositionActions;
