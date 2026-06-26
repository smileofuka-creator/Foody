// import ProductName from "@/components/admin/CardName";

// export const FoodSection = ({
//   categoryName,
//   foods,
//   categoryId,
// }: {
//   categoryName: string;
//   foods: any[];
//   categoryId: string;
// }) => {
//   const filteredFoods = foods.filter(
//     (food: any) => food.category === categoryId,
//   );
//   return (
//     <div className="rounded-xl w-full mt-4 p-4">
//       <h3 className="text-2xl text-white font-semibold">{categoryName}</h3>
//       <div className=" items-center gap-[9px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
//         {filteredFoods?.map((food) => (
//           <ProductName key={food._id} food={food} />
//         ))}
//       </div>
//     </div>
//   );
// };

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
  // Тухайн категорид хамаарах хоолнуудыг шүүж авна
  const filteredFoods = foods.filter(
    (food: any) => food.category === categoryId,
  );

  return (
    // Figma-д байгаа 1280px орчим өргөнийг хангахуйц зайтай болгох
    <div className="w-[1280px] mx-auto mt-12">
      {/* Категорийн нэр */}
      <h3 className="text-2xl font-semibold mb-6 text-white">{categoryName}</h3>

      {/* 4 баганатай grid */}
      <div className="grid grid-cols-4 gap-6">
        {filteredFoods?.map((food) => (
          <ProductName key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};
