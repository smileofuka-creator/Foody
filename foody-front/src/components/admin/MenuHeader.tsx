import { CategoryType, FoodType } from "@/types/commonTypes";
import { Skeleton } from "../ui/skeleton";

import AddCategoryDialog from "./AddCategoryDialog";
import { Badge } from "../ui/badge";

type MenuHeaderProps = {
  categoryLoading: boolean;
  categories: CategoryType[];
  foods: FoodType[];
  getCategories: () => void;
};

export const MenuHeader = ({
  categoryLoading,
  categories,
  foods,
  getCategories,
}: MenuHeaderProps) => {
  if (categoryLoading) {
    return (
      <div className="flex gap-4">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {categories.map((category) => {
        const foodCount =
          foods?.filter((food) => food.category === category._id).length || 0;
        return (
          <div
            key={category._id}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition"
          >
            {category.categoryName}
            <Badge className="bg-gray-100 text-gray-900 hover:bg-gray-100">
              {foodCount}
            </Badge>
          </div>
        );
      })}
      <AddCategoryDialog getCategories={getCategories} />
    </div>
  );
};

{
  /* {categoryLoading ? (
              <>
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </>
            ) : (
              <>
                {categories.map((category) => {
                  return (
                    <div
                      key={category._id}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition"
                    >
                      {category.categoryName}
                      <Badge>4</Badge>
                    </div>
                  );
                })}
                <AddCategoryDialog getCategories={getCategories} />
              </>
            )} */
}
