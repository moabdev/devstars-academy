import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, FileText, Send, Link as LinkIcon } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

interface Question {
  id: string;
  author: string;
  question: string;
  answers: Array<{
    id: string;
    author: string;
    content: string;
    timestamp: string;
  }>;
  timestamp: string;
}

interface CourseResource {
  id: string;
  title: string;
  url: string;
  type: 'pdf' | 'link' | 'doc';
}

const CourseClass = () => {
  const [newComment, setNewComment] = React.useState('');
  const [newQuestion, setNewQuestion] = React.useState('');

  // Example data - in a real app, this would come from your backend
  const sampleComments: Comment[] = [
    {
      id: '1',
      author: 'João Silva',
      content: 'Excelente aula! Muito esclarecedora sobre os conceitos de engenharia de software.',
      timestamp: '2024-02-15 14:30'
    }
  ];

  const sampleQuestions: Question[] = [
    {
      id: '1',
      author: 'Maria Santos',
      question: 'Qual a diferença entre metodologia ágil e waterfall?',
      answers: [
        {
          id: '1',
          author: 'Professor',
          content: 'Metodologia ágil é iterativa e incremental, enquanto waterfall é linear e sequencial.',
          timestamp: '2024-02-15 15:00'
        }
      ],
      timestamp: '2024-02-15 14:45'
    }
  ];

  const courseResources: CourseResource[] = [
    {
      id: '1',
      title: 'Slides da Aula',
      url: '/materials/slides.pdf',
      type: 'pdf'
    },
    {
      id: '2',
      title: 'Leitura Complementar',
      url: 'https://example.com/article',
      type: 'link'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-medium mb-6">Engenharia de Software</h1>
      
      <div className="relative aspect-video w-full">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/vqajwQaCVkg"
          title="Engenharia de Software"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <Tabs defaultValue="comments" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="comments">
            <MessageCircle className="w-4 h-4 mr-2" />
            Comentários
          </TabsTrigger>
          <TabsTrigger value="questions">
            <MessageCircle className="w-4 h-4 mr-2" />
            Perguntas
          </TabsTrigger>
          <TabsTrigger value="materials">
            <FileText className="w-4 h-4 mr-2" />
            Material
          </TabsTrigger>
        </TabsList>

        <TabsContent value="comments" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <ScrollArea className="h-[400px] pr-4">
                {sampleComments.map(comment => (
                  <div key={comment.id} className="mb-4 p-4 border rounded-lg">
                    <div className="font-medium">{comment.author}</div>
                    <div className="text-sm text-gray-500">{comment.timestamp}</div>
                    <div className="mt-2">{comment.content}</div>
                  </div>
                ))}
              </ScrollArea>
              
              <div className="mt-4 flex gap-2">
                <Textarea
                  placeholder="Adicione um comentário..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="flex-1"
                />
                <Button>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <ScrollArea className="h-[400px] pr-4">
                {sampleQuestions.map(question => (
                  <div key={question.id} className="mb-4 p-4 border rounded-lg">
                    <div className="font-medium">{question.author}</div>
                    <div className="text-sm text-gray-500">{question.timestamp}</div>
                    <div className="mt-2 font-medium">{question.question}</div>
                    
                    <div className="mt-4 ml-8">
                      {question.answers.map(answer => (
                        <div key={answer.id} className="mt-2 p-3 bg-gray-50 rounded-lg">
                          <div className="font-medium">{answer.author}</div>
                          <div className="text-sm text-gray-500">{answer.timestamp}</div>
                          <div className="mt-2">{answer.content}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </ScrollArea>
              
              <div className="mt-4 flex gap-2">
                <Textarea
                  placeholder="Faça uma pergunta..."
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  className="flex-1"
                />
                <Button>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="materials" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {courseResources.map(resource => (
                  <div key={resource.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{resource.title}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="w-4 h-4 mr-2" />
                        Acessar
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseClass;