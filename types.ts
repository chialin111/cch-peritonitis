
export enum SectionId {
  Home = 'home',
  Pathogenesis = 'pathogenesis',
  HighRisk = 'high-risk',
  Diagnosis = 'diagnosis',
  Prevention = 'prevention',
  Treatment = 'treatment',
  AIConsultant = 'ai-consultant'
}

export interface NavItem {
  id: SectionId;
  label: string;
  icon: string;
}

export interface RiskFactor {
  factor: string;
  description: string;
  level: 'High' | 'Medium' | 'Low';
}

export interface PreventionRule {
  title: string;
  content: string;
  category: 'Hygiene' | 'Environment' | 'Health';
}
