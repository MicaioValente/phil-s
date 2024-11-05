import { useStories } from '@modules/feed/business/stores';
import { StoryData } from '@modules/feed/business/stores/useStories/interfaces';
import { useStoryList } from '@modules/feed/business/useCases';

export function addStory(story: StoryData[]) {
  useStories.getState().add(story);
}

export const getStories = () => {
  const { isLoading } = useStoryList();

  const get = () => {};

  return {
    isLoading,
    get,
  };
};

export function selectStory(story: StoryData) {
  useStories.getState().selectStory(story);
}
