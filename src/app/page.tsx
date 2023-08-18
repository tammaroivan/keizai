import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ContractInput from "@/components/ContractInput";
import Collections from "@/components/Pagebar/Collections";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import Terminal from "@/components/ui/Terminal";

const tabs: Record<string, string> = {
  functions: "Functions",
  authorizations: "Authorization",
  preInvocateScript: "Pre-invocate script",
  tests: "Tests",
  events: "Events",
};

export default function Home() {
  return (
    <main className="flex flex-1">
      <Collections />
      <div className="flex flex-col justify-between w-full gap-7">
        <div className="flex flex-col p-3 w-full gap-7">
          <Breadcrumb
            contractName="Counter contract"
            folderName="Basic use case"
            contractInvocationName="Get current counter"
          />
          <ContractInput />
          <Tabs defaultValue="functions" className="">
            <TabsList className="bg-white text-black dark:bg-background dark:text-white">
              {Object.keys(tabs).map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="data-[state=active]:bg-background data-[state=active]:dark:bg-white data-[state=active]:text-white data-[state=active]:dark:text-black  rounded-md"
                >
                  {tabs[tab]}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="functions">
              <div className="flex justify-center mt-36 flex-1 gap-8">
                <Image
                  src="/moon.svg"
                  alt="Load contract image"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col justify-center text-primary font-black text-6xl">
                  <h2>Let&apos;s Load</h2>
                  <h2>Your Contract</h2>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <Terminal />
      </div>
    </main>
  );
}
