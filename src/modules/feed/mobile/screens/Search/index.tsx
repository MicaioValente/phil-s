import { If, Input, Spinner, YStack } from '@dls/components'
import React, { useCallback, useEffect, useState } from 'react'
import SimpleHeader from '@modules/feed/mobile/components/SimpleHeader'
import { useTranslation } from '@shared/hooks'
import { FlatList } from 'react-native'
import { useSearchList } from '@modules/feed/business/useCases/useSearchList'
import { ImageSearch, SearchIcon, Styles } from '@modules/feed/mobile/screens/Search/styles'
import { StandartIcon } from '@modules/feed/mobile/assets'

const Search = () => {
    const { t } = useTranslation('feedSearch')
    const [searchValue, setSearchValue] = useState('');
    let typingTimeout: any = null
    const { data: { items }, fetchNextPage, isLoading, isRefetching, refetch } = useSearchList({ search: searchValue });

    const changeText = useCallback((text: string) => {
        if (typingTimeout) clearTimeout(typingTimeout);
        typingTimeout = setTimeout( () => text != searchValue && setSearchValue(text), 1000)
    }, []);

    useEffect(() => {
        !isLoading && refetch()
    },[searchValue])

    return (
        <YStack f={1} backgroundColor={"#252525"}>
            <YStack pt={'$it'} px={"$3"}  fd={'column'} width={'100%'} height={'100%'}>
                <YStack px={"$4"} mb={"$5"}>
                    <SimpleHeader title={t('title')} />
                    <YStack h={44}  >
                        <Input 
                            backgroundColor={'#3E3E3E'} borderRadius={100} pl="$7" pr="$11" h={'100%'}
                            placeholder={t('placeholder')}
                            onChangeText={changeText}
                        />
                        <YStack fd={"row"} position='absolute' bottom={12} left={'$3'} alignItems='center'>
                            <SearchIcon name='search' size={20} />
                        </YStack>
                    </YStack>
                </YStack>

                <FlatList 
                    style={{ height: '100%' }}

                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    data={[...items, ...items]}

                    refreshing={isRefetching}
                    onRefresh={refetch}
                    onEndReached={fetchNextPage}
                    onEndReachedThreshold={0.1}
                    keyExtractor={ (data, index) => `item${index}` }
                    renderItem={ ({ item }) => (
                        <YStack w={'32.5%'} borderRadius={'$4'} m={'$1'}>
                            <ImageSearch source={{ uri: item.url }} resizeMode='cover' />
                            <If condition={item.type === 'VIDEO'}>
                                <StandartIcon size={13} style={Styles.standartIcon} />
                            </If>
                        </YStack>
                    )}
                    ListFooterComponent={(
                        <If condition={isLoading}>
                            <YStack>
                                <Spinner color={'$secondary'} size='large'/>
                            </YStack>
                        </If>
                    )}
                />
            </YStack>
        </YStack>
    )
}

export default Search