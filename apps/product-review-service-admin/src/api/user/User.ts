import { JsonValue } from "type-fest";
import { Review } from "../review/Review";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  reviews?: Array<Review>;
};
