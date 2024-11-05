import { YStack } from "@dls/components";
import { withAnimated } from "@shared/hocs";
import Animated from "react-native-reanimated";
import { styled } from "tamagui";

// export const ItemsContainer = styled(Animated.View, {
//     backgroundColor: "$background",
// })

export const ItemsContainer = withAnimated(YStack)