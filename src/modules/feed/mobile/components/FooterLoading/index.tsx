import { If, Spinner, XStack } from '@dls/components';

import { FooterLoadingProps } from '@modules/feed/mobile/components/FooterLoading/interfaces';

export function FooterLoading({ isLoading }: FooterLoadingProps) {
  return (
    <If condition={isLoading}>
      <XStack jc={'center'} ai={'center'} height={80}>
        <Spinner color={'$secondary'} size='large'/>
      </XStack>
    </If>
  );
}

export default FooterLoading;
