import { Dispatch, SetStateAction } from "react"

export type Actions = 'document' | "gallery" | "location" | "contact" | "transfer"
export interface CompositionActionsProps {
    onPress: (action:Actions ) => void
}