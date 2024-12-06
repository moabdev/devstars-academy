import { Filter, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ForumSearch = () => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search className="w-4 h-4" />
            </div>
            <Input
              placeholder="Pesquisar no fórum..."
              className="w-full pl-9"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ForumSearch;