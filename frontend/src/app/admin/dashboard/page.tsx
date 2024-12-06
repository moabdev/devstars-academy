import { CourseCard } from "@/components/course/CourseCard";
import Layout from "@/components/template/Layout";

export default function Page() {
  return (
    <Layout className="grid auto-rows-min gap-6 md:grid-cols-4 px-16 pb-16">
      <CourseCard />
    </Layout>
    // <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
  );
}
