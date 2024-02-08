import {
  IconBook,
  IconBookmark,
  IconBooks,
  IconLayout,
  IconMessageDots,
  IconUsers,
} from "@tabler/icons-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import SidebarData from "./sidebar-data";

const Sidebar = () => {
  const { data } = SidebarData();

  return (
    <div className="border-r w-[4rem]">
      <div className="grid place-content-center h-[4rem] w-[4rem]">
        <IconBooks className="h-5 w-5 text-primary" />
      </div>
      <ul className="p-2">
        <TooltipProvider delayDuration={0}>
          {data.map((item) => (
            <Tooltip>
              <TooltipTrigger asChild>
                <li>
                  <NavLink
                    to={item.to}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "grid place-content-center h-[2.5rem] w-[2.5rem] mx-auto"
                    )}
                  >
                    {item.icon}
                  </NavLink>
                </li>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </ul>
    </div>
  );
};

export default Sidebar;
