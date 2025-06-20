"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui-kit/card";
import { Button } from "@/shared/components/ui-kit/button";
import { FormInput } from "@/shared/components/ui-kit/input";
import { Form } from "@/shared/components/ui-kit/form";
import { useRegister } from "./hooks/use-register";

export function RegistrationCard() {
  const { form, register, isPending } = useRegister();

  return (
    <Card>
      <CardHeader>
        <h1>Реєстрація</h1>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={register}>
          <CardContent className="space-y-4">
            <FormInput
              control={form.control}
              name="email"
              label="Пошта"
              placeholder="example@gmail.com"
            />
            <FormInput
              control={form.control}
              name="password"
              label="Пароль"
              placeholder="********"
            />
            <FormInput
              control={form.control}
              name="confirmPassword"
              label="Повторіть пароль"
              placeholder="********"
            />
          </CardContent>
          <CardFooter className="mt-4">
            <Button className="w-full" type="submit" disabled={isPending}>
              {isPending ? "Зареєструватися..." : "Зареєструватися"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
