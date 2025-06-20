import { Injectable } from "@nestjs/common";
import { CreateConnectionDto } from "./dto/create-connection.dto";
import { PrismaService } from "@/shared/prisma/prisma.service";
import { TwitterOauth2ResponseDto } from "./dto/twitter-oauth2-response.dto";
import { SOCIAL_NETWORKS } from "@/shared/prisma/prisma.types";
import { AccountDto } from "./dto/account.dto";

@Injectable()
export class ConnectionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createConnectionDto: CreateConnectionDto, userId: number) {
    return await this.prisma.socialAccount.upsert({
      where: {
        profileId: createConnectionDto.profileId,
        userId_socialNetworkId: {
          userId,
          socialNetworkId: createConnectionDto.socialNetworkId,
        },
      },
      create: {
        userId,
        socialNetworkId: createConnectionDto.socialNetworkId,
        profileId: createConnectionDto.profileId,
        accessToken: createConnectionDto.accessToken,
        refreshToken: createConnectionDto.refreshToken,
        profileUsername: createConnectionDto.username,
        profileImageUrl: createConnectionDto.imageUrl,
      },
      update: {
        accessToken: createConnectionDto.accessToken,
        refreshToken: createConnectionDto.refreshToken,
        profileUsername: createConnectionDto.username,
        profileImageUrl: createConnectionDto.imageUrl,
      },
    });
  }

  async createTwitterConnection(twitterResponse: TwitterOauth2ResponseDto) {
    return await this.create(
      {
        socialNetworkId: SOCIAL_NETWORKS.TWITTER,
        accessToken: twitterResponse.accessToken,
        refreshToken: twitterResponse.refreshToken,
        profileId: twitterResponse.profileId,
        username: twitterResponse.username,
        imageUrl: twitterResponse.imageUrl,
      },
      twitterResponse.userId,
    );
  }

  async findAllByUserId(userId: number): Promise<AccountDto[]> {
    const socialAccounts = await this.prisma.socialAccount.findMany({
      where: {
        userId,
      },
      include: {
        socialNetwork: true,
      },
    });

    return socialAccounts.map((socialAccount) => ({
      id: socialAccount.id,
      name: socialAccount.profileUsername,
      username: socialAccount.profileUsername,
      profilePicture: socialAccount.profileImageUrl,
      socialNetworkId: socialAccount.socialNetwork.id as SOCIAL_NETWORKS,
    }));
  }

  remove(id: number, userId: number) {
    return this.prisma.socialAccount.delete({
      where: { id, userId },
    });
  }
}
