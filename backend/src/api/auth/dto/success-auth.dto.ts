import { TokensDto } from "@/shared/auth/dto/tokens.dto";

export class SuccessAuthDto {
  tokens: TokensDto;
  user: {
    id: number;
    email: string;
    isEmailVerified: boolean;
  };
}
