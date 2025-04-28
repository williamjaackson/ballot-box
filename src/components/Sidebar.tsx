"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight, Plus, Vote, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState("25rem");

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
            <div className="flex flex-col gap-2">
              <h2 className="text-md font-medium uppercase">
                Political Parties
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between cursor-pointer hover:bg-gray-100 gap-2 items-center border border-gray-200 rounded-md p-2">
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <p className="text-sm font-medium">
                      Liberal National Party
                    </p>
                  </div>
                  <p
                    className="text-xs text-gray-400"
                    style={{
                      fontFamily: "monospace",
                    }}
                  >
                    (&nbsp;+1&nbsp;, &nbsp;+1&nbsp;)
                  </p>
                </div>
                <div className="flex justify-between cursor-pointer hover:bg-gray-100 gap-2 items-center border border-gray-200 rounded-md p-2">
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                    <p className="text-sm font-medium">One Nation</p>
                  </div>
                  <p
                    className="text-xs text-gray-400"
                    style={{
                      fontFamily: "monospace",
                    }}
                  >
                    (+1.4, +3.2)
                  </p>
                </div>
                <div className="flex justify-between cursor-pointer hover:bg-gray-100 gap-2 items-center border border-gray-200 rounded-md p-2">
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <p className="text-sm font-medium">The Greens</p>
                  </div>
                  <p
                    className="text-xs text-gray-400"
                    style={{
                      fontFamily: "monospace",
                    }}
                  >
                    (-3.6, -3.2)
                  </p>
                </div>
                <div className="flex justify-between cursor-pointer hover:bg-gray-100 gap-2 items-center border border-gray-200 rounded-md p-2">
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <p className="text-sm font-medium">
                      Australian Labor Party
                    </p>
                  </div>
                  <p
                    className="text-xs text-gray-400"
                    style={{
                      fontFamily: "monospace",
                    }}
                  >
                    (&nbsp;-1&nbsp;, -1.4)
                  </p>
                </div>

                <Button variant="outline">
                  <Plus className="w-4 h-4" />
                  Add Party
                </Button>
              </div>
            </div>
          </div>
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
