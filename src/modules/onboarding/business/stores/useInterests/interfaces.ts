export interface InterestsStore {
  interests: InterestModel[]
  updateInterests: (interest: InterestModel[]) => void;
}
