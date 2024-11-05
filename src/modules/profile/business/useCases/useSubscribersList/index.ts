import { SubscribersListService } from '@modules/profile/business/useCases/useSubscribersList/service';

export function useSubscribersList() {
  const { UserListMock } = SubscribersListService();

  return {
    data: UserListMock,
  };
}
