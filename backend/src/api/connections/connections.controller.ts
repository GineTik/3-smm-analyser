import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Res,
} from "@nestjs/common";
import { ConnectionsService } from "./connections.service";
import { CreateConnectionDto } from "./dto/create-connection.dto";
import { Auth } from "@/shared/auth/auth.decorator";
import { CurrentUser } from "@/shared/auth/user.decorator";
import { PayloadDto } from "@/shared/auth/dto/payload.dto";
import { ConfigService } from "@nestjs/config";
import { AUTH_STRATEGIES } from "./connections.constants";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { TwitterOauth2ResponseDto } from "./dto/twitter-oauth2-response.dto";
import { TwitterResponse } from "./decorators/twitter-response.decorator";
import { AccountDto } from "./dto/account.dto";
import { ApiResponse } from "@nestjs/swagger";

@Controller("connections")
export class ConnectionsController {
  constructor(
    private readonly connectionsService: ConnectionsService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  @Auth()
  create(
    @Body() createConnectionDto: CreateConnectionDto,
    @CurrentUser() user: PayloadDto,
  ) {
    return this.connectionsService.create(createConnectionDto, user.id);
  }

  @Get()
  @Auth()
  @ApiResponse({
    status: 200,
    type: [AccountDto],
  })
  async findAll(@CurrentUser() user: PayloadDto): Promise<AccountDto[]> {
    return await this.connectionsService.findAllByUserId(user.id);
  }

  @Delete(":id")
  @Auth()
  remove(@Param("id") id: string, @CurrentUser() user: PayloadDto) {
    return this.connectionsService.remove(+id, user.id);
  }

  @Get("twitter/oauth")
  @UseGuards(AuthGuard(AUTH_STRATEGIES.TWITTER_CONNECT))
  twitterAuth() {
    // This will automatically redirect to Twitter
    // Passport handles this
  }

  @Get("twitter/callback")
  @UseGuards(AuthGuard(AUTH_STRATEGIES.TWITTER_CONNECT))
  async twitterCallback(
    @TwitterResponse() twitterData: TwitterOauth2ResponseDto,
    @Res() res: Response,
  ) {
    try {
      await this.connectionsService.createTwitterConnection(twitterData);
      res
        .status(302)
        .redirect(
          this.configService.getOrThrow<string>("FRONTEND_CONNECTION_END_URL"),
        );
    } catch (error) {
      console.error(error);
      res
        .status(302)
        .redirect(
          this.configService.getOrThrow<string>("FRONTEND_CONNECTION_END_URL") +
            `?error=${error.message}`,
        );
    }
  }
}
