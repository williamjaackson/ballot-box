"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex">
      <div
        className={`h-full bg-white shadow-sm transition-all duration-300 ${
          isOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <div className="p-4 w-64">
          <h1 className="text-2xl font-bold">Sidebar</h1>
        </div>
      </div>
      <Button
        className="absolute -right-11 top-2"
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChevronRight
          className="transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </Button>
    </div>
  );
}
