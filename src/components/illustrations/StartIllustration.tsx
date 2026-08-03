import React from 'react';

export const StartIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto max-h-64' }) => {
  return (
    <svg
      viewBox="0 0 500 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AI와 사람이 함께하는 일상"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="50%" stopColor="#F3E8FF" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
        <linearGradient id="aiGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
        <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#6366F1" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Rounded Soft Background Card */}
      <rect width="500" height="300" rx="24" fill="url(#bgGrad)" />

      {/* Warm Sun/Clock Accent in Morning Sky */}
      <circle cx="100" cy="70" r="32" fill="url(#sunGrad)" opacity="0.8" />
      <path d="M 100 48 L 100 54 M 100 86 L 100 92 M 78 70 L 84 70 M 116 70 L 122 70" stroke="#CA8A04" strokeWidth="2.5" strokeLinecap="round" />

      {/* Decorative Floating Tech Sparkles */}
      <circle cx="210" cy="50" r="4" fill="#818CF8" />
      <circle cx="410" cy="80" r="6" fill="#38BDF8" />
      <circle cx="80" cy="220" r="5" fill="#C084FC" />

      <path d="M 230 40 L 234 48 L 242 52 L 234 56 L 230 64 L 226 56 L 218 52 L 226 48 Z" fill="#F43F5E" opacity="0.7" />
      <path d="M 390 190 L 393 196 L 399 199 L 393 202 L 390 208 L 387 202 L 381 199 L 387 196 Z" fill="#6366F1" opacity="0.8" />

      {/* Main Table / Lounge Platform */}
      <rect x="70" y="240" width="360" height="12" rx="6" fill="#CBD5E1" />

      {/* Human Figure sitting on chair */}
      <g filter="url(#softShadow)">
        {/* Hair */}
        <path d="M 175 125 C 165 110 190 100 205 115 C 215 110 225 120 220 135 Z" fill="#334155" />
        {/* Head */}
        <circle cx="195" cy="130" r="18" fill="#FDBA74" />
        {/* Smile */}
        <path d="M 191 135 Q 195 139 199 135" stroke="#9A3412" strokeWidth="2" strokeLinecap="round" />
        {/* Eyes */}
        <circle cx="190" cy="128" r="2" fill="#431407" />
        <circle cx="200" cy="128" r="2" fill="#431407" />
        {/* Torso */}
        <path d="M 180 148 Q 195 145 210 148 L 215 195 L 175 195 Z" fill="#38BDF8" />
        {/* Arm holding mug */}
        <path d="M 205 155 Q 220 165 225 175" stroke="#38BDF8" strokeWidth="8" strokeLinecap="round" />
        {/* Warm Coffee Mug */}
        <rect x="222" y="170" width="12" height="14" rx="2" fill="#F97316" />
        {/* Steam */}
        <path d="M 225 165 Q 227 160 225 155 M 230 165 Q 232 160 230 155" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Friendly AI Companion Figure */}
      <g filter="url(#softShadow)">
        {/* Floating Glowing Aura Body */}
        <rect x="290" y="115" width="70" height="80" rx="35" fill="url(#aiGlow)" />
        {/* AI Head Screen */}
        <rect x="300" y="125" width="50" height="38" rx="14" fill="#0F172A" />
        {/* AI Friendly Expressive Eyes */}
        <circle cx="315" cy="142" r="5" fill="#38BDF8" />
        <circle cx="335" cy="142" r="5" fill="#38BDF8" />
        <path d="M 320 150 Q 325 154 330 150" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
        {/* AI Antenna */}
        <line x1="325" y1="115" x2="325" y2="105" stroke="#818CF8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="325" cy="102" r="5" fill="#F43F5E" />

        {/* AI Glowing Heart / Core */}
        <path d="M 325 170 Q 320 162 315 168 Q 310 176 325 186 Q 340 176 335 168 Q 330 162 325 170 Z" fill="#F43F5E" />
      </g>

      {/* Connecting Bridge / Synergy Wave between Human and AI */}
      <path
        d="M 225 140 Q 260 120 290 140"
        stroke="#818CF8"
        strokeWidth="3"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      {/* Floating Dialogue / Idea Bubble */}
      <g opacity="0.95">
        <rect x="235" y="80" width="55" height="32" rx="12" fill="#FFFFFF" filter="url(#softShadow)" />
        <path d="M 255 112 L 250 120 L 262 112 Z" fill="#FFFFFF" />
        <text x="245" y="101" fill="#475569" fontSize="14" fontWeight="bold">AI ❤️</text>
      </g>

      {/* Everyday Elements floating */}
      {/* Calendar icon */}
      <rect x="110" y="150" width="30" height="30" rx="6" fill="#FFFFFF" />
      <rect x="110" y="150" width="30" height="8" rx="2" fill="#F43F5E" />
      <circle cx="120" cy="168" r="2" fill="#64748B" />
      <circle cx="130" cy="168" r="2" fill="#64748B" />

      {/* Shield / Safety icon */}
      <path d="M 385 120 L 400 112 L 415 120 C 415 140 400 150 400 150 C 400 150 385 140 385 120 Z" fill="#10B981" opacity="0.85" />
      <path d="M 396 130 L 399 134 L 406 126" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
