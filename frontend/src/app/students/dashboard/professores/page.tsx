import { CourseCard } from "@/components/course/CourseCard";
import Layout from "@/components/template/Layout";

export default function page() {
  return (
    <Layout className="grid auto-rows-min gap-6 md:grid-cols-4 px-16 pb-16">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />

      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </Layout>
  );
}
