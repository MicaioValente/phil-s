import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { SearchSchema } from '@modules/profile/business/forms/useSearchFollowing/interfaces';
import { searchSchema } from '@modules/profile/business/forms/useSearchFollowing/schema';
import type { UserList } from '@modules/profile/mobile/components/UserList/interfaces';
import type {
  Following,
  FollowingList,
} from '@modules/profile/business/useCases/useFollowingList/interfaces';

const convertToUserList = (following: Following): UserList => ({
  name: following.name,
  profilePic: following.userImage,
  id: following.id,
});

export function useSearchForm(Following: FollowingList) {
  const { control, watch } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: '',
    },
  });

  const searchQuery = watch('search');

  const filteredFollowing: UserList[] = useMemo(() => {
    if (!searchQuery) {
      return Following.data.map(convertToUserList);
    }
    return Following.data
      .filter(follower =>
        follower.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .map(convertToUserList);
  }, [searchQuery, Following]);

  return {
    control,
    filteredFollowing,
  };
}
