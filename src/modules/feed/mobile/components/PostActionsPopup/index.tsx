import { Ref, forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur';
import {
  Button,
  Text,
  YStack,
} from '@dls/components';
import { useTranslation } from '@shared/hooks/useTranslation';


import type {
  PostActionsPopupProps,
  PostActionsPopupRef,
} from '@modules/feed/mobile/components/PostActionsPopup/interfaces';

import {
  EditIcon,
  QRCodeIcon,
  TrashIcon,
  styles,
} from '@modules/feed/mobile/components/PostActionsPopup/styles';

const PostActionsPopup = (
  { layout }: PostActionsPopupProps,
  ref: Ref<PostActionsPopupRef>,
) => {
  const { t } = useTranslation('feedHome');
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  if (!visible || !layout) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      style={{ flex: 1, backgroundColor: 'gray' }}>
      <TouchableWithoutFeedback
        onPress={() => setVisible(false)}
        style={styles.blur}>
        <BlurView
          style={styles.blur}
          intensity={10}
          tint="dark"
          experimentalBlurMethod="dimezisBlurView">
          <YStack
            pos={'absolute'}
            t={layout.y + layout.height}
            l={layout.x - 200}
            bg={'$background'}
            br={'$2'}
            w={200}>
            <Button
              fd={'row'}
              ai={'center'}
              jc={'space-between'}
              px={'$3'}
              py={'$2'}
              borderBottomWidth={1}
              borderBottomColor={'$border'}>
              <Text col={'$text'} fos={'$3'} fow={'bold'}>
                {t('edit')}
              </Text>
              <EditIcon name="square-edit-outline" size={24} />
            </Button>

            <Button
              fd={'row'}
              ai={'center'}
              jc={'space-between'}
              px={'$3'}
              py={'$2'}
              borderBottomWidth={1}
              borderBottomColor={'$border'}>
              <Text col={'$text'} fos={'$3'} fow={'bold'}>
                {t('qrCode')}
              </Text>
              <QRCodeIcon name="qrcode" size={24} />
            </Button>

            <Button
              fd={'row'}
              ai={'center'}
              jc={'space-between'}
              px={'$3'}
              py={'$2'}>
              <Text col={'$text'} fos={'$3'} fow={'bold'}>
                {t('delete')}
              </Text>
              <TrashIcon name="trash-can-outline" size={24} />
            </Button>
          </YStack>
        </BlurView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default forwardRef(PostActionsPopup);
