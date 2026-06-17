"use client"
import Image from "next/image";
  import { useEffect, useState } from "react";
import axios from "axios"; 
import { LucideLayoutDashboard, Menu, Pen, Plus, Settings, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import AddCategoryDialog from "@/components/admin/AddCategoryDialog";
import { Skeleton } from "@/components/ui/skeleton";
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
import ProductName from "@/components/admin/ProductName";

interface CategoryType {
  _id: string;
  categoryName: string;
  active?: boolean; 
  count?: number;  
}

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


const  AdminMenuPage=() => {

    const [categories, setCategories]= useState<CategoryType[]>([]);
    const [loading, setloading]= useState(false)


    const getCategories= async ()=> {
        setloading (true);
        const response = await axios.get("http://localhost:3005/category");

        console.log ("irj bga hariu", response);

        setCategories(response.data.foodCategories);
        setloading(false);
};

useEffect(()=>{ 
    getCategories();
    
},[]);
    




  return (
    <div className="flex min-h-screen bg-[#F4F4F5] text-black antialiased">
      
       {/* 1. SIDEBAR */}
       <aside className="w-[240px] bg-white border-r border-gray-100 flex flex-col justify-between p-6">
         <div>
           {/* Logo */}
           <div className="flex items-center gap-3 mb-8">

            <Image src="/Logo.png" alt="logo" width={40} height={40}/>
            
             <div>
               <h1 className="font-bold text-lg leading-tight">NomNom</h1>
               <p className="text-xs text-gray-400">Swift delivery</p>
             </div>
           </div>

           {/* Navigation Links */}
           <nav className="space-y-2">
             <button className="flex items-center gap-3 w-full px-4 py-3 bg-black text-white rounded-full text-sm font-medium transition">
               <LucideLayoutDashboard  className="text-lg"/>
               Food menu
             </button>
             <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-medium transition">
               <Truck className="text-lg"/>
               Orders
             </button>
             <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-medium transition">
               <Settings className="text-lg"/>
               Settings123
             </button>
           </nav>
         </div>
       </aside>

       {/* 2. MAIN CONTENT AREA */}
       <main className="flex-1 p-8 max-w-[1200px]">
        
           {/* Header (admin avatar) */}
           <header className="flex justify-end mb-6">
             <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border border-gray-300">
               <Image src="/avatar.png" alt="Avatar" width={36} height={36} className="object-cover"/>
             
             </div>
           </header>

         {/* Dishes Category Section */}
           <section className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                  <h2 className="text-xl font-bold mb-4">Dishes category</h2>
                  <div className="flex flex-wrap gap-2 items-center">

                    {loading ? ( <>
                    <Skeleton className="h-10 w-24"/>
                    <Skeleton className="h-10 w-24"/>
                    <Skeleton className="h-10 w-24"/>
                    <Skeleton className="h-8 w-8 rounded-full" />
                    </> ) :(
                        
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
                            
                            {/* Дата уншиж дууссаны дараа жинхэнэ товчлуур гарч ирнэ */}
                            <AddCategoryDialog getCategories={getCategories} />
                            </>
                        )}
                  </div>
                </section>  

                {/* Product container */}
                <section className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        Apple <span className="text-gray-400 text-sm font-normal">(6)</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        
                       {/* hool nemehed */}
                
                        <div className="border-2 border-dashed border-red-500 rounded-2xl flex flex-col items-center justify-center p-6 min-h-[280px] cursor-pointer">
                            
                            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white mb-3 border border-transparent transition duration-300 hover:scale-105 hover:bg-black hover:text-white">
                                <Plus className="w-6 h-6" /> 
                            </div>
                            <p className="text-sm font-medium text-gray-900 text-center">
                                Add new dish to<br />Appetizers
                            </p>
                        </div>

                        {/* card heseg */}

                        <ProductName/>
                     

                    </div>
                </section>

           
       </main>
     </div>

  );
}


export default AdminMenuPage