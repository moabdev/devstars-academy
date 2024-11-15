import { Goal, Home, PersonStanding, Play, User } from "lucide-react";

export const sideBarMenu = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Professores",
    url: "/professores",
    icon: PersonStanding,
  },
  {
    title: "Alunos",
    url: "/alunos",
    icon: User,
  },
  {
    title: "Carreira",
    url: "/carreira",
    icon: Goal,
  },
  {
    title: "Cursos",
    url: "/cursos",
    icon: Play,
  },
];
