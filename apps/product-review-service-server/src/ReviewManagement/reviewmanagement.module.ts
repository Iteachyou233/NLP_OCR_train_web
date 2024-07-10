import { Module } from "@nestjs/common";
import { ReviewManagementService } from "./reviewmanagement.service";
import { ReviewManagementController } from "./reviewmanagement.controller";
import { ReviewManagementResolver } from "./reviewmanagement.resolver";

@Module({
  controllers: [ReviewManagementController],
  providers: [ReviewManagementService, ReviewManagementResolver],
  exports: [ReviewManagementService],
})
export class ReviewManagementModule {}
