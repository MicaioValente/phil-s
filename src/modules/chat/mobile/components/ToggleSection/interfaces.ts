import { Dispatch, SetStateAction } from "react"
import { StackProps } from "tamagui"

export interface ToggleSectionProps extends StackProps {
    value: "Chats" | "Calls",
    setValue: Dispatch<SetStateAction<"Chats" | "Calls">>
}