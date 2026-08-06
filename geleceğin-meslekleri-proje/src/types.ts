export type PageType = 'home' | 'careers' | 'skills' | 'guide' | 'contact';

export type CareerCategory = 
  | 'Yapay Zekâ & Veri'
  | 'Yazılım & Oyun'
  | 'Siber Güvenlik & Bulut'
  | 'Mühendislik & Robotik'
  | 'Geleceğin Teknolojileri';

export interface Career {
  id: string;
  title: string;
  category: CareerCategory;
  shortDesc: string;
  fullDesc: string;
  salaryRange: string;
  avgSalaryMin: number;
  avgSalaryMax: number;
  demandLevel: 'Çok Yüksek' | 'Yüksek' | 'Hızla Büyüyor';
  growthRate: string;
  technicalSkills: string[];
  softSkills: string[];
  technologies: string[];
  recommendedCourses: { title: string; provider: string; isFree: boolean }[];
  careerPaths: string[];
  jobSectors: string[];
  studyDuration: string;
  difficultyLevel: 'Kolay-Orta' | 'Orta' | 'İleri Derece' | 'Uzman';
  iconName: string;
  highlightBadge?: string;
  popularRank?: number;
}

export type SkillType = 'technical' | 'soft' | 'emerging';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillType;
  description: string;
  importance: string;
  relatedCareers: string[];
  learningResources: { name: string; url: string; level: 'Başlangıç' | 'Orta' | 'İleri' }[];
  projectIdeas: string[];
  iconName: string;
}

export interface RoadmapStep {
  id: string;
  stage: string;
  title: string;
  description: string;
  tasks: string[];
  keyResources: string[];
  timeframe: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    iconName: string;
    points: Record<string, number>; // maps career id to score
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  age: number;
  avatar: string;
  comment: string;
  careerGoal: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  ageGroup: string;
  subject: string;
  message: string;
}
