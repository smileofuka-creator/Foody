import ProductName from "@/components/admin/CardName";

export const FoodSection = ({
  categoryName,
  foods,
  categoryId,
}: {
  categoryName: string;
  foods: any[];
  categoryId: string;
}) => {
  const filteredFoods = foods.filter(
    (food: any) => food.category === categoryId,
  );
  return (
    <div className="rounded-lx w-full mt-4 p-4">
      <h3 className="text- 2xl text-white font-semibold">{categoryName}</h3>
      <div className=" items-center gap-[9px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {filteredFoods?.map((food) => (
          <ProductName key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};
