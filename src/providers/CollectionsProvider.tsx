"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Invocation } from "./InvocationProvider";

type Folder = {
  id: string;
  name: string;
  invocations: Invocation[];
};

type Collection = {
  id: string;
  name: string;
  folders: Folder[];
};

const CollectionsContext = createContext<{
  loading: boolean;
  collections: Collection[];
  addCollection: (name: string) => void;
  removeCollection: (id: string) => void;
  selectedCollection: Collection | null;
  selectCollection: (id: string) => void;
}>({
  loading: true,
  collections: [],
  addCollection: () => {},
  removeCollection: () => {},
  selectedCollection: null,
  selectCollection: () => {},
});

export const CollectionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [selectedCollection, setSelectedCollection] =
    useState<Collection | null>(null);

  useEffect(() => {
    const localData = localStorage.getItem("collections");
    const newValue = localData ? JSON.parse(localData) : [];
    setCollections(localData ? newValue : []);
    setSelectedCollection(newValue.length ? newValue[0] : null);
    setLoading(false);
  }, []);

  const addCollection = (name: string) => {
    const newValue = [
      ...collections,
      {
        id: new Date().getTime().toString(),
        name,
        folders: [],
      },
    ];

    setCollections(newValue);

    localStorage.setItem("collections", JSON.stringify(newValue));
    if (newValue.length === 1) {
      setSelectedCollection(newValue[0]);
    }
  };

  const removeCollection = (id: string) => {
    const newValue = collections.filter((collection) => collection.id !== id);

    setCollections(newValue);
    localStorage.setItem("collections", JSON.stringify(newValue));

    if (newValue[0]) {
      setSelectedCollection(newValue[0]);
    } else {
      setSelectedCollection(null);
    }
  };

  const selectCollection = (id: string) => {
    const newValue = collections.find((collection) => collection.id === id);

    if (!newValue) return;

    setSelectedCollection(newValue);
  };

  return (
    <CollectionsContext.Provider
      value={{
        collections,
        addCollection,
        removeCollection,
        selectedCollection,
        selectCollection,
        loading,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};

export const useCollections = () => useContext(CollectionsContext);
