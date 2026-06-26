export type CategoryType = {
  _id: string;
  categoryName: string;
  active?: boolean;
  count?: number;
};

export type FoodType = {
  _id: string;
  foodName: string;
  price?: number;
  ingredients?: string;
  image?: string;
  active?: boolean;
  category: string;
};
