import { Button, If, LinearGradient, ProtectedImage, Text, YStack } from '@dls/components'
import { useNavigation, useTranslation } from '@shared/hooks'
import React, { useCallback, useMemo, useState } from 'react'
import { CardSuggestionsProps } from './interfaces'
import { BtnCardContainer, styleAvatar, styleWallpaper } from '@modules/feed/mobile/components/CardSuggestionsFollowing/styles'
import { useFollow } from '@modules/profile/business/useCases/useFollow'
import { FontAwesome } from '@expo/vector-icons';

const CardSuggestionsFollowing = (item: CardSuggestionsProps) => {
    const { id, avatarUrl, wallpaperUrl, firstName, lastName } = item
    const nav = useNavigation()
    const { t } = useTranslation('feedSuggestions')
    const [following, setFollowing] = useState<boolean>(item.following || false)
    const followCase = useFollow()

    const opacity = followCase.isLoading ? 0.5 : 1
    const BtnText = useMemo( () => 
        <Text fontSize={14} textAlign="center" color={"$white1"} fontWeight={'bold'} opacity={opacity}>
            {t(following ? 'btnFollowing': 'btnFollow')}
        </Text>
        ,[following, followCase.isLoading])

    const followUser = useCallback( async () => {
        const res = await followCase.mutateAsync({ followedUserId: id, typeRequest: !following ? 'FOLLOW' : 'UNFOLLOW' })
        setFollowing(res?.typeRequest === 'FOLLOW')
    }, [item, following])

    const goProfile = () =>  nav.navigate('profile/user', { userId: id })

    return (
        <Button 
            backgroundColor={"#454545"} 
            p={5} pb={'$3'} borderRadius={'$4'}  
            {...BtnCardContainer}
            {...item?.styleContainer} 
            disabled={followCase.isLoading} 
            onPress={goProfile} 
        >
            <YStack  
                fd={'column'} 
                
                borderRadius={'$4'} 
                alignContent='center'
                justifyContent='center'
                alignItems='center'                
            >
                <If condition={!!wallpaperUrl}
                    elseRender={
                        <LinearGradient 
                            {...styleWallpaper}
                            colors={['$secondary', '$primary']}
                        />
                    }
                >
                    <ProtectedImage uri={wallpaperUrl} {...styleWallpaper} />
                </If>

                <YStack w={'100%'} alignItems='center' px={"$1"}>
                    <If condition={!!avatarUrl}
                        elseRender={<YStack {...styleAvatar} {...item?.styleImage} ><FontAwesome name='user-circle' size={56} /></YStack>}
                    >
                        <ProtectedImage   uri={avatarUrl} {...styleAvatar} {...item?.styleImage as any} />
                    </If>

                    <Text fontSize={14} textAlign="center" color={"$white1"} fontWeight={'bold'} mb={'$4'} mt={'$2'} numberOfLines={1}>{`${firstName} ${lastName}`}</Text>

                    <Button onPress={ () => followUser()} jc={'center'} zIndex={1} w={'90%'} height={40} borderRadius={'$4'} borderWidth={!following ? 1 : 0} borderColor={"$white1"} disabled={followCase.isLoading} {...item?.styleBtn} >
                        <If
                            condition={following}
                            elseRender={(BtnText)}
                        >
                            <LinearGradient
                                opacity={opacity}
                                colors={['$secondary', '$primary']}
                                w="100%"
                                h="100%"
                                jc="center"
                                ai="center"
                                start={[0, 1]}
                                br={item?.styleBtn?.borderRadius ? item?.styleBtn?.borderRadius : '$4'}
                                end={[0, 0]}
                            >
                                {BtnText}
                            </LinearGradient>
                        </If>
                    </Button>
                </YStack>
            </YStack>
        </Button>
    )
}

export default CardSuggestionsFollowing