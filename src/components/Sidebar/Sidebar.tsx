"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight, Plus, Vote, X } from "lucide-react";
import Parties from "./Parties";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
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
          className="fixed absolute transition-all duration-300 top-2"
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            transformOrigin: "center",
            marginLeft: isOpen ? sidebarWidth : 0,
            transform: isOpen
              ? "translateX(-100%) translateX(-.5rem)"
              : "translateX(.5rem)",
          }}
        >
          {isOpen ? <X /> : <ChevronRight />}
        </Button>
      </div>
    </div>
  );
}
