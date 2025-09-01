import { CarouselComponent } from "@/components/CarouselComponent";
import { carouselImages } from "@/constants/utils";
import React from "react";
import Image from "next/image";
import { Form } from "@/components/ui/form";
import AuthForm from "@/components/LoginForm";
import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";
const SignIn = () => {
  return (
    <main className="w-full section max-w-7xl mx-auto py-6 flex items-center justify-center h-full">
      <div className="flex items-center max-w-[910px] max-h-[836px] border-1 rounded-[32px]">
        <div className="relative">
          <div className="hidden lg:block">
            <AutoCarousel
              images={carouselImages}
              autoSlideInterval={3000}
              className="shadow-lg"
              styles={{ height: "836px", width: "450px" }}
            />
          </div>
          <div className="absolute top-4 left-6 z-100">
            <p className="text-5xl font-medium text-white text-shadow-[20px]">
              StoreOne
            </p>
          </div>
        </div>

        <div className="h-full flex flex-col px-4 items-center justify-center min-w-[450px] py-[20px]">
          <AuthForm />
          <section title="socials" className="flex gap-[48px] mt-[32px]">
            <button className="hover:cursor-pointer">
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={64}
                height={64}
              />
            </button>
            <button className="hover:cursor-pointer">
              <Image
                src="/icons/google.svg"
                alt="facebook"
                width={64}
                height={64}
              />
            </button>
          </section>
          <p className="text-[#8E8E93] text-md font-semibold mt-[64px]">
            Don't have an account?{" "}
            <Link
              href={"/sign-up"}
              className="text-green-300 hover:cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
