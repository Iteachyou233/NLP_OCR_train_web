import { Review } from "../review/Review";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  reviews?: Array<Review>;
};
