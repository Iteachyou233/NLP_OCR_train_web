import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
};
