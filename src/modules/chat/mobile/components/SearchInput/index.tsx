import { useState } from 'react';

import {
  XStack,
  Button,
  Input,
} from '@dls/components';
import { useTranslation } from '@shared/hooks';
import { Search } from '@modules/chat/mobile/components/SearchInput/styles';
import { showToast } from '@dls/stores';

import type { SearchInputProps } from '@modules/chat/mobile/components/SearchInput/interfaces';

function SearchInput({onSearch, ...props }: SearchInputProps) {
  const { t } = useTranslation('inbox');
  const [value, setValue] = useState('');

  const handleSearch = () => {
    onSearch(value);
    showToast({ message: 'Pressionou em pesquisar', title: 'Pesquisar' });
  };

  return (
    <XStack
      w={'100%'}
      height={48}
      backgroundColor={'$background'}
      ai={'center'}
      jc={'center'}
      px={'$4'}
      {...props}
      br={'$8'}>
      <Button onPress={handleSearch}>
        <Search name="search1" size={24} />
      </Button>
      <Input
        placeholder={t('search')}
        value={value}
        onChangeText={setValue}
        height={'95%'}
        w={'100%'}
        ml={'$2'}
        onSubmitEditing={handleSearch}
      />
    </XStack>
  );
}

export default SearchInput;
