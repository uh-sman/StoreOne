import { CardComponentProps } from "@/constants";
import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";

const CardComponent = ({
  title,
  rating,
  imageUrl,
  price,
  discount,
  review,
  favorite,
  onSale,
}: CardComponentProps) => {
  return (
    <Card className="p-2 rounded-[12px] w-[164px] md:w-auto">
      <Image
        src={imageUrl}
        alt="clothing_image"
        width={248}
        height={295}
        className="rounded-[12px]"
      />
      <CardContent className="flex flex-col py-0 px-2">
        <p className="text-md font-medium">{title ? title : "Hoodie Gray"}</p>
        {/* Stars */}
        <div className="flex items-center gap-[6px]">
          {[...Array(5)].map((_, index) => (
            <Image
              src="/icons/star.svg"
              key={index}
              width={10}
              height={10}
              alt="star"
            />
          ))}
          {/* Reviews */}
          <p className="text-[#828282] text-sm">
            {rating ? rating : "5.0"}{" "}
            <span>{review ? review : "(60 Review)"}</span>
          </p>
        </div>
        <div className="pt-[14px]">
          <p className="font-bold text-md">$ {price ? price : "60.00"}</p>
        </div>
      </CardContent>
      {/* <CardFooter className="px-2"></CardFooter> */}
      {/* </section> */}
    </Card>
  );
};

export default CardComponent;
