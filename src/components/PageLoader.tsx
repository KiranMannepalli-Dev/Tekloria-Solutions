import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1400);
    const goneTimer = setTimeout(() => setGone(true), 1700);
    return () => { clearTimeout(fadeTimer); clearTimeout(goneTimer); };
  }, []);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0B0B0F]"
      style={{ transition: 'opacity 0.3s ease', opacity: fading ? 0 : 1, pointerEvents: fading ? 'none' : 'all' }}
      aria-hidden="true"
    >
      <div style={{ animation: 'loaderSpin 2.4s linear infinite' }}>
        <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(32,32)">
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <rect key={deg} x="-4" y="-22" width="8" height="22" rx="4" fill="#EF4444" transform={`rotate(${deg})`} />
            ))}
            <circle cx="0" cy="0" r="5" fill="#EF4444" />
          </g>
        </svg>
      </div>
      <style>{`
        @keyframes loaderSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
