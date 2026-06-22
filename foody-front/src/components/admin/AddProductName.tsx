"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

const AddProductName = ({
  getFood,
  categoryId,
}: {
  getFood: () => void;
  categoryId: string;
}) => {
  const [foodName, setFoodname] = useState("");

  const handleFoodName = (e) => {
    console.log("Event", e);
    setFoodname(e.target.value);
  };

  const [price, setPrice] = useState("");
  const handlePrice = (e) => {
    console.log("Event", e);
    setPrice(e.target.value);
  };
  const [ingredients, setIngredients] = useState("");
  const handleIngredients = (e) => {
    console.log("Event", e);
    setIngredients(e.target.value);
  };

  const addNewFood = async () => {
    await axios.post("http://localhost:3000/food", {
      foodName: foodName,
      price: Number(price),
      ingredients: ingredients,
      category: categoryId,
      image:
        "https://www.ferwer.com/img/blog/objevte-umeni-pripravy-nigiri-sushi-jako-doma-bez-stresu-1753961499827.webp",
    });
    getFood();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="border-2 border-dashed border-red-500 rounded-2xl flex flex-col items-center justify-center p-6 min-h-[280px] cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white mb-3 border border-transparent transition duration-300 hover:scale-105 hover:bg-black hover:text-white">
            <Plus className="w-6 h-6" />
          </div>
          <p className="text-sm font-medium text-gray-900 text-center">
            Add new dish to
            <br />
            Appetizers
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[460px] rounded-3xl p-6 bg-white border-0 shadow-lg">
        <DialogHeader className="flex flex-row items-center justify-between  pb-4">
          <DialogTitle className="text-lg font-bold text-gray-900">
            Add new Dish to
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700">
                Food name
              </label>
              <Input
                onChange={handleFoodName}
                type="text"
                placeholder="Placeholder"
                className="rounded-xl border-gray-200 h-10 text-sm focus-visible:ring-gray-500"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700">
                Food price
              </label>
              <Input
                onChange={handlePrice}
                type="text"
                placeholder="Placeholder"
                className="rounded-xl border-gray-200 h-10 text-sm focus-visible:ring-gray-500"
                required
              />
            </div>
          </div>

          {/*  Ingredients */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700">
              Ingredients
            </label>
            <Textarea
              onChange={handleIngredients}
              placeholder="Placeholder"
              className="rounded-xl border-gray-200 min-h-[80px] text-sm resize-none focus-visible:ring-gray-500"
              required
            />
          </div>

          {/* zurag */}
          {/* <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700">
              Food image
            </label>
            <div className="border border-dashed border-blue-200 bg-blue-50/30 hover:bg-blue-50/60 rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition">
              <div className="text-gray-400">
                <ImagePlus className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-600 font-medium">
                Choose a file or drag & drop it here
              </span>
            </div>
          </div> */}

          <DialogClose asChild>
            <div className="flex justify-end pt-2">
              <Button
                onClick={addNewFood}
                className="bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl px-5 py-2.5 text-sm transition"
              >
                Add Dish
              </Button>
            </div>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductName;
