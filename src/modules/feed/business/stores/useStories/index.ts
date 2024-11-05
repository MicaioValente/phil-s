import { create } from 'zustand';
import { StoriesProps } from './interfaces';

export const inicialSelectedStory = {
  personId: '',
  person: '',
  image: '',
  story: []
}

export const useStories = create<StoriesProps>(set => ({
  data: [],
  selectedStory: inicialSelectedStory,
  visibleStory: false,
  add: params =>  set(state => ({ ...state, data: [/*...state.data,*/ ...params] })),
  selectStory: selectedStory =>  set(state => ({...state, selectedStory })),
}));

