import React from 'react';
import { SupabaseHealthResult } from '../services/supabaseHealthService';
import {
  X,
  RefreshCw,
  Database,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Loader2,
  Lock,
  Table,
  Code2,
  Hash,
  Clock,
} from 'lucide-react';

interface SupabaseConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  healthResult: SupabaseHealthResult;
  isChecking: boolean;
  onRecheck: () => void;
}

export const SupabaseConnectionModal: React.FC<SupabaseConnectionModalProps> = ({
  isOpen,
  onClose,
  healthResult,
  isChecking,
  onRecheck,
}) => {
  if (!isOpen) return null;

  const { status, envDetected, tableName, functionName, totalCount, lastCheckedAt, errorMessage } =
    healthResult;

  const getStatusBadge = () => {
    switch (status) {
      case 'checking':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700 border border-gray-200">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-gray-500" />
            <span>Supabase 확인 중</span>
          </span>
        );
      case 'connected':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Supabase 연동됨</span>
          </span>
        );
      case 'need_config':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>Supabase 설정 필요</span>
          </span>
        );
      case 'error':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>Supabase 연결 오류</span>
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in break-keep">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Supabase 연결 상태</h3>
              <p className="text-xs text-gray-500">실시간 데이터베이스 진단 정보</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
          {/* Current Status Badge Row */}
          <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
            <span className="font-bold text-gray-700">현재 연동 상태</span>
            {getStatusBadge()}
          </div>

          {/* Error Message Alert Box */}
          {errorMessage && status !== 'connected' && (
            <div className="p-3.5 bg-rose-50 rounded-2xl border border-rose-100 text-rose-800 text-xs space-y-1">
              <span className="font-bold block flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                <span>오류 내용</span>
              </span>
              <p className="leading-relaxed">{errorMessage}</p>
            </div>
          )}

          {/* Detail List */}
          <div className="space-y-2.5 pt-1">
            {/* Env Vars Detection (Masked & Security Protected) */}
            <div className="p-3.5 bg-gray-50/80 rounded-2xl border border-gray-100 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-gray-800">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-indigo-600" />
                  <span>환경 변수 감지 (보안 보호됨)</span>
                </span>
                <span className="text-[11px] text-gray-400 font-normal">키 값 비노출</span>
              </div>

              <div className="grid grid-cols-1 gap-1.5 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="font-mono text-gray-600">VITE_SUPABASE_URL</span>
                  {envDetected.urlDetected ? (
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      감지됨 (안전하게 보호됨)
                    </span>
                  ) : (
                    <span className="font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
                      미설정
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="font-mono text-gray-600">VITE_SUPABASE_PUBLISHABLE_KEY</span>
                  {envDetected.keyDetected ? (
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      감지됨 (안전하게 보호됨)
                    </span>
                  ) : (
                    <span className="font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
                      미설정
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Table & RPC Info */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-gray-50/80 rounded-2xl border border-gray-100 space-y-1">
                <span className="text-gray-500 font-medium flex items-center gap-1 text-[11px]">
                  <Table className="w-3 h-3 text-indigo-500" />
                  테이블명
                </span>
                <p className="font-mono font-bold text-gray-800 truncate">{tableName}</p>
              </div>

              <div className="p-3 bg-gray-50/80 rounded-2xl border border-gray-100 space-y-1">
                <span className="text-gray-500 font-medium flex items-center gap-1 text-[11px]">
                  <Code2 className="w-3 h-3 text-indigo-500" />
                  통계 RPC 함수명
                </span>
                <p className="font-mono font-bold text-gray-800 truncate">{functionName}</p>
              </div>
            </div>

            {/* Total Count & Timestamp */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100/80 space-y-1">
                <span className="text-indigo-600 font-medium flex items-center gap-1 text-[11px]">
                  <Hash className="w-3 h-3 text-indigo-600" />
                  실제 응답 저장 건수
                </span>
                <p className="font-bold text-indigo-950 text-sm">
                  {totalCount !== null ? `${totalCount.toLocaleString()}건` : '-'}
                </p>
              </div>

              <div className="p-3 bg-gray-50/80 rounded-2xl border border-gray-100 space-y-1">
                <span className="text-gray-500 font-medium flex items-center gap-1 text-[11px]">
                  <Clock className="w-3 h-3 text-gray-500" />
                  마지막 진단 시각
                </span>
                <p className="font-bold text-gray-800 text-xs">
                  {lastCheckedAt || '-'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row gap-2">
          <button
            id="btn-recheck-supabase-connection"
            disabled={isChecking}
            onClick={onRecheck}
            className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? 'animate-spin' : ''}`} />
            <span>연결 다시 확인</span>
          </button>

          <button
            onClick={onClose}
            className="py-3 px-4 bg-white hover:bg-gray-100 text-gray-700 font-bold text-xs sm:text-sm rounded-xl border border-gray-200 transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
