import React from 'react';

import { LinearGradientText, YStack } from '@dls/components';
import { useTranslation } from '@shared/hooks';

function HeaderInterests() {
  const { t } = useTranslation('interestsOnboarding');

  return (
    <YStack mt="$it" pt="$3" jc="center">
      <LinearGradientText fos={30} fow="bold">
        {t('title')}
      </LinearGradientText>
    </YStack>
  );
}

export default HeaderInterests;
