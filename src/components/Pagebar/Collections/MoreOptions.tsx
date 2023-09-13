import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoreVertical } from "lucide-react";
import React from "react";

const MoreOptions = ({
  onAddFolder,
  onClickEdit,
  onClickDelete,
}: {
  onAddFolder?: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical className="text-slate-500" size={13} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {onAddFolder && (
          <DropdownMenuItem onClick={onAddFolder}>Add Folder</DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={onClickEdit}>
          <Tooltip delayDuration={0}>
            <TooltipTrigger className="w-full text-left">Edit</TooltipTrigger>
            <TooltipContent>
              <p>Coming soon</p>
            </TooltipContent>
          </Tooltip>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onClickDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreOptions;
