import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-5">
      {/* Дээд талын улаан тууз */}
      <div className="bg-red-500 py-4 mb-16 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap text-lg font-bold">
          Fast fresh
        </div>
      </div>

      {/* Үндсэн контент */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-8 px-10">
        {/* Лого хэсэг */}
        <div className="flex items-center flex-col gap-2">
          <Image src="/Logo.png" alt="logo" width={40} height={40} />
          <h1 className="font-bold text-xl font-semibold">
            Nom<span className="text-red-500">Nom</span>
          </h1>
          <p className="text-xs text-white">Swift delivery</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">NOMNOM</h3>
          <div className="text-sm text-white space-y-2">
            <div>Home</div>
            <div>Contact us</div>
            <div>Delivery zone</div>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">MENU</h3>
          <div className="text-sm text-white space-y-4 grid grid-cols-2">
            <div>Appetizers</div>
            <div>Salads</div>
            <div>Pizzas</div>
            <div>Main dishes</div>
            <div>Desserts</div>
            <div>Appetizers</div>
            <div>Salads</div>
            <div>Pizzas</div>
            <div>Main dishes</div>
            <div>Desserts</div>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">FOLLOW US</h3>
          <div className="flex   gap-4">
            <Image src="/Facebook.png" width={28} height={28} alt="facebook" />
            <Image src="/instagram.png" width={28} height={28} alt="facebook" />
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-gray-800 text-xs text-gray-500 flex gap-6 px-10">
        <p>© Copy right 2026 Nomnom LLC</p>
        <p>Privacy policy</p>
        <p>Terms and conditions</p>
        <p>Cookie policy</p>
      </div>
    </footer>
  );
};

export default Footer;
