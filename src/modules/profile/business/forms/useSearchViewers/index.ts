import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { SearchSchema } from '@modules/profile/business/forms/useSearchViewers/interfaces';
import { searchSchema } from '@modules/profile/business/forms/useSearchViewers/schema';
import type { UserList } from '@modules/profile/mobile/components/UserList/interfaces';
import type {
  ProfileViewer,
  ProfileViewersList,
} from '@modules/profile/business/useCases/useViewersList/interfaces';

const convertToUserList = (viewer: ProfileViewer): UserList => ({
  name: viewer.name,
  profilePic: viewer.userImage,
  id: viewer.id,
});

export function useSearchForm(Viewers: ProfileViewersList) {
  const { control, watch } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: '',
    },
  });

  const searchQuery = watch('search');

  const filteredViewers: UserList[] = useMemo(() => {
    if (!searchQuery) {
      return Viewers.data.map(convertToUserList);
    }
    return Viewers.data
      .filter(Viewer =>
        Viewer.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .map(convertToUserList);
  }, [searchQuery, Viewers]);

  return {
    control,
    filteredViewers,
  };
}
