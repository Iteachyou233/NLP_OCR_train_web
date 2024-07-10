import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
