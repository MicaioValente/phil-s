declare interface SuggestionModel {
  page: number;
  pageCount: number;
  pageSize: number;
  items: SuggestionItemModel[];
  total: number;
}

declare interface SuggestionItemModel extends UserModel {
  following?: boolean;
}
