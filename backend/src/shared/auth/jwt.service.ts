import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService as NestJwtService } from "@nestjs/jwt";
import { PayloadDto } from "./dto/payload.dto";
import { TokensDto } from "./dto/tokens.dto";

const JWT_ACCESS_EXPIRATION_TIME = "JWT_ACCESS_EXPIRATION_TIME";
const JWT_REFRESH_EXPIRATION_TIME = "JWT_REFRESH_EXPIRATION_TIME";
const JWT_SECRET = "JWT_SECRET";

@Injectable()
export class JwtService {
  constructor(
    private readonly nestJwtService: NestJwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateTokens(payload: PayloadDto): Promise<TokensDto> {
    const accessToken = await this.generateToken(
      payload,
      JWT_SECRET,
      JWT_ACCESS_EXPIRATION_TIME,
    );
    const refreshToken = await this.generateToken(
      payload,
      JWT_SECRET,
      JWT_REFRESH_EXPIRATION_TIME,
    );

    return {
      accessToken: accessToken.token,
      refreshToken: refreshToken.token,
      accessTokenExpiresIn: accessToken.expiresIn,
      refreshTokenExpiresIn: refreshToken.expiresIn,
    };
  }

  private async generateToken(
    payload: PayloadDto,
    secretKey: string,
    expiresInKey: string,
  ): Promise<{ token: string; expiresIn: Date }> {
    const secret = this.configService.get<string>(secretKey);
    const expiresIn = this.configService.get<string>(expiresInKey);

    const token = await this.nestJwtService.signAsync(payload, {
      secret,
      expiresIn,
    });

    return {
      token,
      expiresIn: this.getExpirationDate(expiresInKey),
    };
  }

  private getExpirationDate(expiresInKey: string): Date {
    const expiresInString = this.configService.get<string>(expiresInKey);

    if (!expiresInString) {
      throw new Error(`Configuration for '${expiresInKey}' not found.`);
    }

    const regex = /^(\d+)([smhd])$/;
    const match = expiresInString.match(regex);

    if (!match) {
      throw new Error(`Invalid expiresIn string format: ${expiresInString}`);
    }

    const value = parseInt(match[1], 10);
    const unit = match[2];
    const now = new Date();

    let milliseconds: number;
    switch (unit) {
      case "s":
        milliseconds = value * 1000;
        break;
      case "m":
        milliseconds = value * 60 * 1000;
        break;
      case "h":
        milliseconds = value * 60 * 60 * 1000;
        break;
      case "d":
        milliseconds = value * 24 * 60 * 60 * 1000;
        break;
      default:
        // This case should be unreachable due to the regex
        throw new Error(`Invalid time unit in expiresIn string: ${unit}`);
    }

    return new Date(now.getTime() + milliseconds);
  }
}
