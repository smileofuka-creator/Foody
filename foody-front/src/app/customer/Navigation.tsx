import { Input } from "@/components/ui/input";
import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  return (
    <header className="w-[1440px] h-[88px] mx-auto flex items-center justify-between px-10 bg-black">
      <div className="flex items-center gap-3">
        <Image src="/Logo.png" alt="logo" width={40} height={40} />
        <div>
          <h1 className="font-bold text-lg leading-tight text-white">
            Nom<span className="text-red-500">Nom</span>
          </h1>
          <p className="text-xs text-white">Swift delivery</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Input
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm"
          type="text"
          placeholder="Delivery address: Add Location"
        />

        <ShoppingCart className="w-5 h-5 p-1 bg-gray-100 rounded-full" />
        <User className=" w-5 h-5 bg-red-500 rounded-full text-white" />
      </div>
    </header>
  );
};

export default Navigation;
