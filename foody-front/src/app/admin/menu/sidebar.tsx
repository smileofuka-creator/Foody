import Image from "next/image"; // Next.js-ийн Image-ийг импортлох
import { LayoutDashboard, Truck, Settings } from "lucide-react"; // Иконтуудыг зөв нэршлээр импортлох

const Sidebar = () => {
  return (
    <div className="w-[240px] h-screen bg-white border-r border-gray-100 flex flex-col justify-between p-6">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <Image src="/Logo.png" alt="logo" width={40} height={40} />

          <div>
            <h1 className="font-bold text-lg leading-tight">NomNom</h1>
            <p className="text-xs text-gray-400">Swift delivery</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          <button className="flex items-center gap-3 w-full px-4 py-3 bg-black text-white rounded-full text-sm font-medium transition">
            <LayoutDashboard className="w-5 h-5" />{" "}
            {/* Иконы хэмжээг w-5 h-5-аар тохируулбал илүү гоё харагдана */}
            Food menu
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-medium transition">
            <Truck className="w-5 h-5" />
            Orders
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-full text-sm font-medium transition">
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
