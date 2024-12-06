
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ForumPostList } from "./ForumPostList";

export const ForumTabs = () => {
  return (
    <Tabs defaultValue="recent">
      <TabsList className="w-full">
        <TabsTrigger value="recent">Recentes</TabsTrigger>
        <TabsTrigger value="popular">Populares</TabsTrigger>
        <TabsTrigger value="unanswered">Sem Resposta</TabsTrigger>
        <TabsTrigger value="my-questions">Minhas Perguntas</TabsTrigger>
      </TabsList>

      <TabsContent value="recent">
        <ForumPostList />
      </TabsContent>

      {/* Other tabs content */}
    </Tabs>
  );
};
