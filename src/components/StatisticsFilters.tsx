import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

interface StatisticsFiltersProps {
  selectedAgeGroup: string;
  selectedGender: string;
  selectedRoleGroup: string;
  onChangeAgeGroup: (val: string) => void;
  onChangeGender: (val: string) => void;
  onChangeRoleGroup: (val: string) => void;
  onResetFilters: () => void;
}

const AGE_OPTIONS = [
  { value: '', label: '전체 연령대' },
  { value: '10대 이하', label: '10대 이하' },
  { value: '20대', label: '20대' },
  { value: '30대', label: '30대' },
  { value: '40대', label: '40대' },
  { value: '50대 이상', label: '50대 이상' },
];

const GENDER_OPTIONS = [
  { value: '', label: '전체 성별' },
  { value: '여성', label: '여성' },
  { value: '남성', label: '남성' },
  { value: '기타', label: '기타' },
  { value: '응답하지 않음', label: '응답하지 않음' },
];

const ROLE_OPTIONS = [
  { value: '', label: '전체 참여 유형' },
  { value: '학생', label: '학생' },
  { value: '교사', label: '교사' },
  { value: '일반인', label: '일반인' },
  { value: '기타', label: '기타' },
];

export const StatisticsFilters: React.FC<StatisticsFiltersProps> = ({
  selectedAgeGroup,
  selectedGender,
  selectedRoleGroup,
  onChangeAgeGroup,
  onChangeGender,
  onChangeRoleGroup,
  onResetFilters,
}) => {
  const hasActiveFilter = Boolean(selectedAgeGroup || selectedGender || selectedRoleGroup);

  return (
    <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-2xs space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
          <Filter className="w-4 h-4 text-indigo-600" />
          <span>참여자 필터 검색</span>
        </div>

        {hasActiveFilter && (
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>필터 초기화</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Age Filter */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-600">연령대</label>
          <select
            id="select-filter-age"
            value={selectedAgeGroup}
            onChange={(e) => onChangeAgeGroup(e.target.value)}
            className="w-full text-xs sm:text-sm p-2.5 sm:p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-gray-800 cursor-pointer"
          >
            {AGE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Gender Filter */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-600">성별</label>
          <select
            id="select-filter-gender"
            value={selectedGender}
            onChange={(e) => onChangeGender(e.target.value)}
            className="w-full text-xs sm:text-sm p-2.5 sm:p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-gray-800 cursor-pointer"
          >
            {GENDER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Role Group Filter */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-600">참여 유형</label>
          <select
            id="select-filter-role"
            value={selectedRoleGroup}
            onChange={(e) => onChangeRoleGroup(e.target.value)}
            className="w-full text-xs sm:text-sm p-2.5 sm:p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-gray-800 cursor-pointer"
          >
            {ROLE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
