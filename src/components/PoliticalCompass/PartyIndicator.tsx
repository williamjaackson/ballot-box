import { Party } from "@/context/PartiesContext";

function Label({ party }: { party: Party }) {
  return (
    <p
      className="pointer-events-none group-active:-translate-y-1/5 group-hover:-translate-y-1/4 transition-transform duration-200 text-white font-bold absolute text-md whitespace-nowrap transition-opacity left-1/2 -translate-x-1/2 px-2"
      style={{
        backgroundColor: `rgb(${party.color[0]}, ${party.color[1]}, ${party.color[2]})`,
        transform: "translateY(-100%) translateY(-4px)",
      }}
    >
      {party.alias}
    </p>
  );
}

export default function PartyIndicator({ party }: { party: Party }) {
  // scale from -4, -4 to 4, 4
  const x = ((party.position[0] + 4) / 8) * 100;
  const y = ((-party.position[1] + 4) / 8) * 100;

  return (
    <div
      className="group absolute cursor-pointer"
      style={{
        left: `${x}%`,
        bottom: `${y}%`,
        transform: "translate(-50%, 50%)",
      }}
    >
      {/* label */}
      <Label party={party} />
      {/* border */}
      <div
        className="group-hover:scale-125 group-active:scale-115 transition-transform duration-200 rounded-full"
        style={{
          border: `3px solid rgba(${party.color[0]}, ${party.color[1]}, ${party.color[2]}, 0.3)`,
        }}
      >
        {/* white circle */}
        <div className="rounded-full bg-white w-5 h-5 grid place-items-center">
          {/* fill colour */}
          <div
            className="rounded-full"
            style={{
              width: "1rem",
              height: "1rem",
              backgroundColor: `rgb(${party.color[0]}, ${party.color[1]}, ${party.color[2]})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
