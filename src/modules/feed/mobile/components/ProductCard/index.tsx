import { If, LinearGradient, LinearGradientText, Text, YStack } from '@dls/components';
import { CARD_PRODUCTS_PROPS } from './interfaces';
import { useTranslation } from '@shared/hooks';
import { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

const CardProduct: React.FC<CARD_PRODUCTS_PROPS> = ({
    name,
    logo,
    onPress,
    avaliable,
    id,
    link
}) =>  {
    const { t } = useTranslation('feedHome')

    const onPressCard = useCallback(() => {
        if(!onPress) return
        onPress({  name, logo, avaliable, id, link })
    }, [])
    
    return (
        <TouchableOpacity onPress={onPressCard} disabled={false}>
            <YStack fd={'row'} jc={'space-between'} alignItems={'center'} backgroundColor={"#242424"} h={74} borderRadius={'$4'} p={9} elevation={2} mb="$3">
                <YStack fd={'row'} alignItems={'center'}>
                    <YStack  backgroundColor={'$white1'} borderRadius={'$4'} w={59} height={59} alignItems='center' justifyContent='center'>
                        {logo}
                    </YStack>
                    
                    <YStack justifyContent='flex-start' ml={'$4'}>
                        <Text color={"$white1"} fontWeight={'bold'} fontSize={15} mb="$2">{name}</Text>
                        <LinearGradient  
                            borderRadius="$2" px="$2" 
                            colors={['$secondary', '$primary']}
                            start={[0, 0]}
                            end={[1, 1]}
                        >
                            <Text color={"$white1"} fontSize={12} textAlign='center'>{t(`productsDescriptions.${id}` as any)}</Text>
                        </LinearGradient>
                    </YStack>
                </YStack>
                
                <If 
                    condition={avaliable}
                    elseRender={
                        (
                            <YStack borderRadius={'$4'} backgroundColor={"#181818"} borderWidth={1} borderColor={'$white1'} px={4}  mr={"$2"}>
                                <Text fontSize={10} fontWeight={'bold'} textAlign='center' mb={'$1'} color={'$white1'}>{t('productActionBtn.notAvaliable')}</Text>
                            </YStack>
                        )
                    }
                >
                    <LinearGradient colors={['$primary','$secondary']} w={58} borderRadius={'$4'} style={{ padding: 1 }}  mr={"$2"}>
                        <YStack borderRadius={'$4'} backgroundColor={"#181818"} >
                            <LinearGradientText fontSize={10} fontWeight={'bold'} textAlign='center' mb={'$1'}>{t('productActionBtn.avaliable')}</LinearGradientText>
                        </YStack>
                    </LinearGradient>
                </If>
            </YStack>
        </TouchableOpacity>
    )
};

export default CardProduct;