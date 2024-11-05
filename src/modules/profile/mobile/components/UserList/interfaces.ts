export interface UserListProps {
  user: UserList;
  HideActionButton?: boolean;
  buttonText: string;
  buttonActive?: boolean;
  onPressActionButton?: () => void;
  onPressName?: () => void;
  onPressProfilePic?: () => void;
}

export interface UserList {
  name: string;
  profilePic: string;
  id: string;
}
