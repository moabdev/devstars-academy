import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, Check, MessageCircle } from 'lucide-react';
import { ForumPost } from './types';

export const ForumPostDetail = () => {
  const post: ForumPost = {
    id: '1',
    title: 'Como implementar autenticação JWT em React?',
    content: `Estou desenvolvendo uma aplicação React e preciso implementar autenticação usando JWT.
    Já tentei algumas abordagens mas não estou conseguindo manter o usuário logado após refresh da página.
    
    Alguém poderia me ajudar com um exemplo de implementação?
    
    Código atual:
    \`\`\`javascript
    // Atual implementação...
    \`\`\``,
    author: {
      id: '1',
      name: 'João Silva',
      avatar: '',
      role: 'student'
    },
    tags: ['react', 'javascript', 'auth'],
    category: 'Desenvolvimento Web',
    votes: 5,
    answers: [
      {
        id: '1',
        content: 'Para implementar JWT Authentication em React, você pode seguir estes passos...',
        author: {
          id: '2',
          name: 'Maria Professora',
          avatar: '',
          role: 'teacher'
        },
        votes: 10,
        isAccepted: true,
        createdAt: '2024-03-06T11:00:00'
      }
    ],
    createdAt: '2024-03-06T10:00:00'
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Card className="mb-6">
        <CardContent className="pt-6">
          {/* Question Header */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="w-4 h-4" />
              </Button>
              <span className="text-sm font-medium">{post.votes}</span>
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <Avatar>
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <Badge variant={post.author.role === 'teacher' ? 'default' : 'secondary'}>
                  {post.author.role === 'teacher' ? 'Professor' : 'Aluno'}
                </Badge>
              </div>

              <div className="prose max-w-none mb-4">
                {post.content}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Answers Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">
          {post.answers.length} Resposta{post.answers.length !== 1 ? 's' : ''}
        </h2>

        {post.answers.map(answer => (
          <Card key={answer.id} className="mb-4">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="w-4 h-4" />
                  </Button>
                  <span className="text-sm font-medium">{answer.votes}</span>
                  {answer.isAccepted && (
                    <Badge className="mt-2" variant="default">
                      <Check className="w-4 h-4 mr-1" />
                      Aceita
                    </Badge>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Avatar>
                      <AvatarImage src={answer.author.avatar} />
                      <AvatarFallback>{answer.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{answer.author.name}</div>
                      <div className="text-sm text-gray-500">
                        {new Date(answer.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <Badge variant={answer.author.role === 'teacher' ? 'default' : 'secondary'}>
                      {answer.author.role === 'teacher' ? 'Professor' : 'Aluno'}
                    </Badge>
                  </div>

                  <div className="prose max-w-none">
                    {answer.content}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Answer Form */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-4">Sua Resposta</h3>
          <Textarea 
            className="min-h-[200px] mb-4" 
            placeholder="Digite sua resposta aqui..."
          />
          <div className="flex justify-end">
            <Button>
              <MessageCircle className="w-4 h-4 mr-2" />
              Enviar Resposta
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForumPostDetail;