import { supabase, isSupabaseConfigured } from '../lib/supabase';

export type SupabaseStatusType = 'checking' | 'connected' | 'need_config' | 'error';

export interface SupabaseHealthResult {
  status: SupabaseStatusType;
  envDetected: {
    urlDetected: boolean;
    keyDetected: boolean;
  };
  tableName: string;
  functionName: string;
  totalCount: number | null;
  lastCheckedAt: string | null;
  errorMessage?: string;
}

export async function checkSupabaseHealth(): Promise<SupabaseHealthResult> {
  const rawUrl = import.meta.env.VITE_SUPABASE_URL || '';
  const rawKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

  const urlDetected = Boolean(rawUrl && rawUrl !== 'your_supabase_project_url');
  const keyDetected = Boolean(rawKey && rawKey !== 'your_supabase_publishable_key');

  const nowString = new Date().toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const baseResult: SupabaseHealthResult = {
    status: 'checking',
    envDetected: {
      urlDetected,
      keyDetected,
    },
    tableName: 'survey_responses',
    functionName: 'get_survey_statistics',
    totalCount: null,
    lastCheckedAt: nowString,
  };

  if (!isSupabaseConfigured || !supabase) {
    return {
      ...baseResult,
      status: 'need_config',
      errorMessage: 'VITE_SUPABASE_URL 또는 VITE_SUPABASE_PUBLISHABLE_KEY 환경 변수가 설정되지 않았습니다.',
    };
  }

  try {
    const { data, error } = await supabase.rpc('get_survey_statistics', {
      p_age_group: null,
      p_gender: null,
      p_role_group: null,
    });

    if (error) {
      console.error('Supabase health check RPC error:', error);
      return {
        ...baseResult,
        status: 'error',
        errorMessage: error.message || 'Supabase RPC 호출 실패',
      };
    }

    const totalCount = data && typeof data.total_count === 'number' ? data.total_count : 0;

    return {
      ...baseResult,
      status: 'connected',
      totalCount,
    };
  } catch (err: any) {
    console.error('Unexpected Supabase health check error:', err);
    return {
      ...baseResult,
      status: 'error',
      errorMessage: err?.message || '네트워크 연결 오류',
    };
  }
}
