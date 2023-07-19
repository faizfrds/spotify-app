"use client"; //need to be dynamic so set as client, not everything sandwiched is client as its passed down as children

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { HiChat } from "react-icons/hi";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search", //home is always active when we're not on search hence why icon always lights up
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: '/search',
      },
      {
        icon: HiChat,
        label: "Chat",
        active: pathname === "/",
        href: '/search',
      },
    ], [pathname]
  );

  return (
    <div className="flex h-full">
        <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-3">
            <Box>
                <div className="flex flex-col gap-y-4 px-5 py-4">
                    {routes.map((item) => (
                        <SidebarItem key={item.label}
                        {...item} />
                    ))}
                </div>
            </Box>
            <Box className="overflow-y-auto h-full p-5">
                <Library />
            </Box>
        </div>
        <main className="h-full flex-1 overfloy-y-auto py-3">
            {children}
        </main>
    </div>
  )
};

export default Sidebar;
