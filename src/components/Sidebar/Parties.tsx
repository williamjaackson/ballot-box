import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useParties } from "@/context/PartiesContext";

function Parties() {
  const { parties } = useParties();

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-sm font-bold uppercase">Political Parties</h2>
      <div className="flex flex-col gap-2">
        {parties.map((party, index) => (
          <div
            key={index}
            className="flex justify-between cursor-pointer hover:bg-gray-100 gap-2 items-center border border-gray-200 rounded-md p-2"
          >
            <div className="flex gap-2 items-center">
              <div
                className={`ml-1 w-3 h-3 rounded-full`}
                style={{
                  backgroundColor: `rgb(${party.color[0]}, ${party.color[1]}, ${party.color[2]})`,
                }}
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
