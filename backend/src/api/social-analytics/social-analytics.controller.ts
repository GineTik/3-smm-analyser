import { Controller } from "@nestjs/common";
import { SocialAnalyticsService } from "./social-analytics.service";

@Controller("social-analytics")
export class SocialAnalyticsController {
  constructor(
    private readonly socialAnalyticsService: SocialAnalyticsService,
  ) {}

  /* @Get(":source/:id")
  getAnalyticsData(@Param("source") source: string, @Param("id") id: string) {
    return this.socialAnalyticsService.getAnalyticsData(source, +id);
   }*/
}
