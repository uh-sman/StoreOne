"use client";
import { categoryItems } from "@/constants/utils";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CarouselButton from "./CarouselButton";

interface CategoryProps {
  // TODO: add props
  title: string;
  type: "slideable" | "notSlideable";
}

const Category: React.FC<CategoryProps> = ({ title, type }) => {

  const handleArrowRight = () => {
    const container = document.getElementById("category-scroll-container");
    if (container) {
      container.scrollBy({ left: 274, behavior: "smooth" });
    }
  };

  const handleArrowLeft = () => {
    const container = document.getElementById("category-scroll-container");
    if (container) {
      container.scrollBy({ left: -274, behavior: "smooth" });
    }
  };
  return (
    <section className="section w-full items-center flex justify-center flex-col px-2">
      {/* <div> */}
      <div className="flex justify-between items-center w-full px-4 max-w-[1188px]">
        <h1 className="font-bold text-4xl mb-[27.5px] pt-2">
          Browse By Category
        </h1>
        <div className="flex gap-[10px] items-center">
          <CarouselButton
            imageUrl="/icons/chevron_left.svg"
            onClick={handleArrowLeft}
            alt="arrow_left"
          />
          <CarouselButton
            imageUrl="/icons/chevron_right.svg"
            onClick={handleArrowRight}
            alt="arrow_right"
          />
        </div>
      </div>
      <section
        id="category-scroll-container"
        className="flex items-center gap-[24px] max-w-[1188px] overflow-x-scroll scrollbar-hide"
      >
        {categoryItems.map(({ label, imageUrl }, index) => (
          <figure
            className="min-w-[250px] min-h-[177px] snap-start transition-all duration-300 hover:scale-105 hover:shadow-lg"
            key={index}
          >
            {/* <div> */}
            <Image
              src={imageUrl || "/images/clothing.svg"}
              alt={label || "clothing_image"}
              width={250}
              height={50}
              className=" rounded-t-[12px] object-cover bg-center w-[350px] h-[150px]"
            />
            <div className="bg-gray-100 p-3 rounded-b-xl text-center font-bold text-md">
              {label}
              {/* </div> */}
            </div>
          </figure>
        ))}
      </section>
      {/* </div> */}
    </section>
  );
};

export default Category;

{
  /* <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction> */
}


// {/* <section
//   id="category-scroll-container"
//   className="flex items-center gap-[24px] max-w-[1188px] overflow-x-scroll scrollbar-hide"
// >
//   {categoryItems.map(({ label, imageUrl }, index) => (
//     <figure
//       className="min-w-[250px] min-h-[177px] snap-start transition-all duration-300 hover:scale-105 hover:shadow-lg"
//       key={index}
//     >
//       {/* <div> */}
//       <Image
//         src={imageUrl || "/images/clothing.svg"}
//         alt={label || "clothing_image"}
//         width={250}
//         height={50}
//         className=" rounded-t-[12px] object-cover bg-center w-[350px] h-[150px]"
//       />
//       <div className="bg-gray-100 p-3 rounded-b-xl text-center font-bold text-md">
//         {label}
//         {/* </div> */}
//       </div>
//     </figure>
//   ))}
// </section>; */}