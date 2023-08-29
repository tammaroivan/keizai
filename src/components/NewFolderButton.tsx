import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const NewFolderButton = ({ onClickAdd }: { onClickAdd: () => void }) => {
  return (
    <Button
      variant="link"
      className="flex gap-3 text-md text-slate-500 items-center px-0"
      onClick={onClickAdd}
    >
      <ChevronDown size={16} />
      <span>Add Folder</span>
    </Button>
  );
};

export default NewFolderButton;
