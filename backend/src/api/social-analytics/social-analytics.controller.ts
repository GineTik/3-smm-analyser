import { Controller, Get, Param } from "@nestjs/common";
import { SocialAnalyticsService } from "./social-analytics.service";
import { Auth } from "@/shared/auth/auth.decorator";
import { ApiResponse } from "@nestjs/swagger";
import { TwitterDataDto } from "./dto/twitter-data.dto";

@Controller("social-analytics")
export class SocialAnalyticsController {
  constructor(
    private readonly socialAnalyticsService: SocialAnalyticsService,
  ) {}

  @Auth()
  @Get(":accountUsername")
  @ApiResponse({
    status: 200,
    type: [TwitterDataDto],
  })
  getAnalyticsData(@Param("accountUsername") accountUsername: string) {
    return this.socialAnalyticsService.getAnalyticsData(accountUsername);
  }
}
