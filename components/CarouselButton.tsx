import Image from "next/image";
import React from "react";

interface CarouselButtonProps {
  onClick: () => void;
  imageUrl: string;
  alt: string;
}

const handleArrowLeft = () => {
  // handle arrow left click
}
const CarouselButton: React.FC<CarouselButtonProps> = ({ onClick, imageUrl, alt }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-100 px-3 py-2 rounded-full overflow-hidden object-cover cursor-pointer"
    >
      <Image
        src={imageUrl}
        alt={alt}
        width={11}
        height={19}
      />
    </button>
  );
};

export default CarouselButton;
