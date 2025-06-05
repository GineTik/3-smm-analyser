import { Module } from "@nestjs/common";
import { JwtService } from "./jwt.service";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { JwtModule as NestJwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    NestJwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>("JWT_SECRET"),
        signOptions: {
          expiresIn: configService.get<string>("JWT_EXPIRATION_TIME"),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
