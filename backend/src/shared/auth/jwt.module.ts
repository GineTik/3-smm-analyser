import { Module } from "@nestjs/common";
import { JwtService } from "./jwt.service";
import { JwtStrategy } from "./jwt.strategy";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [JwtService, JwtStrategy],
  exports: [JwtService],
})
export class JwtModule {}
