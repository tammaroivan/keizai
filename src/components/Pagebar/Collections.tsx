"use client";

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
import { useCollections } from "@/providers/CollectionsProvider";
import NewFolderButton from "../NewFolderButton";
import { X } from "lucide-react";

const Collections = () => {
  const {
    collections,
    addCollection,
    removeCollection,
    selectedCollection,
    selectCollection,
    addFolderToCollection,
    removeFolderFromCollection,
  } = useCollections();

  return (
    <div className="w-[300px] flex-col border-r dark:border-r-border h-full px-3 py-1">
      <div className="flex items-center  justify-between">
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
      <div className="flex flex-col items-end">
        <Select
          value={selectedCollection?.id}
          onValueChange={(value) => selectCollection(value)}
        >
          <SelectTrigger
            disabled={collections.length === 0}
            className="w-full mt-3"
          >
            <SelectValue placeholder="No collections" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {collections.map((collection) => (
                <SelectItem value={collection.id} key={collection.id}>
                  {collection.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex justify-between w-full items-center">
          <Button
            disabled={collections.length === 0}
            variant="destructive"
            className="text-xs px-2 py-1 h-fit"
            onClick={() => {
              if (selectedCollection) {
                removeCollection(selectedCollection?.id);
              }
            }}
          >
            Delete
          </Button>
          <Button
            disabled
            variant="link"
            className="text-xs p-1 text-foreground"
          >
            Export
          </Button>
        </div>
      </div>
      {selectedCollection && (
        <>
          <h4 className="text-lg font-bold mt-8">Folders</h4>
          <Accordion type="multiple" className="w-full">
            {selectedCollection?.folders.map((folder) => (
              <AccordionItem
                key={folder.id}
                value={folder.id}
                className="border-none"
              >
                <AccordionTrigger className="h-10 w-full">
                  <div className="flex justify-between items-center w-full group">
                    <span>{folder.name}</span>
                    <Button
                      variant="ghost"
                      className="w-fit h-fit p-1 opacity-0 group-hover:opacity-100"
                      onClick={() =>
                        removeFolderFromCollection(
                          selectedCollection.id,
                          folder.id
                        )
                      }
                    >
                      <X size={12} />
                    </Button>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2 ml-7 text-slate-400">
                    No Invocations
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <NewFolderButton
            onClickAdd={() => {
              if (selectedCollection) {
                addFolderToCollection(selectedCollection.id, "New Folder");
              }
            }}
          />
        </>
      )}
    </div>
  );
};

export default Collections;
