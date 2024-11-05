
import { useInfiniteQuery } from '@infra/hooks';
import { contactListService } from '@modules/onboarding/business/useCases/useContactList/service';
import { QueryKeys } from '@shared/enums/queryKeys';

export function useContactList() {
  return useInfiniteQuery<ContactItemModel>({
    queryKey: [QueryKeys.GET_CONTACT_LIST],
    queryFn: contactListService,
  });
}
