"use client";

import React, { useState } from "react";
import CustomFormField, { FormFieldType } from "./CustomFormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "./ui/form";
import { LoginFormValidation } from "@/lib/validation";
import { login } from "@/actions";
import { redirect } from "next/navigation";

const AuthForm = () => {
  const [isEmailInstead, setIsEmailInstead] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const toggleEmailInstead = () => {
    if (isEmailInstead) {
      form.unregister("email");
    } else {
      form.unregister("phone");
    }
    setIsEmailInstead(!isEmailInstead);
  };
  
  const setShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const form = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      phone: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginFormValidation>) => {
    const formData = new FormData();
    if (values.email) formData.append("email", values.email);
    if (values.phone) formData.append("phone", values.phone);
    formData.append("password", values.password);

    try {
      const result = await login(formData);
      if (result && result.error) {
        console.error("Login failed");
        setError(result.error);
      }
        console.log("Login successful");
    } catch (err) {
      console.error("Unexpected login error:", err);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-6 w-full h-full"
      >
        <section className="mb-12 space-y-4">
          <h1 className="text-green-300 font-bold text-3xl text-center">
            Sign In
          </h1>
          <p className="mt-[10px] font-medium text-md text-center">
            Sign In to continue to shopping
          </p>
        </section>

        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-[16px] font-medium">
              {isEmailInstead ? "Email" : "Phone"}{" "}
              <span className="text-[#EA4335]">*</span>
            </p>
            <button
              type="button"
              onClick={toggleEmailInstead}
              className="text-[16px] font-medium text-green-300 cursor-pointer"
            >
              {isEmailInstead ? "Use Phone Instead" : "Use Email Instead"}
            </button>
          </div>

          {isEmailInstead ? (
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              placeholder="Enter your email"
            />
          ) : (
            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="phone"
              placeholder="(555) 123-4567"
            />
          )}
        </div>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="password"
          label="Password"
          placeholder="*********"
          iconSrc="/icons/eye_icon.svg"
          iconAlt="eye"
          showPassword={isPasswordVisible}
          setShowPassword={setShowPassword}
        />

        {error && <p className="shad-error">{error}</p>}

        <button type="submit" className="signin_button cursor-pointer">
          Sign In
        </button>

        <div className="flex justify-center">
          <p className="text-[#8E8E93]">or continue with</p>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
