import React, { useState, useEffect } from 'react';
import {
  checkSupabaseHealth,
  SupabaseHealthResult,
  SupabaseStatusType,
} from '../services/supabaseHealthService';
import { SupabaseConnectionModal } from './SupabaseConnectionModal';
import { CheckCircle2, AlertTriangle, XCircle, Loader2, Database } from 'lucide-react';

export const SupabaseStatusButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [healthResult, setHealthResult] = useState<SupabaseHealthResult>({
    status: 'checking',
    envDetected: { urlDetected: false, keyDetected: false },
    tableName: 'survey_responses',
    functionName: 'get_survey_statistics',
    totalCount: null,
    lastCheckedAt: null,
  });

  const handleRunHealthCheck = async () => {
    setIsChecking(true);
    const result = await checkSupabaseHealth();
    setHealthResult(result);
    setIsChecking(false);
  };

  useEffect(() => {
    handleRunHealthCheck();
  }, []);

  const renderStatusBadgeContent = () => {
    if (isChecking) {
      return (
        <>
          <Loader2 className="w-3 h-3 animate-spin text-gray-500" />
          <span className="hidden sm:inline">Supabase </span>확인 중
        </>
      );
    }

    switch (healthResult.status) {
      case 'connected':
        return (
          <>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="hidden sm:inline">Supabase </span>연동됨
          </>
        );
      case 'need_config':
        return (
          <>
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="hidden sm:inline">Supabase </span>설정 필요
          </>
        );
      case 'error':
        return (
          <>
            <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
            <span className="hidden sm:inline">Supabase </span>연결 오류
          </>
        );
      default:
        return (
          <>
            <Database className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <span>Supabase 상태</span>
          </>
        );
    }
  };

  const getButtonStyleClasses = (): string => {
    if (isChecking) {
      return 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200';
    }

    switch (healthResult.status) {
      case 'connected':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100';
      case 'need_config':
        return 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100';
      case 'error':
        return 'bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100';
    }
  };

  return (
    <>
      <button
        id="btn-open-supabase-status-modal"
        onClick={() => setIsModalOpen(true)}
        title="Supabase 데이터베이스 연동 상태 상세 보기"
        className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-2xs ${getButtonStyleClasses()}`}
      >
        {renderStatusBadgeContent()}
      </button>

      <SupabaseConnectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        healthResult={healthResult}
        isChecking={isChecking}
        onRecheck={handleRunHealthCheck}
      />
    </>
  );
};
