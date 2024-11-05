import { AntDesign } from '@expo/vector-icons';
import {
  CopyIcon,
  EmptyProfileIcon,
  EmptyWallpaperIcon,
  EntypoWhite,
  PenIcon,
  profileStyle,
} from '@modules/profile/mobile/components/ProfileHeader/styles';
import {
  Button,
  If,
  Image,
  LinearGradient,
  ProtectedImage,
  Text,
  YStack,
} from '@dls/components';

import { GridIcon } from '@modules/profile/mobile/assets';
import type {
  IconProps,
  PositionProps,
  ImageComponentProps,
  HeaderComponent,
  ContainerComponent,
  EditIconProps,
} from '@modules/profile/mobile/components/ProfileHeader/interfaces';
import ImagePicker from '@core/ImagePicker';
import React, { Fragment } from 'react';

const Header: HeaderComponent = props => {
  const { children, ...rest } = props;
  return (
    <YStack
      zIndex={0}
      w={'100%'}
      h={192}
      bblr={'$10'}
      bbrr={'$10'}
      bg={'$contrast'}
      position="relative"
      {...rest}>
      {children}
    </YStack>
  );
};

const Top: React.FC<PositionProps> = ({ children }) => {
  return (
    <YStack
      elevation={2}
      position="absolute"
      top="$it"
      mt="$2"
      w={'100%'}
      h={40}
      jc={'center'}>
      {children}
    </YStack>
  );
};

const Bottom: React.FC<PositionProps> = ({ children }) => {
  return (
    <YStack position="absolute" bottom="$4" w={'100%'} h={30} elevation={2}>
      {children}
    </YStack>
  );
};

const IconBack: React.FC<IconProps> = ({ ...rest }) => {
  return (
    <Button {...rest} hitSlop={8} mt="$2" left="$4" pos={'absolute'} elevation={2}>
      <AntDesign name="arrowleft" size={24} color="white" />
    </Button>
  );
};

const IconGrid: React.FC<IconProps> = ({ ...rest }) => {
  return (
    <Button {...rest} hitSlop={8} position="absolute" right="$5" elevation={2}>
      <GridIcon />
    </Button>
  );
};

const IconMenu: React.FC<IconProps> = ({ ...rest }) => {
  return (
    <Button {...rest} hitSlop={8} position="absolute" mt="$2" right="$4" elevation={2}>
      <EntypoWhite name="menu" size={34} />
    </Button>
  );
};

const Tag: React.FC<IconProps> = ({ ...rest }) => {
  return (
    <Button
      {...rest}
      position="absolute"
      fd={'row'}
      mt="$2"
      left="$4"
      px={'$3'}
      py={'$2'}
      gap="$1"
      br={'$2'}
      jc={'center'}
      ai={'center'}
      backgroundColor={'yellow'}>
      <Text col={'$black1'} fos={12} fow={'bold'}>
        PHIL 32308
      </Text>
      <CopyIcon name="copy" />
    </Button>
  );
};

const IconDotsHorizontal: React.FC<IconProps> = ({ ...rest }) => {
  return (
    <Button {...rest} hitSlop={8} position="absolute" mt="$2" right="$5" elevation={2}>
      <EntypoWhite name="dots-three-horizontal" size={22} />
    </Button>
  );
};

const Avatar: React.FC<ImageComponentProps> = ({
  url,
  isProtectedImage = true,
}) => {
  const uri = url || '';
  return (
    <If
      condition={!!url}
      elseRender={<EmptyProfileIcon name="user" size={36} />}>
      <If
        condition={isProtectedImage}
        elseRender={<Image {...profileStyle} source={{ uri }} />}>
        <ProtectedImage {...profileStyle} uri={uri} zIndex={2}/>
      </If>
    </If>
  );
};

const WallpaperEdit: React.FC<EditIconProps> = ({ onChangePhoto, ...rest }) => {
  async function handleWallpaperChange() {
    const image = await ImagePicker.launchImageLibrary();

    if (image) {
      onChangePhoto('wallpaper', image);
    }
  }

  return (
    <YStack
      position="absolute"
      bottom="$il"
      mb="$4"
      right="$4"
      zIndex={4}
      bg={'#89898F'}
      br={'$9'}
      bw={'$1'}
      bc={'$icon'}
      width={24}
      height={24}
      justifyContent="center"
      ai="center">
      <Button hitSlop={8} {...rest} onPress={handleWallpaperChange}>
        <PenIcon name="pencil" size={12} />
      </Button>
    </YStack>
  );
};

const Wallpaper: React.FC<ImageComponentProps> = ({
  url,
  children,
  isProtectedImage = false,
}) => {
  const uri = url || '';

  return (
    <Fragment>
      <If
        condition={!!url}
        elseRender={<EmptyWallpaperIcon name="image" size={64} />}>
        <If
          condition={isProtectedImage}
          elseRender={<Image w={'100%'} h={'100%'} source={{ uri }} />}>
          <ProtectedImage w={'100%'} h={'100%'} uri={uri} />
        </If>
      </If>
      {children}
    </Fragment>
  );
};

const AvatarEdit: React.FC<EditIconProps> = ({ onChangePhoto }) => {
  async function handleAvatarChange() {
    const image = await ImagePicker.launchImageLibrary();

    if (image) {
      onChangePhoto('avatar', image);
    }
  }

  return (
    <YStack
      right="$1"
      bottom="$1"
      position="absolute"
      bg={'#89898F'}
      br={'$9'}
      bw={'$1'}
      bc={'$icon'}
      width={24}
      height={24}
      justifyContent="center"
      ai="center"
      zIndex={4}>
      <Button hitSlop={8} onPress={handleAvatarChange}>
        <PenIcon name="pencil" size={12} />
      </Button>
    </YStack>
  );
};

const AddMoreIcon: React.FC<IconProps> = ({ ...rest }) => {
  return (
    <LinearGradient
      colors={['$secondary', '$primary']}
      start={[0, 1]}
      width={30}
      height={30}
      borderRadius={50}
      backgroundColor={'$secondary'}
      position={'absolute'}
      bottom={0}
      right={0}
      justifyContent={'center'}
      alignItems={'center'}
      zIndex={999}
      end={[0, 0]}>
      <Button {...rest}>
        <EntypoWhite name="plus" size={30} />
      </Button>
    </LinearGradient>
  );
};

const Container: ContainerComponent = ({ children }) => {
  return (
    <YStack
      width={88}
      height={88}
      borderRadius={50}
      bottom={-50}
      position={'absolute'}      
      alignSelf={'center'}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={'#666666'}>
      {children}
    </YStack>
  );
};

Header.Top = Top;
Header.Tag = Tag;
Header.IconBack = IconBack;
Header.Avatar = Avatar;
Header.Wallpaper = Wallpaper;
Header.IconGrid = IconGrid;
Header.IconMenu = IconMenu;
Header.WallpaperEdit = WallpaperEdit;
Header.AddMoreIcon = AddMoreIcon;
Header.AvatarEdit = AvatarEdit;
Header.Container = Container;
Header.Bottom = Bottom;
Header.IconDotsHorizontal = IconDotsHorizontal;

export default Header;
