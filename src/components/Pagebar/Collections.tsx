import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code } from "lucide-react";

const contractInvocations = [
  "Get current counter",
  "Increase counter",
  "Decrease counter",
];

const Collections = () => {
  return (
    <div className="w-[300px] flex-col dark:text-text border-r dark:border-r-background-100 h-full px-3 py-1">
      <div className="flex items-center  justify-between">
        <h4 className="text-lg font-bold">Collections</h4>
        <div className="">
          <Button variant="secondary" className="text-xs px-2 py-1 h-auto ">
            New
          </Button>
          <Button variant="link" className="p-2">
            Import
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <Select value="counter">
          <SelectTrigger className="w-full mt-5">
            <SelectValue placeholder="Select a contract" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="counter">Counter contract</SelectItem>
              <SelectItem value="poll">Poll contract</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="link" className="text-xs p-1 ">
          Export collection
        </Button>
      </div>
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={["folder-id"]}
      >
        <AccordionItem value="folder-id" className="border-none">
          <AccordionTrigger>Basic use case</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 ml-5">
              {contractInvocations.map((invocation) => (
                <div key={invocation} className="flex items-center gap-1">
                  <Code height={16} className="text-background-200" />
                  <Button variant="link" className="p-0 h-auto ">
                    {invocation}
                  </Button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Collections;
