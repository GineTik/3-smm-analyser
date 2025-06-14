import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export type SessionData = {
  userId: number;
};

export const Session = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx
      .switchToHttp()
      .getRequest<Request & { session: SessionData }>();
    return request.session;
  },
);
