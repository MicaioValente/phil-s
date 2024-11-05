import { Button, Text, YStack } from '@dls/components';
import { useNavigation } from '@shared/hooks';

function HomeWallet() {
    const nav = useNavigation()
    return (
        <YStack  f={1} p="$2" backgroundColor={'$background'}>
            <YStack pt={'$it'}>
                <Text color={'$white1'} mb="$4">Wallet</Text>
                <Button borderWidth="$1" w={"$10"} borderRadius={"$5"} textAlign='center' color={'$primary'} borderColor={'$primary'} onPress={() => {
                    nav.goBack()
                    }}>
                    Return
                </Button>
            </YStack>
   
        </YStack>

    );
}

export default HomeWallet;
