"use client";

import { useAuth } from "@/shared/auth/use-auth";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components";
import { useMenu } from "./use-menu";
import { NavUser } from "./nav-user";
import { NavAuth } from "./nav-auth";
import Link from "next/link";

export function AppSidebar() {
  const { menu } = useMenu();
  const { isAuthenticated } = useAuth();

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
        {isAuthenticated ? <NavUser /> : <NavAuth />}
      </SidebarFooter>
    </Sidebar>
  );
}
