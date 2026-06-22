"use client";
import Image from "next/image";
import Navigation from "./customer/Navigation";
import Footer from "./customer/Footer";
import { FoodSection } from "./customer/FoodSection";
import { useEffect, useState } from "react";
import { CategoryType, FoodType } from "./admin/menu/page";
import axios from "axios";

const Page = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [foods, setFoods] = useState<FoodType[]>([]);

  const getCategories = async () => {
    const response = await axios.get("http://localhost:3000/category");
    console.log("irj bga hariu", response);
    setCategories(response.data.foodCategories);
  };

  const getFoods = async () => {
    const response = await axios.get("http://localhost:3000/food");
    console.log("hool haragdaj bn", response);
    setFoods(response.data.foodList);
  };

  useEffect(() => {
    getCategories();
    getFoods();
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-[#404040]  w-[1440px] ">
      <Navigation />
      <Image src="/BG.png" width={1440} height={570} alt="cover" />
      {categories?.map((category) => {
        return (
          <FoodSection
            foods={foods}
            categoryName={category.categoryName}
            categoryId={category._id}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default Page;
