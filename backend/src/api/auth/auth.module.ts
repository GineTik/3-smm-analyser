import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaModule } from "@/shared/prisma/prisma.module";
import { JwtModule } from "@/shared/auth/jwt.module";
import { MailModule } from "@/shared/mail/mail.module";
import { AuthRepository } from "./auth.repository";

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
  imports: [PrismaModule, JwtModule, MailModule],
})
export class AuthModule {}
