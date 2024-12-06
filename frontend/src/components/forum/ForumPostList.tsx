import { ForumPostCard } from "./ForumPostCard";
import { ForumPost } from "./types";

export const ForumPostList = () => {
  const samplePosts: ForumPost[] = [
    {
      id: "1",
      title: "Como implementar autenticação JWT em React?",
      content: "Estou tendo dificuldades em implementar...",
      author: {
        id: "1",
        name: "João Silva",
        avatar: "",
        role: "student",
      },
      tags: ["react", "javascript", "auth"],
      category: "Desenvolvimento Web",
      votes: 5,
      answers: [],
      createdAt: "2024-03-06T10:00:00",
    },
    // More posts...
  ];

  return (
    <div className="space-y-4 mt-4">
      {samplePosts.map((post) => (
        <ForumPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
