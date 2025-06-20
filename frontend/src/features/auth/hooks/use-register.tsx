"use client";

import { publicRqClient } from "@/shared/api/instance";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "@/shared/hooks/use-auth";
import { ApiSchemas } from "@/shared/api/schema";
import { toast } from "sonner";
import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/navigation";

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

  const register = publicRqClient.useMutation("post", "/auth/register");
  const { save } = useAuth();
  const router = useRouter();

  return {
    form,
    register: form.handleSubmit(
      (data) => {
        register.mutate(
          { body: data },
          {
            onSuccess: (data) => {
              save(data.tokens);
              form.reset();

              if (!data.user.isEmailVerified) {
                router.push(ROUTES.VERIFY_EMAIL);
              }
            },
            onError: (error) => {
              toast.error(error["message"]);
            },
          },
        );
      },
      () => console.log("error"),
    ),
    isPending: register.isPending,
  };
}
