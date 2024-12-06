export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: User;
  tags: string[];
  category: string;
  votes: number;
  answers: Answer[];
  createdAt: string;
}

export interface Answer {
  id: string;
  content: string;
  author: User;
  votes: number;
  isAccepted: boolean;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: 'student' | 'teacher' | 'admin';
}