import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import FlagComponent from "./FlagComponent";
import AccountModal from "./AccountModal";
import MenuButton from "./MenuButton";

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
      <nav className="hidden md:flex items-center gap-[18px] lg:gap-[36px]">
        <div className="flex items-center gap-[18px] lg:gap-[36px]">
          <NavItems />
        </div>
        {/* Input Field */}
        <div className="hidden bg-gray-200 h-fit w-[418px] xl:flex items-center rounded-[20px] py-2 px-4">
          <Image
            src="/icons/Search.svg"
            alt="search-icon"
            width={26}
            height={26}
            className=""
          />
          <input className="input" placeholder="Search" />
        </div>
      </nav>
      {/* <NavItems /> */}
      <section className="hidden lg:flex max-md:gap-[18px] gap-[36px]">
        <MenuButton />
      </section>

      {/* Mobile Nav */}
      <section className="hidden relative">
        <div className="shadow bg-gray-50/80 transition-opacity p-8 flex flex-col justify-start absolute top-0 right-0 gap-5 w-[200px] rounded-lg">
        <NavItems />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
