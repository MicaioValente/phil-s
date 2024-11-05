export interface SuggestionRequestParams {}

export interface SuggestionRequest {}

export interface SuggestionResponse {
  items: SuggestionItemModel[];
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}
