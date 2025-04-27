"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`h-screen relative bg-white shadow-sm transition-all duration-300 ${
          isOpen ? "w-96" : "w-0"
        }`}
      >
        <div className="p-4 w-full overflow-hidden">
          <h1 className="text-2xl font-bold">Sidebar</h1>
        </div>

        <Button
          className={`fixed absolute top-2 transition-all duration-300 ${
            isOpen ? "right-2" : "-right-11"
          }`}
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <ChevronRight />}
        </Button>
      </div>
    </div>
  );
}
