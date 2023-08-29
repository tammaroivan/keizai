"use client";

import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { CollectionsProvider } from "@/providers/CollectionsProvider";
import { InvocationProvider } from "@/providers/InvocationProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <TooltipProvider>
        <CollectionsProvider>
          <InvocationProvider>{children}</InvocationProvider>
        </CollectionsProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default Providers;
