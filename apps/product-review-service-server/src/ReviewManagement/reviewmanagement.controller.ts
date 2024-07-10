import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReviewManagementService } from "./reviewmanagement.service";

@swagger.ApiTags("reviewManagements")
@common.Controller("reviewManagements")
export class ReviewManagementController {
  constructor(protected readonly service: ReviewManagementService) {}
}
