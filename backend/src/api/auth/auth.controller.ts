import { Body, Controller, Post, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Post("register")
  async register(@Body() dto: AuthDto) {
    return this.authService.register(dto);
  }

  @Post("forgot-password")
  async forgotPassword(@Query("email") email: string) {
    return this.authService.sendForgotPasswordMail(email);
  }

  @Post("reset-password")
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @Post("verify-email")
  async verifyEmail(@Query("code") code: string) {
    return this.authService.verifyEmail(code);
  }
}
