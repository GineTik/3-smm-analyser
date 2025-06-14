import { Injectable } from "@nestjs/common";

@Injectable()
export class SocialAnalyticsService {
  /*  private strategies: Map<string, SocialStrategy> = new Map();

  constructor(
    private readonly facebookStrategy: FacebookStrategy,
    private readonly instagramStrategy: InstagramStrategy,
    private readonly twitterStrategy: TwitterStrategy,
  ) {
    this.strategies.set(SOCIAL_NETWORKS.FACEBOOK, this.facebookStrategy);
    this.strategies.set(SOCIAL_NETWORKS.INSTAGRAM, this.instagramStrategy);
    this.strategies.set(SOCIAL_NETWORKS.TWITTER, this.twitterStrategy);
  }
 */
  /*  async getAnalyticsData(source: string, id: number) {
    const strategy = this.strategies.get(source);
    if (!strategy) {
      throw new NotFoundException(`Strategy for source "${source}" not found.`);
    }

    await strategy.actualizeData(id);
    const data = await strategy.analyzeAndGetData(id);
    const analysis = this.analyzeData(data);

    return { data, analysis };
  }

  private analyzeData(data: AnalyticsData) {
    // TODO: Implement a more sophisticated analysis
    let summary = `Analysis for ${data.source}: `;

    switch (data.source) {
      case "facebook":
      case "instagram":
        summary += `Likes: ${(data.data as FacebookData | InstagramData).likes}, Comments: ${(data.data as FacebookData | InstagramData).comments}.`;
        break;
      case "twitter":
        summary += `Retweets: ${(data.data as TwitterData).retweets}, Favorites: ${(data.data as TwitterData).favorites}.`;
        break;
    }

    return summary;
  } */
}
