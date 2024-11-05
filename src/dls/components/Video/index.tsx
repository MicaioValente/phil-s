import React, { forwardRef, Ref } from 'react'
import VideoRN from 'react-native-video';
import { VideoProps, VideoRef } from '@dls/components/Video/interfaces';

function Video({ ...rest }: VideoProps, ref: Ref<VideoRef>) {
    return (<VideoRN {...{ ...rest, ref }} />);
}

export default forwardRef(Video)

