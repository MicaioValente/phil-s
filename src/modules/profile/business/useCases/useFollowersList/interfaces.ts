export interface FollowersList {
  data: Follower[];
  quantity: string;
}

export interface Follower {
  name: string;
  userImage: string;
  id: string;
}
