import { Dispatch, SetStateAction } from "react"
import { StackProps } from "tamagui"

export interface SearchInputProps  extends StackProps {
    onSearch: (value: string) => void
}