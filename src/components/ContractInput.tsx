import React from "react";
import { Select, SelectTrigger } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const ContractInput = () => {
  return (
    <div className="flex items-center border p-2 rounded-md">
      <Select disabled>
        <SelectTrigger className="max-w-[200px] border-none">
          FUTURENET
        </SelectTrigger>
      </Select>
      <Input
        className="border-none focus-visible:ring-0"
        defaultValue="f47e3e34187dc84aa9ff41108082d289cdf6e40720cdfba8fcd9974369b9d32e"
        placeholder="Contract adress"
      />
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button>LOAD</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Coming soon</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ContractInput;
