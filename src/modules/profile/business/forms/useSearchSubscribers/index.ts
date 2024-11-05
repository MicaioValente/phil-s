import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { SearchSchema } from '@modules/profile/business/forms/useSearchSubscribers/interfaces';
import { searchSchema } from '@modules/profile/business/forms/useSearchSubscribers/schema';
import type { UserList } from '@modules/profile/mobile/components/UserList/interfaces';
import type {
  Subscriber,
  SubscribersList,
} from '@modules/profile/business/useCases/useSubscribersList/interfaces';

const convertToUserList = (subscriber: Subscriber): UserList => ({
  name: subscriber.name,
  profilePic: subscriber.userImage,
  id: subscriber.id,
});

export function useSearchForm(Subscribers: SubscribersList) {
  const { control, watch } = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: '',
    },
  });

  const searchQuery = watch('search');

  const filteredSubscribers: UserList[] = useMemo(() => {
    if (!searchQuery) {
      return Subscribers.data.map(convertToUserList);
    }
    return Subscribers.data
      .filter(Subscriber =>
        Subscriber.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .map(convertToUserList);
  }, [searchQuery, Subscribers]);

  return {
    control,
    filteredSubscribers,
  };
}
