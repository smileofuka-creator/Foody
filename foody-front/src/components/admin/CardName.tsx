import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";

interface FoodProps {
  food: {
    _id: string;
    foodName: string;
    price?: number;
    ingredients?: string;
    image?: string;
  };
}

const ProductName = ({ food }: FoodProps) => {
  return (
    <Card className="rounded-2xl overflow-hidden border border-gray-100 shadow-none flex flex-col justify-between min-h-[280px]">
      <div>
        <div className="relative w-full h-[160px] bg-gray-100">
          <Image
            src={"/mainfood.png"}
            alt={food?.foodName}
            fill
            className="object-cover"
          />
          <Button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 transition">
            <Pen className="w-4 h-4" />
          </Button>
        </div>
        <CardHeader className="p-4 pb-1">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-sm font-semibold text-red-500 leading-snug">
              {food?.foodName}
            </CardTitle>
            <span className="text-sm font-bold text-gray-950">
              ${food?.price || "12.99"}
            </span>
          </div>
          <CardDescription className="text-xs text-gray-500 line-clamp-2 mt-1.5 leading-relaxed">
            {food?.ingredients || "No ingredients provided."}{" "}
          </CardDescription>
        </CardHeader>
      </div>
    </Card>
  );
};

export default ProductName;
