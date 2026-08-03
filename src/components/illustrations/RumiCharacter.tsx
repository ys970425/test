import React from 'react';

export type RumiPose =
  | 'start'
  | 'health'
  | 'hiring'
  | 'education'
  | 'medical'
  | 'creation'
  | 'safety'
  | 'care'
  | 'info'
  | 'result';

interface RumiCharacterProps {
  pose?: RumiPose;
  className?: string;
  size?: number;
}

export const RumiCharacter: React.FC<RumiCharacterProps> = ({
  pose = 'start',
  className = 'w-24 h-24',
  size,
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-300 hover:scale-105`}
      style={style}
      aria-hidden="true"
    >
      <defs>
        {/* Soft Rumi Body Gradient */}
        <linearGradient id="rumiBodyGrad" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>

        {/* Soft Outer Glow */}
        <radialGradient id="rumiAura" cx="80" cy="80" r="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818CF8" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#C084FC" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
        </radialGradient>

        {/* Eye/Highlight Gradient */}
        <linearGradient id="eyeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0E7FF" />
        </linearGradient>

        {/* Accessory Gradients */}
        <linearGradient id="accentOrange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>

        <linearGradient id="accentEmerald" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        <linearGradient id="accentSky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>

      {/* Outer Aura Glow */}
      <circle cx="80" cy="80" r="72" fill="url(#rumiAura)" />

      {/* Floating Shadow */}
      <ellipse cx="80" cy="142" rx="36" ry="7" fill="#1E1B4B" fillOpacity="0.08" />

      {/* Main Rumi Body (Friendly Round Companion) */}
      <g id="rumi-main-body">
        {/* Antenna / Sparkle Crest */}
        <path
          d="M80 34V22"
          stroke="#818CF8"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="80" cy="18" r="5" fill="#38BDF8" />
        <circle cx="80" cy="18" r="2.5" fill="#FFFFFF" />

        {/* Body Shape */}
        <rect
          x="38"
          y="36"
          width="84"
          height="84"
          rx="42"
          fill="url(#rumiBodyGrad)"
          stroke="#EEF2FF"
          strokeWidth="2.5"
        />

        {/* Belly Inner Display Panel */}
        <rect
          x="48"
          y="50"
          width="64"
          height="54"
          rx="27"
          fill="#1E1B4B"
          fillOpacity="0.88"
        />

        {/* Friendly Eyes */}
        {pose === 'medical' ? (
          /* Thinking/Concerned Eyes */
          <g>
            <circle cx="66" cy="74" r="5" fill="url(#eyeGrad)" />
            <circle cx="94" cy="74" r="5" fill="url(#eyeGrad)" />
            <path d="M62 66L72 68" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            <path d="M98 66L88 68" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          </g>
        ) : pose === 'result' ? (
          /* Happy Crescent Winking Eyes */
          <g>
            <path d="M61 74C61 71 71 71 71 74" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <path d="M89 74C89 71 99 71 99 74" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          </g>
        ) : (
          /* Normal Friendly Shiny Eyes */
          <g>
            <circle cx="66" cy="74" r="6" fill="url(#eyeGrad)" />
            <circle cx="68" cy="72" r="2" fill="#1E1B4B" />
            <circle cx="94" cy="74" r="6" fill="url(#eyeGrad)" />
            <circle cx="96" cy="72" r="2" fill="#1E1B4B" />
          </g>
        )}

        {/* Soft Cheeks */}
        <circle cx="58" cy="83" r="4" fill="#F472B6" fillOpacity="0.6" />
        <circle cx="102" cy="83" r="4" fill="#F472B6" fillOpacity="0.6" />

        {/* Small Cute Smile */}
        <path
          d="M75 83Q80 87 85 83"
          stroke="#38BDF8"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Floating Side Satellite Sparks */}
        <path
          d="M26 65L28 68L26 71L24 68Z"
          fill="#38BDF8"
        />
        <path
          d="M134 60L136 63L134 66L132 63Z"
          fill="#C084FC"
        />
      </g>

      {/* Pose Specific Props & Arms */}
      {pose === 'start' && (
        <g id="pose-start">
          {/* Waving Hand */}
          <circle cx="128" cy="80" r="8" fill="#818CF8" stroke="#FFFFFF" strokeWidth="2" />
          <path d="M128 72L134 64" stroke="#FDBA74" strokeWidth="2" strokeLinecap="round" />
          <path d="M132 60L136 64L132 68" stroke="#FDBA74" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>
      )}

      {pose === 'health' && (
        <g id="pose-health">
          {/* Smartwatch / Pulse Prop */}
          <rect x="110" y="85" width="28" height="28" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
          <path d="M116 99H120L122 93L125 105L128 96L130 99H132" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}

      {pose === 'hiring' && (
        <g id="pose-hiring">
          {/* Magnifying Glass & Document */}
          <rect x="112" y="82" width="22" height="28" rx="4" fill="#FFFFFF" stroke="#818CF8" strokeWidth="1.8" />
          <line x1="117" y1="89" x2="129" y2="89" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          <line x1="117" y1="95" x2="126" y2="95" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          <line x1="117" y1="101" x2="124" y2="101" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="112" cy="104" r="8" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
          <line x1="118" y1="110" x2="124" y2="116" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      )}

      {pose === 'education' && (
        <g id="pose-education">
          {/* Book / Graduation Tag */}
          <rect x="110" y="90" width="28" height="20" rx="4" fill="#3B82F6" />
          <path d="M110 90L124 98L138 90" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M124 74L136 80L124 86L112 80Z" fill="#F59E0B" />
        </g>
      )}

      {pose === 'medical' && (
        <g id="pose-medical">
          {/* Stethoscope / Monitor Heart */}
          <circle cx="124" cy="98" r="12" fill="#0EA5E9" fillOpacity="0.2" stroke="#0EA5E9" strokeWidth="2" />
          <path d="M120 98C120 95 122.5 93 124 95C125.5 93 128 95 128 98C128 101 124 104 124 104C124 104 120 101 120 98Z" fill="#EF4444" />
        </g>
      )}

      {pose === 'creation' && (
        <g id="pose-creation">
          {/* Paint Palette & Brush */}
          <circle cx="125" cy="95" r="14" fill="#FEF08A" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="119" cy="92" r="2" fill="#EF4444" />
          <circle cx="125" cy="88" r="2" fill="#3B82F6" />
          <circle cx="131" cy="93" r="2" fill="#10B981" />
          <path d="M112 112L122 102" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {pose === 'safety' && (
        <g id="pose-safety">
          {/* Shield / Lock */}
          <path d="M116 88C116 88 126 84 126 84C126 84 136 88 136 88V98C136 106 126 112 126 112C126 112 116 106 116 98V88Z" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M123 98L125 101L130 95" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}

      {pose === 'care' && (
        <g id="pose-care">
          {/* Glowing Warm Heart Bubble */}
          <path d="M124 82C121 78 114 80 114 86C114 93 124 98 124 98C124 98 134 93 134 86C134 80 127 78 124 82Z" fill="#EC4899" />
        </g>
      )}

      {pose === 'info' && (
        <g id="pose-info">
          {/* News Card Check / Cross */}
          <rect x="112" y="85" width="26" height="24" rx="4" fill="#8B5CF6" />
          <path d="M118 97L122 101L132 91" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}

      {pose === 'result' && (
        <g id="pose-result">
          {/* Scroll / Ribbon */}
          <path d="M110 80C110 80 120 76 132 82V110C120 104 110 108 110 108Z" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="115" y1="88" x2="127" y2="92" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="115" y1="95" x2="125" y2="99" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
};
