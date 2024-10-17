import { LucideMail } from "lucide-react";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CopyButton } from "./copy-button";
import { cn } from "../lib/utils";
const navItems = [

  { newTab: false, href: "/", label: "Home" },
  { newTab: false, href: "/projects", label: "Projects" },
  { newTab: false, href: "https://utfs.io/", label: "Resume" }
];

export const Navbar = () => {
  const path = window.location.pathname;
  return (
    <nav className="flex fixed top-2 px-4 flex-row h-16 w-full max-w-2xl md:max-w-2xl lg:max-w-4xl border-b  items-center justify-between z-50 glass bg-transparent rounded-lg">
      <div className="inline-flex items-center gap-x-2">
        <a
          href={path === "/" ? `mailto:${"akpandey2408@gmail.com"}` : "/"}
          target="blank"
          className=""
        >
          <div
            className={cn(
              "rounded-full border border-foreground ",
              path === "/" ? "p-2" : "p-0"
            )}
          >
            {path === "/" ? (
              <LucideMail size={24} />
            ) : (
              <Avatar>
                <AvatarImage src={""} alt="avatar" />
                <AvatarFallback>AKP</AvatarFallback>
              </Avatar>
            )}
          </div>
        </a>
        <div className="flex items-center">
          <p
            className={cn(
              "text-nowrap font-semibold text-sm",
              buttonVariants({ variant: "link" })
            )}
          >
            akpandey2408@gmail.com
          </p>
          <CopyButton text={"akpandey2408@gmail.com"} />
        </div>
      </div>

      <div className=" hidden md:flex flex-row items-center ">
        {navItems.map((item, index) => (
          <a
            href={item.href}
            key={index}
            className={cn(buttonVariants({ variant: "link" }), "")}
            target={item.newTab ? "_blank" : ""}
          >
            <p>{item.label}</p>
          </a>
        ))}
      </div>
      {/* <div className="flex md:hidden">
        <Menu />
      </div> */}
    </nav>
  );
};
