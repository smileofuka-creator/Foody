
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
const ProductName = () => {

    return (
           <Card className="rounded-2xl overflow-hidden border border-gray-100 shadow-none flex flex-col justify-between">
                        <div>
                            <div className="relative w-full h-[160px] bg-gray-100">
                            <Image 
                                src="/mainfood.png" 
                                alt="Brie Crostini Appetizer" 
                                fill
                                className="object-cover"
                            />
                            <Button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 transition">
                                <Pen/>
                            </Button>
                            </div>
                            <CardHeader className="p-4 pb-1">
                            <div className="flex justify-between items-start gap-2">
                                <CardTitle className="text-sm font-semibold text-red-500 leading-snug">
                                Brie Crostini Appetizer
                                </CardTitle>
                                <span className="text-sm font-bold text-gray-950">$12.99</span>
                            </div>
                            <CardDescription className="text-xs text-gray-500 line-clamp-2 mt-1.5 leading-relaxed">
                                Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
                            </CardDescription>
                            </CardHeader>
                        </div>
                        </Card>
    )
}

export default ProductName