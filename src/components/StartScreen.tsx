import React from 'react';
import { StartIllustration } from './illustrations/StartIllustration';
import { RumiCharacter } from './illustrations/RumiCharacter';
import { ArrowRight, BarChart3, Clock, HelpCircle, ShieldCheck, Sparkles } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
  hasSavedResult?: boolean;
  onViewSavedResult?: () => void;
  onViewStatistics?: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStart,
  hasSavedResult,
  onViewSavedResult,
  onViewStatistics,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 sm:py-10 space-y-8 animate-fade-in break-keep">
      {/* Header Badge */}
      <div className="flex items-center justify-center space-x-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 shadow-xs">
          <Sparkles className="w-4 h-4 text-indigo-500" />
          AI 윤리 딜레마 시뮬레이션
        </span>
      </div>

      {/* Main Title & Description */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          AI와 함께 사는 하루
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
          AI가 일상이 된 하루 속에서 8가지 선택을 내리고, 내가 중요하게 생각하는 AI 윤리 가치를 발견해보세요.
        </p>
      </div>

      {/* Custom Hero SVG Illustration Card with Rumi Greeting */}
      <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-indigo-50/60 p-4 rounded-2xl border border-indigo-100/80">
          <RumiCharacter pose="start" size={96} className="shrink-0" />
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">
              <span>🤖 AI 안내 동반자</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900">
              “안녕하세요. 저는 오늘 하루를 함께할 AI, 루미예요.”
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              AI가 편리함을 제안할 때마다, 당신은 무엇을 지키고 무엇을 양보하게 될까요?
            </p>
          </div>
        </div>

        <StartIllustration className="w-full h-auto max-h-48 sm:max-h-56" />
      </div>

      {/* Key Stats / Info Badges */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-2xs space-y-1">
          <div className="flex justify-center text-indigo-600">
            <Clock className="w-5 h-5" />
          </div>
          <p className="text-xs text-gray-400">소요 시간</p>
          <p className="text-sm font-bold text-gray-800">약 3~5분</p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-2xs space-y-1">
          <div className="flex justify-center text-purple-600">
            <HelpCircle className="w-5 h-5" />
          </div>
          <p className="text-xs text-gray-400">질문 수</p>
          <p className="text-sm font-bold text-gray-800">8개 딜레마</p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-2xs space-y-1">
          <div className="flex justify-center text-emerald-600">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <p className="text-xs text-gray-400">개인정보</p>
          <p className="text-sm font-bold text-gray-800">익명참여</p>
        </div>
      </div>

      {/* Natural Tones Tip Note */}
      <div className="p-4 sm:p-5 bg-orange-50/80 rounded-2xl border border-orange-100 text-xs sm:text-sm text-orange-800 leading-relaxed space-y-1">
        <p className="font-bold flex items-center gap-1.5">
          💡 도덕적 정답이 없는 팽팽한 딜레마입니다!
        </p>
        <p className="text-orange-900/80">
          모든 문항은 긍정적 이점과 감수해야 할 위험이 공존합니다. 정답을 맞히는 시험이 아니니 평소 가치관대로 편안하게 선택해 보세요.
        </p>
      </div>

      {/* Start Button & Statistics & Saved Result Shortcut */}
      <div className="space-y-3 pt-2">
        <button
          id="btn-start-journey"
          onClick={onStart}
          className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-base sm:text-lg rounded-2xl shadow-lg shadow-indigo-200/60 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>나의 하루 시작하기</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {onViewStatistics && (
          <div className="p-4 bg-indigo-50/70 rounded-2xl border border-indigo-100/80 space-y-2 text-center">
            <p className="text-xs text-indigo-800 font-semibold">
              지금까지 참여한 사람들의 선택을 살펴보세요.
            </p>
            <button
              id="btn-view-statistics"
              onClick={onViewStatistics}
              className="w-full py-3.5 px-4 bg-white hover:bg-indigo-50 text-indigo-700 font-bold text-sm rounded-xl border border-indigo-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-4 h-4 text-indigo-600" />
              <span>전체 통계 바로 보기</span>
            </button>
          </div>
        )}

        {hasSavedResult && onViewSavedResult && (
          <button
            id="btn-view-saved-result"
            onClick={onViewSavedResult}
            className="w-full py-3.5 px-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm rounded-2xl transition-all cursor-pointer text-center"
          >
            이전 진단 결과 보기
          </button>
        )}
      </div>
    </div>
  );
};
