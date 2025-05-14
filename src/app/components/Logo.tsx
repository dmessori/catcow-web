'use client';

export default function Logo() {
  return (
    <svg
      viewBox="0 0 323.98 149.72"
      xmlns="http://www.w3.org/2000/svg"
      className="w-auto h-[60px] md:w-[480px] md:h-auto"
    >
      <style>
        {`
          .eye {
            animation: blink 6s infinite;
            transform-origin: center;
          }

          @keyframes blink {
            0%, 92%, 100% {
              transform: scaleY(1);
            }
            94%, 96% {
              transform: scaleY(0.1);
            }
          }

          .cls-1 {
            fill: none;
            stroke: #155cfb;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 5.49px;
          }

          .cls-2 {
            fill: #155cfb;
          }
        `}
      </style>

      {/* Ojos animados */}
      <circle className="cls-2 eye" cx="40.01" cy="43.53" r="3.03" />
      <circle className="cls-2 eye" cx="77.72" cy="43.53" r="3.03" />

      {/* Otros círculos */}
      <circle className="cls-2" cx="50.17" cy="77.96" r="4.22" />
      <circle className="cls-2" cx="67.56" cy="77.96" r="4.22" />

      {/* Paths */}
      <path className="cls-1" d="M78.12,19.13H16.32c-4.22,0-7.97,2.52-9.34,6.28l-3.74,10.22c-2,5.46,2.31,11.15,8.44,11.15h5.24c3.25,0,6.24-1.66,7.81-4.34l5.17-8.82c1.72-2.94,5-4.76,8.57-4.76" />
      <path className="cls-1" d="M39.62,19.13h61.8c4.22,0,7.97,2.52,9.34,6.28l3.74,10.22c2,5.46-2.31,11.15-8.44,11.15h-5.24c-3.25,0-6.24-1.66-7.81-4.34l-5.17-8.82c-1.72-2.94-5-4.76-8.57-4.76" />
      <path className="cls-2" d="M38.89,1.95l-8.04,16.73h22.28L45.09,1.95c-1.25-2.6-4.95-2.6-6.2,0Z" />
      <path className="cls-2" d="M72.65,1.95l-8.04,16.73h22.28L78.85,1.95c-1.25-2.6-4.95-2.6-6.2,0Z" />
    </svg>
  );
}
