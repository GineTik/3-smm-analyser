import { ApiProperty } from "@nestjs/swagger";

export class ErrorResponse {
  @ApiProperty({
    type: Number,
  })
  statusCode: number;

  @ApiProperty({
    type: String,
  })
  message: string;
}
