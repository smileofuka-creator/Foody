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

const AddCategoryDialog = ({
  getCategories,
}: {
  getCategories: () => void;
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log("Event", e);
    setValue(e.target.value);
  };

  const addNewCategory = async () => {
    await axios.post("http://localhost:3000/category", {
      categoryName: value,
    });
    getCategories();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center p-0 transition shadow-sm">
          <Plus className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[460px] h-[272px] p-6 gap-2">
        <DialogHeader>
          <DialogTitle>Add new category</DialogTitle>
        </DialogHeader>
        <p>Category Name</p>
        <input
          placeholder="Type category name ..."
          value={value}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm placeholder:text-gray-400"
        />
        <DialogClose asChild>
          <div>
            <Button onClick={addNewCategory}>Add category</Button>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryDialog;
