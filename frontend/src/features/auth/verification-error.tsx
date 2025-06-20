"use client";

import { Card } from "@/shared/components/ui-kit/card";
import { useSearchParams } from "next/navigation";

export function VerificationError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (error === "INVALID_CONFIRMATION_CODE") {
    return (
      <Card className="p-4 border-destructive/80">
        <span className="text-lg text-destructive/80">
          Помилка підтвердження електронної пошти
        </span>
      </Card>
    );
  }

  return null;
}
