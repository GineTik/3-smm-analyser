import { Button } from "@/shared/components/ui-kit/button";
import { SendIcon } from "lucide-react";

type SocialNetwork = {
  title: string;
  icon: React.ReactNode;
  isConnected: boolean;
};

type ConnectionsCardProps = {
  socialNetwork: SocialNetwork;
};

export function ConnectionsCard({ socialNetwork }: ConnectionsCardProps) {
  return (
    <div className="flex items-center gap-2 border border-border rounded-2xl p-4">
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
        {socialNetwork.icon}
      </div>
      <h2>{socialNetwork.title}</h2>
      <Button variant="secondary" className="ml-auto">
        Підключити
        <SendIcon className="w-4 h-4" />
      </Button>
    </div>
  );
}
