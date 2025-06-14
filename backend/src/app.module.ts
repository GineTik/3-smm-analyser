import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthModule } from "@/api/auth/auth.module";
import { JwtModule as NestJwtModule } from "@nestjs/jwt";
import { ConnectionsModule } from "./api/connections/connections.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    NestJwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>("JWT_SECRET"),
        signOptions: {
          expiresIn: configService.get<string>("JWT_EXPIRATION_TIME"),
        },
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    ConnectionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
