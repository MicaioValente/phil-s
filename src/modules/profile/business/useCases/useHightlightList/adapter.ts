import { HightlightResponse } from './interfaces';

export function hightlightListAdapter(
  data: HightlightResponse,
): HightlightModel {
  return {
    items: data.items,
    page: data.page,
    pageCount: data.pageCount,
    pageSize: data.pageSize,
    total: data.total,
  };
}
