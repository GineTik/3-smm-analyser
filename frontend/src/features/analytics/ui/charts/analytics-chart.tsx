import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
} from "@/shared/components/ui-kit/card";
import { ChartContainer, ChartConfig } from "@/shared/components/ui-kit/chart";
import { ResponsiveContainer } from "recharts";

type AnalyticsChartProps = {
  chartConfig: ChartConfig;
  children: React.ComponentProps<typeof ResponsiveContainer>["children"];
};

export function AnalyticsChart({ chartConfig, children }: AnalyticsChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Кількість постів в місяць</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>{children}</ChartContainer>
      </CardContent>
    </Card>
  );
}
