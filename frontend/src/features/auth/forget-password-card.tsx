import { Button } from "@/shared/components/ui-kit/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui-kit/card";
import { Input } from "@/shared/components/ui-kit/input";
import { Label } from "@/shared/components/ui-kit/label";

export function ForgetPasswordCard() {
  return (
    <Card>
      <CardHeader>
        <h1>Відновлення паролю</h1>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Пошта</Label>
          <Input type="text" placeholder="Пошта" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Відновити пароль</Button>
      </CardFooter>
    </Card>
  );
}
