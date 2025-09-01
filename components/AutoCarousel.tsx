"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";

interface AutoCarouselProps {
  images: string[];
  autoSlideInterval?: number;
  className?: string;
  styles?: React.CSSProperties;
}

export default function AutoCarousel({
  images,
  autoSlideInterval = 7000,
  className = "",
  styles,
}: AutoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, autoSlideInterval);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered, images.length, autoSlideInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div
        className={`relative w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center ${className}`}
      >
        <p className="text-gray-500">No images provided</p>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-lg ${className}`}
      style={styles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main image container */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority={currentIndex === 0}
        />
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-active_card w-[20px] h-[10px] rounded-full"
                  : "bg-not_active_card w-[10px] h-[10px] rounded-full"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide counter */}
      {/* {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/30 text-white px-2 py-1 rounded text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )} */}
    </div>
  );
}



{/* <AutoCarousel
            images={sampleImages}
            autoSlideInterval={3000}
            className="shadow-lg"
            styles={{ height: "400px", width: "100%" }}
          /> */}