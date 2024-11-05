import type { UserListProps } from '@modules/profile/mobile/components/UserList/interfaces';
import {
  Button,
  If,
  LinearGradient,
  ProtectedImage,
  Text,
  XStack,
  YStack,
} from '@dls/components';
import { EmptyProfileIcon, styles } from './styles';
function UserList({
  user,
  HideActionButton,
  buttonActive,
  buttonText,
  onPressActionButton,
  onPressName,
  onPressProfilePic,
}: UserListProps) {
  return (
    <XStack w={'$100%'} ai={'center'} gap={'$2'}>
      <YStack
        w={'$2.5'}
        h={'$2.5'}
        bg={'#666666'}
        br="$8"
        jc="center"
        ai="center"
        onPress={onPressProfilePic}>
        <If
          condition={!!user?.profilePic}
          elseRender={<EmptyProfileIcon name="user" size={15} />}>
          <ProtectedImage
            style={styles.perfilImage}
            uri={user?.profilePic as string}
          />
        </If>
      </YStack>
      <Text col={'$text'} fos={'$4'} numberOfLines={1} onPress={onPressName}>
        {user?.name}
      </Text>
      <If condition={!HideActionButton}>
        <Button ml={'auto'} h="$4" onPress={onPressActionButton}>
          <If
            condition={!!buttonActive}
            elseRender={
              <YStack
                h={'$2.5'}
                miw={'$8'}
                px={'$2'}
                bg={'#666666'}
                justifyContent="center"
                alignItems="center"
                borderRadius={'$3'}>
                <Text
                  col={'$black'}
                  fos={'$3.5'}
                  fow={'bold'}
                  numberOfLines={1}>
                  {buttonText}
                </Text>
              </YStack>
            }>
            <LinearGradient
              colors={['$secondary', '$primary']}
              h={'$2.5'}
              miw={'$8'}
              px={'$2'}
              borderRadius={'$3'}
              justifyContent="center"
              alignItems="center"
              start={[0, 1]}
              end={[0, 0]}>
              <Text col={'$text'} fos={'$3.5'} fow={'bold'} numberOfLines={1}>
                {buttonText}
              </Text>
            </LinearGradient>
          </If>
        </Button>
      </If>
    </XStack>
  );
}

export default UserList;
