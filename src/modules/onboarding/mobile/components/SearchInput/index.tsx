import { XStack, Button, Input } from '@dls/components';
import { useTranslation } from '@shared/hooks';
import { Search } from '@modules/onboarding/mobile/components/SearchInput/styles';

import type { SearchInputProps } from '@modules/onboarding/mobile/components/SearchInput/interfaces';

function SearchInput({
  onSearch,
  onChangeText,
  value,
  ...props
}: SearchInputProps) {
  const { t } = useTranslation('inbox');

  return (
    <XStack
      w={'100%'}
      height={48}
      bg={'$contrast'}
      ai={'center'}
      jc={'center'}
      px={'$4'}
      {...props}
      br={'$8'}>
      <Button onPress={onSearch}>
        <Search name="search1" size={24} />
      </Button>
      <Input
        placeholder={t('search')}
        value={value}
        onChangeText={onChangeText}
        height={'95%'}
        w={'100%'}
        ml={'$2'}
        onSubmitEditing={onSearch}
      />
    </XStack>
  );
}

export default SearchInput;
