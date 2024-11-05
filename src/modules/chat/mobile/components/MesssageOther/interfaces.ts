import { Dispatch, SetStateAction } from "react"

export interface ToggleSectionProps {
    value: "Chats" | "Calls",
    setValue: Dispatch<SetStateAction<"Chats" | "Calls">>
}