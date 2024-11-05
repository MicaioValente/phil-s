import Contact from '@core/contact';
import { InfiniteQueryConstraints } from '@infra/hooks/useInfiniteQuery/interfaces';
import { graphQLClient } from '@infra/network';
import { listUsers } from '@infra/network/graphql/queries';
import { QueryKey } from '@tanstack/react-query';
import UUID from '@core/uuid';
import { chunkArray } from '@modules/onboarding/business/helpers';

export async function contactListService(
  pageParam: number,
  queryKey: QueryKey,
): Promise<InfiniteQueryConstraints<ContactItemModel>> {
  const contacts = await Contact.getContacts();

  if (!contacts) {
    return {
      items: [],
      page: pageParam,
      pageSize: 0,
      pageCount: 0,
      total: 0,
    };
  }
  const { phones } = contacts.reduce(
    (
      acc: { phones: Array<{ name: string; phone: string; avatar?: string }> },
      contact,
    ) => {
      if (contact.phoneNumbers) {
        acc.phones.push(
          ...contact.phoneNumbers.map(phone => ({
            name: contact.name,
            phone: phone.number?.toString() ?? '',
            avatar: typeof contact.image === 'string' ? contact.image : '',
          })),
        );
      }
      return acc;
    },
    { phones: [] },
  );

  const phonesSanitized = phones.map(contact => ({
    ...contact,
    phone: contact.phone.sanitize(),
  }));

  const phonesNotDuplicated = phonesSanitized.removeDuplicates('phone');

  const phoneNumbers = phonesNotDuplicated.map(
    contact => contact.phone as string,
  );

  const chunks = chunkArray(phoneNumbers, 20);

  const promises = chunks.map(async chunk => {
    const orConditions = chunk.map(phone => ({
      phoneNumber: { eq: phone },
    }));

    const result = await graphQLClient({
      query: listUsers,
      variables: {
        filter: {
          or: orConditions,
        },
      },
    });

    return result.data.listUsers.items.map(user => {
      return {
        id: user.id!,
        name: `${user.firstName} ${user.lastName}`,
        phone: user.phoneNumber!,
        avatar: user.avatarUrl ?? '',
        isFound: true,
        isFollowing: false,
        isInvited: false,
      };
    });
  });

  const results = (await Promise.all(promises)).flat();

  const foundPhoneNumbers = results.map(user => {
    if (user.phone) {
      return user.phone;
    }
  });

  const notFoundContacts = phonesNotDuplicated
    .filter(contact => !foundPhoneNumbers.includes(contact.phone))
    .map(contact => ({
      ...contact,
      id: UUID.generate(),
      isFound: false,
      isFollowing: false,
      isInvited: false,
      phone: contact.phone ?? null,
    })) as ContactItemModel[];

  const response = [...results, ...notFoundContacts];

  return {
    items: response,
    page: pageParam,
    pageCount: 0,
    pageSize: 0,
    total: phoneNumbers.length,
  };
}
