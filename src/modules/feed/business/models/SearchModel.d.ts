declare interface SearchModel {
  page: number;
  pageCount: number;
  pageSize: number;
  items: SearchItemModel[];
  total: number;
}

declare interface SearchItemModel {
  id: string;
  url: string;
  type: 'IMAGE' | 'VIDEO';
}
