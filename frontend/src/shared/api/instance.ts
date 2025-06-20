import createClient from "openapi-react-query";
import { paths } from "./schema/generated";
import createFetchClient from "openapi-fetch";
import { useAuth } from "@/shared/hooks/use-auth";
import { ApiSchemas } from "./schema";

export const securedFetchClient = createFetchClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

export const securedRqClient = createClient(securedFetchClient);

securedFetchClient.use({
  onRequest: (options) => {
    const token = useAuth.getState().accessToken;
    if (token) {
      options.request.headers.set("Authorization", `Bearer ${token}`);
    } else {
      return new Response(
        JSON.stringify({
          statusCode: 401,
          message: "Unauthorized",
        } as ApiSchemas["ErrorResponse"]),
        { status: 401 },
      );
    }
  },
});

export const publicFetchClient = createFetchClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

export const publicRqClient = createClient(publicFetchClient);
