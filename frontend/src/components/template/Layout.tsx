import { Separator } from "@radix-ui/react-separator";
import { AppSidebar } from "@/components/app-sidebar";
import DynamicBreadcrumbs from "@/components/DinamycBreadCrumbs";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Layout({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 h-4 bg-gray-300"
              />
              <DynamicBreadcrumbs />
            </div>
          </header>
          <main className={`${className}`}>{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
