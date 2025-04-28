import { Button } from "../ui/button";
import { Plus } from "lucide-react";

function Parties() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-md font-medium uppercase">Political Parties</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between cursor-pointer hover:bg-gray-100 gap-2 items-center border border-gray-200 rounded-md p-2">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <p className="text-sm font-medium">Liberal National Party</p>
          </div>
          <p
            className="text-xs text-gray-400"
            style={{
              fontFamily: "monospace",
            }}
          >
            (&nbsp;+1&nbsp;, &nbsp;+1&nbsp;)
          </p>
        </div>
        <div className="flex justify-between cursor-pointer hover:bg-gray-100 gap-2 items-center border border-gray-200 rounded-md p-2">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
            <p className="text-sm font-medium">One Nation</p>
          </div>
          <p
            className="text-xs text-gray-400"
            style={{
              fontFamily: "monospace",
            }}
          >
            (+1.4, +3.2)
          </p>
        </div>
        <div className="flex justify-between cursor-pointer hover:bg-gray-100 gap-2 items-center border border-gray-200 rounded-md p-2">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <p className="text-sm font-medium">The Greens</p>
          </div>
          <p
            className="text-xs text-gray-400"
            style={{
              fontFamily: "monospace",
            }}
          >
            (-3.6, -3.2)
          </p>
        </div>
        <div className="flex justify-between cursor-pointer hover:bg-gray-100 gap-2 items-center border border-gray-200 rounded-md p-2">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <p className="text-sm font-medium">Australian Labor Party</p>
          </div>
          <p
            className="text-xs text-gray-400"
            style={{
              fontFamily: "monospace",
            }}
          >
            (&nbsp;-1&nbsp;, -1.4)
          </p>
        </div>

        <Button variant="outline">
          <Plus className="w-4 h-4" />
          Add Party
        </Button>
      </div>
    </div>
  );
}

export default Parties;
