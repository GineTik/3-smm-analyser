import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components";
import { CircleUserRound, ChevronsUpDown } from "lucide-react";

export function NavUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center p-4 outline-none hover:bg-background rounded-lg cursor-pointer">
          <CircleUserRound className="w-10 h-10 mr-3 rounded-full bg-gray-700" />
          <div>
            <p className="font-semibold">Імя Фамілія</p>
            <p className="text-sm text-gray-400">@username</p>
          </div>
          <ChevronsUpDown className="w-5 h-5 ml-auto text-gray-400" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left" align="end">
        <DropdownMenuItem>Профіль</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
