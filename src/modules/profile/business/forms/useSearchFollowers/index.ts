import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { SearchSchema } from '@modules/profile/business/forms/useSearchFollowers/interfaces';
import { searchSchema } from '@modules/profile/business/forms/useSearchFollowers/schema';
import type { UserList } from '@modules/profile/mobile/components/UserList/interfaces';
import type {
  Follower,
  FollowersList,
} from '@modules/profile/business/useCases/useFollowersList/interfaces';

const convertToUserList = (follower: Follower): UserList => ({
  name: follower.name,
  profilePic: follower.userImage,
  id: follower.id,
});

export function useSearchForm(followers: FollowersList) {
  const { control, watch } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: '',
    },
  });

  const searchQuery = watch('search');

  const filteredFollowers: UserList[] = useMemo(() => {
    if (!searchQuery) {
      return followers.data.map(convertToUserList);
    }
    return followers.data
      .filter(follower =>
        follower.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .map(convertToUserList);
  }, [searchQuery, followers]);

  return {
    control,
    filteredFollowers,
  };
}
