"use client";

import { useCollections } from "@/providers/CollectionsProvider";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const InvocationPage = ({ children }: { children: React.ReactNode }) => {
  const { selectedCollection, addCollection } = useCollections();

  if (!selectedCollection) {
    return (
      <div className="flex flex-col justify-center items-center w-full gap-7">
        <Image
          src="/blocks.svg"
          alt="New collection image"
          width={300}
          height={300}
        />
        <h1 className="text-4xl text-primary font-bold">
          Create your first collection
        </h1>
        <Button onClick={() => addCollection("New collection 1")}>
          New collection
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between w-full gap-7">{children}</div>
  );
};

export default InvocationPage;
