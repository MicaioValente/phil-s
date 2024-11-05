import { Dispatch, SetStateAction } from "react"
import { TextProps } from "tamagui"

export interface DividerContactsProps extends TextProps{
    type: 'phillap' | "phone"
}