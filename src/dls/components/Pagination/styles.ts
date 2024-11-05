import { Animated, StyleSheet } from "react-native";
import { styled } from "tamagui";

export const Dot = styled(Animated.View, {
    
})

export const styles = StyleSheet.create({
    blur:{ 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        width: '100%',
        borderRadius: 12,
        overflow: 'hidden',
        flexDirection: 'row', 
    }
})