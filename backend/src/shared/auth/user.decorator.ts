import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { PayloadDto } from "./dto/payload.dto";

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx
      .switchToHttp()
      .getRequest<Request & { user: PayloadDto }>();
    return request.user;
  },
);
