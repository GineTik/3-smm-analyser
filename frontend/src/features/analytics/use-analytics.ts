import { securedRqClient } from "@/shared/api/instance";

export const useAnalytics = (accountUsername: string) => {
  return securedRqClient.useQuery(
    "get",
    "/social-analytics/{accountUsername}",
    {
      params: {
        path: { accountUsername },
      },
    },
  );
};
