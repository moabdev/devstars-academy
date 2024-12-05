import { AppSidebar } from "../../../../../components/app-sidebar";
import { CardCurso } from "../../../../../components/card-curso";
import { CourseComponentClass } from "../../../../../components/CourseComponentPage";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../../components/ui/breadcrumb";
import { Separator } from "../../../../../components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../../../../components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-6 pt-0 bg-muted/50 rounded-lg m-4 ">
          <CourseComponentClass />
          {/* <div className="min-h-[100vh] flex-1 rounded-xl  md:min-h-min" /> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
// Adicionar uma seção de depoimento na parte de empregabilididade.
// Feedback -> da empresa que contratou o aluno e qual a opção que ela tem.
