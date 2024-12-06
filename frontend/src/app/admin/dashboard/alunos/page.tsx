import { CardCurso } from "../../../../components/card-curso";
import Layout from "../../../../components/template/Layout";


export default function Page() {
  return (
    <Layout>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-6 md:grid-cols-4">
          <CardCurso />
          <CardCurso />
          <CardCurso />
          <CardCurso />
          <CardCurso />
          <CardCurso />
          <CardCurso />
          <CardCurso />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </Layout>
  );
}
