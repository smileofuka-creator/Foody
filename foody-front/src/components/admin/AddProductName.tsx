"use client"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { ImagePlus, Plus } from "lucide-react"
import { useState } from "react"
import axios from "axios"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"


interface AddDishDialogProps {
  categoryName: string;
}


export default function AddDishDialog({ categoryName }: AddDishDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Энд фронд талын датагаа цуглуулж аваад API руугаа илгээнэ
    console.log("Dish нэмэгдлээ");
    setOpen(false); // Хүсэлт амжилттай болбол цонхыг хаана
  };





const AddProductName = ({getCategories}:{getCategories: ()=> void; }) => {

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        console.log("Event", e);
        setValue(e.target.value);
    };

    const addNewCategory = async ()=> {
        await axios.post("http://localhost:3005/category",{
            categoryName: value,
        });
        getCategories();

    };
    return (
          <Dialog open={open} onOpenChange={setOpen}>
      {/* 1. ИДЭВХЖҮҮЛЭХ ТОВЧЛУУР (Өмнөх улаан тасархай хүрээтэй карт) */}
      <DialogTrigger asChild>
        <div className="border-2 border-dashed border-red-500 rounded-2xl flex flex-col items-center justify-center p-6 min-h-[280px] cursor-pointer hover:bg-red-50/50 transition group">
          <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white mb-3 border border-transparent transition duration-300 group-hover:scale-105 group-hover:bg-white group-hover:text-black group-hover:border-red-500">
            <Plus className="w-6 h-6" />
          </div>
          <p className="text-sm font-medium text-gray-900 text-center">
            Add new Dish to<br />{categoryName}
          </p>
        </div>
      </DialogTrigger>

      {/* 2. ПОП-АП ЦОНХНЫ АГУУЛГА */}
      <DialogContent className="sm:max-w-[460px] rounded-3xl p-6 bg-white border-0 shadow-lg">
        <DialogHeader className="flex flex-row items-center justify-between border-b pb-4">
          <DialogTitle className="text-lg font-bold text-gray-900">
            Add new Dish to {categoryName}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {/* Нэр болон Үнэ (Хажуу хажуугаараа байрлах) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700">Food name</label>
              <Input 
                type="text" 
                placeholder="Placeholder" 
                className="rounded-xl border-gray-200 h-10 text-sm focus-visible:ring-red-500"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700">Food price</label>
              <Input 
                type="text" 
                placeholder="Placeholder" 
                className="rounded-xl border-gray-200 h-10 text-sm focus-visible:ring-red-500"
                required
              />
            </div>
          </div>

          {/* Орц (Ingredients) */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700">Ingredients</label>
            <Textarea 
              placeholder="Placeholder" 
              className="rounded-xl border-gray-200 min-h-[80px] text-sm resize-none focus-visible:ring-red-500"
              required
            />
          </div>

          {/* Зураг оруулах хэсэг (Food image) */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700">Food image</label>
            <div className="border border-dashed border-blue-200 bg-blue-50/30 hover:bg-blue-50/60 rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition">
              <div className="text-gray-400">
                <ImagePlus className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-600 font-medium">
                Choose a file or drag & drop it here
              </span>
              {/* Энд далд хэлбэртэй жинхэнэ input[type=file] байрлаж болно */}
            </div>
          </div>

          {/* Батлах товчлуур */}
          <div className="flex justify-end pt-2">
            <Button 
              type="submit" 
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl px-5 py-2.5 text-sm transition"
            >
              Add Dish
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
    )
}

export default AddProductName

