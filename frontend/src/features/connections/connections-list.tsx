"use client";

import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { ConnectionsCard } from "./connections-card";
import { useConnections } from "./use-connections";
import { SocialNetwork } from "@/shared/api/schema/types";

// TODO: remove deprecated icons

export function ConnectionsList() {
  const connections = useConnections();

  if (connections.isLoading) {
    return <div>Loading...</div>;
  }

  if (connections.isError) {
    return <div>Error: {connections.error.message}</div>;
  }

  console.log("connections: ", connections.data);
  return (
    <div className="flex flex-col gap-2">
      <ConnectionsCard
        socialNetwork={{
          title: "Instagram",
          icon: <InstagramIcon />,
          isConnected: false,
        }}
      />
      <ConnectionsCard
        socialNetwork={{
          title: "X (Twitter)",
          icon: <TwitterIcon />,
          isConnected: false,
          profileUrlFormat: "https://x.com/{username}",
        }}
        accounts={connections.data?.filter(
          (account) => account.socialNetworkId === SocialNetwork.TWITTER,
        )}
      />
      <ConnectionsCard
        socialNetwork={{
          title: "Facebook",
          icon: <FacebookIcon />,
          isConnected: false,
        }}
      />
    </div>
  );
}
