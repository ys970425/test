import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { UserInfo, UserAnswer, CalculatedScores, ResultTypeData } from '../types';

export interface SurveySubmissionData {
  clientSubmissionId: string;
  userInfo: UserInfo;
  answers: UserAnswer[];
  scores: CalculatedScores;
  resultType: ResultTypeData;
}

export interface SaveSurveyResult {
  success: boolean;
  error?: string;
}

const ALLOWED_AGE_GROUPS = ['10대 이하', '20대', '30대', '40대', '50대 이상'];
const ALLOWED_GENDERS = ['여성', '남성', '기타', '응답하지 않음'];
const ALLOWED_ROLE_GROUPS = ['학생', '교사', '일반인', '기타'];

export async function saveSurveyResponse(data: SurveySubmissionData): Promise<SaveSurveyResult> {
  if (!isSupabaseConfigured || !supabase) {
    return {
      success: false,
      error: 'Supabase가 설정되지 않았습니다. VITE_SUPABASE_URL 및 VITE_SUPABASE_PUBLISHABLE_KEY를 환경 변수에 설정해 주세요.',
    };
  }

  // 1. User Info validation
  if (
    !ALLOWED_AGE_GROUPS.includes(data.userInfo.ageGroup) ||
    !ALLOWED_GENDERS.includes(data.userInfo.gender) ||
    !ALLOWED_ROLE_GROUPS.includes(data.userInfo.userType)
  ) {
    return {
      success: false,
      error: '기본 참여 정보가 올바르게 입력되지 않았습니다.',
    };
  }

  // 2. Answers validation & reasons format for 1 through 8
  const answersMap: Record<string, string> = {};
  const reasonsMap: Record<string, string> = {};

  for (let i = 1; i <= 8; i++) {
    const key = i.toString();
    const ans = data.answers.find((a) => a.dilemmaId === i);

    if (!ans || (ans.selectedChoice !== 'A' && ans.selectedChoice !== 'B')) {
      return {
        success: false,
        error: '모든 딜레마에 응답한 뒤 결과를 확인해 주세요.',
      };
    }

    answersMap[key] = ans.selectedChoice;
    reasonsMap[key] = ans.reason && ans.reason.trim() ? ans.reason.trim() : '';
  }

  const payload = {
    client_submission_id: data.clientSubmissionId,
    survey_version: '1.0',
    age_group: data.userInfo.ageGroup,
    gender: data.userInfo.gender,
    role_group: data.userInfo.userType,
    answers: answersMap,
    reasons: reasonsMap,
    response_times: {},
    axis_scores: {
      humanity: data.scores.dignity,
      fairness: data.scores.fairness,
      privacy: data.scores.privacy,
      safety: data.scores.safety,
      innovation: data.scores.innovation,
    },
    profile_code: data.resultType.code,
    consent_statistics: Boolean(data.userInfo.consentStatistics),
  };

  try {
    const { error } = await supabase.from('survey_responses').insert([payload]);

    if (error) {
      if (error.code === '23505') {
        console.log('Duplicate client_submission_id detected (code 23505), treating as success.');
        return { success: true };
      }
      console.error('Supabase insert error:', error);
      return {
        success: false,
        error: error.message || '데이터베이스 저장 실패',
      };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Unexpected save survey error:', err);
    return {
      success: false,
      error: err?.message || '네트워크 연결 오류',
    };
  }
}
