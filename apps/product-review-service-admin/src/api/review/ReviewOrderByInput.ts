import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  comment?: SortOrder;
  rating?: SortOrder;
  userId?: SortOrder;
  productId?: SortOrder;
};
