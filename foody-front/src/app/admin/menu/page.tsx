"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import ProductName from "@/components/admin/CardName";
import AddProductName from "@/components/admin/AddProductName";
import Sidebar from "./sidebar";
import { CategoryType, FoodType } from "@/types/commonTypes";
import { MenuHeader } from "@/components/admin/MenuHeader";

// export interface CategoryType {
//   _id: string;
//   categoryName: string;
//   active?: boolean;
//   count?: number;
// }
// export interface FoodType {
//   _id: string;
//   foodName: string;
//   price?: number;
//   ingredients?: string;
//   image?: string;
//   active?: boolean;
//   category: string;
// }

// const categories = [
//   { name: "All Dishes", count: 112, active: true },
//   { name: "Appetizers", count: 6, active: false },
//   { name: "Salads", count: 3, active: false },
//   { name: "Pizzas", count: 5, active: false },
//   { name: "Lunch favorites", count: 5, active: false },
//   { name: "Main dishes", count: 5, active: false },
//   { name: "Fish & Sea foods", count: 5, active: false },
//   { name: "Brunch", count: 5, active: false },
//   { name: "Side dish", count: 5, active: false },
//   { name: "Desserts", count: 5, active: false },
//   { name: "Beverages", count: 5, active: false },
// ];

const AdminMenuPage = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [foodLoading, setFoodLoading] = useState(false);

  const getCategories = async () => {
    setCategoryLoading(true);
    const response = await axios.get("http://localhost:3000/category");

    console.log("irj bga hariu", response);

    setCategories(response.data.foodCategories);
    setCategoryLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getFood = async () => {
    setFoodLoading(true);
    const response = await axios.get("http://localhost:3000/food");

    console.log("hoolni hariu", response);

    setFoods(response.data.foodList);
    setFoodLoading(false);
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#F4F4F5] text-black antialiased">
      {/* 1. SIDEBAR */}

      <Sidebar />

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 p-8 max-w-[1200px]">
        {/* Header (admin avatar) */}

        <header className="flex justify-end mb-6">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border border-gray-300">
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
        </header>

        {/* Dishes Category Section */}
        <section className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Dishes category</h2>

          <MenuHeader
            categoryLoading={categoryLoading}
            categories={categories}
            foods={foods}
            getCategories={getCategories}
          />
        </section>

        {categories?.map((category) => {
          const filteredFoods = foods.filter(
            (food) => food.category === category._id,
          );
          return (
            <div
              key={category._id}
              className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                {category.categoryName}
                <span className="text-gray-400 text-sm font-normal">
                  {" "}
                  ({filteredFoods.length})
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {foodLoading ? (
                  <>
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </>
                ) : (
                  <>
                    <AddProductName
                      categoryId={category._id}
                      getFood={getFood}
                    />
                    {filteredFoods.map((food) => {
                      return <ProductName key={food._id} food={food} />;
                    })}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default AdminMenuPage;
