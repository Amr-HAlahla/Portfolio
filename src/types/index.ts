export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  image?: string;
  category: 'Backend' | 'AI' | 'Real-time Systems' | 'Embedded Systems';
}