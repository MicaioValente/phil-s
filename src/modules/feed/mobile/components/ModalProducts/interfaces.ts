import { LayoutRectangle } from "react-native";

export interface ModalProcustsProps {
    title: string,
    visible: boolean,
    parentDimensions?: LayoutRectangle,
    // products: any,
    onClose: () => void
}