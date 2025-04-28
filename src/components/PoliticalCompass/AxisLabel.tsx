export default function AxisLabel({
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
