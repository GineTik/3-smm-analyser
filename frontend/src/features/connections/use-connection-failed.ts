"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export function useConnectionFailed() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const currentUrl = new URLSearchParams(Array.from(searchParams.entries()));
    const error = currentUrl.get("error");

    toast.error("Помилка при підключенні соціальної мережі: " + error);
    currentUrl.delete("error");
    const newUrl = `${window.location.pathname}${currentUrl.toString() ? "?" + currentUrl.toString() : ""}`;
    router.replace(newUrl);
  }, [searchParams, router]);
}
