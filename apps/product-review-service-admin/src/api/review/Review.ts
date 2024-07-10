import { User } from "../user/User";
import { Product } from "../product/Product";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  comment: string | null;
  rating: number | null;
  user?: User | null;
  product?: Product | null;
};
