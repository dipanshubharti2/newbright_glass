import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'auto' | 'light' | 'dark' | 'white-card';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'auto',
}) => {
  // Height presets
  const sizeClasses = {
    sm: 'h-10 w-auto',
    md: 'h-13 w-auto',
    lg: 'h-18 w-auto',
    xl: 'h-24 w-auto',
  };

  // If variant is white-card, we wrap the logo in a soft frosted crystal white badge so it looks 100% true to the original scan!
  if (variant === 'white-card') {
    return (
      <div
        className={`inline-flex items-center justify-center p-2 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white/40 text-slate-900 ${className}`}
      >
        <svg
          viewBox="0 0 340 160"
          className={sizeClasses[size]}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ESTD 1972 */}
          <text
            x="170"
            y="28"
            textAnchor="middle"
            fontFamily="'Inter', sans-serif"
            fontWeight="900"
            fontSize="18"
            fill="#111827"
            letterSpacing="2"
          >
            ESTD 1972
          </text>

          {/* Framing box for Glassware */}
          <path
            d="M 18 70 L 18 126 L 322 126 L 322 70"
            stroke="#111827"
            strokeWidth="2.5"
            strokeLinecap="square"
            fill="none"
          />

          {/* BRIGHT with 3D drop shadow */}
          <g transform="translate(36, 40)">
            {/* Yellow 3D extrusion */}
            <text
              x="2.5"
              y="39"
              fontFamily="'Arial Black', Impact, sans-serif"
              fontWeight="900"
              fontSize="48"
              fill="#F59E0B"
              letterSpacing="2"
            >
              BRIGHT
            </text>
            {/* Red-Orange Face */}
            <text
              x="0"
              y="37"
              fontFamily="'Arial Black', Impact, sans-serif"
              fontWeight="900"
              fontSize="48"
              fill="#E11D48"
              letterSpacing="2"
            >
              BRIGHT
            </text>
          </g>

          {/* ® symbol */}
          <g transform="translate(312, 42)">
            <circle cx="7" cy="7" r="6.5" stroke="#111827" strokeWidth="1.5" fill="none" />
            <text
              x="7"
              y="10.2"
              textAnchor="middle"
              fontFamily="'Inter', sans-serif"
              fontWeight="800"
              fontSize="8"
              fill="#111827"
            >
              R
            </text>
          </g>

          {/* Glassware */}
          <text
            x="170"
            y="114"
            textAnchor="middle"
            fontFamily="'Inter', sans-serif"
            fontWeight="900"
            fontSize="18"
            fill="#111827"
            letterSpacing="8"
          >
            Glassware
          </text>
        </svg>
      </div>
    );
  }

  // Adaptive vector logo (adapts ESTD 1972 & Glassware to current text theme color)
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        viewBox="0 0 340 160"
        className={sizeClasses[size]}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="BRIGHT Glassware ESTD 1972 official logo"
      >
        {/* ESTD 1972 */}
        <text
          x="170"
          y="28"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="900"
          fontSize="18"
          fill="currentColor"
          letterSpacing="2"
        >
          ESTD 1972
        </text>

        {/* Framing box for Glassware */}
        <path
          d="M 18 70 L 18 126 L 322 126 L 322 70"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="square"
          fill="none"
        />

        {/* BRIGHT with 3D drop shadow */}
        <g transform="translate(36, 40)">
          {/* Yellow 3D extrusion */}
          <text
            x="2.5"
            y="39"
            fontFamily="'Arial Black', Impact, sans-serif"
            fontWeight="900"
            fontSize="48"
            fill="#F59E0B"
            letterSpacing="2"
          >
            BRIGHT
          </text>
          {/* Vibrant Red-Orange Face */}
          <text
            x="0"
            y="37"
            fontFamily="'Arial Black', Impact, sans-serif"
            fontWeight="900"
            fontSize="48"
            fill="#E11D48"
            letterSpacing="2"
          >
            BRIGHT
          </text>
        </g>

        {/* ® symbol */}
        <g transform="translate(312, 42)">
          <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <text
            x="7"
            y="10.2"
            textAnchor="middle"
            fontFamily="'Inter', sans-serif"
            fontWeight="800"
            fontSize="8"
            fill="currentColor"
          >
            R
          </text>
        </g>

        {/* Glassware */}
        <text
          x="170"
          y="114"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontWeight="900"
          fontSize="18"
          fill="currentColor"
          letterSpacing="8"
        >
          Glassware
        </text>
      </svg>
    </div>
  );
};
