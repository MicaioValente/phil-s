import { ImageSourcePropType, ViewStyle } from "react-native";

export interface HEADER_SIGN_PROPS  {
    title: string,
    subTitle: string,
    imgBackground: ImageSourcePropType
    styleImage?: ViewStyle
    visibleIconBack?: boolean
}