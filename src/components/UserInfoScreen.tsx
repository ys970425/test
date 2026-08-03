import React from 'react';
import { UserInfo, AgeGroup, Gender, UserType } from '../types';
import { ArrowLeft, ArrowRight, UserCheck } from 'lucide-react';

interface UserInfoScreenProps {
  userInfo: UserInfo;
  onChange: (info: UserInfo) => void;
  onNext: () => void;
  onBack: () => void;
}

const AGE_GROUPS: AgeGroup[] = ['10대 이하', '20대', '30대', '40대', '50대 이상'];
const GENDERS: Gender[] = ['여성', '남성', '기타', '응답하지 않음'];
const USER_TYPES: UserType[] = ['학생', '교사', '일반인', '기타'];

export const UserInfoScreen: React.FC<UserInfoScreenProps> = ({
  userInfo,
  onChange,
  onNext,
  onBack,
}) => {
  const isComplete =
    Boolean(userInfo.ageGroup) &&
    Boolean(userInfo.gender) &&
    Boolean(userInfo.userType) &&
    Boolean(userInfo.consentStatistics);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 sm:py-8 space-y-8 animate-fade-in break-keep">
      {/* Top Title */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
          <UserCheck className="w-3.5 h-3.5" />
          익명 기본 정보 입력
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          더 정확한 성향 분석을 위한 기본 선택
        </h2>
        <p className="text-sm text-gray-500">
          이름, 이메일, 전화번호 등 개인 식별 정보는 절대로 수집하지 않습니다.
        </p>
      </div>

      {/* Selectors Group Card */}
      <div className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
        {/* 1. Age Group */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-800 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            연령대 <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
            {AGE_GROUPS.map((age) => (
              <button
                key={age}
                type="button"
                id={`btn-age-${age}`}
                onClick={() => onChange({ ...userInfo, ageGroup: age })}
                className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  userInfo.ageGroup === age
                    ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-100'
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Gender */}
        <div className="space-y-3 pt-2">
          <label className="block text-sm font-bold text-gray-800 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            성별 <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {GENDERS.map((g) => (
              <button
                key={g}
                type="button"
                id={`btn-gender-${g}`}
                onClick={() => onChange({ ...userInfo, gender: g })}
                className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  userInfo.gender === g
                    ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-100'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* 3. User Type */}
        <div className="space-y-3 pt-2">
          <label className="block text-sm font-bold text-gray-800 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            참여 유형 <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {USER_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                id={`btn-usertype-${type}`}
                onClick={() => onChange({ ...userInfo, userType: type })}
                className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  userInfo.userType === type
                    ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Consent Checkbox */}
        <div className="pt-3 border-t border-gray-100">
          <label className="flex items-start gap-3 p-3.5 bg-indigo-50/50 rounded-2xl border border-indigo-100/80 cursor-pointer hover:bg-indigo-50 transition-colors">
            <input
              type="checkbox"
              id="chk-consent-statistics"
              checked={userInfo.consentStatistics || false}
              onChange={(e) => onChange({ ...userInfo, consentStatistics: e.target.checked })}
              className="mt-0.5 w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
            />
            <span className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">
              이름 등 개인을 식별하는 정보 없이, 응답을 수업 및 통계 자료로 활용하는 데 동의합니다. <span className="text-rose-500 font-bold">*</span>
            </span>
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          id="btn-userinfo-back"
          onClick={onBack}
          className="py-3.5 px-5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm rounded-2xl transition-all flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>이전</span>
        </button>

        <button
          id="btn-userinfo-next"
          disabled={!isComplete}
          onClick={onNext}
          className={`py-3.5 px-7 rounded-2xl font-bold text-base transition-all flex items-center gap-2 ${
            isComplete
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200/60 cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>첫 번째 질문으로</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
