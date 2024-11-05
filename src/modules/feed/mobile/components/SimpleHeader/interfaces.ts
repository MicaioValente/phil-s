import { OpaqueColorValue } from "react-native/Libraries/StyleSheet/StyleSheet";
import { GetThemeValueForKey, ViewStyle } from "tamagui";

export interface SimpleHeaderProps {
    title: string,
    colorText?: OpaqueColorValue | GetThemeValueForKey<"color">,
    styleContainer?: ViewStyle,
    goBack?: () => void,
    children?: React.ReactElement
}