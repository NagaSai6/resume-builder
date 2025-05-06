import { ModeToggle } from "@/components/mode-toggle";
import { SheetMenu } from "@/components/admin-panel/sheet-menu";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10  bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary w-[35%]  ml-auto rounded-lg">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
        </div>
        <div className="flex flex-1 items-center justify-between">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
