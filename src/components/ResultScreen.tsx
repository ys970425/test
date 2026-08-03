import React, { useState } from 'react';
import { CalculatedScores, ResultTypeData, UserAnswer, UserInfo } from '../types';
import { DILEMMAS } from '../data/dilemmas';
import { DILEMMA_EXTRAS } from '../data/dilemmaExtras';
import { ResultCharacterSVG } from './illustrations/ResultCharacterSVGs';
import { RumiCharacter } from './illustrations/RumiCharacter';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from 'recharts';
import {
  Award,
  BarChart3,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  HelpCircle,
  Info,
  Lightbulb,
  RefreshCw,
  Share2,
  ShieldAlert,
  Sparkles,
  UserCheck,
} from 'lucide-react';

interface ResultScreenProps {
  userInfo: UserInfo;
  scores: CalculatedScores;
  resultType: ResultTypeData;
  answers: UserAnswer[];
  onRestart: () => void;
  onViewStatistics?: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  userInfo,
  scores,
  resultType,
  answers,
  onRestart,
  onViewStatistics,
}) => {
  const [copied, setCopied] = useState(false);
  const [showFullTimeline, setShowFullTimeline] = useState(false);
  const [showAnswersRecap, setShowAnswersRecap] = useState(false);

  // Prepare data for Recharts RadarChart
  const radarData = [
    { subject: '인간 존엄과 자율성', value: scores.dignity, fullMark: 100 },
    { subject: '공정성과 포용성', value: scores.fairness, fullMark: 100 },
    { subject: '개인정보와 데이터 주권', value: scores.privacy, fullMark: 100 },
    { subject: '안전과 책임', value: scores.safety, fullMark: 100 },
    { subject: '기술 혁신과 공공 이익', value: scores.innovation, fullMark: 100 },
  ];

  // Derive custom closing message based on top score dimensions
  const getClosingSummaryMessage = (): string => {
    const list = [
      { key: 'safety', val: scores.safety },
      { key: 'innovation', val: scores.innovation },
      { key: 'fairness', val: scores.fairness },
      { key: 'privacy', val: scores.privacy },
      { key: 'dignity', val: scores.dignity },
    ].sort((a, b) => b.val - a.val);

    const topKey = list[0].key;

    switch (topKey) {
      case 'safety':
        return '당신은 AI의 편리함과 기술적 가능성을 인정하면서도, 안전장치와 철저한 책임 구조가 마련된 조건에서 활용하려는 경향을 보였습니다.';
      case 'fairness':
        return '당신은 기술의 빠른 속도보다, 그 기술이 사회의 어떤 계층이나 소수자에게 불리하게 작동하지 않는지 공정성을 먼저 확인했습니다.';
      case 'privacy':
        return '당신은 정밀한 맞춤형 케어와 편리함 속에서도 나의 일상 데이터와 개인정보 주권을 최우선 가치로 수호하고자 했습니다.';
      case 'dignity':
        return '당신은 알고리즘의 고속 판단에 맡기기보다 인간 고유의 자율성과 주체적인 결정 권한을 지켜내는 것을 가장 소중히 여겼습니다.';
      case 'innovation':
        return '당신은 기술이 가져다줄 사회적 효율성과 문화적 대중화, 공공의 이익을 적극적으로 내다보며 미래 가능성을 열어두었습니다.';
      default:
        return '당신은 AI와 함께하는 하루 동안 기술의 혜택과 인간다운 가치 사이에서 자신만의 신중한 윤리적 균형을 찾아냈습니다.';
    }
  };

  const handleCopySummary = () => {
    const text = `[AI와 함께 사는 하루 - 나의 AI 윤리 성향 진단 결과]
유형: ${resultType.title}
한 줄 소개: ${resultType.oneLiner}

📊 5대 AI 윤리 축 점수:
- 인간 존엄과 자율성: ${scores.dignity}점
- 공정성과 포용성: ${scores.fairness}점
- 개인정보와 데이터 주권: ${scores.privacy}점
- 안전과 책임: ${scores.safety}점
- 기술 혁신과 공공 이익: ${scores.innovation}점

당신의 AI 윤리 가치관도 'AI와 함께 사는 하루'에서 확인해보세요!`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const visibleAnswers = showFullTimeline ? answers : answers.slice(0, 3);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 sm:py-8 space-y-8 animate-fade-in break-keep">
      {/* Top Banner Header */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 shadow-xs">
          <Award className="w-4 h-4 text-indigo-600" />
          나의 AI 윤리 성향 분석 완료
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          AI 시뮬레이션 결과 리포트
        </h1>
        {userInfo.ageGroup && (
          <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2">
            <UserCheck className="w-3.5 h-3.5 text-gray-400" />
            <span>
              {userInfo.ageGroup} · {userInfo.gender} · {userInfo.userType} 참여자
            </span>
          </p>
        )}
      </div>

      {/* Main Result Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 text-center relative overflow-hidden">
        {/* Soft Background Accent Circle */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-50/60 rounded-full blur-2xl pointer-events-none" />

        {/* Custom SVG Character */}
        <div className="py-2">
          <ResultCharacterSVG code={resultType.code} />
        </div>

        {/* Title & Badge */}
        <div className="space-y-2">
          <span className={`inline-block px-4 py-1 rounded-full text-xs font-extrabold border ${resultType.badgeBg} ${resultType.badgeText}`}>
            {resultType.code} TYPE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            {resultType.title}
          </h2>
          <p className="text-sm font-bold text-indigo-600 sm:text-base">
            {resultType.subtitle}
          </p>
        </div>

        {/* One Liner Summary */}
        <div className="p-4 sm:p-5 bg-gray-50/80 rounded-2xl border border-gray-100 text-sm text-gray-700 leading-relaxed text-left">
          💬 <span className="font-bold text-gray-900">요약:</span> {resultType.oneLiner}
        </div>
      </div>

      {/* 5 Ethics Axes Radar Chart Section */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-bold text-gray-900">
            5대 AI 윤리 축 분석 그래프
          </h3>
        </div>

        {/* Recharts Radar Chart */}
        <div className="w-full h-64 sm:h-72 my-2">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
              <PolarGrid stroke="#E5E7EB" strokeDasharray="3 3" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: '#374151', fontSize: 11, fontWeight: 600 }}
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#9CA3AF', fontSize: 9 }} />
              <Radar
                name="윤리 점수"
                dataKey="value"
                stroke="#4F46E5"
                fill="#6366F1"
                fillOpacity={0.45}
              />
              <Tooltip
                formatter={(val: number) => [`${val}점`, '점수']}
                contentStyle={{ borderRadius: '16px', border: '1px solid #F3F4F6', fontSize: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Score Breakdown List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          <div className="p-3.5 bg-indigo-50/60 rounded-2xl border border-indigo-100 flex items-center justify-between">
            <span className="text-xs font-bold text-gray-700">👤 인간 존엄과 자율성</span>
            <span className="text-sm font-extrabold text-indigo-700">{scores.dignity}점</span>
          </div>
          <div className="p-3.5 bg-purple-50/60 rounded-2xl border border-purple-100 flex items-center justify-between">
            <span className="text-xs font-bold text-gray-700">⚖️ 공정성과 포용성</span>
            <span className="text-sm font-extrabold text-purple-700">{scores.fairness}점</span>
          </div>
          <div className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 flex items-center justify-between">
            <span className="text-xs font-bold text-gray-700">🔐 개인정보와 데이터 주권</span>
            <span className="text-sm font-extrabold text-emerald-700">{scores.privacy}점</span>
          </div>
          <div className="p-3.5 bg-rose-50/60 rounded-2xl border border-rose-100 flex items-center justify-between">
            <span className="text-xs font-bold text-gray-700">🚦 안전과 책임</span>
            <span className="text-sm font-extrabold text-rose-700">{scores.safety}점</span>
          </div>
          <div className="p-3.5 bg-orange-50/60 rounded-2xl border border-orange-100 sm:col-span-2 flex items-center justify-between">
            <span className="text-xs font-bold text-gray-700">🌐 기술 혁신과 공공 이익</span>
            <span className="text-sm font-extrabold text-orange-700">{scores.innovation}점</span>
          </div>
        </div>
      </div>

      {/* NEW: My AI Ethics Day Timeline (나의 AI 윤리 하루) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-bold text-gray-900">
              나의 AI 윤리 하루 (시간별 기록)
            </h3>
          </div>
          <span className="text-xs text-indigo-600 font-bold bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
            총 {answers.length}개 시간대
          </span>
        </div>

        {/* Timeline Items */}
        <div className="space-y-3 pt-1">
          {visibleAnswers.map((ans) => {
            const dilemma = DILEMMAS.find((d) => d.id === ans.dilemmaId);
            const extra = DILEMMA_EXTRAS[ans.dilemmaId];
            if (!dilemma || !extra) return null;

            const isA = ans.selectedChoice === 'A';
            const choiceSummary = isA ? extra.choiceASummary : extra.choiceBSummary;
            const tags = isA ? extra.tagsA : extra.tagsB;

            return (
              <div
                key={ans.dilemmaId}
                className="p-4 sm:p-5 rounded-2xl bg-gray-50/70 border border-gray-100 space-y-2 hover:border-gray-200 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-xs font-extrabold text-indigo-700 bg-indigo-100/80 px-2.5 py-0.5 rounded-md">
                      <Clock className="w-3 h-3" />
                      {extra.time}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-900">
                      {extra.topic} 선택
                    </span>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    isA ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'bg-purple-50 text-purple-700 border border-purple-100'
                  }`}>
                    카드 {ans.selectedChoice}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  “{choiceSummary}”
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {tags.map((tag, idx) => (
                    <span key={idx} className="text-[11px] font-semibold text-gray-500 bg-white px-2 py-0.5 rounded-md border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand / Collapse Button */}
        {answers.length > 3 && (
          <button
            onClick={() => setShowFullTimeline(!showFullTimeline)}
            className="w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold text-xs sm:text-sm rounded-2xl border border-gray-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
          >
            <span>{showFullTimeline ? '접기' : '나의 하루 전체 보기 (8개 시간)'}</span>
            {showFullTimeline ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* NEW: Rumi's Closing Message & Custom Score Summary */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-indigo-50/70 p-5 rounded-2xl border border-indigo-100">
          <RumiCharacter pose="result" size={88} className="shrink-0" />
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>루미의 하루 마무리 이야기</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed">
              {getClosingSummaryMessage()}
            </p>
            <p className="text-xs sm:text-sm font-bold text-indigo-900 pt-1">
              “오늘의 선택에는 정답이 없었어요. 하지만 무엇을 중요하게 여겼는지는 분명히 남았습니다.”
            </p>
          </div>
        </div>
      </div>

      {/* Detail Breakdown Sections */}
      <div className="space-y-4">
        {/* Core Values & Choices */}
        <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-sm space-y-3">
          <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            중요하게 보는 가치 & 선택 특징
          </h4>

          <div className="space-y-2 text-xs sm:text-sm text-gray-700">
            <p className="font-bold text-gray-900">📌 핵심 가치:</p>
            <div className="flex flex-wrap gap-1.5">
              {resultType.coreValues.map((val, idx) => (
                <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 font-semibold rounded-xl border border-indigo-100">
                  #{val}
                </span>
              ))}
            </div>

            <p className="font-bold text-gray-900 pt-2">🎯 선택의 특징:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 pl-1">
              {resultType.traits.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Strengths & Blind Spots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-emerald-50/60 p-5 rounded-3xl border border-emerald-100 space-y-2">
            <h4 className="text-sm font-bold text-emerald-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              당신의 강점
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-950/90 leading-relaxed">
              {resultType.strengths.map((st, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{st}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-orange-50/60 p-5 rounded-3xl border border-orange-100 space-y-2">
            <h4 className="text-sm font-bold text-orange-900 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-orange-600" />
              놓치기 쉬운 관점
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-orange-950/90 leading-relaxed">
              {resultType.blindSpots.map((bs, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>{bs}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reflection Question */}
        <div className="bg-indigo-600 p-6 sm:p-7 rounded-3xl text-white shadow-lg shadow-indigo-200/50 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-indigo-100">
            <Lightbulb className="w-5 h-5 text-amber-300" />
            다시 생각해 볼 한 가지 질문
          </div>
          <p className="text-base sm:text-lg font-bold leading-relaxed">
            "{resultType.reflectionQuestion}"
          </p>
        </div>
      </div>

      {/* User Answer Recap Accordion */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-2xs overflow-hidden">
        <button
          id="btn-toggle-recap"
          onClick={() => setShowAnswersRecap(!showAnswersRecap)}
          className="w-full p-4 sm:p-5 flex items-center justify-between text-gray-800 font-bold text-sm bg-gray-50/60 hover:bg-gray-100/60 transition-all cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-indigo-500" />
            내가 내린 8가지 선택 다시 보기
          </span>
          {showAnswersRecap ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showAnswersRecap && (
          <div className="p-5 space-y-3.5 divide-y divide-gray-100">
            {DILEMMAS.map((dilemma) => {
              const ans = answers.find((a) => a.dilemmaId === dilemma.id);
              const isA = ans?.selectedChoice === 'A';
              const selectedObj = isA ? dilemma.choiceA : dilemma.choiceB;

              return (
                <div key={dilemma.id} className="pt-3.5 first:pt-0 space-y-1.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between font-bold text-gray-800">
                    <span>{dilemma.time} · {dilemma.topic}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${isA ? 'bg-indigo-100 text-indigo-700' : 'bg-purple-100 text-purple-700'}`}>
                      {ans?.selectedChoice} 선택: {selectedObj.title}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-xs">{selectedObj.description}</p>
                  {ans?.reason && (
                    <p className="text-xs text-indigo-700 italic bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      💬 내 선택 이유: "{ans.reason}"
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Action Buttons: Compare in Statistics, Share & Retake */}
      <div className="space-y-3 pt-2">
        {onViewStatistics && (
          <button
            id="btn-view-stats-from-result"
            onClick={onViewStatistics}
            className="w-full py-4 px-5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-sm sm:text-base rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-200/60 cursor-pointer"
          >
            <BarChart3 className="w-5 h-5 text-indigo-100" />
            <span>전체 통계에서 내 선택 비교하기</span>
          </button>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            id="btn-share-result"
            onClick={handleCopySummary}
            className="py-3.5 px-5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>결과 텍스트 복사 완료!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-indigo-600" />
                <span>결과 텍스트 공유하기</span>
              </>
            )}
          </button>

          <button
            id="btn-restart-survey"
            onClick={onRestart}
            className="py-3.5 px-5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 text-gray-500" />
            <span>다시 시뮬레이션 하기</span>
          </button>
        </div>
      </div>

      {/* Mandatory Disclaimer Footer */}
      <div className="p-4 sm:p-5 bg-gray-50/80 rounded-2xl border border-gray-100 text-center text-xs text-gray-500 leading-relaxed">
        <p className="font-semibold text-gray-600 flex items-center justify-center gap-1 mb-1">
          <Info className="w-3.5 h-3.5 text-gray-400" />
          안내사항
        </p>
        이 결과는 8개의 상황에서 내린 선택을 바탕으로 한 윤리적 경향입니다. 개인의 성격이나 도덕성을 판단하는 검사가 아닙니다.
      </div>
    </div>
  );
};
