import React from 'react';
import { Check } from 'lucide-react';

interface DailyTimelineProps {
  currentIndex: number; // 0 to 7
  totalCount?: number;
}

const TIMELINE_STEPS = [
  { id: 1, time: '07:00', label: '건강' },
  { id: 2, time: '09:00', label: '채용' },
  { id: 3, time: '11:00', label: '교육' },
  { id: 4, time: '13:00', label: '의료' },
  { id: 5, time: '15:00', label: '창작' },
  { id: 6, time: '17:00', label: '안전' },
  { id: 7, time: '20:00', label: '돌봄' },
  { id: 8, time: '22:00', label: '정보' },
];

export const DailyTimeline: React.FC<DailyTimelineProps> = ({ currentIndex, totalCount = 8 }) => {
  const currentStep = TIMELINE_STEPS[currentIndex] || TIMELINE_STEPS[0];

  return (
    <div className="w-full bg-white p-4 sm:p-5 rounded-3xl border border-gray-100 shadow-2xs space-y-3">
      {/* Mobile Compact View (Hidden on sm screens) */}
      <div className="sm:hidden flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
          <span className="text-xs font-bold text-gray-800">
            {currentStep.time} · 오늘의 {currentIndex + 1}번째 선택 ({currentStep.label})
          </span>
        </div>
        <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
          {currentIndex + 1} / {totalCount}
        </span>
      </div>

      {/* Desktop Horizontal Interactive Timeline (Hidden on mobile) */}
      <div className="hidden sm:block">
        <div className="relative flex items-center justify-between">
          {/* Background Connecting Line */}
          <div className="absolute top-3.5 left-4 right-4 h-1 bg-gray-100 rounded-full -z-0" />

          {/* Active Progress Line */}
          <div
            className="absolute top-3.5 left-4 h-1 bg-indigo-600 rounded-full transition-all duration-300 -z-0"
            style={{ width: `${(currentIndex / (TIMELINE_STEPS.length - 1)) * 92}%` }}
          />

          {TIMELINE_STEPS.map((step, idx) => {
            const isCompleted = idx < currentIndex;
            const isCurrent = idx === currentIndex;

            return (
              <div key={step.id} className="relative z-10 flex flex-col items-center group">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    isCompleted
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : isCurrent
                      ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 shadow-sm scale-110'
                      : 'bg-white text-gray-400 border border-gray-200'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : (
                    <span>{idx + 1}</span>
                  )}
                </div>

                <span
                  className={`mt-1.5 text-[11px] font-bold ${
                    isCurrent ? 'text-indigo-600' : isCompleted ? 'text-gray-700' : 'text-gray-400'
                  }`}
                >
                  {step.time}
                </span>

                <span
                  className={`text-[10px] font-semibold ${
                    isCurrent ? 'text-indigo-900 font-extrabold' : 'text-gray-400'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
