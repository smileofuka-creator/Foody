import Image from "next/image";
import Sidebar from "../menu/sidebar";

const Order = () => {
  return (
    <div className="flex min-h-screen bg-[#F4F4F5] text-black antialiased">
      {/* 1. SIDEBAR */}

      <Sidebar />

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 p-8 max-w-[1200px]">
        {/* Header (admin avatar) */}
        <header className="flex justify-end mb-6">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border border-gray-300">
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
        </header>
      </main>
    </div>
  );
};

export default Order;
