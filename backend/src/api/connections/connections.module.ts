import { Module } from "@nestjs/common";
import { ConnectionsService } from "./connections.service";
import { ConnectionsController } from "./connections.controller";
import { PrismaModule } from "@/shared/prisma/prisma.module";
import { TwitterConnectStrategy } from "./connect-strategies/twitter-connect.strategy";
import { JwtModule } from "@/shared/auth/jwt.module";

@Module({
  controllers: [ConnectionsController],
  providers: [ConnectionsService, TwitterConnectStrategy],
  imports: [PrismaModule, JwtModule],
})
export class ConnectionsModule {}
