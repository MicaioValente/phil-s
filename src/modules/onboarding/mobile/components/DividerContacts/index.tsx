import { Text, If } from '@dls/components';
import { useTranslation } from '@shared/hooks';
import type { DividerContactsProps } from '@modules/onboarding/mobile/components/DividerContacts/interfaces';

function DividerContacts({ type, ...props }: DividerContactsProps) {
  const { t } = useTranslation('friendsListOnboarding');

  return (
    <If
      condition={type == 'phillap'}
      elseRender={
        <Text color={'$gray'} fos={'$5'} mb={'$1'} {...props}>
          {t('phoneContacts')}
        </Text>
      }>
      <Text color={'$gray'} fos={'$5'} {...props}>
        {t('contactsFromPhillap')}
      </Text>
    </If>
  );
}

export default DividerContacts;
