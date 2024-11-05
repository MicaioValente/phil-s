import type { NavigationMapper } from '@core/navigation/interfaces';
import Inbox from '@modules/chat/mobile/screens/Inbox';
import NewChat from './screens/NewChat';
import Chat from './screens/Chat';


export default function ChatScreens(navigationMapper: NavigationMapper) {
  navigationMapper
    .addScreen(Inbox)
    .addScreen(NewChat)
    .addScreen(Chat)
}

export interface ChatScreensMapper {
  'chat/inbox': void;
  'chat/newChat': void;
  'chat/chat': void;
  
}
