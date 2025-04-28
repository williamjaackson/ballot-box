function Label({ text, color }: { text: string; color: [number, number, number] }) {
    return (
        <p
            className="text-white font-bold px-2 absolute text-md -translate-y-4/3 whitespace-nowrap transition-opacity group-hover:-translate-y-3/2 transition-transform duration-200"
            style={{
                backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                transform: "translateX(-.5rem)",
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
    <div className="absolute" style={{
        left: `${x}%`,
        bottom: `${y}%`,
        transform: "translate(-50%, 50%)",
    }}>
        {/* border */}
        <div className="rounded-full" style={{
                border: `3px solid rgba(${party.color[0]}, ${party.color[1]}, ${party.color[2]}, 0.3)`,
        }}>
            {/* white circle */}
            <div className="rounded-full bg-white w-5 h-5 grid place-items-center">
                {/* fill colour */}
                <div className="rounded-full" style={{
                    width: "1rem",
                    height: "1rem",
                    backgroundColor: `rgb(${party.color[0]}, ${party.color[1]}, ${party.color[2]})`,
                }}/>
            </div>
        </div>
    </div>
  );
}