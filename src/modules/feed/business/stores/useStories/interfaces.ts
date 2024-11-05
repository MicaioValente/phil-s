export interface StoriesProps {
    data: StoryData[];
    selectedStory: StoryData;
    visibleStory: boolean;
    add: (params: StoryData[]) => void;
    selectStory: (params: StoryData) => void;
}

export interface StoryData {
    personId: string;
    person: string;
    image: string;
    story: StoryOfThePerson[]
}

export interface StoryOfThePerson {
    id: string;
    seen: boolean;
    url: string;
    type: TypeStory;
    data_created: string;
    available: boolean,
    location: string,
    duration: number
}

export type TypeStory = "IMAGE" | "VIDEO"
  