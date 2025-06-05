import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui-kit/tabs";
import { AnalyticsDashboard } from "./analytics-dashboard";

export function AnalyticsTabs() {
  return (
    <div>
      <Tabs defaultValue="account1">
        <TabsList>
          <TabsTrigger value="account1">@account1</TabsTrigger>
          <TabsTrigger value="account2">@account2</TabsTrigger>
          <TabsTrigger value="account3">@account3</TabsTrigger>
        </TabsList>
        <TabsContent value="account1">
          <AnalyticsDashboard account="@account1" />
        </TabsContent>
        <TabsContent value="account2">
          <AnalyticsDashboard account="@account2" />
        </TabsContent>
        <TabsContent value="account3">
          <AnalyticsDashboard account="@account3" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
