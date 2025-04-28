"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight, Plus, Vote, X } from "lucide-react";
import Parties from "./Parties";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const sidebarWidth = "25rem";

  return (
    <div className="flex">
      <div
        className={`h-screen relative bg-white shadow-sm transition-all duration-300`}
        style={{ width: isOpen ? sidebarWidth : 0 }}
      >
        <div className="w-full overflow-hidden">
          <div className={`p-4`} style={{ width: sidebarWidth }}>
            {/* Header */}
            <h1 className="text-2xl font-light flex gap-2 items-center">
              <Vote className="w-6 h-6" /> Ballot Box
            </h1>
            <hr className="my-2" />
            {/* Political Parties */}
            <Parties />
          </div>
        </div>

        {/* Toggle Sidebar Button */}
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
