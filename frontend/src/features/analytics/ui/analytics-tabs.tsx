"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui-kit/tabs";
import { AnalyticsDashboard } from "./analytics-dashboard";
import { useConnections } from "@/features/connections/use-connections";
import { Button } from "@/shared/components/ui-kit/button";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/routes";

export function AnalyticsTabs() {
  const connections = useConnections();

  if (connections.isLoading) {
    return <div>Loading...</div>;
  }

  if (connections.error) {
    return <div>Error: {connections.error.message}</div>;
  }

  if (connections.data?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 max-w-md mx-auto mt-10">
        <p className="text-sm text-muted-foreground font-semibold text-center">
          Щоб побачити свої аналітичні дані, необхідно підключити акаунт на
          сторінці з&apos;єднань.
        </p>
        <Button asChild>
          <Link href={ROUTES.CONNECTIONS}>Підключити акаунт</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Tabs defaultValue={connections.data?.[0].id.toString()}>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground font-semibold">
            Ваші акаунти:
          </span>
          <TabsList>
            {connections.data?.map((connection) => (
              <TabsTrigger key={connection.id} value={connection.id.toString()}>
                @{connection.username}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {connections.data?.map((connection) => (
          <TabsContent key={connection.id} value={connection.id.toString()}>
            <AnalyticsDashboard account={connection.username} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
