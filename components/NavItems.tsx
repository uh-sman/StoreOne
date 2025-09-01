"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
const navItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Category",
    link: "/category",
    icon: "/icons/ArrowDown.svg",
  },
  {
    label: "Promo",
    link: "/promo",
  },
];
const NavItems = () => {
    const pathname = usePathname()
  return (
    <>
      {navItems.map(({ label, link, icon }, index) => (
        <Link href={link} key={index}>
          <div className="flex items-center gap-[12px]">
            <p
              className={cn(
                "font-bold text-xl",
                pathname === link && " text-green-300 text-shadow-2xs"
              )}
            >
              {label}
            </p>
            {icon && (
              <Image
                src={icon}
                alt={label}
                width={32}
                height={32}
                className="w-auto h-auto"
              />
            )}
          </div>
        </Link>
      ))}
    </>
  );
};

export default NavItems;
