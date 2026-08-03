/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScreenState, UserInfo, UserAnswer, CalculatedScores, ResultTypeData } from './types';
import { DILEMMAS } from './data/dilemmas';
import { calculateEthicsScores, determineResultType } from './data/resultTypes';
import { saveSurveyResponse } from './services/surveyService';
import { StartScreen } from './components/StartScreen';
import { UserInfoScreen } from './components/UserInfoScreen';
import { DilemmaScreen } from './components/DilemmaScreen';
import { ResultScreen } from './components/ResultScreen';
import { StatisticsScreen } from './components/StatisticsScreen';
import { SupabaseStatusButton } from './components/SupabaseStatusButton';
import { Sparkles, Heart, Loader2, AlertTriangle, RefreshCw, ArrowRight, BarChart3 } from 'lucide-react';

const STORAGE_KEY = 'ai_ethics_day_result_v1';
const DRAFT_STORAGE_KEY = 'ai_ethics_day_draft_v1';

function getUUID(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('start');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    ageGroup: '',
    gender: '',
    userType: '',
    consentStatistics: false,
  });
  const [currentDilemmaIndex, setCurrentDilemmaIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [calculatedScores, setCalculatedScores] = useState<CalculatedScores | null>(null);
  const [resultType, setResultType] = useState<ResultTypeData | null>(null);
  const [hasSavedResult, setHasSavedResult] = useState<boolean>(false);

  // Supabase submission state
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // Load previous result if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setHasSavedResult(true);
      }
    } catch (e) {
      console.warn('localStorage read error:', e);
    }
  }, []);

  const handleStartNew = () => {
    setUserInfo({ ageGroup: '', gender: '', userType: '', consentStatistics: false });
    setCurrentDilemmaIndex(0);
    setAnswers([]);
    setCalculatedScores(null);
    setResultType(null);
    setSubmissionId(null);
    setIsSubmitting(false);
    setSaveError(null);
    setScreen('userInfo');
  };

  const handleViewSaved = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.userInfo && data.scores && data.resultType && data.answers) {
          setUserInfo(data.userInfo);
          setCalculatedScores(data.scores);
          setResultType(data.resultType);
          setAnswers(data.answers);
          setScreen('result');
        }
      }
    } catch (e) {
      console.warn('localStorage parse error:', e);
    }
  };

  const handleUserInfoNext = () => {
    setScreen('dilemma');
  };

  const handleSelectChoice = (choice: 'A' | 'B') => {
    const dilemmaId = DILEMMAS[currentDilemmaIndex].id;
    setAnswers((prev) => {
      const existing = prev.find((a) => a.dilemmaId === dilemmaId);
      if (existing) {
        return prev.map((a) => (a.dilemmaId === dilemmaId ? { ...a, selectedChoice: choice } : a));
      } else {
        return [...prev, { dilemmaId, selectedChoice: choice, reason: '' }];
      }
    });
  };

  const handleReasonChange = (reason: string) => {
    const dilemmaId = DILEMMAS[currentDilemmaIndex].id;
    setAnswers((prev) => {
      const existing = prev.find((a) => a.dilemmaId === dilemmaId);
      if (existing) {
        return prev.map((a) => (a.dilemmaId === dilemmaId ? { ...a, reason } : a));
      }
      return prev;
    });
  };

  const submitSurveyToSupabase = async (
    id: string,
    finalUserInfo: UserInfo,
    finalAnswers: UserAnswer[],
    finalScores: CalculatedScores,
    finalResultType: ResultTypeData
  ) => {
    setIsSubmitting(true);
    setSaveError(null);

    const result = await saveSurveyResponse({
      clientSubmissionId: id,
      userInfo: finalUserInfo,
      answers: finalAnswers,
      scores: finalScores,
      resultType: finalResultType,
    });

    setIsSubmitting(false);

    if (result.success) {
      // Clear in-progress draft from localStorage
      try {
        localStorage.removeItem(DRAFT_STORAGE_KEY);
      } catch (e) {
        console.warn('Failed to clear draft storage:', e);
      }

      // Save completed result to localStorage for local retrieval
      try {
        const payload = {
          userInfo: finalUserInfo,
          answers: finalAnswers,
          scores: finalScores,
          resultType: finalResultType,
          completedAt: new Date().toISOString(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        setHasSavedResult(true);
      } catch (e) {
        console.warn('localStorage save error:', e);
      }

      setScreen('result');
    } else {
      setSaveError(result.error || '저장에 실패했습니다.');
    }
  };

  const handleDilemmaNext = () => {
    if (currentDilemmaIndex < DILEMMAS.length - 1) {
      setCurrentDilemmaIndex((prev) => prev + 1);
    } else {
      // 8th dilemma finished -> calculate results
      const finalScores = calculateEthicsScores(answers, DILEMMAS);
      const finalResultType = determineResultType(finalScores);

      setCalculatedScores(finalScores);
      setResultType(finalResultType);

      // Generate idempotent UUID if not existing
      const currentSubId = submissionId || getUUID();
      if (!submissionId) {
        setSubmissionId(currentSubId);
      }

      // Save to Supabase
      submitSurveyToSupabase(currentSubId, userInfo, answers, finalScores, finalResultType);
    }
  };

  const handleRetrySave = () => {
    if (calculatedScores && resultType && submissionId) {
      submitSurveyToSupabase(submissionId, userInfo, answers, calculatedScores, resultType);
    }
  };

  const handleViewResultAnyway = () => {
    if (calculatedScores && resultType) {
      // Save result locally so user can view
      try {
        const payload = {
          userInfo,
          answers,
          scores: calculatedScores,
          resultType,
          completedAt: new Date().toISOString(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        setHasSavedResult(true);
      } catch (e) {
        console.warn('localStorage save error:', e);
      }
      setSaveError(null);
      setScreen('result');
    }
  };

  const handleDilemmaPrev = () => {
    if (currentDilemmaIndex > 0) {
      setCurrentDilemmaIndex((prev) => prev - 1);
    } else {
      setScreen('userInfo');
    }
  };

  const currentDilemma = DILEMMAS[currentDilemmaIndex];
  const currentAnswer = answers.find((a) => a.dilemmaId === currentDilemma?.id);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-gray-800 font-sans selection:bg-indigo-100 selection:text-indigo-900 flex flex-col justify-between overflow-x-hidden break-keep">
      {/* Top Navbar */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => setScreen('start')}
            className="flex items-center gap-3 font-bold text-indigo-900 text-base sm:text-lg hover:text-indigo-600 transition-colors cursor-pointer"
          >
            <span className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center text-white text-sm shadow-xs">
              <Sparkles className="w-5 h-5" />
            </span>
            <span className="tracking-tight">AI와 함께 사는 하루</span>
          </button>

          <div className="flex items-center gap-2">
            {screen === 'dilemma' ? (
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100/80">
                  {currentDilemma?.time}
                </span>
                <span className="text-xs font-bold text-gray-400">
                  질문 {currentDilemmaIndex + 1} / {DILEMMAS.length}
                </span>
              </div>
            ) : (
              <button
                id="nav-btn-statistics"
                onClick={() => setScreen('statistics')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  screen === 'statistics'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-100'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>전체 통계</span>
              </button>
            )}

            <SupabaseStatusButton />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-4 sm:py-8 relative">
        {screen === 'start' && (
          <StartScreen
            onStart={handleStartNew}
            hasSavedResult={hasSavedResult}
            onViewSavedResult={handleViewSaved}
            onViewStatistics={() => setScreen('statistics')}
          />
        )}

        {screen === 'userInfo' && (
          <UserInfoScreen
            userInfo={userInfo}
            onChange={setUserInfo}
            onNext={handleUserInfoNext}
            onBack={() => setScreen('start')}
          />
        )}

        {screen === 'dilemma' && currentDilemma && (
          <DilemmaScreen
            dilemma={currentDilemma}
            currentIndex={currentDilemmaIndex}
            totalCount={DILEMMAS.length}
            selectedChoice={currentAnswer?.selectedChoice || null}
            reasonText={currentAnswer?.reason || ''}
            onSelectChoice={handleSelectChoice}
            onChangeReason={handleReasonChange}
            onNext={handleDilemmaNext}
            onPrev={handleDilemmaPrev}
          />
        )}

        {screen === 'result' && calculatedScores && resultType && (
          <ResultScreen
            userInfo={userInfo}
            scores={calculatedScores}
            resultType={resultType}
            answers={answers}
            onRestart={handleStartNew}
            onViewStatistics={() => setScreen('statistics')}
          />
        )}

        {screen === 'statistics' && (
          <StatisticsScreen
            onBack={() => setScreen('start')}
            onStartSurvey={handleStartNew}
          />
        )}

        {/* 1. Saving Overlay Modal */}
        {isSubmitting && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white p-6 sm:p-8 rounded-3xl max-w-md w-full shadow-2xl text-center space-y-4 border border-indigo-100">
              <div className="w-16 h-16 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600 animate-spin">
                <Loader2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900">응답 기록 중...</h3>
                <p className="text-sm font-semibold text-indigo-700">
                  당신의 선택을 안전하게 기록하고 있어요.
                </p>
              </div>
              <p className="text-xs text-gray-400">잠시만 기다려 주세요.</p>
            </div>
          </div>
        )}

        {/* 2. Save Failed Modal */}
        {!isSubmitting && saveError && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white p-6 sm:p-8 rounded-3xl max-w-md w-full shadow-2xl space-y-5 border border-rose-100">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mx-auto text-rose-600">
                <AlertTriangle className="w-7 h-7" />
              </div>

              <div className="space-y-2 text-center">
                <h3 className="text-lg font-bold text-gray-900">응답 저장 안내</h3>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  결과 계산은 완료되었지만 응답을 저장하지 못했습니다. 인터넷 연결과 데이터베이스 설정을 확인해 주세요.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <button
                  id="btn-retry-save"
                  onClick={handleRetrySave}
                  className="flex-1 py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>다시 저장하기</span>
                </button>

                <button
                  id="btn-view-result-anyway"
                  onClick={handleViewResultAnyway}
                  className="flex-1 py-3.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>결과 먼저 보기</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-100 py-5 text-center text-xs text-gray-400">
        <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© AI와 함께 사는 하루 · 사용자 참여형 AI 윤리 딜레마 체험</span>
          <span className="flex items-center gap-1.5 text-gray-400 font-medium">
            인간과 기술의 온기 있는 공존 <Heart className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
          </span>
        </div>
      </footer>
    </div>
  );
}
