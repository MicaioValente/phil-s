import React, { useEffect } from 'react'
import { LinearGradientText, YStack } from '@dls/components'
import { FlatList, Modal, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import CardProduct from '@modules/feed/mobile/components/ProductCard'
import { ModalProcustsProps } from '@modules/feed/mobile/components/ModalProducts/interfaces'
import { GiveBack, PhilEducation, PhilGaming, PhilMarket, PhilStream, PhilWallet } from '@modules/feed/mobile/assets';
import { BackgroundBlur, Content } from '@dls/components/BottomSheet/styles'
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useNavigation } from '@shared/hooks'
import { CARD_PRODUCTS } from '../ProductCard/interfaces'
import Linking from '@core/linking'
import DeviceInfo from '@core/deviceInfo'

const products: CARD_PRODUCTS[] = [
    {
      id: 'philEducation',
      name: 'PHIL-Education',
      link: {
        type: 'EXTERNAL',
        url: ''
      },
      avaliable: false,
      logo: (<PhilEducation  width={50} height={50} />)
    },
    {
      id: 'philWallet',
      name: 'PHIL-Wallet',
      link: {
        type: 'INTERN',
        url: 'wallet/home'
      },
      avaliable: true,
      logo: (<PhilWallet  width={50} height={50} />)
    },
    {
      id: 'philGiveBack',
      name: 'Give Back',
      link: {
        type: 'EXTERNAL',
        url: ''
      },
      avaliable: false,
      logo: (<GiveBack  width={50} height={50} />)
    },
    {
      id: 'philGaming',
      name: 'PHIL-Gaming',
      link: {
        type: 'EXTERNAL',
        url: 'https://play.google.com/store/apps/details?id=com.philcoin.philgames'
      },
      avaliable: DeviceInfo.isAndroid,
      logo: (<PhilGaming  width={50} height={50} />)
    },
    {
      id: 'philStream',
      name: 'PHIL-Stream',
      link: {
        type: 'EXTERNAL',
        url: ''
      },
      avaliable: false,
      logo: (<PhilStream  width={50} height={50} />)
    },
    {
      id: 'philMarket',
      name: 'PHIL-Market',
      link: {
        type: 'EXTERNAL',
        url: ''
      },
      avaliable: false,
      logo: (<PhilMarket  width={50} height={50} />)
    },
]

const ModalProducts = ({
    parentDimensions,
    // products,
    title,
    visible,
    onClose,
}: ModalProcustsProps) => {
    const nav = useNavigation()
    const top = parentDimensions ? (parentDimensions?.y + parentDimensions?.height) : 0;
    const maxHeight = parentDimensions ? '60%' : '100%';
    const progressHeight = useSharedValue(0);
    
    useEffect( () => {
      if(visible)
        progressHeight.value = withTiming(visible ? 1 : 0 , {
          duration: 600,
          easing: Easing.linear,
        });
    }, [visible])
    
    const animatedStyle = useAnimatedStyle(() => ({
      height: `${progressHeight.value * 100}%`,
    }));

    const close = () => {
      progressHeight.value = withTiming(0, {
        duration: 600,
        easing: Easing.linear,
      }, () => {
        runOnJS(onClose)();
      });
    }

    const onPressCard = ({ link, avaliable }: CARD_PRODUCTS ) => {
      if(!link.url || !avaliable) return
      onClose()
      switch(link.type){
        case 'EXTERNAL': Linking.openUrl(link.url)
        case 'INTERN': nav.navigate(link.url as any)
      }
      
    }

    return (
        <Modal transparent visible={visible}>
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={close}><YStack style={{ width:'100%', height: top }}></YStack></TouchableWithoutFeedback>
                <BackgroundBlur experimentalBlurMethod='dimezisBlurView' intensity={5} tint='prominent' style={{ flex:1 }}>
                    <Content
                      style={{ flex: 1 }}
                    >
                      <Animated.View
                        style={[
                          { width: '100%', height: '100%', maxHeight },
                          animatedStyle
                        ]}
                      >
                        <YStack  backgroundColor={'#181818'} p="$4" borderBottomEndRadius={'$4'}  borderBottomStartRadius={'$4'} >
                          <LinearGradientText fontSize={20} textAlign='center' fontWeight={'bold'} pb={'$3'}>{title}</LinearGradientText>
                          <FlatList
                            showsVerticalScrollIndicator={false}
                            data={products}
                            renderItem={ ({ item }) => <CardProduct {...item} onPress={onPressCard}/>}
                          />
                          <YStack w={78} h={5} backgroundColor={'$background075'} alignSelf='center' borderRadius={"$3"} mt={"$3"}/>
                        </YStack>
                      </Animated.View>
                      <TouchableWithoutFeedback onPress={close}><YStack style={{flex: 1 }}></YStack></TouchableWithoutFeedback>
                    </Content>
                </BackgroundBlur>
            </SafeAreaView>
        </Modal>
    )
}

export default ModalProducts