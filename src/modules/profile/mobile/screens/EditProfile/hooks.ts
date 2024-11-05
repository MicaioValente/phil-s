import { useAuth } from '@modules/account/business/stores';
import { useEffect, useState } from 'react';
import type { ImageProps } from '@modules/profile/mobile/components/ProfileHeader/interfaces';

export function useMediaOperations() {
    
  const { user } = useAuth();

  const [profilePicture, setProfilePicture] = useState<ImageProps | null>(null);

  const [wallpaperPicture, setWallpaperPicture] = useState<ImageProps | null>(
    null,
  );

  const [isProtectedAvatar, setIsProtectedAvatar] = useState(!!user.avatarUrl);

  const [isProtectedWallpaper, setIsProtectedWallpaper] = useState(
    !!user.wallpaperUrl,
  );

  useEffect(() => {
    if (profilePicture) {
      setIsProtectedAvatar(false);
    }
    if (wallpaperPicture) {
      setIsProtectedWallpaper(false);
    }
  }, [user, profilePicture, wallpaperPicture]);

  async function onChangePictures(
    type: 'wallpaper' | 'avatar',
    image: ImageProps,
  ) {
    if (type === 'wallpaper') {
      setWallpaperPicture(image);
    } else {
      setProfilePicture(image);
    }
  }

  return {
    profilePicture,
    wallpaperPicture,
    isProtectedAvatar,
    isProtectedWallpaper,
    onChangePictures,
  };
}
