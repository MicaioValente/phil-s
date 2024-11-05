import { ImageProps, styled } from 'tamagui';
import {
  Entypo,
  Feather,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';
import { colors } from '@dls/tokens/colors';

export const EmptyProfileIcon = styled(Feather, {
  color: '#959595',
});

export const EmptyWallpaperIcon = styled(Feather, {
  color: '$icon',
  alignSelf: 'center',
  marginTop: 'auto',
  marginBottom: 'auto',
});

export const LeftArrowIcon = styled(Feather, {
  color: 'white',
});

export const EntypoWhite = styled(Entypo, {
  color: 'white',
});

export const EnvelopeIcon = styled(FontAwesome, {
  color: 'white',
});

export const AddUserIcon = styled(AntDesign, {
  color: 'white',
});
export const PenIcon = styled(MaterialCommunityIcons, {
  color: 'white',
});

export const CopyIcon = styled(Ionicons, {
  color: '#282837',
  marginLeft: 3,
  transform: 'scaleX(-1)',
});

export const profileStyle: ImageProps = {
  width: 88,
  height: 88,
  borderWidth: 3,
  borderColor: colors.icon,
  borderRadius: 94 / 2,
  zIndex: 1
};
