import { useEffect, useState } from 'react';
import type { ImageURISource } from 'react-native/types';
import { Image as TamaguiImage } from 'tamagui';

import type { ProtectedImageProps } from '@dls/components/ProtectedImage/interfaces';
import { Storage } from '@infra/network';
import { isBase64 } from '@shared/validations';

function ProtectedImage({ uri, ...rest }: ProtectedImageProps) {
  const [source, setSource] = useState<ImageURISource>();

  useEffect(() => {
    (async () => {
      if (uri) {
        if (isBase64(uri)) {
          setSource({ uri: `data:image/png;base64,${uri}` });

          return;
        }

        const url = await Storage.getImageUrl({
          path: uri,
        });

        setSource({ uri: url });
      }
    })();
  }, [uri]);

  if (uri) return <TamaguiImage {...{ ...rest, source }} />;

  return null;
}

export default ProtectedImage;
