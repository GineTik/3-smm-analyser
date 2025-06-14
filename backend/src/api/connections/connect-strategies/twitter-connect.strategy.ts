import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "@superfaceai/passport-twitter-oauth2";
import { TwitterOauth2ResponseDto } from "../dto/twitter-oauth2-response.dto";
import { ConfigService } from "@nestjs/config";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AUTH_STRATEGIES } from "../connections.constants";
import { Request } from "express";

declare module "express-session" {
  interface SessionData {
    twitterConnectUserId?: string;
  }
}

@Injectable()
export class TwitterConnectStrategy extends PassportStrategy(
  Strategy,
  AUTH_STRATEGIES.TWITTER_CONNECT,
) {
  constructor(configService: ConfigService) {
    super({
      clientType: "confidential",
      clientID: configService.getOrThrow<string>("TWITTER_CLIENT_ID"),
      clientSecret: configService.getOrThrow<string>("TWITTER_CLIENT_SECRET"),
      callbackURL: configService.getOrThrow<string>("TWITTER_CALLBACK_URL"),
      scope: ["tweet.read", "users.read", "offline.access"],
      passReqToCallback: true,
    });
  }

  validate(
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ): TwitterOauth2ResponseDto {
    const userId = req.cookies["twitterConnectUserId"] as string;

    if (!userId) {
      throw new UnauthorizedException("User not found");
    }

    return {
      accessToken,
      refreshToken,
      profileId: profile.id,
      username: profile.username,
      imageUrl: profile.photos?.[0]?.value,
      profile,
      userId: +userId,
    };
  }
}
