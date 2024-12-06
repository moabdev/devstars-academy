import { StudentCard } from "@/components/students/StudentCard";
import Layout from "@/components/template/Layout";
import { STUDENT_MOCK_DATA } from "@/data";

export default function StudentsPage() {
  return (
    <Layout className="grid auto-rows-min gap-6 md:grid-cols-4">
      {STUDENT_MOCK_DATA.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </Layout>
  );
}