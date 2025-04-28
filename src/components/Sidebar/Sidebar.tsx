"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronRight, Vote, X } from "lucide-react";
import Parties from "./Parties";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState("25rem");

  // Check window width and add resize listener
  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setSidebarWidth(window.innerWidth < 768 ? "80vw" : "25rem");
      };

      // Set initial width
      handleResize();

      // Add resize listener
      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty dependency array since we're setting up the listener once

  return (
    <div className="flex">
      {/* mobile overlay */}
      <div
        className={`block md:hidden w-full h-full bg-black/50 absolute top-0 left-0 z-100 transition-all duration-300`}
        style={{ opacity: isOpen ? 1 : 0 }}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`h-screen z-100 absolute md:relative bg-white shadow-sm transition-all duration-300`}
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
