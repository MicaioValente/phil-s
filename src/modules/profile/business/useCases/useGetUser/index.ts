import { useQuery } from '@infra/hooks';
import { QueryKeys } from '@shared/enums/queryKeys';

import { getUserService } from '@modules/profile/business/useCases/useGetUser/service';


export function useGetUser() {

  const initialData = {} as UserProfileModel;

  return useQuery<UserProfileModel>({
    initialData,
    queryKey: [QueryKeys.GET_USER_PROFILE],
    queryFn: getUserService,
  });
}
