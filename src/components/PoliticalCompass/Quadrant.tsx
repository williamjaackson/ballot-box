export default function Quadrant() {
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
}