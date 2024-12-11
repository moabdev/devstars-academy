import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, GraduationCap, Ticket, FileText, Clock } from 'lucide-react';

interface StudentDetailsModalProps {
  student: {
    user: {
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
      profilePicture?: string;
      createdAt: Date;
      status: string;
    };
    courseEnrollments?: Array<{
      course: {
        name: string;
        startDate: Date;
        status: string;
      };
    }>;
    academicHistory?: {
      totalCredits: number;
      completedCourses: number;
      currentSemester: number;
    };
    tickets?: Array<{
      id: number;
      title: string;
      status: string;
      createdAt: Date;
    }>;
    documents?: Array<{
      id: number;
      name: string;
      type: string;
      uploadedAt: Date;
    }>;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const StudentDetailsModal: React.FC<StudentDetailsModalProps> = ({ 
  student, 
  isOpen, 
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderProfileTab = () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Avatar className="w-24 h-24">
          <AvatarImage 
            src={student.user.profilePicture || undefined} 
            alt={`${student.user.firstName} ${student.user.lastName}`} 
          />
          <AvatarFallback>
            {student.user.firstName[0] + student.user.lastName[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold">{`${student.user.firstName} ${student.user.lastName}`}</h2>
          <p className="text-muted-foreground">{student.user.email}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6 flex items-center space-x-4">
            <User className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <p>{student.user.status}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex items-center space-x-4">
            <Clock className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Cadastrado em</p>
              <p>{student.user.createdAt.toLocaleDateString()}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderEnrollmentsTab = () => (
    <div className="space-y-4">
      {student.courseEnrollments?.map((enrollment, index) => (
        <Card key={index}>
          <CardContent className="pt-6 flex items-center space-x-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <div>
              <p className="font-semibold">{enrollment.course.name}</p>
              <p className="text-sm text-muted-foreground">
                Início: {enrollment.course.startDate.toLocaleDateString()}
                {' | '}
                Status: {enrollment.course.status}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderTicketsTab = () => (
    <div className="space-y-4">
      {student.tickets?.map((ticket) => (
        <Card key={ticket.id}>
          <CardContent className="pt-6 flex items-center space-x-4">
            <Ticket className="w-6 h-6 text-primary" />
            <div>
              <p className="font-semibold">{ticket.title}</p>
              <p className="text-sm text-muted-foreground">
                Criado em: {ticket.createdAt.toLocaleDateString()}
                {' | '}
                Status: {ticket.status}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderDocumentsTab = () => (
    <div className="space-y-4">
      {student.documents?.map((doc) => (
        <Card key={doc.id}>
          <CardContent className="pt-6 flex items-center space-x-4">
            <FileText className="w-6 h-6 text-primary" />
            <div>
              <p className="font-semibold">{doc.name}</p>
              <p className="text-sm text-muted-foreground">
                Tipo: {doc.type}
                {' | '}
                Enviado em: {doc.uploadedAt.toLocaleDateString()}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Detalhes do Aluno</DialogTitle>
          <DialogDescription>
            Informações detalhadas sobre o perfil do aluno
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="enrollments">Matrículas</TabsTrigger>
            <TabsTrigger value="tickets">Solicitações</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-4">
            {renderProfileTab()}
          </TabsContent>
          <TabsContent value="enrollments" className="mt-4">
            {renderEnrollmentsTab()}
          </TabsContent>
          <TabsContent value="tickets" className="mt-4">
            {renderTicketsTab()}
          </TabsContent>
          <TabsContent value="documents" className="mt-4">
            {renderDocumentsTab()}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};