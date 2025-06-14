import { SOCIAL_NETWORKS } from "@/shared/prisma/prisma.types";
import { ApiProperty } from "@nestjs/swagger";

export class AccountDto {
  @ApiProperty({
    type: Number,
  })
  id: number;

  @ApiProperty({
    type: String,
  })
  name: string | null;

  @ApiProperty({
    type: String,
  })
  username: string | null;

  @ApiProperty({
    type: String,
  })
  profilePicture: string | null;

  @ApiProperty({
    enum: SOCIAL_NETWORKS,
    items: {
      type: "number",
      enum: [
        SOCIAL_NETWORKS.TWITTER.toString(),
        SOCIAL_NETWORKS.FACEBOOK.toString(),
        SOCIAL_NETWORKS.INSTAGRAM.toString(),
      ],
    },
  })
  socialNetworkId: SOCIAL_NETWORKS;
}
