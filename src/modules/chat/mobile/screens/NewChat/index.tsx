import { LayoutChangeEvent, SectionList } from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  ContactItem,
  DividerContacts,
  SearchInput,
  FooterNewChat,
} from '@modules/chat/mobile/components';
import { Button, Text, XStack, YStack } from '@dls/components';


import { ArrowLeft } from '@modules/chat/mobile/screens/NewChat/styles';
import { useNavigation, useTranslation } from '@shared/hooks';
import { showToast } from '@dls/stores';
import CloseIcon from "@modules/chat/mobile/assets/images/close.svg";


const inboxUsers = [
  {
    name: 'Alice Johnson',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    type: 'Phillap',
    invited: false,
  },
  {
    name: 'Bob Smith',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    type: 'Phillap',
    invited: false,
  },
  {
    name: 'Charlie Davis',

    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    type: 'Phillap',
    invited: false,
  },
  {
    name: 'Diana Evans',

    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    type: 'Phone',
    invited: false,
  },
  {
    name: 'Emily Martinez',

    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    type: 'Phone',
    invited: false,
  },
  {
    name: 'Frank Wilson',

    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    type: 'Phone',
    invited: false,
  },
  {
    name: 'Grace Lee',

    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    type: 'Phone',
    invited: true,
  },
  {
    name: 'Hannah Brown',

    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    type: 'Phone',
    invited: false,
  },
  {
    name: 'Ian Miller',

    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    type: 'Phillap',
    invited: true,
  },
  {
    name: 'Julia Taylor',

    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    type: 'Phillap',
    invited: false,
  },
  {
    name: 'Julia Taylor',

    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    type: 'Phillap',
    invited: false,
  },
  {
    name: 'Julia Taylor',

    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    type: 'Phillap',
    invited: false,
  },
  {
    name: 'Julia Taylor',

    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    type: 'Phillap',
    invited: false,
  },
  {
    name: 'Julia Taylor',

    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    type: 'Phillap',
    invited: false,
  },
  {
    name: 'Julia Taylor',

    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    type: 'Phillap',
    invited: false,
  },
  {
    name: 'Julia Taylor',

    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    type: 'Phillap',
    invited: false,
  },
];

function NewChat() {

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const { t } = useTranslation('newChat');

  const [buttonWidth, setButtonWidth] = useState(0);

  const usersPhillap = inboxUsers.filter(user => user.type === 'Phillap');
  const usersPhone = inboxUsers.filter(user => user.type === 'Phone');
  const sections = [];

  if (usersPhillap.length) {
    sections.push({
      title: 'phillap',
      data: usersPhillap,
    });
  }

  if (usersPhone.length) {
    sections.push({
      title: 'phone',
      data: usersPhone,
    });
  }

  const handleBack = () => {
    navigation.goBack();
  };

  const pressPlus = () => {
    showToast({ message: 'Pressionou em plus', title: 'Plus' });
  };
  
  const handleButtonLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setButtonWidth(width);
  };


  const renderHeaderList = (
    <YStack ai={'flex-start'} mt={'$2'} px={22}>
      <SearchInput my={'$3'} onSearch={() => {}} />
    </YStack>
  );

  const renderHeader = (
    <XStack
      w={'100%'}
      pt={'$it'}
      height={80}
      bg={'$background'}
      jc={'flex-end'}
      px={'$3'}
      pb={'$1'}>
      <XStack jc={'space-between'} width={'100%'} ai={'center'}>
        <Button onPress={handleBack} onLayout={handleButtonLayout}>
          <ArrowLeft name="arrowleft" size={28} />
        </Button>
        <Text
          color={'$white1'}
          fontSize={'$6'}
          fontWeight={'bold'}
          ml={buttonWidth}
          textAlign="center">
          {t('newChat')}
        </Text>

        <Button onPress={pressPlus}>
          <CloseIcon />
        </Button>
      </XStack>
    </XStack>
  )

  return (
    <YStack bg={'$contrast'} fullscreen>
      {renderHeader}

      <YStack w={'100%'} h={'100%'} backgroundColor={'#454545'}>
        <SectionList
          sections={sections}
          ListHeaderComponent={renderHeaderList}
          renderSectionHeader={({ section: { title } }) => (
            <DividerContacts type={title as 'phillap' | 'phone'} px={22} />
          )}
          renderSectionFooter={({ section }) => (
            <FooterNewChat type={section.title} />
          )}
          renderItem={({ item }) => <ContactItem data={item} px={22} />}
          contentContainerStyle={{
            backgroundColor: '#454545',
            paddingBottom: 80 + insets.bottom,
          }}
        />
      </YStack>
    </YStack>
  );
}

export default {
  name: 'chat/newChat',
  component: NewChat,
  isPrivate: true,
};
