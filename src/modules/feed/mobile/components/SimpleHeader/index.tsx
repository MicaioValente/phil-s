import React from 'react'

import { Button, If, Text, YStack } from '@dls/components'
import { useNavigation } from '@shared/hooks'
import { AntDesignIcon } from '@modules/feed/mobile/components/SimpleHeader/styles'
import type { SimpleHeaderProps } from '@modules/feed/mobile/components/SimpleHeader/interfaces'

function SimpleHeader({ title,
    colorText = "$white1",
    styleContainer,
    goBack,
    children}: SimpleHeaderProps) {
    const nav = useNavigation()
    const onPress = () => goBack ? goBack() : nav.goBack()

    return (
        <YStack fd={"row"} pb="$4" alignItems='center' justifyContent='center' {...styleContainer} zIndex={1}>
            
            <Button hitSlop={8} onPress={onPress} pos={'absolute'} left={'$0'} top={0} zIndex={2}>
              <AntDesignIcon name='arrowleft'  size={24} />
            </Button>
            
            <If
                condition={!!title}
            >
                <Text fontSize={18} textAlign="center" color={colorText} fontWeight={'bold'}>{title}</Text>
            </If>

            {children}
        </YStack>
    )
}

export default SimpleHeader