"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/lib/query-client";
import { PropsWithChildren } from "react";
import { SidebarProvider } from "@/shared/components";

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>{children}</SidebarProvider>
    </QueryClientProvider>
  );
}
