import { cn } from "@/lib/utils";
import { useSession } from "@/providers/session-provider";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Profile from "./Profile";

interface ButtonProps {
  className: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  href: string;
}
// Define any props you need for the AccountM
const AccountModal = async () => {
  const supabase = await createClient();
  const { data: user, error } = await supabase.auth.getUser();
  return (
    <nav className="flex items-center">
      <nav className="relative group">
        <Image
          src="/icons/user_account.svg"
          alt="heart"
          width={32}
          height={32}
          className="max-w-md:w-[20px] max-w-md:h-[20px] w-[32px] h-[32px] hover:cursor-pointer"
        />
        {user.user ? (
          <section className="absolute flex flex-col gap-[10px] right-0 mt-2 w-[217px] bg-white border rounded-[8px] py-[10px] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-10">
            <Profile user={user.user}/>
          </section>
        ) : (
          <section className="absolute flex flex-col gap-[10px] right-0 mt-2 w-[250px] bg-white border rounded-[8px] p-[15px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-10">
            <Button
              href="/sign-up"
              className="px-[10px] py-[6px] rounded-[25px] group-hover:cursor-pointer text-center"
              variant="primary"
            >
              Register your account
            </Button>
            <p className="text-black font-bold text-md text-center">OR</p>
            <Button
              href="/sign-in"
              className="px-[10px] py-[6px] rounded-[25px] group-hover:cursor-pointer text-center"
              variant="secondary"
            >
              Login to your account
            </Button>
          </section>
        )}
      </nav>
    </nav>
  );
};

// bg-white rounded-[8px] p-[15px]

export default AccountModal;

const Button = ({ className, variant = "primary", ...props }: ButtonProps) => {
  return (
    <Link
      className={cn(
        `${className}`,
        variant === "primary"
          ? "bg-green-50 text-green-300"
          : "bg-green-300 text-white"
      )}
      {...props}
    >
      {props.children}
    </Link>
  );
};

// `btn ${variant} `;
