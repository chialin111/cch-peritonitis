
import React from 'react';
import { SectionId, NavItem, RiskFactor, PreventionRule } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: SectionId.Home, label: '首頁總覽', icon: '🏠' },
  { id: SectionId.Pathogenesis, label: '成因解析', icon: '🔬' },
  { id: SectionId.HighRisk, label: '高風險群', icon: '⚠️' },
  { id: SectionId.Diagnosis, label: '居家診斷', icon: '🩺' },
  { id: SectionId.Prevention, label: '預防醫學', icon: '🛡️' },
  { id: SectionId.Treatment, label: '治療簡介', icon: '💊' },
  { id: SectionId.AIConsultant, label: 'AI 衛教助手', icon: '🤖' }
];

export const RISK_FACTORS: RiskFactor[] = [
  { factor: '糖尿病控制不佳', description: '高血糖環境會減弱免疫細胞功能。', level: 'High' },
  { factor: '營養不良', description: '白蛋白低於 3.5 g/dL 會增加感染機率。', level: 'High' },
  { factor: '憂鬱或心理壓力', description: '心理狀態影響操作技術與免疫系統。', level: 'Medium' },
  { factor: '居家環境衛生', description: '寵物進入換液室、室內潮濕發霉。', level: 'High' },
  { factor: '曾有過腹膜炎病史', description: '腹膜屏障可能受損，增加復發機會。', level: 'Medium' }
];

export const PREVENTION_RULES: PreventionRule[] = [
  { title: '嚴格洗手', content: '遵循六步驟洗手，使用乾洗手液需徹底乾燥。', category: 'Hygiene' },
  { title: '配戴口罩', content: '換液過程中，病友與旁人皆須全程配戴口罩。', category: 'Hygiene' },
  { title: '出口護理', content: '每日觀察出口處是否有紅腫、滲液或疼痛。', category: 'Health' },
  { title: '飲食均衡', content: '攝取足量蛋白質，維持免疫力。', category: 'Health' },
  { title: '環境隔離', content: '換液室應獨立、關閉門窗，嚴禁寵物入內。', category: 'Environment' }
];
