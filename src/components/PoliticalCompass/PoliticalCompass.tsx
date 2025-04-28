"use client";

import { useEffect, useState } from "react";
import { useParties } from "@/context/PartiesContext";

const Quadrant = () => {
  return (
    <div
      className="border border-gray-200 w-full h-full grid"
      style={{
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
      }}
    >
      {[...Array(16)].map((_, i) => (
        <div key={i} className="border border-gray-200 w-full h-full" />
      ))}
    </div>
  );
};

function Label({
  text,
  position,
}: {
  text: string;
  position: "top" | "bottom" | "left" | "right";
}) {
  return (
    <p
      style={{
        textTransform: "uppercase",
        fontFamily: "Inter",
        fontWeight: 500,
        color: "#666",
        width: "100%",
        textAlign: "center",
        position: "absolute",
        top: position === "top" ? "0" : position === "bottom" ? "100%" : "50%",
        left: position === "left" ? "0" : position === "right" ? "100%" : "50%",
        transform:
          "translate(-50%, -50%) " +
          (position === "bottom" ? "translate(0, 75%)" : "translate(0, -75%)"),
        rotate:
          position === "left"
            ? "-90deg"
            : position === "right"
            ? "90deg"
            : "0deg",
        transformOrigin: "left top",
      }}
    >
      {text}
    </p>
  );
}

function PartyDot({
  party,
}: {
  party: {
    name: string;
    color: [number, number, number];
    position: [number, number];
  };
}) {
  // scale from -4, -4 to 4, 4
  const x = ((party.position[0] + 4) / 8) * 100;
  const y = ((-party.position[1] + 4) / 8) * 100;

  return (
    <div
      className="absolute w-4 h-4 cursor-pointer transform -translate-x-1/2 translate-y-1/2 transition-transform hover:scale-125"
      style={{
        left: `${x}%`,
        bottom: `${y}%`,
      }}
      title={`${party.name} (${party.position[0]}, ${party.position[1]})`}
    >
      {/* Outer border */}
      <div
        className="absolute w-[24px] h-[24px] rounded-full -left-[4px] -top-[4px]"
        style={{
          backgroundColor: `rgba(${party.color[0]}, ${party.color[1]}, ${party.color[2]}, 0.3)`,
        }}
      />
      {/* White gap layer */}
      <div className="absolute w-[20px] h-[20px] rounded-full -left-[2px] -top-[2px] bg-white" />
      {/* Inner fill */}
      <div
        className="relative w-full h-full rounded-full"
        style={{
          backgroundColor: `rgb(${party.color[0]}, ${party.color[1]}, ${party.color[2]})`,
        }}
      />
    </div>
  );
}

export default function PoliticalCompass() {
  const { parties } = useParties();

  return (
    <div className="flex flex-col items-center gap-4 w-full p-10">
      <div className="relative w-full max-w-[500px] aspect-square bg-white border border-gray-200">
        {/* Quadrants */}
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          <Quadrant />
          <Quadrant />
          <Quadrant />
          <Quadrant />
        </div>

        {/* Axis Labels */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Left label */}
          <Label text="Economic Left" position="left" />
          <Label text="Economic Right" position="right" />
          <Label text="Social Progressive" position="top" />
          <Label text="Social Conservative" position="bottom" />
        </div>

        {/* Party Dots */}
        <div className="absolute inset-0">
          {parties.map((party, index) => (
            <PartyDot key={index} party={party} />
          ))}
        </div>
      </div>
    </div>
  );
}
