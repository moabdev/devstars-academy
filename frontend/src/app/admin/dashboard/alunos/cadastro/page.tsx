"use client";

import CriarUsuarioForm from "@/components/student/CreateUserForm";
import Layout from "../../../../../components/template/Layout";

export default function page() {
  return (
    <Layout className="px-16 pb-16">
      <CriarUsuarioForm />
    </Layout>
  );
}
