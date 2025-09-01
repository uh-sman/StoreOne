import z from "zod";

export const SignupFormValidation = z
  .object({
    username: z.string().min(1),
    password: z.string().min(6),
    email: z.string().email().optional().or(z.literal("")),
    phone: z.string().min(1).optional().or(z.literal("")),
  })
  .refine((data) => data.email || data.phone, {
    message: "Either email or phone is required",
  });


export const LoginFormValidation = z
  .object({
    email: z.string().email("Invalid email address").optional(),
    phone: z
      .string()
      .regex(/^\+\d{10,15}$/, "Invalid phone number")
      .optional(),
    password: z.string().min(8, "Password must be at least 8 characters."),
  })
  .refine((data) => data.email || data.phone, {
    message: "Either email or phone number is required.",
    path: ["email"],
  });

export const OTPSchema = z.object({
  token: z.string().length(6, "OTP must be 6 digits"),
});
