"use client";

import { ChartConfig } from "@/shared/components/ui-kit/chart";
import { AnalyticsBarChart } from "./charts/analytics-bar-chart";
import { Loader } from "lucide-react";
import { useAnalytics } from "../use-analytics";
import { TrendIndicator } from "./trend-indicator";

type AnalyticsDashboardProps = {
  account: string;
};

const chartConfig = {
  desktop: {
    label: "",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function AnalyticsDashboard({ account }: AnalyticsDashboardProps) {
  const analytics = useAnalytics(account);

  if (analytics.isLoading) {
    return <Loader className="w-10 h-10 animate-spin" />;
  }

  const sortedAnalytics = analytics.data
    ? [...analytics.data].sort(
        (a, b) =>
          new Date(a.metricCollectedAt).getTime() -
          new Date(b.metricCollectedAt).getTime(),
      )
    : [];

  return (
    <div className="mt-4">
      <h1>Analytics for {account}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <TrendIndicator
          title="Динаміка лайків"
          data={sortedAnalytics.map((item) => item.likes)}
        />
        <TrendIndicator
          title="Динаміка коментарів"
          data={sortedAnalytics.map((item) => item.comments)}
        />
        <TrendIndicator
          title="Динаміка ретвітів"
          data={sortedAnalytics.map((item) => item.retweets)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        <AnalyticsBarChart
          title="Кількість лайків"
          chartConfig={chartConfig}
          chartData={
            sortedAnalytics?.map((item) => ({
              column: item.metricCollectedAt,
              value: item.likes,
              date: new Date(item.metricCollectedAt),
            })) ?? []
          }
        />
        <AnalyticsBarChart
          title="Кількість коментарів"
          chartConfig={chartConfig}
          chartData={
            sortedAnalytics?.map((item) => ({
              column: item.metricCollectedAt,
              value: item.comments,
              date: new Date(item.metricCollectedAt),
            })) ?? []
          }
        />
        <AnalyticsBarChart
          title="Кількість ретвітів"
          chartConfig={chartConfig}
          chartData={
            sortedAnalytics?.map((item) => ({
              column: item.metricCollectedAt,
              value: item.retweets,
              date: new Date(item.metricCollectedAt),
            })) ?? []
          }
        />
      </div>
    </div>
  );
}
