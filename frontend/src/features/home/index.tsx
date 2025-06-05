import { ROUTES } from "@/shared/constants/routes";
import { CableIcon, ChartBarIcon } from "lucide-react";
import Link from "next/link";

export function HomePage() {
  return (
    <div className="p-4 h-full flex flex-col space-y-4">
      <h1>Привіт</h1>
      <p className="text-muted-foreground max-w-2/3">
        Це система аналітики SMM. Тут ви можете переглядати статистику ваших
        постів, переглядів та підписників.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
        <HomeLinkCard href={ROUTES.ANALYTICS}>
          <ChartBarIcon className="size-10" />
          <h2>Аналітика</h2>
          <p>Перегляньте статистику ваших постів, переглядів та підписників.</p>
        </HomeLinkCard>
        <HomeLinkCard href={ROUTES.CONNECTIONS}>
          <CableIcon className="size-10" />
          <h2>З&apos;єднання</h2>
          <p>
            Перегляньте список ваших з&apos;єднань, налаштуйте їх та отримуйте
            потужну аналітику для всіх ваших акаунтів.
          </p>
        </HomeLinkCard>
      </div>
    </div>
  );
}

function HomeLinkCard({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="space-y-2 bg-background border border-border hover:bg-accent transition-colors p-4 rounded-lg shadow-md min-h-[200px]"
    >
      {children}
    </Link>
  );
}
