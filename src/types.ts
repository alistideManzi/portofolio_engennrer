export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'backend' | 'frontend' | 'tools';
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  image?: string;
  highlights: string[];
  metrics?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  techList: string;
  proficiency: number;
  tools: string[];
}

export interface AcademicMilestone {
  id: string;
  badge: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  scorePercentage: number;
  scoreLabel: string;
  highlights?: string[];
}

export interface LanguageSkill {
  name: string;
  flag: string;
  level: string;
  dots: number; // 1 to 5
}

export interface BeyondItem {
  icon: string;
  title: string;
  items: {
    title: string;
    description: string;
    badge?: string;
  }[];
}
