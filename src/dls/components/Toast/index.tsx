import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { LayoutChangeEvent } from 'react-native';

import { InfoIcon, CloseIcon } from '@dls/components/Toast/styles';
import type { ToastProps } from '@dls/components/Toast/interfaces';
import { useToast } from '@dls/stores';

function Component({ item, index, hideToast }: ToastProps) {
  const [height, setHeight] = useState(0);

  function onLayout(event: LayoutChangeEvent) {
    setTimeout(hideToast, item.duration);

    setHeight(event.nativeEvent.layout.height + 8);
  }

  return (
    <View
      style={[styles.toastContainer, { top: index * height }]}
      onLayout={onLayout}>
      <View style={styles.toast}>
        <LinearGradient
          style={styles.gradient}
          colors={['#secondaryColor', '#primaryColor']}>
          <InfoIcon name="info" size={20} />
        </LinearGradient>

        <View style={styles.messageContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </View>

        <Button onPress={hideToast}>
          <CloseIcon name="close" size={20} />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    zIndex: 999,
    alignSelf: 'center',
    margin: 16,
  },
  toast: {
    backgroundColor: '#background', // Replace with actual color
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12, // Assuming $6 is 12px
    paddingVertical: 12, // Assuming $3 is 12px
    paddingHorizontal: 12, // Assuming $3 is 12px
    width: '100%',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 5, // Required for shadow on Android
  },
  gradient: {
    width: 16, // Assuming $4 is 16px
    height: 16, // Assuming $4 is 16px
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContainer: {
    flex: 1,
  },
  title: {
    color: '#text', // Replace with actual color
    fontWeight: 'bold',
  },
  message: {
    color: '#text', // Replace with actual color
  },
});

function Toast() {
  const { data, hideToast } = useToast();

  return data.map((item, index) => {
    const props = {
      item,
      index,
      hideToast,
    };

    return <Component key={`${item.message}-${index}`} {...props} />;
  });
}

export default Toast;
