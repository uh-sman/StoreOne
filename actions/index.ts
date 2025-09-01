"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { LoginFormValidation, OTPSchema, SignupFormValidation } from "@/lib/validation";

export async function login(formData: FormData) {
  const supabase = await createClient(); // Assuming createClient is defined elsewhere

  const rawData = {
    email: formData.get("email")?.toString() || undefined,
    phone: formData.get("phone")?.toString() || undefined,
    password: formData.get("password")?.toString(),
  };

  const parsed = LoginFormValidation.safeParse(rawData); // Assuming LoginFormValidation is defined

  if (!parsed.success) {
    console.error("Validation failed:", parsed.error.flatten());
    return { error: "invalid-input" };
  }

  const { email, phone, password } = parsed.data;

  const credentials =
    email != null
      ? { email, password }
      : phone != null
      ? { phone, password }
      : null;

  if (!credentials) {
    console.log("Missing credentials");
    return { error: "Missing credentials" };
  }

  const { error } = await supabase.auth.signInWithPassword(credentials);

  if (error) {
    console.error("Login failed:", error.message);
    return { error: error.message };
  }

  revalidatePath("/", "layout"); // Assuming revalidatePath is defined

  // Move the redirect outside of the main try...catch that handles other errors
  // This ensures NEXT_REDIRECT is thrown and handled by Next.js itself
  redirect("/");
}

export async function signup(formData: FormData) {
  try {
    const supabase = await createClient();

    const rawData = {
      username: formData.get("username")?.toString(),
      email: formData.get("email")?.toString() || undefined,
      phone: formData.get("phone")?.toString() || undefined,
      password: formData.get("password")?.toString(),
    };

    const parsed = SignupFormValidation.safeParse(rawData);
    if (!parsed.success) {
      console.error("Validation failed:", parsed.error.flatten());
      return { error: "Invalid input" };
    }

    const { username, email, phone, password } = parsed.data;

    const credentials = email
      ? { email, password }
      : phone
      ? { phone, password }
      : null;

    if (!credentials) return { error: "Missing credentials" };

    const { error } = await supabase.auth.signUp({
      ...credentials,
      options: { data: { username } },
    });

    if (error) return { error: error.message };

    if (phone) {
      redirect("/verify-otp");
    } else if (email) {
      redirect("/verify-email");
    }
    // Successful signup — return success explicitly
    return { success: true };
  } catch (err) {
    console.error("Unexpected signup error:", err);
    return { error: "Unexpected server error" };
  }
}
    // const { error } = await supabase.auth.signUp(data);

    

    export async function verifyOtp(formData: FormData) {
      const supabase = await createClient();

      // 1. Get the OTP token from form
      const rawData = {
        token: formData.get("otp"),
      };

      const parsed = OTPSchema.safeParse(rawData);
      if (!parsed.success) {
        return { error: "Invalid OTP input" };
      }

      const { token } = parsed.data;

      // 2. Fetch current user to get their phone number
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user?.phone) {
        return { error: "Phone number not found or user not authenticated." };
      }

      const phone = user.phone;

      // 3. Verify OTP using Supabase
      const { error, data } = await supabase.auth.verifyOtp({
        phone,
        token,
        type: "sms",
      });

      if (error) {
        return { error: error.message };
      }

      // 4. Ensure session is set after OTP verification
      const session = data.session;
      if (!session) {
        return { error: "Session not established after OTP verification." };
      }

      // 5. Redirect on success
      redirect("/");
    }


    export const signOut = async () => {
      const supabase = await createClient()
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error signing out:", error.message);
      }
      redirect("/sign-in")
    }