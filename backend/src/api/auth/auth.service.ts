import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthRepository } from "./auth.repository";
import { AuthDto } from "./dto/auth.dto";
import { compare, hash } from "bcrypt";
import { JwtService } from "@/shared/auth/jwt.service";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { MailService } from "@/shared/mail/mail.service";
import { ConfigService } from "@nestjs/config";
import { SuccessAuthDto } from "./dto/success-auth.dto";

const SALT_ROUNDS = 10;

@Injectable()
export class AuthService {
  private confirmEmailUrl: string | undefined;
  private resetPasswordUrl: string | undefined;

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
    private readonly configService: ConfigService,
  ) {
    this.confirmEmailUrl = this.configService.get("FRONTEND_CONFIRM_EMAIL_URL");
    this.resetPasswordUrl = this.configService.get(
      "FRONTEND_RESET_PASSWORD_URL",
    );
  }

  async login(dto: AuthDto): Promise<SuccessAuthDto> {
    const user = await this.authRepository.getByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const isPasswordValid = await compare(dto.password, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const tokens = await this.jwtService.generateTokens({
      userId: user.id,
    });

    if (!user.isEmailVerified) {
      const confirmationCode =
        await this.authRepository.generateConfirmationCode(user.id);

      await this.mailService.sendConfirmationLink(
        user.email,
        `${this.confirmEmailUrl}?code=${confirmationCode.code}`,
      );
    }

    return {
      tokens,
      user: {
        id: user.id,
        email: user.email,
        isEmailVerified: user.isEmailVerified,
      },
    };
  }

  async register(dto: AuthDto) {
    const user = await this.authRepository.getByEmail(dto.email);
    if (user) {
      throw new BadRequestException("User already exists");
    }

    const hashedPassword = await hash(dto.password, SALT_ROUNDS);

    const newUser = await this.authRepository.create({
      email: dto.email,
      passwordHash: hashedPassword,
    });

    const tokens = await this.jwtService.generateTokens({
      userId: newUser.id,
    });

    const confirmationCode = await this.authRepository.generateConfirmationCode(
      newUser.id,
    );

    await this.mailService.sendConfirmationLink(
      newUser.email,
      `${this.confirmEmailUrl}?code=${confirmationCode.code}`,
    );

    return {
      tokens,
      user: {
        id: newUser.id,
        email: newUser.email,
        isEmailVerified: newUser.isEmailVerified,
      },
    };
  }

  async sendForgotPasswordMail(email: string) {
    const user = await this.authRepository.getByEmail(email);
    if (!user) {
      throw new BadRequestException("User not found");
    }

    const confirmationCode = await this.authRepository.generateConfirmationCode(
      user.id,
    );

    await this.mailService.sendConfirmationLink(
      user.email,
      `${this.resetPasswordUrl}?code=${confirmationCode.code}`,
    );
  }

  async resetPassword(dto: ResetPasswordDto) {
    const confirmationCode = await this.authRepository.getConfirmationCode(
      dto.confirmationCode,
    );
    if (!confirmationCode) {
      throw new BadRequestException("Invalid confirmation code");
    }

    const hashedPassword = await hash(dto.password, SALT_ROUNDS);

    await this.authRepository.updatePassword(
      confirmationCode.userId,
      hashedPassword,
    );
  }

  async verifyEmail(code: string) {
    const confirmationCode =
      await this.authRepository.getConfirmationCode(code);
    if (!confirmationCode) {
      throw new BadRequestException("Invalid confirmation code");
    }

    await this.authRepository.verifyEmail(confirmationCode.userId);
  }
}
