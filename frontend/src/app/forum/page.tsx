"use client";

import { ForumSearch } from "@/components/forum/ForumSearch";
import { ForumSidebar } from "@/components/forum/ForumSidebar";
import { ForumTabs } from "@/components/forum/ForumTabs";
import Layout from "@/components/template/Layout";
import { Button } from "@/components/ui/button";

export default function ForumPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Fórum de Discussão</h1>
          <Button>Nova Pergunta</Button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <ForumSearch />
            <ForumTabs />
          </div>

          <div className="col-span-12 lg:col-span-4">
            <ForumSidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
}
