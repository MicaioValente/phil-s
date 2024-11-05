import { useQuery } from '@infra/hooks';
import { QueryKeys } from '@shared/enums/queryKeys';
import { useNavigation } from '@shared/hooks';
import { getOtherUserService } from '@modules/profile/business/useCases/useGetOtherUser/service';
import { useAuth } from '@modules/account/business/stores';

export function useGetOtherUser() {
  const navigation = useNavigation();
  const auth = useAuth().user

  const profileUserParams = navigation.getScreenParams('profile/user');

  const initialData = {} as UserOtherProfileModel;

  return useQuery<UserOtherProfileModel>({
    initialData,
    queryKey: [QueryKeys.GET_USER_PROFILE, profileUserParams.userId, auth.id],
    queryFn: getOtherUserService,
  });
}
