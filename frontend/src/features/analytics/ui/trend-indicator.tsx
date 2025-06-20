import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

type TrendIndicatorProps = {
  title: string;
  data: number[];
};

function getTrend(data: number[]) {
  if (data.length < 2) {
    return {
      latest: data.length > 0 ? data[data.length - 1] : 0,
      percentage: 0,
    };
  }

  const latest = data[data.length - 1];
  const previous = data[data.length - 2];

  if (previous === 0) {
    return {
      latest,
      percentage: latest > 0 ? 100 : 0,
    };
  }

  const percentage = ((latest - previous) / previous) * 100;
  return { latest, percentage };
}

export function TrendIndicator({ title, data }: TrendIndicatorProps) {
  const { latest, percentage } = getTrend(data);

  const isUp = percentage > 0;
  const isDown = percentage < 0;

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="flex items-center justify-between mt-2">
        <span className="text-2xl font-bold">{latest}</span>
        <div className="flex items-center text-sm font-semibold">
          {isUp && <ArrowUpRight className="w-5 h-5 text-green-500" />}
          {isDown && <ArrowDownRight className="w-5 h-5 text-red-500" />}
          {!isUp && !isDown && <Minus className="w-5 h-5 text-gray-500" />}
          <span
            className={`${
              isUp
                ? "text-green-500"
                : isDown
                  ? "text-red-500"
                  : "text-gray-500"
            }`}
          >
            {percentage.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
}
