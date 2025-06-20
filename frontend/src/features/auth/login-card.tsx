"use client";

import { Button } from "@/shared/components/ui-kit/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/shared/components/ui-kit/card";
import { FormInput } from "@/shared/components/ui-kit/input";
import { Form } from "@/shared/components/ui-kit/form";
import { useLogin } from "./hooks/use-login";

export function LoginCard() {
  const { form, login, isLoading, error } = useLogin();

  return (
    <Card>
      <CardHeader>
        <h1>Вхід</h1>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={login}>
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
            {error?.["statusCode"] === 401 && (
              <p className="text-sm text-destructive">
                Некоректна пошта або пароль
              </p>
            )}
          </CardContent>
          <CardFooter className="mt-4">
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Вхід..." : "Вхід"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
