import { Moon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
      {/* LEFT */}
      CollapseButton
      {/* RIGHT */}
      <div>
        <Link href="/">Dashboard</Link>
        <Moon />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>HA</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
