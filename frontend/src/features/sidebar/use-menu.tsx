"use client";

import { ROUTES } from "@/shared/constants/routes";
import { ChartBarIcon, HomeIcon, CableIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/shared/hooks/use-auth";

export function useMenu() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  const menu = [
    {
      label: "Головна",
      href: ROUTES.HOME,
      icon: <HomeIcon />,
      isActive: pathname === ROUTES.HOME,
    },
  ];

  if (isAuthenticated) {
    menu.push({
      label: "Аналітика",
      href: ROUTES.ANALYTICS,
      icon: <ChartBarIcon />,
      isActive: pathname === ROUTES.ANALYTICS,
    });
    menu.push({
      label: "З'єднання",
      href: ROUTES.CONNECTIONS,
      icon: <CableIcon />,
      isActive: pathname === ROUTES.CONNECTIONS,
    });
  }

  return { menu };
}
