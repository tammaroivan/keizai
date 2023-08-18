import React from "react";
import { Select, SelectTrigger } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const ContractInput = () => {
  return (
    <div className="flex items-center border border-background-200 p-2 rounded-md">
      <Select disabled>
        <SelectTrigger className="max-w-[200px] dark:border-none dark:bg-background border-none">
          FUTURENET
        </SelectTrigger>
      </Select>
      <Input
        className="border-none dark:border-none dark:bg-background focus-visible:ring-0"
        defaultValue="f47e3e34187dc84aa9ff41108082d289cdf6e40720cdfba8fcd9974369b9d32e"
      />
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button className="bg-primary dark:bg-primary text-black hover:bg-primary-100 dark:hover:bg-primary-100">
            LOAD
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Coming soon</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ContractInput;
