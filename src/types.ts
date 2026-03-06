export type SchoolType = 'Canina' | 'Equina' | 'Ovina' | 'Felina' | 'Aviar' | 'Porcina' | 'Acuícola';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl: string;
  pdfUrl: string;
}

export interface Module {
  id: string;
  title: string;
  level: 'Fundamentos' | 'Intermedio' | 'Avanzado';
  lessons: Lesson[];
  locked: boolean;
}

export interface School {
  id: SchoolType;
  name: string;
  description: string;
  icon: string;
  modules: Module[];
}

export type Language = 'es' | 'en' | 'pt' | 'fr' | 'de';

export interface Guide {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  level: 'Fundamentos' | 'Intermedio' | 'Avanzado';
  category: string;
}

export interface Mentor {
  id: string;
  name: string;
  school: SchoolType | 'Global';
  personality: Record<Language, string>;
  avatar: string;
  specialty: Record<Language, string>;
  guides: Guide[];
  knowledgeBase: Record<Language, string[]>;
  quote: Record<Language, string>;
}

export interface AuditInsight {
  type: 'error' | 'strategy' | 'value';
  message: string;
  impact: string;
}

export type LanguageMode = 'Técnico' | 'Universal';

export interface UserProfile {
  name: string;
  email: string;
  tier: 'Starter' | 'Essential' | 'Pro' | 'Elite';
  assignedSchool?: SchoolType;
  progress: number;
}

export interface AnimalProfile {
  name: string;
  species: string;
  age: string;
  problem: string;
  goal: string;
}
