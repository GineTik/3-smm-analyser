import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/shared/components/ui-kit/chart";

import { Bar, CartesianGrid, XAxis } from "recharts";
import { BarChart } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui-kit/card";
import { ChartTooltipContent } from "@/shared/components/ui-kit/chart";

export function AnalyticsBarChart({
  title,
  chartConfig,
  chartData,
}: {
  title: string;
  chartConfig: ChartConfig;
  chartData: { month: string; desktop: number }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--chart-1)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
