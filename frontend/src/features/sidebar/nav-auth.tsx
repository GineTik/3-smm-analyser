import { Button } from "@/shared/components/ui-kit/button";
import { ROUTES } from "@/shared/constants/routes";
import Link from "next/link";

export function NavAuth() {
  return (
    <div className="flex gap-2">
      <Button variant="secondary" className="grow" asChild>
        <Link href={ROUTES.AUTH}>Вхід</Link>
      </Button>
      <Button asChild>
        <Link href={ROUTES.AUTH}>Реєстрація</Link>
      </Button>
    </div>
  );
}
