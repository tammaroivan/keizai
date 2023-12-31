"use client";

import { useCollections } from "@/providers/CollectionsProvider";
import { Loader } from "lucide-react";
import React from "react";

export const AppLoader = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useCollections();

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full">
        <Loader className="animate-spin" size={36} />
      </div>
    );
  }

  return children;
};
