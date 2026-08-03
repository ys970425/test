import React, { useEffect, useState } from 'react';
import { FetchStatisticsParams, fetchSurveyStatistics } from '../services/statisticsService';
import { SurveyStatisticsData } from '../types';
import { DILEMMAS } from '../data/dilemmas';
import { DILEMMA_EXTRAS } from '../data/dilemmaExtras';
import { RESULT_TYPES } from '../data/resultTypes';
import { StatisticsFilters } from './StatisticsFilters';
import { RumiCharacter } from './illustrations/RumiCharacter';
import {
  ArrowLeft,
  BarChart3,
  Users,
  PieChart,
  RotateCcw,
  Sparkles,
  Loader2,
  AlertTriangle,
  Clock,
  Play,
  Shield,
  Layers,
} from 'lucide-react';

interface StatisticsScreenProps {
  onBack: () => void;
  onStartSurvey: () => void;
}

const PROFILE_NAME_MAP: Record<string, { title: string; emoji: string; bg: string; text: string }> = {
  HD: { title: 'HD 인간존엄 수호자', emoji: '🛡️', bg: 'bg-amber-50', text: 'text-amber-800' },
  FE: { title: 'FE 공정성 설계자', emoji: '⚖️', bg: 'bg-indigo-50', text: 'text-indigo-800' },
  DS: { title: 'DS 데이터 주권자', emoji: '🔐', bg: 'bg-emerald-50', text: 'text-emerald-800' },
  SR: { title: 'SR 안전 항해사', emoji: '🚦', bg: 'bg-rose-50', text: 'text-rose-800' },
  AT: { title: 'AT 책임 추적자', emoji: '🔍', bg: 'bg-sky-50', text: 'text-sky-800' },
  PI: { title: 'PI 공공혁신가', emoji: '🌐', bg: 'bg-purple-50', text: 'text-purple-800' },
  TR: { title: 'TR 기술 현실주의자', emoji: '⚙️', bg: 'bg-slate-50', text: 'text-slate-800' },
  CM: { title: 'CM 맥락 조정자', emoji: '🧭', bg: 'bg-violet-50', text: 'text-violet-800' },
};

export const StatisticsScreen: React.FC<StatisticsScreenProps> = ({ onBack, onStartSurvey }) => {
  const [params, setParams] = useState<FetchStatisticsParams>({
    ageGroup: '',
    gender: '',
    roleGroup: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<SurveyStatisticsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isNotConfigured, setIsNotConfigured] = useState<boolean>(false);

  const loadStatistics = async (fetchParams: FetchStatisticsParams) => {
    setIsLoading(true);
    setError(null);
    setIsNotConfigured(false);

    const result = await fetchSurveyStatistics(fetchParams);

    setIsLoading(false);

    if (result.isNotConfigured) {
      setIsNotConfigured(true);
      setError(result.error || '데이터베이스 연결이 필요합니다.');
      return;
    }

    if (!result.success || !result.data) {
      setError(result.error || '통계를 불러오지 못했습니다.');
      return;
    }

    setData(result.data);
  };

  useEffect(() => {
    loadStatistics(params);
  }, [params.ageGroup, params.gender, params.roleGroup]);

  const handleResetFilters = () => {
    setParams({ ageGroup: '', gender: '', roleGroup: '' });
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 sm:py-8 space-y-6 sm:space-y-8 animate-fade-in break-keep">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-600 hover:text-indigo-600 bg-white px-3.5 py-2 rounded-2xl border border-gray-200 transition-colors shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>이전 화면으로</span>
        </button>

        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
          <BarChart3 className="w-3.5 h-3.5 text-indigo-600" />
          전체 참여자 통계 리포트
        </span>
      </div>

      {/* Main Banner with Rumi */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-indigo-50/70 p-4 sm:p-5 rounded-2xl border border-indigo-100 text-left">
          <RumiCharacter pose="start" size={80} className="shrink-0 mx-auto sm:mx-0" />
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>AI 안내 동반자 루미</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
              “혼자 내린 선택도 모이면 하나의 지도가 돼요. 다른 사람들은 어떤 선택을 했는지 함께 살펴볼까요?”
            </p>
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            우리의 AI 윤리 선택 지도
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
            정답이 없는 여덟 번의 선택 앞에서 사람들은 어떤 가치를 더 중요하게 생각했을까요?
          </p>
        </div>
      </div>

      {/* Database Not Configured Alert */}
      {isNotConfigured && (
        <div className="p-6 bg-amber-50 rounded-3xl border border-amber-200 text-center space-y-3">
          <AlertTriangle className="w-8 h-8 text-amber-600 mx-auto" />
          <h3 className="text-base font-bold text-amber-900">데이터베이스 연결 필요</h3>
          <p className="text-xs sm:text-sm text-amber-800 leading-relaxed font-medium">
            데이터베이스 연결이 필요합니다. 환경 변수가 설정되면 실제 참여 통계를 확인할 수 있습니다.
          </p>
        </div>
      )}

      {/* Loading Indicator */}
      {isLoading && (
        <div className="p-12 bg-white rounded-3xl border border-gray-100 shadow-sm text-center space-y-3">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mx-auto" />
          <p className="text-sm font-bold text-indigo-900">우리의 선택을 모아 보고 있어요...</p>
        </div>
      )}

      {/* Error View */}
      {!isLoading && !isNotConfigured && error && (
        <div className="p-6 bg-rose-50 rounded-3xl border border-rose-200 text-center space-y-4">
          <AlertTriangle className="w-8 h-8 text-rose-600 mx-auto" />
          <p className="text-sm font-bold text-rose-900">통계를 불러오지 못했습니다.</p>
          <button
            id="btn-retry-fetch-stats"
            onClick={() => loadStatistics(params)}
            className="py-2.5 px-5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>다시 불러오기</span>
          </button>
        </div>
      )}

      {/* Main Stats Data Content */}
      {!isLoading && !isNotConfigured && !error && data && (
        <>
          {/* [1] Total Count Card */}
          <div className="p-6 sm:p-8 bg-indigo-600 text-white rounded-3xl shadow-lg shadow-indigo-200/50 text-center space-y-1.5">
            <span className="text-xs font-bold text-indigo-100 bg-indigo-500/60 px-3 py-1 rounded-full border border-indigo-400/40 inline-block">
              누적 전체 참여 현황
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              지금까지 <span className="text-amber-300 underline underline-offset-4 font-black">{data.total_count.toLocaleString()}</span>명이 AI와 하루를 보냈어요.
            </h2>
          </div>

          {/* [2] Filter Controls */}
          <StatisticsFilters
            selectedAgeGroup={params.ageGroup || ''}
            selectedGender={params.gender || ''}
            selectedRoleGroup={params.roleGroup || ''}
            onChangeAgeGroup={(val) => setParams((prev) => ({ ...prev, ageGroup: val }))}
            onChangeGender={(val) => setParams((prev) => ({ ...prev, gender: val }))}
            onChangeRoleGroup={(val) => setParams((prev) => ({ ...prev, roleGroup: val }))}
            onResetFilters={handleResetFilters}
          />

          {/* Empty State: total_count === 0 */}
          {data.total_count === 0 ? (
            <div className="p-8 sm:p-12 bg-white rounded-3xl border border-gray-100 shadow-sm text-center space-y-4">
              <Users className="w-12 h-12 text-gray-300 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-gray-900">아직 등록된 응답이 없습니다.</h3>
                <p className="text-xs sm:text-sm text-gray-500">첫 번째 참여자가 되어 당신의 가치를 기록해 보세요!</p>
              </div>
              <button
                id="btn-start-survey-from-empty-stats"
                onClick={onStartSurvey}
                className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>나의 하루 시작하기</span>
              </button>
            </div>
          ) : data.suppressed ? (
            /* Suppressed State: group size < 5 */
            <div className="p-8 bg-amber-50/80 rounded-3xl border border-amber-200 text-center space-y-4">
              <Shield className="w-10 h-10 text-amber-600 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-amber-900">소수 집단 개인정보 보호 안내</h3>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed font-medium">
                  해당 집단의 참여 인원이 5명 미만이어서 세부 통계를 표시하지 않습니다.
                </p>
              </div>
              <button
                id="btn-reset-filters-suppressed"
                onClick={handleResetFilters}
                className="py-3 px-5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>전체 통계 보기 (필터 초기화)</span>
              </button>
            </div>
          ) : (
            /* Detailed Statistics Display */
            <div className="space-y-8">
              {/* [3] 8 Dilemmas A/B Selection Statistics */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-bold text-gray-900">8가지 윤리 딜레마 선택 통계</h3>
                  </div>
                  <span className="text-xs text-indigo-600 font-bold bg-indigo-50 px-2.5 py-1 rounded-full">
                    A/B 가로 비교
                  </span>
                </div>

                <div className="space-y-6">
                  {DILEMMAS.map((dilemma) => {
                    const extra = DILEMMA_EXTRAS[dilemma.id];
                    const qStat = data.question_stats.find((q) => q.dilemma_id === dilemma.id);

                    const aCount = qStat ? qStat.a_count : 0;
                    const bCount = qStat ? qStat.b_count : 0;
                    const aPercent = qStat ? Math.round(qStat.a_percent) : 0;
                    const bPercent = qStat ? Math.round(qStat.b_percent) : 0;

                    return (
                      <div
                        key={dilemma.id}
                        className="p-4 sm:p-5 bg-gray-50/70 rounded-2xl border border-gray-100 space-y-3"
                      >
                        {/* Question Title & Time */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1 text-xs font-extrabold text-indigo-700 bg-indigo-100/80 px-2.5 py-0.5 rounded-md">
                              <Clock className="w-3 h-3" />
                              {extra?.time || dilemma.time}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-gray-900">
                              {extra?.topic || dilemma.topic}: {dilemma.title}
                            </span>
                          </div>
                          <span className="text-xs text-gray-400 font-medium shrink-0">
                            총 {aCount + bCount}명
                          </span>
                        </div>

                        {/* Choice Titles */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 bg-indigo-50/80 rounded-xl border border-indigo-100 text-indigo-900 space-y-0.5">
                            <div className="font-extrabold flex items-center justify-between">
                              <span>A. {dilemma.choiceA.title}</span>
                              <span className="text-indigo-700 font-black">{aCount}명 ({aPercent}%)</span>
                            </div>
                            <p className="text-[11px] text-indigo-700/80 line-clamp-1">{dilemma.choiceA.description}</p>
                          </div>

                          <div className="p-2.5 bg-purple-50/80 rounded-xl border border-purple-100 text-purple-900 space-y-0.5">
                            <div className="font-extrabold flex items-center justify-between">
                              <span>B. {dilemma.choiceB.title}</span>
                              <span className="text-purple-700 font-black">{bCount}명 ({bPercent}%)</span>
                            </div>
                            <p className="text-[11px] text-purple-700/80 line-clamp-1">{dilemma.choiceB.description}</p>
                          </div>
                        </div>

                        {/* Equal-Weight Progress Bar Comparison */}
                        <div className="space-y-1">
                          <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden flex shadow-inner">
                            <div
                              style={{ width: `${aPercent}%` }}
                              className="bg-indigo-600 h-full transition-all duration-500 flex items-center justify-center text-[10px] text-white font-bold px-1"
                              title={`A 선택 ${aPercent}%`}
                            >
                              {aPercent >= 15 ? `A ${aPercent}%` : ''}
                            </div>
                            <div
                              style={{ width: `${bPercent}%` }}
                              className="bg-purple-600 h-full transition-all duration-500 flex items-center justify-center text-[10px] text-white font-bold px-1"
                              title={`B 선택 ${bPercent}%`}
                            >
                              {bPercent >= 15 ? `B ${bPercent}%` : ''}
                            </div>
                          </div>
                          <div className="flex justify-between text-[11px] font-bold text-gray-500 px-1">
                            <span className="text-indigo-600">A 선택: {aCount}명 ({aPercent}%)</span>
                            <span className="text-purple-600">B 선택: {bCount}명 ({bPercent}%)</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* [4] Ethics Type Distribution (윤리 유형 분포) */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-lg font-bold text-gray-900">8가지 윤리 유형 분포</h3>
                  </div>
                  <span className="text-xs text-indigo-600 font-bold bg-indigo-50 px-2.5 py-1 rounded-full">
                    성향 분포
                  </span>
                </div>

                <div className="space-y-3">
                  {Object.keys(PROFILE_NAME_MAP).map((code) => {
                    const info = PROFILE_NAME_MAP[code];
                    const fullTypeObj = RESULT_TYPES[code];
                    const pStat = data.profile_stats.find((p) => p.profile_code === code);

                    const count = pStat ? pStat.count : 0;
                    const percent = pStat ? Math.round(pStat.percent) : 0;

                    return (
                      <div key={code} className="space-y-1 text-xs sm:text-sm">
                        <div className="flex items-center justify-between font-bold text-gray-800">
                          <span className="flex items-center gap-1.5">
                            <span>{info.emoji}</span>
                            <span>{fullTypeObj ? fullTypeObj.title : `${code} ${info.title}`}</span>
                          </span>
                          <span className="font-extrabold text-indigo-900">{count}명 ({percent}%)</span>
                        </div>

                        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            style={{ width: `${percent}%` }}
                            className="bg-indigo-500 h-full rounded-full transition-all duration-500 min-w-[2px]"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* [5] Participant Composition Cards */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-5">
                <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                  <Layers className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-lg font-bold text-gray-900">참여자 인구통계학적 구성</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Age Stats Card */}
                  <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100 space-y-2">
                    <h4 className="text-xs font-bold text-gray-700 flex items-center justify-between">
                      <span>🎂 연령대</span>
                      <span className="text-[11px] text-gray-400 font-normal">분포</span>
                    </h4>
                    <div className="space-y-1.5 text-xs">
                      {data.age_stats.length > 0 ? (
                        data.age_stats.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center text-gray-700">
                            <span>{item.label}</span>
                            <span className="font-bold text-indigo-700">{item.count}명</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-gray-400">데이터가 없습니다.</p>
                      )}
                    </div>
                  </div>

                  {/* Gender Stats Card */}
                  <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100 space-y-2">
                    <h4 className="text-xs font-bold text-gray-700 flex items-center justify-between">
                      <span>🚻 성별</span>
                      <span className="text-[11px] text-gray-400 font-normal">분포</span>
                    </h4>
                    <div className="space-y-1.5 text-xs">
                      {data.gender_stats.length > 0 ? (
                        data.gender_stats.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center text-gray-700">
                            <span>{item.label}</span>
                            <span className="font-bold text-indigo-700">{item.count}명</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-gray-400">데이터가 없습니다.</p>
                      )}
                    </div>
                  </div>

                  {/* Role Stats Card */}
                  <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100 space-y-2">
                    <h4 className="text-xs font-bold text-gray-700 flex items-center justify-between">
                      <span>🎓 참여 유형</span>
                      <span className="text-[11px] text-gray-400 font-normal">분포</span>
                    </h4>
                    <div className="space-y-1.5 text-xs">
                      {data.role_stats.length > 0 ? (
                        data.role_stats.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center text-gray-700">
                            <span>{item.label}</span>
                            <span className="font-bold text-indigo-700">{item.count}명</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-gray-400">데이터가 없습니다.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Footer Start Survey Button */}
      <div className="pt-2 text-center">
        <button
          id="btn-start-survey-footer"
          onClick={onStartSurvey}
          className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base rounded-2xl shadow-lg shadow-indigo-200/60 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
        >
          <Play className="w-5 h-5 fill-white" />
          <span>나의 하루 시작하기 (윤리 딜레마 진단)</span>
        </button>
      </div>
    </div>
  );
};
