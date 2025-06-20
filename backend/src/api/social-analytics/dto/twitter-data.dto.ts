import { ApiProperty } from "@nestjs/swagger";

export class TwitterDataDto {
  @ApiProperty({
    type: Number,
  })
  followers: number;

  @ApiProperty({
    type: Number,
  })
  following: number;

  @ApiProperty({
    type: Number,
  })
  tweets: number;

  @ApiProperty({
    type: Number,
  })
  likes: number;

  @ApiProperty({
    type: Number,
  })
  comments: number;

  @ApiProperty({
    type: Number,
  })
  retweets: number;

  @ApiProperty({
    type: Date,
  })
  metricCollectedAt: Date;
}
