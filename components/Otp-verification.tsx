"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

import { Form } from "./ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { OTPSchema } from "@/lib/validation";
import { cn } from "@/lib/utils";
import { verifyOtp } from "@/actions";

const AuthForm = () => {
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const [ error, setError ] = useState("")
  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      token: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof OTPSchema>) => {
    try {
      setIsSubmitting(true);

      // console.log("OTP submitted:", values.token);

      const formData = new FormData();
      formData.append("otp", values.token);

      const result = await verifyOtp(formData);

      if (result?.error) {
        console.error("OTP verification failed:", result.error);
        // TODO: Show error to user using toast or UI message
        setError(result.error);
        return;
      }

      // Optionally show success or handle redirection here if not done in verifyOtp
      console.log("OTP verified successfully");
    } catch (err) {
      console.error("Unexpected OTP verification error:", err);
      // TODO: Show general error message to the user
    } finally {
      setIsSubmitting(false); // Always reset submitting state
    }
  };
  

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-6 w-full h-full"
      >
        <section className="mb-12 space-y-[48px]">
          <h1 className="text-green-300 font-bold text-3xl text-center">
            Verification
          </h1>

          <figure className="flex items-center justify-center">
            <div className="w-[150px] h-[150px] bg-gray-100 grid place-content-center rounded-full p-10 animate-pulse duration-700 delay-700 transition-all">
              <div className="bg-green-300 w-[100px] h-[100px] rounded-full p-10">
                <Image
                  src="/icons/lock.svg"
                  alt="verification"
                  width={27}
                  height={30.38}
                />
              </div>
            </div>
          </figure>

          <p className="mt-[10px] font-medium text-md text-center text-[#717171]">
            We have sent the verification code to
            <br />
            <span className="text-black">uumar7000@gmail.com</span>
          </p>
        </section>

        <div className="flex flex-col items-center">
          <InputOTP
            maxLength={6}
            {...form.register("token")}
            value={form.watch("token")}
            onChange={(val) => form.setValue("token", val)}
          >
            <InputOTPGroup className="shad-otp">
              {[...Array(6)].map((_, index) => (
                <InputOTPSlot
                  key={index}
                  className="shad-otp-slot"
                  index={index}
                />
              ))}
            </InputOTPGroup>
          </InputOTP>

          <p className="shad-error text-center text-sm mt-2">
            {form.formState.errors.token?.message}
          </p>
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className={cn("signin_button cursor-pointer", {
            "opacity-50": isSubmitting,
          })}
        >
          Verify
        </button>
      </form>
    </Form>
  );
};

export default AuthForm;
