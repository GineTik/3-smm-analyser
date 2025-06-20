import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/components/ui-kit/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui-kit/dropdown-menu";
import { Bar, CartesianGrid, XAxis } from "recharts";
import { BarChart } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui-kit/card";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { Button } from "@/shared/components/ui-kit/button";

type GroupBy = "day" | "month" | "hour" | "minute";

export function AnalyticsBarChart({
  title,
  chartConfig,
  chartData,
}: {
  title: string;
  chartConfig: ChartConfig;
  chartData: { column: string; value: number; date?: Date }[];
}) {
  const [groupBy, setGroupBy] = useState<GroupBy>("minute");
  const options = [
    {
      label: "днем",
      value: "day",
    },
    {
      label: "місяцем",
      value: "month",
    },
    {
      label: "годиною",
      value: "hour",
    },
    {
      label: "хвилинами",
      value: "minute",
    },
  ];

  const { groupedData, tickFormatter } = useMemo(() => {
    const formatMap: Record<GroupBy, string> = {
      day: "YYYY-MM-DD",
      month: "YYYY-MM",
      hour: "YYYY-MM-DD HH",
      minute: "YYYY-MM-DD HH:mm",
    };

    const tickFormatMap: Record<GroupBy, string> = {
      day: "DD.MM",
      month: "MMM YY",
      hour: "HH:00",
      minute: "HH:mm",
    };

    const grouped = chartData.reduce(
      (acc, item) => {
        const date = dayjs(item.date || item.column);
        const key = date.format(formatMap[groupBy]);
        if (!acc[key]) {
          acc[key] = {
            value: 0,
            column: date.startOf(groupBy).toISOString(),
          };
        }
        acc[key].value += item.value;
        return acc;
      },
      {} as Record<
        string,
        {
          value: number;
          column: string;
        }
      >,
    );

    return {
      groupedData: Object.values(grouped),
      tickFormatter: (value: string) =>
        dayjs(value).format(tickFormatMap[groupBy]),
    };
  }, [chartData, groupBy]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between flex-wrap gap-2">
        <CardTitle>{title}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="capitalize" size="sm">
              за {options.find((option) => option.value === groupBy)?.label}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup
              value={groupBy}
              onValueChange={(value) => setGroupBy(value as GroupBy)}
            >
              {options.map((option) => (
                <DropdownMenuRadioItem key={option.value} value={option.value}>
                  за {option.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={groupedData.slice(0, 10)}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="column"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={tickFormatter}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              label={title}
              dataKey="value"
              fill="var(--chart-1)"
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
