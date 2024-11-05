export interface FollowingList {
  data: Following[];
  quantity: string;
}

export interface Following {
  name: string;
  userImage: string;
  id: string;
}
