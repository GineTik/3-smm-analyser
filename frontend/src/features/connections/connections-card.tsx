"use client";

import { Button } from "@/shared/components/ui-kit/button";
import { cn } from "@/shared/lib/utils";
import { ArrowRightIcon, ChevronDownIcon, SendIcon } from "lucide-react";
import { useState } from "react";

type SocialNetwork = {
  title: string;
  icon: React.ReactNode;
  isConnected: boolean;
};

type ConnectionsCardProps = {
  socialNetwork: SocialNetwork;
};

export function ConnectionsCard({ socialNetwork }: ConnectionsCardProps) {
  const [accountsIsOpened, setAccountsIsOpened] = useState(false);
  return (
    <div className="items-center gap-2 border border-border rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 w-full p-4">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          {socialNetwork.icon}
        </div>
        <h2>{socialNetwork.title}</h2>
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="secondary">
            Підключити
            <SendIcon className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="ml-auto"
            onClick={() => setAccountsIsOpened(!accountsIsOpened)}
          >
            <ChevronDownIcon className="w-4 h-4" />
            {accountsIsOpened ? "Сховати" : "Усі акаунти"}
          </Button>
        </div>
      </div>{" "}
      <div
        className={cn(
          "transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] overflow-hidden",
          accountsIsOpened ? "max-h-screen" : "max-h-0",
        )}
      >
        <div className="divide-y divide-border">
          {[
            {
              account: "@account1",
            },
            {
              account: "@account2",
            },
            {
              account: "@account3",
            },
          ].map((account) => (
            <div
              key={account.account}
              className="first:border-t py-2 px-4 flex items-center cursor-pointer hover:bg-muted transition-colors"
            >
              {account.account}
              <div className="ml-auto flex items-center gap-2 text-sm">
                Перейти
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
