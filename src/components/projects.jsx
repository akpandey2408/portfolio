import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { MainCard } from "./project-card";

export const ProjectsPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center pt-24 ">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient opacity-80 -z-10 blur-sm" />
      <div className="flex flex-col gap-y-6 px-2 overflow-y-auto no-scrollbar">
        <div className="gap-x-2 inline-flex items-center">
          <a href={"/"}>
            <Button
              variant={"outline"}
              size={"icon"}
              className="h-8 w-8 glass bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </a>
          <p className="font-semibold text-xl">Projects</p>
        </div>
        <MainCard />
      </div>
    </div>
  );
};
