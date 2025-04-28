import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const parties = [
  {
    name: "Liberal National Party",
    color: "blue",
    position: [1, 1],
  },
  {
    name: "One Nation",
    color: "orange",
    position: [1.4, 3.2],
  },
  {
    name: "The Greens",
    color: "green",
    position: [-3.6, -3.2],
  },
  {
    name: "Australian Labor Party",
    color: "red",
    position: [-1, -1.4],
  },
];

function Parties() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-md font-medium uppercase">Political Parties</h2>
      <div className="flex flex-col gap-2">
        {parties.map((party) => (
          <div className="flex justify-between cursor-pointer hover:bg-gray-100 gap-2 items-center border border-gray-200 rounded-md p-2">
            <div className="flex gap-2 items-center">
              <div
                className={`w-4 h-4 rounded-full bg-${party.color}-500`}
              ></div>
              <p className="text-sm font-medium">{party.name}</p>
            </div>
            <p
              className="text-xs text-gray-400"
              style={{
                fontFamily: "monospace",
              }}
            >
              ({party.position[0] > 0 ? "+" : ""}
              {party.position[0]}, {party.position[1] > 0 ? "+" : ""}
              {party.position[1]})
            </p>
          </div>
        ))}
      </div>
      <Button variant="outline">
        <Plus className="w-4 h-4" />
        Add Party
      </Button>
    </div>
  );
}

export default Parties;
