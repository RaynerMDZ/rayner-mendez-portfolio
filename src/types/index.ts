// Global TypeScript types and interfaces
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}