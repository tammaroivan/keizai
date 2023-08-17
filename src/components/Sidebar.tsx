"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Copy } from "lucide-react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ToggleThemeButton";

function Sidebar() {
  const currentRoute = usePathname();

  return (
    <div className="h-screen w-[80px] flex flex-col  items-center justify-between bg-background border-r border-r-background-100 py-4">
      <div className="flex flex-col items-center">
        <Image src="/logo.svg" width={45} height={45} alt="Keizai Logo" />
        <div className="flex flex-col mt-4 text-neutral-0">
          <Link
            href="/"
            className={`hover:text-primary p-4 ${
              currentRoute === "/" && "text-primary"
            }`}
          >
            <Copy />
          </Link>
        </div>
      </div>
      <ModeToggle />
    </div>
  );
}

export default Sidebar;
