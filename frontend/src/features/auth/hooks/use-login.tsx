"use client";

import { publicRqClient } from "@/shared/api/instance";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "@/shared/hooks/use-auth";
import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/navigation";

export function useLogin() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(
      z.object({
        email: z.string().email(),
        password: z.string().min(4),
      }),
    ),
  });

  const login = publicRqClient.useMutation("post", "/auth/login");
  const { save } = useAuth();
  const router = useRouter();

  return {
    form,
    login: form.handleSubmit((data) => {
      login.mutate(
        { body: data },
        {
          onSuccess: (data) => {
            save(data.tokens);
            form.reset();

            if (!data.user.isEmailVerified) {
              router.push(ROUTES.VERIFY_EMAIL);
            }
          },
        },
      );
    }),
    isLoading: login.isPending,
    error: login.error,
  };
}
