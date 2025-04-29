"use client";

import { useParties } from "@/context/PartiesContext";
import Quadrant from "./Quadrant";
import AxisLabel from "./AxisLabel";
import PartyIndicator from "./PartyIndicator";
export default function PoliticalCompass() {
  const { parties } = useParties();

  return (
    <div className="flex flex-col items-center gap-4 w-full p-10">
      <div className="relative w-full max-w-[500px] aspect-square bg-white border border-gray-200">
        {/* Axis Labels */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Left label */}
          <AxisLabel text="Economic Left" position="left" />
          <AxisLabel text="Economic Right" position="right" />
          <AxisLabel text="Social Progressive" position="top" />
          <AxisLabel text="Social Conservative" position="bottom" />
        </div>

        <div className="relative w-full h-full">
          <canvas id="canvas" className="absolute top-0 left-0 w-full h-full" />
          {/* Quadrants */}
          <div className="grid grid-cols-2 grid-rows-2 h-full">
            {[...Array(4)].map((_, i) => (
              <Quadrant key={i} />
            ))}
          </div>

          {/* Party Dots */}
          <div className="absolute inset-0">
            {/* {parties.map((party, index) => (
            <PartyIndicator key={index} party={party} />
          ))} */}
            {parties
              .sort((a, b) => a.position[1] - b.position[1])
              .map((party, index) => (
                <PartyIndicator key={index} party={party} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
