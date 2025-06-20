import { useAuth } from "@/shared/hooks/use-auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const useConnectTwitter = () => {
  const router = useRouter();

  return {
    connectTwitter: async () => {
      console.log(process.env.COOKIE_BACKEND_DOMAIN);
      const userId = useAuth.getState().user?.id;
      if (userId) {
        Cookies.set("twitterConnectUserId", userId.toString(), {
          path: "/",
          domain: process.env.COOKIE_BACKEND_DOMAIN,
        });
      }
      router.push(
        `${process.env.NEXT_PUBLIC_API_URL}/connections/twitter/oauth`,
      );
    },
  };
};
