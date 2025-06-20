import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "@superfaceai/passport-twitter-oauth2";
import { TwitterOauth2ResponseDto } from "../dto/twitter-oauth2-response.dto";
import { ConfigService } from "@nestjs/config";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AUTH_STRATEGIES } from "../connections.constants";
import { JwtService } from "@nestjs/jwt";
import { PayloadDto } from "../../../shared/auth/dto/payload.dto";
import { ACCESS_TOKEN_COOKIE_NAME } from "@/api/auth/auth.constants";
import { Request } from "express";

@Injectable()
export class TwitterConnectStrategy extends PassportStrategy(
  Strategy,
  AUTH_STRATEGIES.TWITTER_CONNECT,
) {
  constructor(
    configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
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
    console.log("req.cookies: ", req.cookies);
    const userAccessToken = req.cookies[ACCESS_TOKEN_COOKIE_NAME] as string;
    const payload = this.jwtService.decode<PayloadDto>(userAccessToken);

    console.log("userToken: ", userAccessToken, payload);
    if (!payload) {
      throw new UnauthorizedException("Invalid token");
    }
    const userId = payload.id;

    console.log(userId, payload);
    return {
      accessToken,
      refreshToken,
      profileId: profile.id,
      username: profile.username,
      imageUrl: profile.photos?.[0]?.value,
      profile,
      userId,
    };
  }
}
