import { SocialAccount } from "@/shared/prisma/generated/prisma";
import { SocialAnalyticsStrategy } from "./social-analytics.strategy";
import { Injectable } from "@nestjs/common";
import { TwitterDataDto } from "../dto/twitter-data.dto";
import { PrismaService } from "@/shared/prisma/prisma.service";

@Injectable()
export class TwitterAnalyticsStrategy implements SocialAnalyticsStrategy {
  constructor(private readonly prisma: PrismaService) {}

  async getAnalyticsData(account: SocialAccount): Promise<TwitterDataDto[]> {
    let analyticsData = await this.prisma.generalAnalyticsData.findMany({
      where: {
        socialAccountId: account.id,
      },
      include: {
        twitterAnalyticsTweet: true,
      },
      orderBy: {
        metricCollectedAt: "desc",
      },
    });

    let needsRefetch = false;

    if (analyticsData.length === 0) {
      const tweetsToCreate = Math.floor(Math.random() * 4) + 3; // 3-6
      const createPromises = [];
      for (let i = 0; i < tweetsToCreate; i++) {
        createPromises.push(this.saveMockDataToTheDb(account));
      }
      await Promise.all(createPromises);
      needsRefetch = true;
    } else {
      const last = analyticsData[0];
      const oneMinuteAgo = new Date(Date.now() - 60 * 1000);

      if (new Date(last.metricCollectedAt) < oneMinuteAgo) {
        await this.saveMockDataToTheDb(account);
        needsRefetch = true;
      }
    }

    if (needsRefetch) {
      analyticsData = await this.prisma.generalAnalyticsData.findMany({
        where: {
          socialAccountId: account.id,
        },
        include: {
          twitterAnalyticsTweet: true,
        },
        orderBy: {
          metricCollectedAt: "desc",
        },
      });
    }

    return analyticsData.map((data) => ({
      likes: data.twitterAnalyticsTweet?.likeCount ?? 0,
      comments: data.twitterAnalyticsTweet?.commentCount ?? 0,
      retweets: data.twitterAnalyticsTweet?.retweetsCount ?? 0,
      followers: this.randomCount(10),
      following: this.randomCount(60),
      tweets: this.randomCount(100),
      metricCollectedAt: data.metricCollectedAt,
    }));
  }

  async saveMockDataToTheDb(account: SocialAccount): Promise<void> {
    const randomId = Math.random().toString(36).slice(2);
    const randomContent = `Random tweet content: ${Math.random()
      .toString(36)
      .slice(2)}`;
    const generateHashtags = () => {
      const hashtags = [
        "tech",
        "devlife",
        "coding",
        "nestjs",
        "typescript",
        "javascript",
        "webdev",
        "programming",
        "software",
        "developer",
        "startup",
        "innovation",
      ];
      const shuffled = hashtags.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, Math.floor(Math.random() * 4) + 1);
    };

    const data = {
      tweetId: randomId,
      tweetContent: randomContent,
      retweetsCount: this.randomCount(100),
      quoteCount: this.randomCount(50),
      likeCount: this.randomCount(1000),
      commentCount: this.randomCount(200),
      viewCount: this.randomCount(10000),
      hashtags: generateHashtags(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await this.prisma.generalAnalyticsData.create({
      data: {
        dataType: "twits",
        socialAccount: {
          connect: {
            id: account.id,
          },
        },
        twitterAnalyticsTweet: {
          create: {
            ...data,
          },
        },
      },
    });
  }

  private randomCount(max: number) {
    return Math.floor(Math.random() * max);
  }
}
