"use client";

import { AnalyticsAiRecommendations } from "./analytics-ai-recommendations";
import { ChartConfig } from "@/shared/components/ui-kit/chart";
import { AnalyticsBarChart } from "./charts/analytics-bar-chart";
import { AnalyticsRadarChart } from "./charts/analytics-radar-chart";
import { Loader } from "lucide-react";

type AnalyticsDashboardProps = {
  account: string;
};

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214, mobile: 350 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

function useAnalytics(account: string) {
  return {
    data: {
      posts: [
        { month: "January", desktop: 186 },
        { month: "February", desktop: 305 },
        { month: "March", desktop: 237 },
        { month: "April", desktop: 73 },
        { month: "May", desktop: 209 },
        { month: "June", desktop: 214, mobile: 350 },
      ],
      views: [
        { month: "January", desktop: 186 },
        { month: "February", desktop: 305 },
        { month: "March", desktop: 237 },
      ],
      subscribers: [
        { month: "January", desktop: 186 },
        { month: "February", desktop: 305 },
        { month: "March", desktop: 237 },
      ],
      types: [
        { month: "January", desktop: 186 },
        { month: "February", desktop: 305 },
        { month: "March", desktop: 237 },
      ],
    },
    isLoading: false,
  };
}

export function AnalyticsDashboard({ account }: AnalyticsDashboardProps) {
  const analytics = useAnalytics(account);

  if (analytics.isLoading) {
    return <Loader className="w-10 h-10 animate-spin" />;
  }

  return (
    <div className="mt-4">
      <h1>Analytics for {account}</h1>
      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4">
        <AnalyticsBarChart
          title="Кількість постів в місяць"
          chartConfig={chartConfig}
          chartData={analytics.data.posts}
        />
        <AnalyticsBarChart
          title="Кількість переглядів в місяць"
          chartConfig={chartConfig}
          chartData={analytics.data.views}
        />
        <AnalyticsBarChart
          title="Нових підписників за місяць"
          chartConfig={chartConfig}
          chartData={analytics.data.subscribers}
        />
        <AnalyticsRadarChart
          title="Типи ваших постів"
          chartConfig={chartConfig}
          chartData={analytics.data.types}
        />
      </div>
    </div>
  );
}
