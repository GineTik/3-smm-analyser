"use client";

import { Button } from "@/shared/components/ui-kit/button";
import { cn } from "@/shared/lib/utils";
import { ArrowRightIcon, ChevronDownIcon, SendIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useConnectTwitter } from "./use-connect-twitter";
import { ApiSchemas } from "@/shared/api/schema";
import Link from "next/link";

type SocialNetwork = {
  title: string;
  icon: React.ReactNode;
  isConnected: boolean;
  profileUrlFormat?: string;
};

type ConnectionsCardProps = {
  socialNetwork: SocialNetwork;
  accounts?: ApiSchemas["AccountDto"][];
};

export function ConnectionsCard({
  socialNetwork,
  accounts,
}: ConnectionsCardProps) {
  const [accountsIsOpened, setAccountsIsOpened] = useState(false);
  const { connectTwitter } = useConnectTwitter();

  return (
    <div className="items-center gap-2 border border-border rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 w-full p-4">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          {socialNetwork.icon}
        </div>
        <h2>{socialNetwork.title}</h2>
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="secondary" onClick={connectTwitter}>
            Підключити
            <SendIcon className="w-4 h-4" />
          </Button>
          {accounts && accounts.length !== 0 && (
            <Button
              variant="outline"
              className="ml-auto"
              onClick={() => setAccountsIsOpened(!accountsIsOpened)}
            >
              <ChevronDownIcon className="w-4 h-4" />
              {accountsIsOpened ? "Сховати" : "Усі акаунти"}
            </Button>
          )}
        </div>
      </div>{" "}
      <div
        className={cn(
          "transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] overflow-hidden",
          accountsIsOpened ? "max-h-screen" : "max-h-0",
        )}
      >
        <div className="divide-y divide-border">
          {accounts?.map((account) => (
            <div
              key={account.id}
              className="first:border-t py-2 px-4 flex items-center cursor-pointer hover:bg-muted transition-colors"
            >
              @{account.username}
              <div className="flex gap-2 ml-auto">
                <Button variant="outline" size="sm">
                  <XIcon className="w-4 h-4" />
                  Відключити
                </Button>
                {socialNetwork.profileUrlFormat && (
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={`${socialNetwork.profileUrlFormat.replace(
                        "{username}",
                        account.username,
                      )}`}
                      target="_blank"
                    >
                      Профіль
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
