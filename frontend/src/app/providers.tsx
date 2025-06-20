"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/lib/query-client";
import { PropsWithChildren, Suspense } from "react";
import { SidebarProvider } from "@/shared/components";
import { Loader2 } from "lucide-react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<Loader2 className="w-4 h-4 animate-spin" />}>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>{children}</SidebarProvider>
      </QueryClientProvider>
    </Suspense>
  );
}
