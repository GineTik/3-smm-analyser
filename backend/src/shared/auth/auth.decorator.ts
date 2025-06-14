import { applyDecorators, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JWT_STRATEGY } from "../constants/auth.constants";
import { ErrorResponse } from "../types/errors";
import { ApiResponse } from "@nestjs/swagger";

export function Auth() {
  return applyDecorators(
    UseGuards(AuthGuard(JWT_STRATEGY)),
    ApiResponse({
      status: 401,
      type: ErrorResponse,
    }),
  );
}
