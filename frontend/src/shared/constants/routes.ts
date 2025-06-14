class Routes {
  HOME = "/";
  AUTH = `${this.HOME}auth`;
  ANALYTICS = `${this.HOME}analytics`;
  CONNECTIONS = `${this.HOME}connections`;
  DASHBOARD = `${this.HOME}dashboard`;
  VERIFY_EMAIL = `${this.AUTH}/verify`;
}

export const ROUTES = new Routes();
