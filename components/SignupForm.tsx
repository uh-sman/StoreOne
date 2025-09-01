"use client";
import React, { useEffect, useState } from "react";
import CustomFormField, { FormFieldType } from "./CustomFormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "./ui/form";
import { SignupFormValidation } from "@/lib/validation";
import { signup } from "@/actions";
import { cn } from "@/lib/utils";
import { useSession } from "@/providers/session-provider";
import { redirect } from "next/navigation";

const AuthForm = () => {
  const session = useSession();
  const [isEmailInstead, setIsEmailInstead] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!session) {
      return;
      // redirect('/sign-up')
    } else {
      redirect("/");
    }
  }, []);

  const setShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const toggleEmailInstead = () => {
    if (isEmailInstead) {
      form.unregister("email");
    } else {
      form.unregister("phone");
    }
    setIsEmailInstead(!isEmailInstead);
  };
  const form = useForm<z.infer<typeof SignupFormValidation>>({
    resolver: zodResolver(SignupFormValidation),
    defaultValues: {
      username: "",
      email: "",
      phone: undefined,
      password: "",
    },
    shouldUnregister: true,
  });

  const onSubmit = async (values: z.infer<typeof SignupFormValidation>) => {
    setIsSubmitting(true);
    setError("");

    try {
      // console.log("Form submitted:", values);

      const formData = new FormData();
      formData.append("username", values.username);
      if (values.email) formData.append("email", values.email);
      if (values.phone) formData.append("phone", values.phone);
      formData.append("password", values.password);

      const result = await signup(formData);

      if (result && result?.error) {
        setError(result.error);
      } else {
        console.log("Signup successful");
        // Optional: redirect to verify-otp manually if not handled in action
        // router.push("/verify-otp");
      }
    } catch (err) {
      console.error("Unexpected signup error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
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
            Sign Up
          </h1>
        </section>
        <div>
          <div className=" mb-2">
            <p className="text-[16px] font-medium">
              Name
              <span className="text-[#EA4335]">*</span>
            </p>
          </div>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="username"
            // label="Phone *"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-[16px] font-medium">
              {isEmailInstead ? "Email" : "Phone"}{" "}
              <span className="text-[#EA4335]">*</span>
            </p>
            <button
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
              // label="Phone *"
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

        <p className="shad-error text-center text-sm mt-2"></p>

        {error && <p className="shad-error">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn("signin_button cursor-pointer", {
            "opacity-50": isSubmitting,
          })}
        >
          Sign Up
        </button>
        <div className="flex justify-center">
          <p className="text-[#8E8E93]">or continue with</p>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
