import { SocialAccount } from "@/shared/prisma/generated/prisma";
import { TwitterDataDto } from "../dto/twitter-data.dto";

export interface SocialAnalyticsStrategy {
  getAnalyticsData(account: SocialAccount): Promise<TwitterDataDto[]>;
}
