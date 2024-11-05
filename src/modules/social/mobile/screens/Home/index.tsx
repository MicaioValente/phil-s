import { Screen } from '@core/navigation/interfaces';
import { Button, Text, YStack } from '@dls/components';
import { useSignOut } from '@modules/account/business/useCases';
import { SafeAreaView } from 'react-native';

function Component() {
  const singout = useSignOut();

  return (
    <SafeAreaView>
      <YStack p="$2">
        <Text mb="$4">Home</Text>
        <Button
          borderWidth="$1"
          w={'$10'}
          borderRadius={'$5'}
          textAlign="center"
          onPress={() => singout.mutate()}>
          Logout
        </Button>
      </YStack>
    </SafeAreaView>
  );
}

const Home: Screen = {
  name: 'social/home',
  component: Component,
  isPrivate: true,
};

export default Home;
