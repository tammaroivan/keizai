import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Folder } from "@/providers/CollectionsProvider";
import { X } from "lucide-react";
import React from "react";

const Folder = ({
  folder,
  onRemove,
}: {
  folder: Folder;
  onRemove: () => void;
}) => {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value={folder.id} className="border-none">
        <AccordionTrigger className="h-10 w-full">
          <div className="flex justify-between items-center w-full group text-slate-100">
            <span>{folder.name}</span>
            <Button
              variant="ghost"
              className="w-fit h-fit p-1 opacity-0 group-hover:opacity-100"
              onClick={onRemove}
            >
              <X size={12} />
            </Button>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {folder.invocations.length ? (
            <div className="flex flex-col gap-2 ml-4 text-slate-100">
              {folder.invocations.map((invocation) => (
                <span key={invocation.id}>{invocation.name}</span>
              ))}
            </div>
          ) : (
            <span className="ml-7 text-sm">No invocations</span>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Folder;
