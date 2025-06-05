"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui-kit/card";
import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/components/ui-kit/chart";
import { PolarAngleAxis, PolarGrid, Radar } from "recharts";
import { RadarChart } from "recharts";

type AnalyticsRadarChartProps = {
  title: string;
  chartConfig: ChartConfig;
  chartData: { month: string; desktop: number }[];
};

export function AnalyticsRadarChart({
  title,
  chartConfig,
  chartData,
}: AnalyticsRadarChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
