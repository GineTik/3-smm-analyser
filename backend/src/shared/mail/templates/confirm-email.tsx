import {
  Body,
  Button,
  Head,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import { Html } from "@react-email/html";
import * as React from "react";

type ConfirmEmailProps = {
  confirmLink: string;
};

export function ConfirmEmail({ confirmLink }: ConfirmEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Підтвердження електронної пошти</Preview>
      <Tailwind>
        <Body>
          <Text>Привіт</Text>
          <Text>Дякуємо за реєстрацію на нашій платформі.</Text>
          <Button
            href={confirmLink}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Підтвердити
          </Button>
        </Body>
      </Tailwind>
    </Html>
  );
}
