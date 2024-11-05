import { Button, If, LinearGradient, Text } from '@dls/components';
import { STORY_FEED_PROPS } from './interfaces';
import Image from '@dls/components/Image';
import { AddIcon } from '../../assets';
import { YStack } from 'tamagui';

const StoryButton: React.FC<STORY_FEED_PROPS> = ({ onPress, image, text, addIcon = false, hasStory = false }) =>  {
    const colorsBorder =  hasStory ? ['$secondary', '$primary'] : ['$white1', '$white1']
    return (
        <Button onPress={onPress} mr="$4" w={60} zIndex={0}>
            <>
                <LinearGradient
                    colors={colorsBorder}
                    w={54.88}
                    h={54.88}
                    br={60}
                    p={'$1'}
                >
                    <Image 
                        src={image}
                        w={'100%'}
                        h={'100%'}
                        br={60}
                        borderColor="$white1"
                        
                    />
                </LinearGradient>
            
                <If condition={addIcon}>
                    <YStack position="absolute" bottom={20} right={3} zIndex={2}>
                        <AddIcon />
                    </YStack>
                </If>
            </>            
            <Text fontSize="$1" color="$white1" mt="$1" textAlign='center' fontWeight={'bold'} numberOfLines={1} opacity={hasStory ? 1 : 0.5}>{text}</Text>
        </Button>            
    )
};

export default StoryButton;