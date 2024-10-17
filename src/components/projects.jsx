import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { MainCard } from "./project-card";

export const ProjectsPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center pt-6 border-t">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient opacity-80 -z-10 blur-sm" />
      <div className="flex flex-col gap-y-6 px-2 overflow-y-auto no-scrollbar">
        <div className="gap-x-2 inline-flex items-center justify-center">
          
          <p className="font-semibold text-xl">My Projects</p>
        </div>
        <MainCard />
      </div>
    </div>
  );
};
