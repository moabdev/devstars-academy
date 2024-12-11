"use client";
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StudentDetailsModal } from './StudentDetailsModal';

export interface StudentData {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: string | undefined;
    phone?: string;
    status: string;
    createdAt: Date;
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
}

interface StudentCardProps {
  student: StudentData;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const firstName = student.user.firstName;
  const lastName = student.user.lastName;
  const email = student.user.email;
  const profilePicture = student.user.profilePicture || undefined;

  const initials = firstName[0] + lastName[0];

  return (
    <>
      <Card className="w-full max-w-xs mx-auto">
        <CardHeader className="flex flex-col items-center space-y-2">
          <Avatar className="w-24 h-24 mb-2">
            <AvatarImage
              src={profilePicture}
              alt={`${firstName} ${lastName}'s profile`}
              className="w-full h-full object-cover"
            />
            <AvatarFallback className="bg-gray-200 text-gray-600">
              {initials}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-center">{`${firstName} ${lastName}`}</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">{email}</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsModalOpen(true)}
          >
            Ver Detalhes
          </Button>
        </CardFooter>
      </Card>

      <StudentDetailsModal
        student={student}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};