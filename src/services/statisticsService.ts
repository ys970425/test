import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { SurveyStatisticsData } from '../types';

export interface FetchStatisticsParams {
  ageGroup?: string;
  gender?: string;
  roleGroup?: string;
}

export interface FetchStatisticsResult {
  success: boolean;
  data?: SurveyStatisticsData;
  error?: string;
  isNotConfigured?: boolean;
}

export async function fetchSurveyStatistics(
  params: FetchStatisticsParams = {}
): Promise<FetchStatisticsResult> {
  if (!isSupabaseConfigured || !supabase) {
    return {
      success: false,
      isNotConfigured: true,
      error:
        '데이터베이스 연결이 필요합니다. 환경 변수가 설정되면 실제 참여 통계를 확인할 수 있습니다.',
    };
  }

  try {
    const { data, error } = await supabase.rpc('get_survey_statistics', {
      p_age_group: params.ageGroup || null,
      p_gender: params.gender || null,
      p_role_group: params.roleGroup || null,
    });

    if (error) {
      console.error('Supabase RPC get_survey_statistics error:', error);
      return {
        success: false,
        error: error.message || '통계를 불러오지 못했습니다.',
      };
    }

    if (!data) {
      return {
        success: false,
        error: '통계를 불러오지 못했습니다.',
      };
    }

    // RPC returns json object with fields
    const statsData: SurveyStatisticsData = {
      total_count: typeof data.total_count === 'number' ? data.total_count : 0,
      suppressed: Boolean(data.suppressed),
      minimum_group_size: typeof data.minimum_group_size === 'number' ? data.minimum_group_size : 5,
      question_stats: Array.isArray(data.question_stats) ? data.question_stats : [],
      profile_stats: Array.isArray(data.profile_stats) ? data.profile_stats : [],
      age_stats: Array.isArray(data.age_stats) ? data.age_stats : [],
      gender_stats: Array.isArray(data.gender_stats) ? data.gender_stats : [],
      role_stats: Array.isArray(data.role_stats) ? data.role_stats : [],
    };

    return {
      success: true,
      data: statsData,
    };
  } catch (err: any) {
    console.error('Unexpected error fetching survey statistics:', err);
    return {
      success: false,
      error: err?.message || '통계를 불러오지 못했습니다.',
    };
  }
}
