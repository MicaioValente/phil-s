import { styled } from "tamagui";
import { AntDesign, Entypo, Foundation } from '@expo/vector-icons';
import { Dimensions, FlatList, Modal as ModalRN, ImageBackground, StyleSheet } from 'react-native';
import { Video, YStack } from "@dls/components";

const { width, height } = Dimensions.get('window')

export const CloseIcon = styled(AntDesign, {
  color: '$text',
});

export const GiftIcon = styled(AntDesign, {
  color: '$text',
  marginRight: "$2"
});

export const AtIcon = styled(Foundation, {
  color: '$text',
  marginRight: "$2"
});

export const DotIcon = styled(Entypo, {
  color: '$text',
});

export const VideoStory = styled(Video, {
  alignItems: "center",
  width,
  aspectRatio: 1,

});

export const Modal = styled(ModalRN, {
  flex: 1  
});

export const StoryImage = styled(ImageBackground,{
  width,
  height: '100%'
  // aspectRatio: 1,
})

export const CarouselStory = styled(FlatList, {
  flex: 1, 
  width: '100%', 
  height: '100%'
})

export const ContainerHeaderStory = styled(YStack, {
  flex: 1, 
  width: '100%', 
  padding: "$4",
  paddingTop: "$2",
  position: "absolute",
  top: 0,
  zIndex: 2,
  elevation: 2,
  shadowColor: '#000000',
  shadowOffset: '0px 2px',
  shadowOpacity: 0.25,
  shadowRadius: 2
})

export const Styles = StyleSheet.create({
  btnPrevNext: {
    height,
    width: '50%'
  },
  flatlist: { 
    borderRadius: 8, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20 
  }
})