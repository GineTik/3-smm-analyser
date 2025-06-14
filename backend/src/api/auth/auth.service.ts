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
  private verifyEmailUrl: string | undefined;
  private resetPasswordUrl: string | undefined;

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
    private readonly configService: ConfigService,
  ) {
    this.verifyEmailUrl = this.configService.getOrThrow(
      "MAIL_VALIDATE_EMAIL_ENDPOINT",
    );
    this.resetPasswordUrl = this.configService.getOrThrow(
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
      id: user.id,
      email: user.email,
      isEmailVerified: user.isEmailVerified,
    });
    if (!user.isEmailVerified) {
      const confirmationCode =
        await this.authRepository.generateConfirmationCode(user.id);

      await this.mailService.sendConfirmationLink(
        user.email,
        `${this.verifyEmailUrl}?code=${confirmationCode.code}`,
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
      id: newUser.id,
      email: newUser.email,
      isEmailVerified: newUser.isEmailVerified,
    });

    const confirmationCode = await this.authRepository.generateConfirmationCode(
      newUser.id,
    );

    await this.mailService.sendConfirmationLink(
      newUser.email,
      `${this.verifyEmailUrl}?code=${confirmationCode.code}`,
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

  async refresh(id: number, email: string, isEmailVerified: boolean) {
    return await this.jwtService.generateTokens({
      id,
      email,
      isEmailVerified,
    });
  }
}
