import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="">
        <div>
          <Image
            src="/icons/StoreOne.svg"
            alt="logo"
            width={26}
            height={22}
            className="w-auto h-fit"
          />
        </div>
      </Link>
      <NavItems />
      <section className="flex max-md:gap-[18px] gap-[36px]">
        {/* <button></button> */}
        {/* FlagComponent */}
        {/* < */}
        <button className="relative">
          <Image
            src="/icons/heart.svg"
            alt="heart"
            width={32}
            height={32}
            className="max-w-md:w-[20px] max-w-md:h-[20px] w-[32px] h-[32px]"
          />
          <span className="absolute bg-green-300 top-3 -right-2 text-white px-2 rounded-full font-bold text-md">
            {/* add actual cart item number later */}
            8
          </span>
        </button>
        <button>
          <Image
            src="/icons/user_account.svg"
            alt="heart"
            width={32}
            height={32}
            className="max-w-md:w-[20px] max-w-md:h-[20px] w-[32px] h-[32px]"
          />
        </button>
        <button className="bg-black relative p-2 rounded-full">
          <Image
            src="/icons/shopping_cart.svg"
            alt="heart"
            width={32}
            height={32}
            className="max-w-md:w-[20px] max-w-md:h-[20px] w-[32px] h-[32px]"
          />
          <span className="absolute bg-green-300 top-3 -right-2 text-white px-2 rounded-full font-bold text-md">
            {/* add actual cart item number later */}8
          </span>
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
