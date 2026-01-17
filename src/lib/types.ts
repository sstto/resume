import { type LucideIcon } from "lucide-react";

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface Skill {
  name: string;
  icon?: LucideIcon;
  level: "Advanced" | "Intermediate" | "Basic";
}

export interface ResumeData {
  name: string;
  nameEn: string;
  title: string;
  about: string;
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  skills: Skill[];
  hobbies: string[];
}
