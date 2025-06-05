"use client";

import { AnalyticsAiRecommendations } from "./analytics-ai-recommendations";
import { ChartConfig } from "@/shared/components/ui-kit/chart";
import { AnalyticsBarChart } from "./charts/analytics-bar-chart";
import { AnalyticsRadarChart } from "./charts/analytics-radar-chart";

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

export function AnalyticsDashboard({ account }: AnalyticsDashboardProps) {
  return (
    <div className="mt-4">
      <h1>Analytics for {account}</h1>
      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4">
        <AnalyticsBarChart
          title="Кількість постів в місяць"
          chartConfig={chartConfig}
          chartData={chartData}
        />
        <AnalyticsBarChart
          title="Кількість переглядів в місяць"
          chartConfig={chartConfig}
          chartData={chartData}
        />
        <AnalyticsBarChart
          title="Нових підписників за місяць"
          chartConfig={chartConfig}
          chartData={chartData}
        />
        <AnalyticsRadarChart
          title="Типи ваших постів"
          chartConfig={chartConfig}
          chartData={chartData}
        />
        <AnalyticsAiRecommendations className="col-span-2" />
      </div>
    </div>
  );
}
