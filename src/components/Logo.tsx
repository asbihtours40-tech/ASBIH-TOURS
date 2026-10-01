import React from 'react';
import logoImg from '../assets/images/asbih_tours_logo_1790164848014.jpg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  tagline?: string;
  variant?: 'vector' | 'image';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  tagline,
  variant = 'vector',
}) => {
  const sizeMap = {
    sm: { box: 'w-8 h-8', text: 'text-base', sub: 'text-[9px]' },
    md: { box: 'w-10 h-10 sm:w-11 sm:h-11', text: 'text-lg sm:text-xl', sub: 'text-[10px] sm:text-[11px]' },
    lg: { box: 'w-14 h-14 sm:w-16 sm:h-16', text: 'text-2xl sm:text-3xl', sub: 'text-xs' },
    xl: { box: 'w-20 h-20 sm:w-24 sm:h-24', text: 'text-3xl sm:text-4xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem */}
      <div
        className={`${currentSize.box} relative shrink-0 rounded-full overflow-hidden shadow-lg shadow-amber-500/20 border-2 border-amber-400 bg-slate-900 flex items-center justify-center group-hover:border-amber-300 transition-colors`}
      >
        {variant === 'image' ? (
          <img
            src={logoImg}
            alt="ASBIH TOURS Logo Officiel"
            className="w-full h-full object-contain p-0.5"
          />
        ) : (
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background disc */}
            <circle cx="100" cy="100" r="94" fill="#0B132B" />

            <g transform="translate(6, 4) scale(0.94)">
              {/* Inner Golden Sun circle */}
              <circle cx="100" cy="100" r="62" fill="#F59E0B" />

              {/* Blue Ocean wave at bottom of the sun */}
              <path
                d="M40 114 C56 104, 72 96, 88 112 C98 122, 114 120, 132 116 C148 112, 156 118, 160 124 A62 62 0 0 1 40 114 Z"
                fill="#0284C7"
              />

              {/* Wave crest accent */}
              <path
                d="M44 116 C58 108, 72 98, 86 114 C74 110, 62 114, 44 116 Z"
                fill="#38BDF8"
              />

              {/* Beach sand golden curve */}
              <path
                d="M48 126 C66 118, 82 128, 100 126 C122 124, 140 130, 154 134 A62 62 0 0 1 48 126 Z"
                fill="#D97706"
              />

              {/* Palm Tree 1 (Tall, graceful curve) */}
              <path
                d="M96 128 C96 108, 93 90, 91 72 C94 72, 98 90, 99 128 Z"
                fill="#0F172A"
              />
              {/* Fronds for Palm 1 */}
              <path
                d="M91 72 C77 68, 63 74, 55 86 C63 80, 75 78, 91 72 Z"
                fill="#0F172A"
              />
              <path
                d="M91 72 C79 58, 67 54, 51 58 C65 60, 77 66, 91 72 Z"
                fill="#0F172A"
              />
              <path
                d="M91 72 C87 52, 93 40, 101 36 C99 48, 97 60, 91 72 Z"
                fill="#0F172A"
              />
              <path
                d="M91 72 C103 54, 117 52, 133 56 C119 62, 109 66, 91 72 Z"
                fill="#0F172A"
              />
              <path
                d="M91 72 C107 66, 123 70, 137 82 C123 78, 111 76, 91 72 Z"
                fill="#0F172A"
              />

              {/* Palm Tree 2 (Smaller, right side) */}
              <path
                d="M118 128 C119 114, 121 102, 123 88 C125 88, 125 102, 122 128 Z"
                fill="#0F172A"
              />
              {/* Fronds for Palm 2 */}
              <path
                d="M123 88 C113 84, 105 88, 97 96 C105 91, 113 90, 123 88 Z"
                fill="#0F172A"
              />
              <path
                d="M123 88 C115 78, 109 74, 99 78 C107 79, 115 83, 123 88 Z"
                fill="#0F172A"
              />
              <path
                d="M123 88 C123 76, 127 68, 135 66 C133 74, 131 82, 123 88 Z"
                fill="#0F172A"
              />
              <path
                d="M123 88 C133 78, 141 78, 151 82 C141 85, 135 86, 123 88 Z"
                fill="#0F172A"
              />
              <path
                d="M123 88 C135 86, 143 90, 149 98 C141 94, 133 92, 123 88 Z"
                fill="#0F172A"
              />

              {/* Outer Golden Crescent Loop wrapping towards airplane */}
              <path
                d="M98 180 C50 180, 12 140, 12 94 C12 52, 42 20, 82 12 C60 24, 40 54, 40 94 C40 138, 68 164, 106 164 C136 164, 162 144, 174 118 C178 140, 152 180, 98 180 Z"
                fill="#F59E0B"
              />

              {/* Golden Airplane taking flight towards top-right */}
              <g transform="translate(158, 44) rotate(32)">
                <path
                  d="M0 -22 L4 -6 L24 4 L24 10 L4 6 L4 18 L10 23 L10 27 L0 24 L-10 27 L-10 23 L-4 18 L-4 6 L-24 10 L-24 4 L-4 -6 Z"
                  fill="#FBBF24"
                />
              </g>
            </g>
          </svg>
        )}
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`${currentSize.text} font-black italic tracking-wider text-amber-400 group-hover:text-amber-300 leading-none drop-shadow-sm font-sans transition-colors`}
          >
            ASBIH TOURS
          </span>
          <span className={`${currentSize.sub} font-semibold text-blue-400 tracking-wider mt-0.5`}>
            {tagline || 'Transport Touristique'}
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;

