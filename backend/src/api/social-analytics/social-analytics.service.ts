import { SOCIAL_NETWORKS } from "@/shared/prisma/prisma.types";
import { Injectable, NotFoundException } from "@nestjs/common";
import { SocialAnalyticsStrategy } from "./strategies/social-analytics.strategy";
import { TwitterAnalyticsStrategy } from "./strategies/twitter-analytics.strategy";
import { ERROR_MESSAGES } from "./social-analytics.constants";
import { SocialAnalyticsRepository } from "./social-analytics.repository";

@Injectable()
export class SocialAnalyticsService {
  private strategies: Map<SOCIAL_NETWORKS, SocialAnalyticsStrategy> = new Map();

  constructor(
    private readonly twitterStrategy: TwitterAnalyticsStrategy,
    private readonly socialAnalyticsRepository: SocialAnalyticsRepository,
  ) {
    this.strategies.set(SOCIAL_NETWORKS.TWITTER, this.twitterStrategy);
  }

  async getAnalyticsData(accountUsername: string) {
    const account =
      await this.socialAnalyticsRepository.getAccountByUsername(
        accountUsername,
      );

    if (!account) {
      throw new NotFoundException(ERROR_MESSAGES.ACCOUNT_NOT_FOUND);
    }

    const strategy = this.strategies.get(account.socialNetworkId);

    if (!strategy) {
      throw new NotFoundException(ERROR_MESSAGES.STRATEGY_NOT_FOUND);
    }

    return await strategy.getAnalyticsData(account);
  }
}
