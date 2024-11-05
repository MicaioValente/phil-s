import { ViewersListService } from '@modules/profile/business/useCases/useViewersList/service';

export function useViewersList() {
  const { UserListMock } = ViewersListService();

  return {
    data: UserListMock,
  };
}
