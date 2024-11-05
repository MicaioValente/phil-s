
import { StackProps } from 'tamagui';

export interface ContactItemProps extends StackProps {
  item: ContactItemModel
  onInvite: (id: string) => void
  onUpdateStatusFollowing: (id: string, status: boolean) => void
}
