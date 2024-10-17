import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const FooterComponent = () => {
  return (
    <div className="w-full min-h-36 py-6 bg-transparent">
      <Separator className="bg-white/40" />
      <footer className="flex flex-col items-center justify-center h-36 text-foreground gap-y-4 bg-transparent">
        <div className="space-x-2">
          <a href={"https://linkedin.com/adamya"} target="_blank">
            <Button className="" size={"icon"} variant={"secondary"}>
              <LinkedInLogoIcon className="w-6 h-6 " />
            </Button>
          </a>

          <a href={"https://github.com/akpandey2408"}>
            <Button className="" size={"icon"} variant={"secondary"}>
              <GitHubLogoIcon className="w-6 h-6 " />
            </Button>
          </a>

          <a href={"https://twitter.com"}>
            <Button className="" size={"icon"} variant={"secondary"}>
              <TwitterLogoIcon className="w-6 h-6 " />
            </Button>
          </a>
        </div>

        <p className="text-sm font-semibold">Made with ❤️ by Adamya</p>
      </footer>
    </div>
  );
};
