import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: "Email address of the user",
    example: "user@example.com",
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Password of the user",
    example: "password",
  })
  password: string;
}
