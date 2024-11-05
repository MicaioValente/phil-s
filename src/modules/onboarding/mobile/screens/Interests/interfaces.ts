export interface Item {
  id: string;
  title: string;
}
export interface RenderItemParams {
  item: Item;
}
export type RenderItemType = (params: RenderItemParams) => JSX.Element;
