export interface SearchRequestParams {
  search?: string;
}

export interface SearchRequest {}

export interface SearchResponse {
  items: SearchItemModel[];
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}
