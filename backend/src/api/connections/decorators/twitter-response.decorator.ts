import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { TwitterOauth2ResponseDto } from "../dto/twitter-oauth2-response.dto";

export const TwitterResponse = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx
      .switchToHttp()
      .getRequest<Request & { user: TwitterOauth2ResponseDto }>();
    return request.user;
  },
);
