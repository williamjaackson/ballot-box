"use client";

import { useState } from "react";

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

export default function PoliticalCompass() {
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
      </div>
    </div>
  );
}
