import { TFunction } from 'i18next';
export type FeedHomeTranslationKeys = 'displayCategory1' | 'displayCategory2' | 'displayCategory3' | 'durationVideo';

export const formatDuration = (
  seconds: number | 0,
  format: FeedHomeTranslationKeys,
  t: TFunction<'feedHome'>,
): string => {
  if (seconds === 0) {
    const formattedSecs = "00"
      return t(format, { minutes: '0', seconds: formattedSecs});
  }
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  const formattedSecs = secs < 10 ? `0${secs}` : `${secs}`;

  return t(format, { minutes, seconds: formattedSecs });
};
