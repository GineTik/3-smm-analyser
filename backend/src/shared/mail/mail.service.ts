import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { ConfirmEmail } from "./templates/confirm-email";
import { render } from "@react-email/components";

@Injectable()
export class MailService {
  constructor(private readonly mailer: MailerService) {}

  async sendConfirmationLink(to: string, confirmLink: string) {
    const html = await render(ConfirmEmail({ confirmLink }));
    await this.send(to, "Підтвердження електронної пошти", html);
  }

  async sendForgotPasswordMail(to: string, confirmLink: string) {
    const html = await render(ConfirmEmail({ confirmLink }));
    await this.send(to, "Відновлення паролю", html);
  }

  private async send(to: string, subject: string, html: string) {
    await this.mailer.sendMail({
      to,
      subject,
      html,
    });
  }
}
