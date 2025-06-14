"use client";

import { securedRqClient } from "@/shared/api/instance";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "@/shared/hooks/use-auth";
import { ApiSchemas } from "@/shared/api/schema";

export function useRegister() {
  const form = useForm<ApiSchemas["AuthDto"] & { confirmPassword: string }>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(
      z
        .object({
          email: z.string().email(),
          password: z.string().min(4),
          confirmPassword: z.string().min(4),
        })
        .refine((data) => data.password === data.confirmPassword, {
          path: ["confirmPassword"],
          message: "Паролі не співпадають",
        }),
    ),
  });

  const register = securedRqClient.useMutation("post", "/auth/register");
  const { save } = useAuth();

  return {
    form,
    register: form.handleSubmit((data) => {
      register.mutate(
        { body: data },
        {
          onSuccess: (data) => {
            save(data.tokens);
          },
        },
      );
    }),
    isPending: register.isPending,
  };
}
