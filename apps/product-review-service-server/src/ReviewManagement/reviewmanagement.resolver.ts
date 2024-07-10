import * as graphql from "@nestjs/graphql";
import { ReviewManagementService } from "./reviewmanagement.service";

export class ReviewManagementResolver {
  constructor(protected readonly service: ReviewManagementService) {}
}
