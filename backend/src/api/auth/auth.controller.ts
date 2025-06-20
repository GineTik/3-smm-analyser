import { Body, Controller, Get, Post, Query, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { ApiBody, ApiQuery, ApiResponse } from "@nestjs/swagger";
import { SuccessAuthDto } from "./dto/success-auth.dto";
import { TokensDto } from "@/shared/auth/dto/tokens.dto";
import { CurrentUser } from "@/shared/auth/user.decorator";
import { Response } from "express";
import { ConfigService } from "@nestjs/config";
import { Auth } from "@/shared/auth/auth.decorator";
import { User } from "@/shared/prisma/generated/prisma";
import {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} from "./auth.constants";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post("login")
  @ApiBody({
    type: AuthDto,
  })
  @ApiResponse({
    status: 201,
    type: SuccessAuthDto,
  })
  async login(@Body() dto: AuthDto, @Res({ passthrough: true }) res: Response) {
    const result = await this.authService.login(dto);
    this.setTokensToCookies(res, result.tokens);
    return result;
  }

  @Post("register")
  @ApiBody({
    type: AuthDto,
  })
  @ApiResponse({
    status: 201,
    type: SuccessAuthDto,
  })
  async register(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.register(dto);
    this.setTokensToCookies(res, result.tokens);
    return result;
  }

  @Post("forgot-password")
  @ApiQuery({
    name: "email",
    type: String,
  })
  async forgotPassword(@Query("email") email: string) {
    await this.authService.sendForgotPasswordMail(email);
  }

  @Post("reset-password")
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @Get("verify-email")
  @ApiQuery({
    name: "code",
    type: String,
  })
  async verifyEmail(@Query("code") code: string, @Res() res: Response) {
    try {
      const tokens = await this.authService.verifyEmail(code);
      this.setTokensToCookies(res, tokens);

      res
        .status(302)
        .redirect(
          this.configService.getOrThrow(
            "FRONTEND_EMAIL_VERIFICATION_SUCCESS_URL",
          ),
        );
    } catch {
      return res
        .status(400)
        .redirect(
          this.configService.getOrThrow(
            "FRONTEND_EMAIL_VERIFICATION_ERROR_URL",
          ) + `?error=INVALID_CONFIRMATION_CODE`,
        );
    }
  }

  @Post("refresh")
  @Auth()
  @ApiResponse({
    status: 201,
    type: TokensDto,
  })
  async refresh(@CurrentUser() user: User) {
    return this.authService.refresh(user.id, user.email, user.isEmailVerified);
  }

  setTokensToCookies(res: Response, tokens: TokensDto) {
    res.status(200).cookie(ACCESS_TOKEN_COOKIE_NAME, tokens.accessToken, {
      httpOnly: true,
      secure: this.configService.get("NODE_ENV") === "production",
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "none",
      path: "/",
    });
    res.status(200).cookie(REFRESH_TOKEN_COOKIE_NAME, tokens.refreshToken, {
      httpOnly: true,
      secure: this.configService.get("NODE_ENV") === "production",
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "none",
      path: "/",
    });
  }
}
