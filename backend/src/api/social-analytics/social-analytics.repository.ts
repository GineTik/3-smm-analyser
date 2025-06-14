import { PrismaService } from "@/shared/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SocialAnalyticsRepository {
  constructor(private readonly prisma: PrismaService) {}
}
