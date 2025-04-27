import PoliticalCompass from "@/components/PoliticalCompass/component";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
        <Button className="absolute top-2 left-2">Test</Button>
        <PoliticalCompass />
      </div>
    </>
  );
}
