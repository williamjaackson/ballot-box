export default function Quadrant() {
  const cells = 4;
  return (
    <div
      className="border border-gray-200 w-full h-full grid"
      style={{
        gridTemplateColumns: `repeat(${cells}, 1fr)`,
        gridTemplateRows: `repeat(${cells}, 1fr)`,
      }}
    >
      {[...Array(cells * cells)].map((_, i) => (
        <div key={i} className="border border-gray-200 w-full h-full" />
      ))}
    </div>
  );
}
