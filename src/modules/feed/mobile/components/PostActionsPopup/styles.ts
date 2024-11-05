import { StyleSheet } from "react-native";
import {MaterialCommunityIcons}  from "@expo/vector-icons"
import { styled } from "tamagui";

export const styles = StyleSheet.create({
    blur: {
        flex: 1,
        zIndex: 999999,
    }
})


export const EditIcon = styled(MaterialCommunityIcons, {
    color: "$white1"
})

export const QRCodeIcon = styled(MaterialCommunityIcons, {
    color: "$white1"
})

export const TrashIcon = styled(MaterialCommunityIcons, {
    color: "$white1"
})