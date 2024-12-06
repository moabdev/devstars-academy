import { ThumbsUp } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { ForumPost } from "./types";
import { useRouter } from "next/navigation";

export const ForumPostCard = ({ post }: { post: ForumPost }) => {
  const router = useRouter();

  return (
    <Card
      className="hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => router.push(`/forum/${post.id}`)}
    >
      <CardContent className="pt-6">
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="w-4 h-4" />
            </Button>
            <span className="text-sm font-medium">{post.votes}</span>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-600">{post.author.name}</span>
              <Badge
                variant={
                  post.author.role === "teacher" ? "default" : "secondary"
                }
              >
                {post.author.role === "teacher" ? "Professor" : "Aluno"}
              </Badge>
            </div>

            <h3 className="text-lg font-medium mb-2">{post.title}</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              <span>{post.answers.length} respostas</span>
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
