import { Text, If } from '@dls/components';
import { useTranslation } from '@shared/hooks';
import type { DividerContactsProps } from '@modules/chat/mobile/components/DividerContacts/interfaces';

function DividerContacts({ type, ...props }: DividerContactsProps) {
  const { t } = useTranslation('newChat');

  return (
    <If
      condition={type == 'phillap'}
      elseRender={
        <Text color={'#666666'} fos={'$5'} mb={'$1'} {...props}>
          {t('phoneContacts')}
        </Text>
      }>
      <Text color={'#666666'} fos={'$5'} {...props}>
        {t('contactsFromPhillap')}
      </Text>
    </If>
  );
}

export default DividerContacts;
