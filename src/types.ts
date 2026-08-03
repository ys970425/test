export type ScreenState = 'start' | 'userInfo' | 'dilemma' | 'result';

export type AgeGroup = '10대 이하' | '20대' | '30대' | '40대' | '50대 이상' | '';
export type Gender = '여성' | '남성' | '기타' | '응답하지 않음' | '';
export type UserType = '학생' | '교사' | '일반인' | '기타' | '';

export interface UserInfo {
  ageGroup: AgeGroup;
  gender: Gender;
  userType: UserType;
  consentStatistics: boolean;
}

export interface EthicsScoreWeights {
  dignity: number;    // 인간 존엄과 자율성
  fairness: number;   // 공정성과 포용성
  privacy: number;    // 개인정보와 데이터 주권
  safety: number;     // 안전과 책임
  innovation: number; // 기술 혁신과 공공 이익
}

export interface Choice {
  id: 'A' | 'B';
  title: string;
  description: string;
  tradeOff: string; // 장점과 위험 포인트 요약
  scores: EthicsScoreWeights;
}

export interface Dilemma {
  id: number;
  time: string; // e.g. "오전 7시"
  topic: string; // e.g. "AI 건강관리와 개인정보"
  title: string;
  scenario: string;
  choiceA: Choice;
  choiceB: Choice;
  badgeColor: string;
}

export interface UserAnswer {
  dilemmaId: number;
  selectedChoice: 'A' | 'B';
  reason: string;
}

export interface CalculatedScores {
  dignity: number;    // 0 ~ 100
  fairness: number;   // 0 ~ 100
  privacy: number;    // 0 ~ 100
  safety: number;     // 0 ~ 100
  innovation: number; // 0 ~ 100
}

export interface ResultTypeData {
  code: string; // e.g., "HD", "FE"
  title: string; // e.g., "HD 인간존엄 수호자 🛡️"
  subtitle: string;
  emoji: string;
  badgeBg: string;
  badgeText: string;
  oneLiner: string;
  coreValues: string[];
  traits: string[];
  strengths: string[];
  blindSpots: string[]; // 놓치기 쉬운 관점
  reflectionQuestion: string; // 다시 생각해 볼 질문
}
