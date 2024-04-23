import { Logo } from "~/components/logo";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function Home() {
  return (
    <div className={"flex w-full flex-1 flex-col items-center"}>
      <header className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-sm">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <Logo className={"w-24 text-primary-foreground"} />
            </a>
          </div>

          <div className="flex flex-1 justify-end gap-4">
            <a
              className={cn(buttonVariants({ variant: "secondary" }), "font-semibold shadow-none")}
              href={"https://app.aroeditor.io/auth/signup"}
            >
              Get Started
            </a>
            <a
              className={cn(buttonVariants({ variant: "outline" }), "bg-transparent font-semibold shadow-none")}
              href={"https://app.aroeditor.io/auth/login"}
            >
              Log In
            </a>
          </div>
        </nav>
      </header>

      <div className="relative flex max-w-7xl flex-1 flex-col items-center justify-between gap-10 px-6 py-36 md:w-full md:flex-row lg:gap-12">
        <div className="max-w-xl">
          <div className="mb-8 flex justify-start">
            <div className="relative rounded-full bg-[#c4c4ed] px-3 py-1 text-sm font-medium leading-6 text-foreground">
              Where documentation is made simple
            </div>
          </div>
          <div className="space-y-4 text-left lg:space-y-8">
            <h1 className="font-serif text-5xl font-bold lg:text-6xl">The No-code Typesetting Editor</h1>
            <p className="mt-6 text-lg leading-8">Eliminating the need to code to compose documents and text.</p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "font-semibold")}
                href={"https://app.aroeditor.io/auth/signup"}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className={"aspect-video h-[unset] w-full bg-gray-300 md:h-56 md:w-[unset] lg:h-72"} />
      </div>
    </div>
  );
}
