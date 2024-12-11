import { CourseCard } from "@/components/course/CourseCard";
import Layout from "@/components/template/Layout";
import Link from "next/link";

export default function page() {
  return (
    <Layout className="grid auto-rows-min gap-6 md:grid-cols-4 px-16 pb-16">
      <Link href="/admin/dashboard/cursos/engenharia-de-software">
        <CourseCard />
      </Link>
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
