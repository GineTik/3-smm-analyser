import { PrismaService } from "@/shared/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
