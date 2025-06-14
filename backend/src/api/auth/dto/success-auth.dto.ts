import { TokensDto } from "@/shared/auth/dto/tokens.dto";
import { ApiProperty } from "@nestjs/swagger";

class UserDto {
  @ApiProperty({
    description: "User ID",
  })
  id: number;

  @ApiProperty({
    description: "User email",
  })
  email: string;

  @ApiProperty({
    description: "User is email verified",
  })
  isEmailVerified: boolean;
}

export class SuccessAuthDto {
  @ApiProperty({
    description: "Tokens",
  })
  tokens: TokensDto;

  @ApiProperty({
    description: "User",
  })
  user: UserDto;
}
