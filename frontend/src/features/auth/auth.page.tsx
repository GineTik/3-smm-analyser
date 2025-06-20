import { ForgetPasswordCard } from "./forget-password-card";
import { LoginCard } from "./login-card";
import { RegistrationCard } from "./registration-card";
import { VerificationError } from "./verification-error";

export function AuthPage() {
  return (
    <div className="flex gap-4 p-4 max-w-[700px] mx-auto mt-10">
      <div className="flex flex-col gap-4 grow">
        <LoginCard />
        <ForgetPasswordCard />
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <RegistrationCard />
        <VerificationError />
      </div>
    </div>
  );
}
