"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Stars } from "lucide-react";
import Link from "next/link";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "./ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { menuData } from "@/data";
import Image from "next/image";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  // Determine the active role based on the current pathname
  const getActiveRole = () => {
    if (pathname.includes("/admin/dashboard")) return "Coordenação";
    if (pathname.includes("/professores/dashboard")) return "Professores";
    return "Alunos";
  };

  const activeRole = getActiveRole();

  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex p-4 border-b">
        <div className="flex justify-between">
          <Image
            src="/PCDweb_Horizontal_Amarelo.png"
            alt="logo"
            width={120}
            height={30}
          />
          <ModeToggle />
        </div>
      </SidebarHeader>

      <SidebarContent className="space-y-4 p-4">
        <SidebarMenu className="space-y-2">
          {menuData.navMain
            .filter((menu) => menu.title === activeRole)
            .map((menu) => (
              <React.Fragment key={menu.title}>
                {menu.items.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className="hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    <Link
                      href={item.url}
                      className="flex items-center space-x-3 w-full"
                    >
                      {menu.icon &&
                        React.createElement(menu.icon, {
                          className: "h-5 w-5 text-muted-foreground",
                        })}
                      <div>
                        <span className="font-medium">{item.title}</span>
                        {item.description && (
                          <span className="text-xs text-muted-foreground block mt-1">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </React.Fragment>
            ))}
        </SidebarMenu>

        <NavProjects
          projects={menuData.projects.map((project) => ({
            name: project.name,
            url: project.url,
            icon: project.icon,
          }))}
        />
      </SidebarContent>
      
      <NavUser user={menuData.user} />

      <SidebarFooter className="p-4 border-t text-sm text-muted-foreground">
        <div className="flex justify-between items-center">
          <span>© 2024 PCD WEB</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
