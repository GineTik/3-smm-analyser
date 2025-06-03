import { Button } from "@/shared/components/ui-kit/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui-kit/card";
import { Input } from "@/shared/components/ui-kit/input";
import { Label } from "@/shared/components/ui-kit/label";

export function LoginCard() {
  return (
    <Card>
      <CardHeader>
        <h1>Вхід</h1>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Пошта</Label>
          <Input type="text" placeholder="Пошта" />
        </div>
        <div className="space-y-2">
          <Label>Пароль</Label>
          <Input type="text" placeholder="Пароль" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Вхід</Button>
      </CardFooter>
    </Card>
  );
}
