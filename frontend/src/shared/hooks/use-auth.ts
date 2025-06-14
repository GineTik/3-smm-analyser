import Cookies from "js-cookie";
import { useCallback, useState } from "react";
import { components } from "../api/schema/generated";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants/cookies";
import { jwtDecode } from "jwt-decode";
import { User } from "../types/user";
import { createGStore } from "create-gstore";

type Tokens = Omit<
  components["schemas"]["TokensDto"],
  "accessTokenExpiresIn" | "refreshTokenExpiresIn"
>;

export const useAuth = createGStore(() => {
  const [tokens, setTokens] = useState<Tokens | null>({
    accessToken: Cookies.get(ACCESS_TOKEN_KEY) ?? "",
    refreshToken: Cookies.get(REFRESH_TOKEN_KEY) ?? "",
  });

  const logout = useCallback(() => {
    Cookies.remove(ACCESS_TOKEN_KEY);
    Cookies.remove(REFRESH_TOKEN_KEY);
    setTokens(null);
  }, []);

  const save = useCallback((tokens: Tokens) => {
    Cookies.set(ACCESS_TOKEN_KEY, tokens.accessToken);
    Cookies.set(REFRESH_TOKEN_KEY, tokens.refreshToken);
    setTokens(tokens);
  }, []);

  return {
    isAuthenticated: !!tokens?.accessToken,
    accessToken: tokens?.accessToken,
    refreshToken: tokens?.refreshToken,
    save,
    logout,
    user: tokens?.accessToken ? (jwtDecode(tokens.accessToken) as User) : null,
  };
});
