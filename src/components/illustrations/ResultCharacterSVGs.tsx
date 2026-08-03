import React from 'react';

interface ResultCharacterProps {
  code: string;
  className?: string;
}

export const ResultCharacterSVG: React.FC<ResultCharacterProps> = ({ code, className = "w-28 h-28 sm:w-36 sm:h-36 mx-auto" }) => {
  switch (code) {
    case 'HD':
      return (
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="HD 인간존엄 수호자">
          <circle cx="80" cy="80" r="72" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="4" />
          {/* Guardian Shield */}
          <path d="M 80 30 L 120 48 L 120 85 C 120 115 80 135 80 135 C 80 135 40 115 40 85 L 40 48 Z" fill="#F59E0B" />
          <path d="M 80 38 L 112 53 L 112 83 C 112 108 80 125 80 125 C 80 125 48 108 48 83 L 48 53 Z" fill="#FBBF24" />
          {/* Human Heart in center */}
          <path d="M 80 72 Q 72 62 62 70 Q 52 82 80 102 Q 108 82 98 70 Q 88 62 80 72 Z" fill="#EF4444" />
          {/* Sparkle Head Aura */}
          <circle cx="80" cy="20" r="4" fill="#D97706" />
        </svg>
      );

    case 'FE':
      return (
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="FE 공정성 설계자">
          <circle cx="80" cy="80" r="72" fill="#EEF2FF" stroke="#6366F1" strokeWidth="4" />
          {/* Pillar / Scale */}
          <path d="M 80 35 L 80 125 M 40 55 L 120 55 M 40 55 L 25 95 M 120 55 L 135 95" stroke="#4F46E5" strokeWidth="6" strokeLinecap="round" />
          {/* Scale Plates */}
          <path d="M 10 95 Q 25 110 40 95 Z" fill="#818CF8" />
          <path d="M 120 95 Q 135 110 150 95 Z" fill="#818CF8" />
          <rect x="60" y="125" width="40" height="12" rx="4" fill="#3730A3" />
        </svg>
      );

    case 'DS':
      return (
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="DS 데이터 주권자">
          <circle cx="80" cy="80" r="72" fill="#ECFDF5" stroke="#10B981" strokeWidth="4" />
          {/* Cyber Lock */}
          <rect x="50" y="70" width="60" height="50" rx="12" fill="#059669" />
          <path d="M 60 70 V 50 C 60 38 100 38 100 50 V 70" stroke="#047857" strokeWidth="8" fill="none" strokeLinecap="round" />
          <circle cx="80" cy="90" r="7" fill="#FFFFFF" />
          <rect x="77" y="93" width="6" height="15" fill="#FFFFFF" />
        </svg>
      );

    case 'SR':
      return (
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="SR 안전 항해사">
          <circle cx="80" cy="80" r="72" fill="#FFE4E6" stroke="#F43F5E" strokeWidth="4" />
          {/* Ship Wheel / Navigation Symbol */}
          <circle cx="80" cy="80" r="32" fill="none" stroke="#E11D48" strokeWidth="8" />
          <circle cx="80" cy="80" r="12" fill="#BE123C" />
          <line x1="80" y1="25" x2="80" y2="135" stroke="#E11D48" strokeWidth="6" strokeLinecap="round" />
          <line x1="25" y1="80" x2="135" y2="80" stroke="#E11D48" strokeWidth="6" strokeLinecap="round" />
          <line x1="41" y1="41" x2="119" y2="119" stroke="#E11D48" strokeWidth="5" strokeLinecap="round" />
          <line x1="119" y1="41" x2="41" y2="119" stroke="#E11D48" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    case 'AT':
      return (
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="AT 책임 추적자">
          <circle cx="80" cy="80" r="72" fill="#E0F2FE" stroke="#0284C7" strokeWidth="4" />
          {/* Magnifying Glass */}
          <circle cx="70" cy="70" r="35" fill="none" stroke="#0369A1" strokeWidth="8" />
          <circle cx="70" cy="70" r="27" fill="#BAE6FD" opacity="0.6" />
          <line x1="95" y1="95" x2="135" y2="135" stroke="#0369A1" strokeWidth="12" strokeLinecap="round" />
          {/* Checkmark inside glass */}
          <path d="M 55 70 L 65 80 L 85 60" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'PI':
      return (
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="PI 공공혁신가">
          <circle cx="80" cy="80" r="72" fill="#F3E8FF" stroke="#9333EA" strokeWidth="4" />
          {/* Glowing Globe */}
          <circle cx="80" cy="80" r="40" fill="#C084FC" />
          <ellipse cx="80" cy="80" rx="40" ry="16" fill="none" stroke="#FFFFFF" strokeWidth="3" />
          <ellipse cx="80" cy="80" rx="16" ry="40" fill="none" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="40" y1="80" x2="120" y2="80" stroke="#FFFFFF" strokeWidth="3" />
          {/* Orbit Sparkles */}
          <circle cx="35" cy="55" r="6" fill="#A855F7" />
          <circle cx="125" cy="105" r="8" fill="#F43F5E" />
        </svg>
      );

    case 'TR':
      return (
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="TR 기술 현실주의자">
          <circle cx="80" cy="80" r="72" fill="#F1F5F9" stroke="#475569" strokeWidth="4" />
          {/* Pragmatic Gear */}
          <path
            d="M 80 30 L 86 42 L 100 38 L 102 52 L 116 54 L 112 68 L 124 76 L 116 88 L 124 100 L 110 104 L 104 118 L 90 116 L 82 128 L 74 116 L 60 118 L 54 104 L 40 100 L 48 88 L 40 76 L 52 68 L 48 54 L 62 52 L 64 38 L 78 42 Z"
            fill="#64748B"
          />
          <circle cx="80" cy="80" r="22" fill="#F1F5F9" />
          <circle cx="80" cy="80" r="12" fill="#334155" />
        </svg>
      );

    case 'CM':
    default:
      return (
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="CM 맥락 조정자">
          <circle cx="80" cy="80" r="72" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="4" />
          {/* Compass Rose */}
          <polygon points="80,25 90,70 80,80 70,70" fill="#7C3AED" />
          <polygon points="80,135 90,90 80,80 70,90" fill="#DDD6FE" />
          <polygon points="135,80 90,90 80,80 90,70" fill="#A78BFA" />
          <polygon points="25,80 70,90 80,80 70,70" fill="#DDD6FE" />
          <circle cx="80" cy="80" r="8" fill="#6D28D9" />
          <circle cx="80" cy="80" r="4" fill="#FFFFFF" />
        </svg>
      );
  }
};
