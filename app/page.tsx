import HeroComponent from "@/components/HeroComponent";
import Category from "@/components/BrowseByCategory";
import CardComponent from "@/components/CardComponent";
import CardWrapper from "@/components/CardWrapper";
import { cardItems, carouselImages } from "@/constants/utils";
import OfferedServices from "@/components/Services";
import Footer from "@/components/Footer";
import { CarouselComponent } from "@/components/CarouselComponent";

export default function Home() {
  return (
    <main className="min-h-full flex flex-col">
      <div className="w-full h-full flex-1">
        {/* <HeroComponent imageUrl="/images/Hero_banner.svg" /> */}
        <CarouselComponent images={carouselImages} containerStyle="my-16" />
        {/* <Category title="Browse By Category" type="slideable" /> */}
        <CardWrapper title="New Arrival" items={cardItems} />
        <div className="mx-2">
          <HeroComponent imageUrl="/images/sale_image.svg" />
        </div>
        <div className="mx-2">
          <CardWrapper title="Most Popular" items={cardItems} />
        </div>
        <OfferedServices />
      </div>
      <Footer />
    </main>
  );
}
