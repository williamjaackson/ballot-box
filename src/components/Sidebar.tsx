"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`h-screen bg-white shadow-sm transition-all duration-300 ${
          isOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <div className="p-4 w-64">
          <h1 className="text-2xl font-bold">Sidebar</h1>
        </div>
      </div>

      <Button
        className={`fixed top-2 transition-all duration-300 ${
          isOpen ? "left-53" : "left-2"
        }`}
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <ChevronRight />}
      </Button>
    </div>
  );
}
