function Label({ text, color }: { text: string; color: [number, number, number] }) {
    return (
        <p
            className="text-white font-bold px-2 absolute text-md -translate-x-1/2 -translate-y-4/3 whitespace-nowrap transition-opacity group-hover:-translate-y-3/2 transition-transform duration-200"
            style={{
                backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                transform: "translateX(.5rem)",
            }}
        >
            {text}
        </p>
    );
}

export default function PartyIndicator({
  party,
}: {
  party: {
    name: string;
    alias: string;
    color: [number, number, number];
    position: [number, number];
  };
}) {
  // scale from -4, -4 to 4, 4
  const x = ((party.position[0] + 4) / 8) * 100;
  const y = ((-party.position[1] + 4) / 8) * 100;

  return (
    <div
      className="absolute w-4 h-4 cursor-pointer transform -translate-x-1/2 translate-y-1/2 transition-transform group"
      style={{
        left: `${x}%`,
        bottom: `${y}%`,
      }}
    >
      {/* tooltip */}
      <Label text={party.alias} color={party.color} />
      {/* Outer border */}
      <div
        className="transition-transform duration-200 group-hover:scale-125 absolute w-[24px] h-[24px] rounded-full -left-[4px] -top-[4px]"
        style={{
          backgroundColor: `rgba(${party.color[0]}, ${party.color[1]}, ${party.color[2]}, 0.3)`,
        }}
      />
      {/* White gap layer */}
      <div className="transition-transform duration-200  group-hover:scale-125 absolute w-[20px] h-[20px] rounded-full -left-[2px] -top-[2px] bg-white" />
      {/* Inner fill */}
      <div
        className="transition-transform duration-200  group-hover:scale-125 relative w-full h-full rounded-full"
        style={{
          backgroundColor: `rgb(${party.color[0]}, ${party.color[1]}, ${party.color[2]})`,
        }}
      />
    </div>
  );
}