import { Button } from "./ui/button"


export function Home() {
  return (
    <main className="flex flex-col py-4 space-y-2 h-full bg-transparent text-foreground items-center justify-center ">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient -z-10 blur-sm" />
      <div className="flex flex-col gap-y-8 items-center z-20 ">
        <div className="flex flex-col gap-y-2 items-center">
          <img 
          src={"https://utfs.io/f/LFq4wqmLqN4UPtCFpAxs02fjedP6AM3GOoWLUcRtar8iKQBb"} alt="avatar" width={100} height={100} 
          className="rounded-full aspect-square w-18 h-18" />
          <p className="text-2xl font-bold">
            Hi, I&apos;m Adamya &#x1F44B;
          </p>
        </div>
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl max-w-lg sm:max-w-xl md:max-w-2xl text-center p-4">
          Creating awesome digital solutions for business and fun side projects<span className="text-rose-500">.</span>
        </h1>
        <h3 className="font-semibold max-w-md sm:max-w-lg text-xl text-center text-foreground/90 p-6">
          A full stack developer with a knack for crafting amazing digital experiences. I dabble in various languages and frameworks, making each project unique and exciting.
        </h3>
        <div className="flex flex-col gap-4 md:flex-row items-center space-x-4 justify-center">
        
          <a href={"https://utfs.io"} target="_blank">
            <Button variant={"boldOutline"} size={"lg"} className="rounded-3xl">
              View my resume &rarr;
            </Button>
          </a>

        </div>
      </div>

    </main>
  );
}