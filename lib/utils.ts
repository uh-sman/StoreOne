import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export type userProps = {
  name: string;
  email: string;
  phone: number;
  password: string;
}

export interface ProductType {
  name: string;
  description?: string;
  price: number;
  category_id?: string;
  rating?: number;
  review_count?: number;
  discount_type?: "percentage" | "fixed";
  discount_value?: number;
  image_url?: string;
}