import { useIsFocused as useIsFocusedNative} from "@react-navigation/native";

const useIsFocused = (): boolean => {
    const IsFocused = useIsFocusedNative()
    return IsFocused
}

export default useIsFocused