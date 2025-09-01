"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface CarouselComponentProps {
  className?: string;
  cardStyle?: string;
  images: string[];
  type?: "billboard" | "auth";
  containerStyle?: string;
}
export function CarouselComponent({
  className,
  cardStyle,
  images,
  containerStyle,
  type = "billboard",
}: CarouselComponentProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const itemCount = images.length;

  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    // Set initial index
    setCurrent(api.selectedScrollSnap());

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // max-w-[1189px]

  return (
    <div
      className={`flex flex-col items-center ${containerStyle} relative h-full gap-4 space-y-[20vh]`}
    >
      <Carousel
        plugins={[plugin.current]}
        className={
          className ? className : "w-full max-w-[1189px] h-full max-h-[680px]"
        }
        // style={{ height: "360px", width: "1189px" }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent className="flex w-full h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex-[0_0_100%] w-full">
              <div className={cardStyle ?? "w-full h-[480px]"}>
                <Card className="w-full h-full p-0 m-0 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`carousel-image-${index}`}
                      fill
                      className="object-cover object-center rounded-[20px]"
                      sizes="100vw"
                      priority={index === 0}
                    />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      <div className="flex gap-2 mt-2 absolute bottom-[24px] left-[37.5px]">
        {Array.from({ length: itemCount }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "transition-all",
              current === index
                ? "bg-active_card w-[20px] h-[10px] rounded-full"
                : "bg-not_active_card w-[10px] h-[10px] rounded-full"
            )}
          />
        ))}
      </div>
      </Carousel>
      {/* Indicators */}
    </div>
  );
}

// I want the width of the carousel to be 1189px and the height to be 360px.
