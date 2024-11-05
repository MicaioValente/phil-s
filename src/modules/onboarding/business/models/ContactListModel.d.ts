declare interface ContactListModel {
  items: ContactItemModel[];
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

declare interface ContactItemModel {
  id: string;
  name: string;
  phone: string;
  avatar?: string;
  isFound: boolean;
  isInvited: boolean;
  isFollowing: boolean;
}
