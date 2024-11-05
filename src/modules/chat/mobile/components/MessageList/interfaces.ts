import { StackProps } from "tamagui";
import type { SectionType } from "@modules/chat/mobile/screens/Chat/interfaces";

export interface MessageListProps extends StackProps {
    sections: SectionType
}