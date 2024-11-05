import { followingListService } from '@modules/profile/business/useCases/useFollowingList/service';

export function useFollowingList() {
  const { UserListMock } = followingListService();

  return {
    data: UserListMock,
  };
}
