import { followersListService } from './service';

export function useFollowersList() {
  const { UserListMock } = followersListService();

  return {
    data: UserListMock,
  };
}
