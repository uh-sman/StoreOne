import { ProductType } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";
import { safeParse } from "zod/v4/core";

export const createProduct = async (product: ProductType) => {
  const supabase = await createClient();
  try {
    const {
      name,
      description = "",
      price,
      category_id,
      rating = 0,
      review_count = 0,
      discount_type,
      discount_value = 0,
      image_url,
    } = product;
    const { data, error } = await supabase.from("products").insert([
      {
        name,
        description,
        price,
        category_id,
        rating,
        review_count,
        discount_type,
        discount_value,
        image_url,
      },
    ]).select().single()

    if (error) {
        console.error('Error creating product:', error)
        return { error: error.message }
    }
    return { data }
  } catch (error:any) {
    console.error("Unexpected error creating product:", error.message);
    return { error: 'Internal Server Error' };
  }
};
