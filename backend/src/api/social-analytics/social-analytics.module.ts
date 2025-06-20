import { Module } from "@nestjs/common";
import { SocialAnalyticsService } from "./social-analytics.service";
import { SocialAnalyticsController } from "./social-analytics.controller";
import { TwitterAnalyticsStrategy } from "./strategies/twitter-analytics.strategy";
import { PrismaModule } from "@/shared/prisma/prisma.module";
import { SocialAnalyticsRepository } from "./social-analytics.repository";

@Module({
  controllers: [SocialAnalyticsController],
  providers: [
    SocialAnalyticsService,
    TwitterAnalyticsStrategy,
    SocialAnalyticsRepository,
  ],
  imports: [PrismaModule],
})
export class SocialAnalyticsModule {}
