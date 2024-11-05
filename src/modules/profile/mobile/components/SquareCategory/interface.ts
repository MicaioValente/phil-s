export interface SquareCategoryProps {
  categories: Category[];
  p: number;
}

export type Category = {
  id: string;
  name: string;
  items: CategoryItem[];
};

type CategoryItem = {
  id: string;
  title: string;
  image: string;
  onPress?: () => void;
};
