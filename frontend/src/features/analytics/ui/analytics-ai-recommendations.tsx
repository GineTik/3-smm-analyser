import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui-kit/card";
import { cn } from "@/shared/lib/utils";

type AnalyticsAiRecommendationsProps = {
  className?: string;
};

export function AnalyticsAiRecommendations({
  className,
}: AnalyticsAiRecommendationsProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>ШІ рекомендації</CardTitle>
        <CardDescription>
          Наш ШІ проаналізував ваш акаунт і зробив декілька рекомендацій для
          вас.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-4 space-y-2">
          <li>
            <p>
              <strong>Рекомендація 1: </strong>
              <span>
                Щоб збільшити кількість переглядів ваших постів, ви можете
                використовувати такі ключові слова:
              </span>
            </p>
          </li>
          <li>
            <p>
              <strong>Рекомендація 2: </strong>
              <span>
                Щоб збільшити кількість переглядів ваших постів, ви можете
                використовувати такі ключові слова:
              </span>
            </p>
          </li>
          <li>
            <p>
              <strong>Рекомендація 3: </strong>
              <span>
                Щоб збільшити кількість переглядів ваших постів, ви можете
                використовувати такі ключові слова:
              </span>
            </p>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
