import { ScrollViewProps, ViewProps } from "react-native";

export interface CONTAINER_SIGNIN_PROPS extends ViewProps  {
    scrollProps?: ScrollViewProps,
    enabledScroll?: boolean
}