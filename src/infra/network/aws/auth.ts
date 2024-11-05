import { getCurrentUser, fetchAuthSession, deleteUser } from 'aws-amplify/auth';

export async function getUserId(): Promise<string | null> {
  try {
    const user = await getCurrentUser();

    return user.userId;
  } catch (error) {
    return null;
  }
}

export async function getUsername(): Promise<string | null> {
  try {
    const user = await getCurrentUser();

    return user.signInDetails?.loginId ?? null;
  } catch (error) {
    return null;
  }
}

export async function getSession(): Promise<object> {
  const session = await fetchAuthSession();

  return {
    accessToken: session.tokens?.accessToken ?? null,
  };
}

export async function deleteCurrentUser() {
  try {
    await deleteUser();
  } catch (error) {
    return null;
  }
}
