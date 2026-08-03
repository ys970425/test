import React from 'react';
import { Dilemma } from '../types';
import { getDilemmaIllustration } from './illustrations/DilemmaIllustrations';
import { RumiCharacter, RumiPose } from './illustrations/RumiCharacter';
import { DILEMMA_EXTRAS } from '../data/dilemmaExtras';
import { DailyTimeline } from './DailyTimeline';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, MessageSquare, Sparkles } from 'lucide-react';

interface DilemmaScreenProps {
  dilemma: Dilemma;
  currentIndex: number;
  totalCount: number;
  selectedChoice: 'A' | 'B' | null;
  reasonText: string;
  onSelectChoice: (choice: 'A' | 'B') => void;
  onChangeReason: (text: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const RUMI_POSES: Record<number, RumiPose> = {
  1: 'health',
  2: 'hiring',
  3: 'education',
  4: 'medical',
  5: 'creation',
  6: 'safety',
  7: 'care',
  8: 'info',
};

export const DilemmaScreen: React.FC<DilemmaScreenProps> = ({
  dilemma,
  currentIndex,
  totalCount,
  selectedChoice,
  reasonText,
  onSelectChoice,
  onChangeReason,
  onNext,
  onPrev,
}) => {
  const extra = DILEMMA_EXTRAS[dilemma.id] || DILEMMA_EXTRAS[1];
  const rumiPose = RUMI_POSES[dilemma.id] || 'health';

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 sm:py-6 space-y-6 animate-fade-in break-keep">
      {/* 1. Daily Timeline Header */}
      <DailyTimeline currentIndex={currentIndex} totalCount={totalCount} />

      {/* 2. Rumi Speech Bubble & Scene Intro */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
        {/* Rumi Avatar & Dialogue */}
        <div className="flex items-start gap-3 bg-indigo-50/70 p-4 rounded-2xl border border-indigo-100/80">
          <RumiCharacter pose={rumiPose} size={64} className="shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>루미의 시점 ({dilemma.time})</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed">
              “{extra.rumiSpeech}”
            </p>
          </div>
        </div>

        {/* Question Title & Scenario */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${dilemma.badgeColor}`}>
              <Clock className="w-3.5 h-3.5" />
              {dilemma.time} · {dilemma.topic}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
            {dilemma.title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {dilemma.scenario}
          </p>
        </div>

        {/* Detailed Pastel Scene Illustration */}
        <div className="pt-2 flex justify-center">
          {getDilemmaIllustration(dilemma.id)}
        </div>
      </div>

      {/* 3. Choice Cards */}
      <div className="space-y-3">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1">
          당신의 선택은? (두 카드가 모순 없이 양립하기 힘든 딜레마입니다)
        </p>

        {/* Choice A Card */}
        <div
          id="card-choice-a"
          onClick={() => onSelectChoice('A')}
          className={`p-5 sm:p-6 rounded-3xl border transition-all cursor-pointer relative ${
            selectedChoice === 'A'
              ? 'bg-indigo-50/50 border-indigo-600 ring-2 ring-indigo-600 shadow-sm'
              : 'bg-white border-gray-100 hover:border-gray-200 shadow-2xs hover:shadow-xs'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-sm ${
                selectedChoice === 'A' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}>
                A
              </span>
              <h3 className="font-bold text-base sm:text-lg text-gray-900">
                {dilemma.choiceA.title}
              </h3>
            </div>
            {selectedChoice === 'A' && (
              <span className="flex items-center gap-1 text-xs font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                선택됨
              </span>
            )}
          </div>

          <p className="mt-2.5 text-sm text-gray-600 leading-relaxed">
            {dilemma.choiceA.description}
          </p>

          <div className="mt-3.5 pt-3 border-t border-gray-100 text-xs text-indigo-900 font-medium bg-indigo-50/60 p-3 rounded-xl">
            {dilemma.choiceA.tradeOff}
          </div>
        </div>

        {/* Choice B Card */}
        <div
          id="card-choice-b"
          onClick={() => onSelectChoice('B')}
          className={`p-5 sm:p-6 rounded-3xl border transition-all cursor-pointer relative ${
            selectedChoice === 'B'
              ? 'bg-indigo-50/50 border-indigo-600 ring-2 ring-indigo-600 shadow-sm'
              : 'bg-white border-gray-100 hover:border-gray-200 shadow-2xs hover:shadow-xs'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-sm ${
                selectedChoice === 'B' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}>
                B
              </span>
              <h3 className="font-bold text-base sm:text-lg text-gray-900">
                {dilemma.choiceB.title}
              </h3>
            </div>
            {selectedChoice === 'B' && (
              <span className="flex items-center gap-1 text-xs font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                선택됨
              </span>
            )}
          </div>

          <p className="mt-2.5 text-sm text-gray-600 leading-relaxed">
            {dilemma.choiceB.description}
          </p>

          <div className="mt-3.5 pt-3 border-t border-gray-100 text-xs text-indigo-900 font-medium bg-indigo-50/60 p-3 rounded-xl">
            {dilemma.choiceB.tradeOff}
          </div>
        </div>
      </div>

      {/* 4. Post-Choice Thought/Reflection Card (여운 카드) */}
      {selectedChoice && (
        <div className="p-5 sm:p-6 bg-orange-50/90 rounded-3xl border border-orange-100 text-orange-950 space-y-2 animate-fade-in shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-orange-800">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>선택 후 생각의 여운</span>
          </div>
          <p className="text-sm sm:text-base font-semibold leading-relaxed text-gray-900">
            “{selectedChoice === 'A' ? extra.reflectionQuoteA : extra.reflectionQuoteB}”
          </p>
          <p className="text-xs text-orange-800/80 pt-1">
            * 답변의 맞고 틀림이 없습니다. 아래의 버튼을 눌러 다음 장면으로 진행하세요.
          </p>
        </div>
      )}

      {/* 5. Optional Reason Text Area */}
      <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-2xs space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-500" />
            <span>선택 이유 (선택 사항)</span>
          </label>
          <span className={`text-xs ${reasonText.length > 130 ? 'text-rose-500 font-bold' : 'text-gray-400'}`}>
            {reasonText.length} / 140자
          </span>
        </div>
        <textarea
          id="input-dilemma-reason"
          disabled={!selectedChoice}
          value={selectedChoice ? reasonText : ''}
          onChange={(e) => onChangeReason(e.target.value.slice(0, 140))}
          placeholder={
            selectedChoice
              ? '이 카드를 선택한 가치관이나 생각을 자유롭게 남겨보세요.'
              : '선택지를 먼저 고른 뒤 이유를 적을 수 있어요.'
          }
          rows={2}
          maxLength={140}
          className="w-full text-xs sm:text-sm p-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none placeholder-gray-400 bg-gray-50/50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:placeholder-gray-400"
        />
        {!selectedChoice && (
          <p className="text-xs text-amber-600 font-medium pt-0.5">
            * 선택지를 먼저 고른 뒤 이유를 적을 수 있어요.
          </p>
        )}
      </div>

      {/* 6. Navigation Controls */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          id="btn-dilemma-prev"
          onClick={onPrev}
          className="py-3.5 px-5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>이전 질문</span>
        </button>

        <button
          id="btn-dilemma-next"
          disabled={!selectedChoice}
          onClick={onNext}
          className={`py-3.5 px-7 rounded-2xl font-bold text-base transition-all flex items-center gap-2 ${
            selectedChoice
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200/60 cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>{currentIndex === totalCount - 1 ? '결과 확인하기' : '다음 장면으로'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
