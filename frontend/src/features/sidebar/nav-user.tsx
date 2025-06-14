import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components";
import { ChevronsUpDown } from "lucide-react";
import { useAuth } from "@/shared/hooks/use-auth";

export function NavUser() {
  const { user, logout } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-background cursor-pointer">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-muted-foreground truncate">
              {user?.email}
            </p>
          </div>
          <ChevronsUpDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left" align="end">
        <DropdownMenuItem onClick={logout}>Вийти</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
