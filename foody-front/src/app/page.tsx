"use client"
import Image from "next/image";
  import { useEffect, useState } from "react";
import axios from "axios"; 

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


export default function Foody() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
      
        const res = await axios.get("http://localhost:3002/category");
        
        
        if (res.data.foodCategories) {
          setCategories(res.data.foodCategories);
        }
      } catch (error) {
        console.error("Aldaa garlaa data avahad:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);



  return (
   <section className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Dishes category</h2>
          <div className="flex flex-wrap gap-2 items-center">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                  cat.active
                    ? "bg-white border-red-500 text-black shadow-sm"
                    : "bg-white border-gray-200 text-black hover:border-gray-400"
                }`}
              >
                <span>{cat.categoryName}</span>
                <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                cat.active ? "bg-black text-white" : "bg-gray-100 text-gray-600"
              }`}
            >
              {cat.count ?? 0} 
            </span>
              </button>
            ))}
       
            <button className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-lg hover:bg-red-600 transition">
              +
            </button>
          </div>
        </section>
  );
}











































// import Image from "next/image";

// export default function Foody() {
//   // Категориудын дата
//   const categories = [
//     { name: "All Dishes", count: 112, active: true },
//     { name: "Appetizers", count: 6, active: false },
//     { name: "Salads", count: 3, active: false },
//     { name: "Pizzas", count: 5, active: false },
//     { name: "Lunch favorites", count: 5, active: false },
//     { name: "Main dishes", count: 5, active: false },
//     { name: "Fish & Sea foods", count: 5, active: false },
//     { name: "Brunch", count: 5, active: false },
//     { name: "Side dish", count: 5, active: false },
//     { name: "Desserts", count: 5, active: false },
//     { name: "Beverages", count: 5, active: false },
//   ];

//   // Хоолнуудын дата (Жишээ болгож 1 карт орууллаа, хэдэн ч удаа map хийж болно)
//   const appetizers = Array(6).fill({
//     title: "Brie Crostini Appetizer",
//     price: "$12.99",
//     description: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
//     image: "/avatar.png", // Өөрийн хоолны зургийн замыг тавина уу
//   });

//   return (
//     <div className="flex min-h-screen bg-[#F4F4F5] text-black antialiased">
      
//       {/* 1. SIDEBAR (Хажуугийн цэс) */}
//       <aside className="w-[240px] bg-white border-r border-gray-100 flex flex-col justify-between p-6">
//         <div>
//           {/* Logo */}
//           <div className="flex items-center gap-3 mb-8">
//             <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
//               🍕
//             </div>
//             <div>
//               <h1 className="font-bold text-lg leading-tight">NomNom</h1>
//               <p className="text-xs text-gray-400">Swift delivery</p>
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <nav className="space-y-2">
//             <button className="flex items-center gap-3 w-full px-4 py-3 bg-black text-white rounded-full text-sm font-medium transition">
//               <span className="text-lg">🎛️</span>
//               Food menu
//             </button>
//             <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-medium transition">
//               <span className="text-lg">📦</span>
//               Orders
//             </button>
//           </nav>
//         </div>
//       </aside>

//       {/* 2. MAIN CONTENT AREA (Үндсэн хэсэг) */}
//       <main className="flex-1 p-8 max-w-[1200px]">
        
//         {/* Header (Хэрэглэгчийн аватар) */}
//         <header className="flex justify-end mb-6">
//           <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border border-gray-300">
//             {/* <Image src="/avatar.png" alt="Avatar" width={40} height={40} className="object-cover"/> */}
//             <div className="w-full h-full bg-purple-400"></div> {/* Түр зуурын аватар */}
//           </div>
//         </header>

//         {/* Dishes Category Section */}
//         <section className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
//           <h2 className="text-xl font-bold mb-4">Dishes category</h2>
//           <div className="flex flex-wrap gap-2 items-center">
//             {categories.map((cat, idx) => (
//               <button
//                 key={idx}
//                 className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border transition ${
//                   cat.active
//                     ? "bg-white border-red-500 text-black shadow-sm"
//                     : "bg-white border-gray-200 text-black hover:border-gray-400"
//                 }`}
//               >
//                 <span>{cat.name}</span>
//                 <span className={`text-xs px-2 py-0.5 rounded-full ${cat.active ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'}`}>
//                   {cat.count}
//                 </span>
//               </button>
//             ))}
//             {/* Нэмэх товч */}
//             <button className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-lg hover:bg-red-600 transition">
//               +
//             </button>
//           </div>
//         </section>

//         {/* Appetizers Section */}
//         <section className="bg-white rounded-2xl p-6 shadow-sm">
//           <h2 className="text-xl font-bold mb-6">Appetizers (6)</h2>
          
//           {/* Grid Layout */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
//             {/* Card 1: Add New Dish (Нэмэх карт) */}
//             <div className="border-2 border-dashed border-red-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-red-50/50 transition h-full min-h-[280px]">
//               <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center text-xl font-bold mb-3">
//                 +
//               </div>
//               <p className="text-sm font-medium text-gray-800">Add new Dish to<br/>Appetizers</p>
//             </div>

//             {/* Food Cards Loops (Хоолны картууд) */}
//             {appetizers.map((item, index) => (
//               <div key={index} className="border border-gray-100 rounded-2xl p-3 bg-white shadow-sm flex flex-col justify-between">
                
//                 {/* Image Container */}
//                 <div className="relative w-full h-[140px] bg-gray-100 rounded-xl overflow-hidden mb-3">
//                   {/* Жишээ зураг орлуулагч */}
//                   <div className="w-full h-full bg-amber-900 opacity-80 flex items-center justify-center text-white">Food Image</div>
//                   {/* Засах харандаа товч */}
//                   <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
//                     ✏️
//                   </button>
//                 </div>

//                 {/* Title & Price */}
//                 <div>
//                   <div className="flex justify-between items-start gap-2 mb-1">
//                     <h4 className="font-semibold text-sm text-red-500 leading-tight">{item.title}</h4>
//                     <span className="font-bold text-sm text-gray-900 whitespace-nowrap">{item.price}</span>
//                   </div>
//                   {/* Description */}
//                   <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
//                     {item.description}
//                   </p>
//                 </div>

//               </div>
//             ))}

//           </div>
//         </section>

//       </main>
//     </div>
//   );
// }