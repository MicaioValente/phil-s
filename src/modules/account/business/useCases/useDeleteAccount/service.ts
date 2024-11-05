import Environment from '@core/environment';
import { deleteCurrentUser, getUserId, graphQLClient } from '@infra/network';
import { Storage } from '@infra/network/aws/storage';
import { deleteUser, updateUser } from '@infra/network/graphql/mutations';

export async function deleteAccountService(): Promise<void> {
  const userId = await getUserId();

  if (Environment.isDevelopment) {
    await graphQLClient({
      query: deleteUser,
      variables: { input: { id: userId! } },
    });

    await Storage.deleteResources();

    await deleteCurrentUser();

    return;
  }

  await graphQLClient({
    query: updateUser,
    variables: {
      input: { id: userId!, deletedAt: new Date().toISOString() },
    },
  });
}
