"use client";

import { CriarUsuarioForm } from "../../../../../components/CriarUsuarioFrom";
import Layout from "../../../../../components/template/Layout";

export default function page() {
  return (
    <Layout className="px-16 pb-16">
      {/* <h2 className="my-10 text-3xl font-medium">Cadastrar Usuário</h2> */}
      <CriarUsuarioForm />  
    </Layout>
  );
}
