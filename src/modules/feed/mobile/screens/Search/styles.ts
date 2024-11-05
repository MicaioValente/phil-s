import { styled } from "tamagui";
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, StyleSheet } from "react-native";

export const SearchIcon = styled(Ionicons,{
    color: 'gray',
})

export const ImageSearch = styled(ImageBackground,{ 
    width: '100%', 
    height: 'auto', 
    aspectRatio: 1, 
    overflow: 'hidden', 
    borderRadius: 6 
})

export const Styles = StyleSheet.create({
    standartIcon: { 
        position: 'absolute', 
        bottom: 5, 
        right: 5 
    }
})