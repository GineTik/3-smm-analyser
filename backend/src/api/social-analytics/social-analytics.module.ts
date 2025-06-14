import { Module } from "@nestjs/common";
import { SocialAnalyticsService } from "./social-analytics.service";
import { SocialAnalyticsController } from "./social-analytics.controller";

@Module({
  controllers: [SocialAnalyticsController],
  providers: [SocialAnalyticsService],
})
export class SocialAnalyticsModule {}
