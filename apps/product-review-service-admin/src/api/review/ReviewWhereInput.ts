import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  comment?: StringNullableFilter;
  rating?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
