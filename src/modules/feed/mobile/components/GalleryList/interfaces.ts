import { PhotoIdentifier } from "@react-native-camera-roll/camera-roll";

export interface GalleryListProps {
    selectedItem: (item: PhotoIdentifier) => void
}