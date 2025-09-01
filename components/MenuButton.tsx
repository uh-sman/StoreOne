import React from "react";
import FlagComponent from "./FlagComponent";
import Image from "next/image";
import AccountModal from "./AccountModal";

const MenuButton = () => {
  return (
    <>
      {/* <button></button> */}
      <FlagComponent />
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
          {/* add actual cart item number later */}8
        </span>
      </button>
      {/* User Account */}
      <AccountModal />
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
    </>
  );
};

export default MenuButton;
