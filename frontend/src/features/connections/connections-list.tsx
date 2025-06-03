import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { ConnectionsCard } from "./connections-card";

// TODO: remove deprecated icons

export function ConnectionsList() {
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
        }}
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
