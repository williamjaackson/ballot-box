import PoliticalCompass from "@/components/PoliticalCompass/component";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex w-full relative">
      <Sidebar />
      <div className="flex-1 flex justify-center items-center min-h-screen bg-gray-50 w-full">
        <div className="w-full max-w-7xl mx-auto">
          <PoliticalCompass />
        </div>
      </div>
    </div>
  );
}
