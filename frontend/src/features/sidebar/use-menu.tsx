"use client";

import { HomeIcon, InfoIcon, MailIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export function useMenu() {
  const pathname = usePathname();

  return {
    menu: [
      {
        label: "Головна",
        href: "/",
        icon: <MailIcon />,
        isActive: pathname === "/",
      },
      {
        label: "Аналітика",
        href: "/analytics",
        icon: <HomeIcon />,
        isActive: pathname === "/analytics",
      },
      {
        label: "З'єднання",
        href: "/connections",
        icon: <InfoIcon />,
        isActive: pathname === "/connections",
      },
    ],
  };
}
