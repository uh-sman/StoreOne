import { CarouselComponent } from "@/components/CarouselComponent";
import { carouselImages } from "@/constants/utils";
import React from "react";
import Image from "next/image";
import { Form } from "@/components/ui/form";
import AuthForm from "@/components/Otp-verification";
import Link from "next/link";
const VerifyOtp = () => {
  return (
    <main className="w-full section max-w-7xl mx-auto py-6 flex items-center justify-center h-full">
      <div className="flex items-center max-w-[910px] max-h-[836px] border-1 rounded-[32px]">
        {/* <div className=""> */}
        <figure className="hidden lg:block">
          <Image
            src="/images/sign_up_image.svg"
            width={450}
            height={836}
            className="w-auto h-auto rounded-[12px]"
            alt="images"
          />
        </figure>
        {/* </div> */}
        <div className="h-full flex flex-col px-4 items-center justify-center min-w-[450px] py-[20px]">
          <AuthForm />
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

export default VerifyOtp;
