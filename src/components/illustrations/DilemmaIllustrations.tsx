import React from 'react';

interface SceneIllustrationProps {
  className?: string;
}

// 1. Health Illustration (07:00)
export const HealthIllustration: React.FC<SceneIllustrationProps> = ({ className = 'w-full h-44' }) => (
  <svg viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="360" height="160" rx="20" fill="#F0F5FF" />
    {/* Morning Sun */}
    <circle cx="50" cy="40" r="22" fill="#FDBA74" fillOpacity="0.6" />
    <circle cx="50" cy="40" r="14" fill="#F97316" fillOpacity="0.7" />

    {/* Cloud Data Sync */}
    <path
      d="M270 50C270 42 277 35 285 35C291 35 296 38 298 43C303 42 308 46 308 52C308 58 303 62 297 62H270C264 62 260 57 260 51C260 46 264 42 270 50Z"
      fill="#60A5FA"
      fillOpacity="0.3"
    />
    <path d="M285 46V56M285 56L281 52M285 56L289 52" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Smartwatch Display Card */}
    <rect x="100" y="30" width="160" height="100" rx="16" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
    <rect x="112" y="42" width="136" height="76" rx="10" fill="#0F172A" />

    {/* Heart Rate Wave Graph */}
    <path
      d="M124 80H144L150 62L158 98L166 70L172 86L178 80H236"
      stroke="#EF4444"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="166" cy="70" r="4" fill="#F87171" />

    {/* Health Metric Badges */}
    <rect x="124" y="50" width="50" height="16" rx="8" fill="#1E293B" />
    <text x="132" y="62" fill="#38BDF8" fontSize="10" fontWeight="700">72 BPM</text>

    <rect x="184" y="50" width="56" height="16" rx="8" fill="#1E293B" />
    <text x="190" y="62" fill="#34D399" fontSize="10" fontWeight="700">98% Sleep</text>
  </svg>
);

// 2. Hiring Illustration (09:00)
export const HiringIllustration: React.FC<SceneIllustrationProps> = ({ className = 'w-full h-44' }) => (
  <svg viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="360" height="160" rx="20" fill="#F3E8FF" />

    {/* Resume Card Left */}
    <rect x="40" y="30" width="90" height="100" rx="12" fill="#FFFFFF" stroke="#D8B4FE" strokeWidth="2" />
    <circle cx="65" cy="55" r="12" fill="#C084FC" />
    <rect x="85" y="48" width="35" height="6" rx="3" fill="#E9D5FF" />
    <rect x="85" y="58" width="25" height="6" rx="3" fill="#F3E8FF" />
    <rect x="52" y="78" width="66" height="5" rx="2.5" fill="#E9D5FF" />
    <rect x="52" y="88" width="55" height="5" rx="2.5" fill="#E9D5FF" />
    <rect x="52" y="98" width="40" height="5" rx="2.5" fill="#E9D5FF" />

    {/* AI Scan Beam Center */}
    <rect x="150" y="25" width="60" height="110" rx="10" fill="#7C3AED" fillOpacity="0.1" />
    <line x1="140" y1="80" x2="220" y2="80" stroke="#9333EA" strokeWidth="3" strokeDasharray="4 4" />
    <path d="M180 35L195 50H165L180 35Z" fill="#9333EA" />

    {/* Candidates Comparison & Balance Scale Right */}
    <rect x="230" y="30" width="90" height="100" rx="12" fill="#FFFFFF" stroke="#D8B4FE" strokeWidth="2" />
    <circle cx="275" cy="55" r="14" fill="#818CF8" />
    <path d="M266 70C266 65 270 61 275 61C280 61 284 65 284 70H266Z" fill="#818CF8" />

    <rect x="245" y="80" width="60" height="18" rx="9" fill="#F3E8FF" />
    <text x="254" y="93" fill="#7C3AED" fontSize="10" fontWeight="800">Match 94%</text>
  </svg>
);

// 3. Education Illustration (11:00)
export const EducationIllustration: React.FC<SceneIllustrationProps> = ({ className = 'w-full h-44' }) => (
  <svg viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="360" height="160" rx="20" fill="#E0F2FE" />

    {/* Student with Tablet */}
    <circle cx="75" cy="55" r="16" fill="#0284C7" />
    <path d="M50 95C50 82 60 73 75 73C90 73 100 82 100 95H50Z" fill="#0369A1" />

    {/* Tablet Screen */}
    <rect x="130" y="30" width="190" height="100" rx="14" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="2" />
    <rect x="142" y="42" width="166" height="76" rx="8" fill="#F0F9FF" />

    {/* Learning Curve Graph */}
    <path d="M152 100Q185 85 210 65T280 50" stroke="#0284C7" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <circle cx="280" cy="50" r="5" fill="#0284C7" />

    {/* Prediction Label Tag */}
    <rect x="200" y="75" width="88" height="24" rx="12" fill="#38BDF8" />
    <text x="208" y="91" fill="#FFFFFF" fontSize="11" fontWeight="800">AI 위험군 예측</text>
  </svg>
);

// 4. Medical Illustration (13:00)
export const MedicalIllustration: React.FC<SceneIllustrationProps> = ({ className = 'w-full h-44' }) => (
  <svg viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="360" height="160" rx="20" fill="#E6FFFA" />

    {/* Diagnostic Monitor */}
    <rect x="40" y="25" width="180" height="110" rx="16" fill="#111827" stroke="#99F6E4" strokeWidth="2" />
    <rect x="52" y="37" width="156" height="86" rx="8" fill="#064E3B" fillOpacity="0.4" />

    {/* AI Scan Pulse Lines */}
    <circle cx="100" cy="80" r="28" fill="none" stroke="#34D399" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="100" cy="80" r="14" fill="#10B981" fillOpacity="0.3" />
    <circle cx="100" cy="80" r="5" fill="#34D399" />

    <text x="140" y="65" fill="#A7F3D0" fontSize="11" fontWeight="800">AI Accuracy</text>
    <text x="140" y="85" fill="#FFFFFF" fontSize="18" fontWeight="900">98.2%</text>

    {/* Doctor Hand Confirmation Card Right */}
    <rect x="240" y="30" width="80" height="100" rx="14" fill="#FFFFFF" stroke="#5EEAD4" strokeWidth="2" />
    <circle cx="280" cy="65" r="18" fill="#0D9488" />
    <path d="M272 65L277 70L288 59" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <text x="252" y="100" fill="#0F766E" fontSize="11" fontWeight="800">의사 최종 검증</text>
  </svg>
);

// 5. Creation Illustration (15:00)
export const CreationIllustration: React.FC<SceneIllustrationProps> = ({ className = 'w-full h-44' }) => (
  <svg viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="360" height="160" rx="20" fill="#FEF3C7" />

    {/* Digital Canvas */}
    <rect x="50" y="25" width="180" height="110" rx="14" fill="#FFFFFF" stroke="#FDE68A" strokeWidth="2" />

    {/* Abstract Generated Artwork */}
    <path d="M65 110Q95 40 135 85T215 45" stroke="#F59E0B" strokeWidth="4" fill="none" />
    <circle cx="95" cy="65" r="18" fill="#F43F5E" fillOpacity="0.7" />
    <polygon points="175,70 195,105 155,105" fill="#3B82F6" fillOpacity="0.7" />

    {/* Robot Arm with Paintbrush Right */}
    <rect x="250" y="40" width="70" height="80" rx="12" fill="#D97706" />
    <path d="M230 80L250 80" stroke="#B45309" strokeWidth="4" strokeLinecap="round" />
    <path d="M220 80L230 75V85Z" fill="#F59E0B" />

    {/* Copyright Tag */}
    <rect x="62" y="102" width="75" height="20" rx="10" fill="#1F2937" />
    <text x="70" y="116" fill="#FDE68A" fontSize="10" fontWeight="800">© AI & Artist</text>
  </svg>
);

// 6. Safety Illustration (17:00)
export const SafetyIllustration: React.FC<SceneIllustrationProps> = ({ className = 'w-full h-44' }) => (
  <svg viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="360" height="160" rx="20" fill="#FFE4E6" />

    {/* City Skyline Silhouette */}
    <rect x="40" y="70" width="30" height="60" fill="#FDA4AF" />
    <rect x="75" y="50" width="40" height="80" fill="#FB7185" />
    <rect x="120" y="60" width="35" height="70" fill="#FDA4AF" />
    <rect x="160" y="40" width="45" height="90" fill="#E11D48" />

    {/* CCTV Frame / Face Recognition Box */}
    <rect x="220" y="30" width="100" height="100" rx="16" fill="#FFFFFF" stroke="#F43F5E" strokeWidth="2" />
    <rect x="235" y="45" width="70" height="70" rx="8" fill="none" stroke="#E11D48" strokeWidth="2" strokeDasharray="4 4" />

    {/* Face Silhouette Inside Scan Box */}
    <circle cx="270" cy="70" r="12" fill="#FB7185" />
    <path d="M255 100C255 90 262 84 270 84C278 84 285 90 285 100H255Z" fill="#FB7185" />

    {/* Lock/Shield Icon */}
    <circle cx="220" cy="40" r="14" fill="#9F1239" />
    <path d="M215 40L218 43L225 36" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 7. Care Illustration (20:00)
export const CareIllustration: React.FC<SceneIllustrationProps> = ({ className = 'w-full h-44' }) => (
  <svg viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="360" height="160" rx="20" fill="#FCE7F3" />

    {/* Person Sitting Left */}
    <circle cx="80" cy="55" r="16" fill="#DB2777" />
    <path d="M55 98C55 84 66 75 80 75C94 75 105 84 105 98H55Z" fill="#BE185D" />

    {/* Warm Heart Speech Bubble */}
    <rect x="125" y="30" width="130" height="65" rx="18" fill="#FFFFFF" stroke="#F472B6" strokeWidth="2" />
    <path d="M140 95L135 108L152 98" fill="#FFFFFF" stroke="#F472B6" strokeWidth="2" />

    <path d="M190 52C187 47 180 48 180 54C180 62 190 68 190 68C190 68 200 62 200 54C200 48 193 47 190 52Z" fill="#EC4899" />
    <text x="145" y="78" fill="#9D174D" fontSize="10" fontWeight="800">"오늘 하루도 애썼어요"</text>

    {/* AI Companion Device Right */}
    <rect x="270" y="55" width="50" height="70" rx="25" fill="#831843" stroke="#F472B6" strokeWidth="2" />
    <circle cx="295" cy="75" r="8" fill="#F472B6" />
    <circle cx="295" cy="75" r="4" fill="#FFFFFF" />
  </svg>
);

// 8. Info Illustration (22:00)
export const InfoIllustration: React.FC<SceneIllustrationProps> = ({ className = 'w-full h-44' }) => (
  <svg viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="360" height="160" rx="20" fill="#EDE9FE" />

    {/* News Card True Left */}
    <rect x="40" y="30" width="120" height="100" rx="14" fill="#FFFFFF" stroke="#A78BFA" strokeWidth="2" />
    <rect x="52" y="44" width="96" height="10" rx="5" fill="#DDD6FE" />
    <rect x="52" y="60" width="70" height="6" rx="3" fill="#EDE9FE" />
    <rect x="52" y="70" width="85" height="6" rx="3" fill="#EDE9FE" />
    <rect x="52" y="80" width="50" height="6" rx="3" fill="#EDE9FE" />

    <rect x="52" y="96" width="50" height="18" rx="9" fill="#D1FAE5" />
    <text x="62" y="109" fill="#065F46" fontSize="10" fontWeight="800">✓ Real</text>

    {/* Fake Filter Shield Center */}
    <circle cx="180" cy="80" r="26" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="2" />
    <path d="M180 66L192 72V82C192 90 180 96 180 96C180 96 168 90 168 82V72L180 66Z" fill="#FFFFFF" />

    {/* News Card Fake Right */}
    <rect x="200" y="30" width="120" height="100" rx="14" fill="#FFFFFF" stroke="#F43F5E" strokeWidth="2" />
    <rect x="212" y="44" width="96" height="10" rx="5" fill="#FFE4E6" />
    <rect x="212" y="60" width="70" height="6" rx="3" fill="#FFF1F2" />
    <rect x="212" y="70" width="85" height="6" rx="3" fill="#FFF1F2" />

    <rect x="212" y="96" width="56" height="18" rx="9" fill="#FFE4E6" />
    <text x="220" y="109" fill="#9F1239" fontSize="10" fontWeight="800">✕ Filtered</text>
  </svg>
);

export const getDilemmaIllustration = (id: number): React.ReactNode => {
  switch (id) {
    case 1:
      return <HealthIllustration />;
    case 2:
      return <HiringIllustration />;
    case 3:
      return <EducationIllustration />;
    case 4:
      return <MedicalIllustration />;
    case 5:
      return <CreationIllustration />;
    case 6:
      return <SafetyIllustration />;
    case 7:
      return <CareIllustration />;
    case 8:
      return <InfoIllustration />;
    default:
      return <HealthIllustration />;
  }
};
