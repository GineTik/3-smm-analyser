"use client";

import { ChartConfig } from "@/shared/components/ui-kit/chart";
import { AnalyticsBarChart } from "./charts/analytics-bar-chart";
import { Loader } from "lucide-react";
import { useAnalytics } from "../use-analytics";
import { TrendIndicator } from "./trend-indicator";
import { AnalyticsPieChart } from "./charts/analytics-pie-chart";
import { AnalyticsLineChart } from "./charts/analytics-line-chart";
import dayjs from "dayjs";

type AnalyticsDashboardProps = {
  account: string;
};

const chartConfig = {
  desktop: {
    label: "",
    color: "var(--chart-1)",
  },
  likes: {
    label: "Likes",
    color: "var(--chart-1)",
  },
  comments: {
    label: "Comments",
    color: "var(--chart-2)",
  },
  retweets: {
    label: "Retweets",
    color: "var(--chart-3)",
  },
  engagement: {
    label: "Engagement",
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

  const totalLikes = sortedAnalytics.reduce((acc, item) => acc + item.likes, 0);
  const totalComments = sortedAnalytics.reduce(
    (acc, item) => acc + item.comments,
    0,
  );
  const totalRetweets = sortedAnalytics.reduce(
    (acc, item) => acc + item.retweets,
    0,
  );

  const engagementPieData = [
    { name: "Likes", value: totalLikes, fill: "var(--chart-1)" },
    { name: "Comments", value: totalComments, fill: "var(--chart-2)" },
    { name: "Retweets", value: totalRetweets, fill: "var(--chart-3)" },
  ];

  const totalEngagementLineData = sortedAnalytics.map((item) => ({
    name: dayjs(item.metricCollectedAt).format("DD.MM.YYYY"),
    value: item.likes + item.comments + item.retweets,
  }));

  return (
    <div className="mt-4">
      <h1>Analytics for {account}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-4">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
        <AnalyticsPieChart
          title="Розподіл залучення"
          chartData={engagementPieData}
          chartConfig={chartConfig}
        />
        <AnalyticsLineChart
          title="Загальне залучення"
          chartData={totalEngagementLineData}
          chartConfig={chartConfig}
          dataKey="value"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-4">
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
