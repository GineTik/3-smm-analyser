"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarGroupContent,
  SidebarMenuItem,
} from "@/shared/components";
import { NavUser } from "./nav-user";
import { useMenu } from "./use-menu";
import Link from "next/link";

export function AppSidebar() {
  const { menu } = useMenu();

  return (
    <Sidebar className="p-2 bg-sidebar">
      <SidebarHeader>
        <h1 className="text-2xl font-semibold">Rozi</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupContent>
          <SidebarMenu>
            {menu.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton isActive={item.isActive} asChild>
                  <Link href={item.href}>
                    {item.icon}
                    {item.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
