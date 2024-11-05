import { Dispatch, SetStateAction } from "react"
import { StackProps } from "tamagui"

export interface SearchInputProps  extends StackProps {
    onSearch: () => void
    onChangeText: Dispatch<SetStateAction<string>>
    value: string
}