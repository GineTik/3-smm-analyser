"use client";

import { ROUTES } from "@/shared/constants/routes";
import { ChartBarIcon, HomeIcon, CableIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export function useMenu() {
  const pathname = usePathname();

  return {
    menu: [
      {
        label: "Головна",
        href: ROUTES.HOME,
        icon: <HomeIcon />,
        isActive: pathname === ROUTES.HOME,
      },
      {
        label: "Аналітика",
        href: ROUTES.ANALYTICS,
        icon: <ChartBarIcon />,
        isActive: pathname === ROUTES.ANALYTICS,
      },
      {
        label: "З'єднання",
        href: ROUTES.CONNECTIONS,
        icon: <CableIcon />,
        isActive: pathname === ROUTES.CONNECTIONS,
      },
    ],
  };
}
