import { BookOpen } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";

export const ForumSidebar = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Categorias</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {['Desenvolvimento Web', 'Mobile', 'Banco de Dados', 'DevOps'].map(category => (
              <Button key={category} variant="ghost" className="w-full justify-start">
                <BookOpen className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tags Populares</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {['react', 'javascript', 'python', 'nodejs'].map(tag => (
              <Badge key={tag} variant="outline" className="cursor-pointer">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Contribuidores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Usuário {i}</div>
                  <div className="text-sm text-gray-500">50 respostas</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};