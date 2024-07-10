import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};
