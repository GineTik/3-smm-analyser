import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService as NestJwtService } from "@nestjs/jwt";
import { PayloadDto } from "./dto/payload.dto";
import { TokensDto } from "./dto/tokens.dto";

const JWT_ACCESS_EXPIRATION_TIME = "JWT_ACCESS_EXPIRATION_TIME";
const JWT_ACCESS_SECRET = "JWT_ACCESS_SECRET";
const JWT_REFRESH_EXPIRATION_TIME = "JWT_REFRESH_EXPIRATION_TIME";
const JWT_REFRESH_SECRET = "JWT_REFRESH_SECRET";

@Injectable()
export class JwtService {
  constructor(
    private readonly nestJwtService: NestJwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateTokens(payload: PayloadDto): Promise<TokensDto> {
    const accessTokenData = await this.generateToken(
      payload,
      JWT_ACCESS_SECRET,
      JWT_ACCESS_EXPIRATION_TIME,
    );
    const refreshTokenData = await this.generateToken(
      payload,
      JWT_REFRESH_SECRET,
      JWT_REFRESH_EXPIRATION_TIME,
    );

    return {
      accessToken: accessTokenData.token,
      accessTokenExpiresIn: accessTokenData.expiresIn,
      refreshToken: refreshTokenData.token,
      refreshTokenExpiresIn: refreshTokenData.expiresIn,
    };
  }

  private async generateToken(
    payload: PayloadDto,
    secretKey: string,
    expiresInKey: string,
  ): Promise<{ token: string; expiresIn: number }> {
    const secret = this.configService.get<string>(secretKey);
    const expiresIn = this.configService.get<number>(expiresInKey);

    const token = await this.nestJwtService.signAsync(payload, {
      secret,
      expiresIn: `${expiresIn}s`,
    });

    return { token, expiresIn: expiresIn ?? 0 };
  }
}
