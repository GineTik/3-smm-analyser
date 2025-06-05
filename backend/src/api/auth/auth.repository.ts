import {
  ConfirmationCode,
  Prisma,
  User,
} from "@/shared/prisma/generated/prisma";
import { PrismaService } from "@/shared/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(user: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: user,
    });
  }

  async generateConfirmationCode(userId: number): Promise<ConfirmationCode> {
    const expirationTime =
      Number(process.env.CONFIRMATION_CODE_EXPIRATION_SECONDS) * 1000;

    return await this.prisma.$transaction(async (tx) => {
      await tx.confirmationCode.deleteMany({
        where: {
          userId,
        },
      });

      return tx.confirmationCode.create({
        data: {
          userId,
          expiresAt: new Date(Date.now() + expirationTime),
        },
      });
    });
  }

  async getConfirmationCode(code: string): Promise<ConfirmationCode | null> {
    return this.prisma.confirmationCode.findUnique({
      where: { code },
    });
  }

  async verifyEmail(userId: number) {
    await this.prisma.$transaction(async (tx) => {
      await tx.confirmationCode.deleteMany({
        where: {
          userId,
        },
      });

      await tx.user.update({
        where: { id: userId },
        data: { isEmailVerified: true },
      });
    });
  }

  async updatePassword(userId: number, passwordHash: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });
  }
}
