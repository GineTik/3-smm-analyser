import { ConfigService } from "@nestjs/config";
import { ExtractJwt } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { UnauthorizedException, Injectable } from "@nestjs/common";
import { PayloadDto } from "./dto/payload.dto";
import {
  JWT_STRATEGY,
  USER_NOT_FOUND,
} from "@/shared/constants/auth.constants";
import { PrismaService } from "@/shared/prisma/prisma.service";
import { User } from "../prisma/generated/prisma";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, JWT_STRATEGY) {
  constructor(
    private readonly prisma: PrismaService,
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get("JWT_SECRET") || "secret",
      ignoreExpiration: false,
    });
  }

  async validate(payload: PayloadDto): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.id },
    });

    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND);
    }

    return user;
  }
}
