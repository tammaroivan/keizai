"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCollections } from "@/providers/CollectionsProvider";
import Folder from "./Folder";
import MoreOptions from "./MoreOptions";

const Collections = () => {
  const {
    collections,
    addCollection,
    removeCollection,
    addFolderToCollection,
    removeFolderFromCollection,
  } = useCollections();

  return (
    <div className="w-[300px] flex flex-col border-r dark:border-r-border h-full px-3 py-1 gap-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold">Collections</h4>
        <div>
          <Button
            variant="secondary"
            className="text-xs px-2 py-1 h-auto"
            onClick={() =>
              addCollection(`New collection ${collections.length + 1}`)
            }
          >
            New
          </Button>
          <Button variant="link" className="p-2 text-foreground" disabled>
            Import
          </Button>
        </div>
      </div>
      <Accordion type="multiple" className="w-full">
        {collections.map((collection) => (
          <AccordionItem
            key={collection.id}
            value={collection.id}
            className="border-none"
          >
            <div className="flex justify-between items-center">
              <AccordionTrigger className="h-10 w-full">
                <div className="flex justify-between items-center w-full group">
                  <span>{collection.name}</span>
                </div>
              </AccordionTrigger>
              <MoreOptions
                onAddFolder={() =>
                  addFolderToCollection(collection.id, "New Folder")
                }
                onClickEdit={() => {}}
                onClickDelete={() => removeCollection(collection.id)}
              />
            </div>
            <AccordionContent>
              {collection.folders.length ? (
                <div className="flex flex-col ml-5 text-slate-400">
                  {collection.folders.map((folder) => (
                    <Folder
                      key={folder.id}
                      folder={folder}
                      onRemove={() =>
                        removeFolderFromCollection(collection.id, folder.id)
                      }
                    />
                  ))}
                </div>
              ) : (
                <span className="text-xs text-slate-400 ml-7">No folders</span>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Collections;
