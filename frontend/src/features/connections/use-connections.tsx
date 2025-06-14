import { securedRqClient } from "@/shared/api/instance";

export function useConnections() {
  return securedRqClient.useQuery("get", "/connections");
}
