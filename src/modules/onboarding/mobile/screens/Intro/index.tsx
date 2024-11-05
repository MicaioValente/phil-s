import React, { useState, useRef } from 'react';
import { FlatList, Animated } from 'react-native';
import {
  Button,
  YStack,
  LinearGradient,
  Text,
  ScrollView,
} from '@dls/components';
import { useNavigation, useTranslation } from '@shared/hooks';

import {
  HeaderIntro,
  SliderItem,
  Paginator,
} from '@modules/onboarding/mobile/components';

import slides from './slides';
import { useInterests } from '@modules/onboarding/business/stores';

function Intro() {
  const navigation = useNavigation();

  const { t } = useTranslation('intro');
  const { interests } = useInterests();

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList<any> | null>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = (direction: any) => {
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (slidesRef.current && newIndex >= 0 && newIndex < slides.length) {
      slidesRef.current?.scrollToIndex({ index: newIndex });
    } else {
      if (newIndex > 0) {
        if (interests.length) {
          navigation.navigate('account/sign');
        } else {
          navigation.navigate('onboarding/first-access-interests');
        }
      }
    }
  };

  return (
    <ScrollView
      bg="$background"
      contentContainerStyle={{ fg: 1, jc: 'center', ai: 'center', pb: '$ib' }}>
      <FlatList
        ref={slidesRef}
        data={slides}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={viewableItemsChanged}
        renderItem={({ item }) => <SliderItem item={item} />}
      />

      <HeaderIntro />

      <Paginator data={slides} scrollX={scrollX} currentIndex={currentIndex} />

      <YStack w="100%" jc="flex-end" mb="$4">
        <Button
          h={'$3.5'}
          w="60%"
          als="center"
          onPress={() => scrollTo('next')}>
          <LinearGradient
            colors={['$secondary', '$primary']}
            w="100%"
            h="100%"
            jc="center"
            ai="center"
            br="$4"
            start={[0, 1]}
            end={[0, 0]}>
            <Text col={'$text'} fos={'$5'} fow={'bold'}>
              {t('btnNext')}
            </Text>
          </LinearGradient>
        </Button>
      </YStack>
    </ScrollView>
  );
}

export default Intro;
