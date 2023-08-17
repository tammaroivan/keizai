import React from "react";

const Breadcrumb = ({
  contractName,
  folderName,
  contractInvocationName,
}: {
  contractName: string;
  folderName: string;
  contractInvocationName: string;
}) => {
  return (
    <div className="flex gap-1">
      <span className="text-background-300">
        {contractName} / {folderName} /
      </span>
      <span className="font-bold">{contractInvocationName}</span>
    </div>
  );
};

export default Breadcrumb;
