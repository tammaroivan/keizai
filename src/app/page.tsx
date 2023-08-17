import Breadcrumb from "@/components/Breadcrumb";
import ContractInput from "@/components/ContractInput";
import Collections from "@/components/Pagebar/Collections";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-1">
      <Collections />
      <div className="flex flex-col p-3 w-full gap-7">
        <Breadcrumb
          contractName="Counter contract"
          folderName="Basic use case"
          contractInvocationName="Get current counter"
        />
        <ContractInput />
      </div>
    </main>
  );
}
