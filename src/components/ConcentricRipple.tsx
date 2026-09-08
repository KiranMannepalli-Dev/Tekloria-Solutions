import React from 'react';

export type RippleVariant = 
  | 'brand-red' 
  | 'dark-ambient' 
  | 'neutral-light' 
  | 'neutral-sand' 
  | 'mini-target'
  | 'soft-rose'
  | 'outline-rings'
  | 'outline-red';

export type RipplePlacement = 
  | 'right-center' 
  | 'top-right' 
  | 'bottom-right' 
  | 'bottom-left' 
  | 'top-left'
  | 'center';

interface LayerItem {
  r: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  opacity?: number;
}

interface ConcentricRippleProps {
  variant?: RippleVariant;
  placement?: RipplePlacement;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  opacity?: number;
  animate?: boolean;
  id?: string;
}

export const ConcentricRipple: React.FC<ConcentricRippleProps> = ({
  variant = 'brand-red',
  placement = 'right-center',
  size = 'lg',
  className = '',
  opacity,
  animate = false,
  id = 'ripple'
}) => {
  void size;
  const filterId = `ripple-shadow-${id}`;

  const isOutline = variant === 'outline-rings' || variant === 'outline-red';

  // Color layers from outer to inner
  const getLayers = (): LayerItem[] => {
    switch (variant) {
      case 'brand-red':
        return [
          { r: 380, fill: '#EF4444' },
          { r: 310, fill: '#F87171' },
          { r: 245, fill: '#FA8E8E' },
          { r: 185, fill: '#FCA5A5' },
          { r: 130, fill: '#FECACA' },
          { r: 80,  fill: '#FDECEC' },
          { r: 38,  fill: '#FFFFFF' },
        ];
      case 'dark-ambient':
        return [
          { r: 380, fill: '#42070D' },
          { r: 310, fill: '#5C0B12' },
          { r: 245, fill: '#7F0F16' },
          { r: 185, fill: '#991B1B' },
          { r: 130, fill: '#B91C1C' },
          { r: 80,  fill: '#DC2626' },
          { r: 38,  fill: '#EF4444' },
        ];
      case 'neutral-light':
        return [
          { r: 380, fill: '#E5E7EB' },
          { r: 310, fill: '#ECEFF2' },
          { r: 245, fill: '#F1F5F9' },
          { r: 185, fill: '#F4F7FA' },
          { r: 130, fill: '#F8FAFC' },
          { r: 80,  fill: '#FAFCFD' },
          { r: 38,  fill: '#FFFFFF' },
        ];
      case 'neutral-sand':
        return [
          { r: 380, fill: '#D8D1C7' },
          { r: 310, fill: '#DFD8CE' },
          { r: 245, fill: '#EDE9E3' },
          { r: 185, fill: '#F2EFEB' },
          { r: 130, fill: '#F7F5F5' },
          { r: 80,  fill: '#FAF8F8' },
          { r: 38,  fill: '#FFFFFF' },
        ];
      case 'soft-rose':
        return [
          { r: 380, fill: '#FCA5A5' },
          { r: 310, fill: '#FBBFBF' },
          { r: 245, fill: '#FECACA' },
          { r: 185, fill: '#FEE2E2' },
          { r: 130, fill: '#FDECEC' },
          { r: 80,  fill: '#FFF5F5' },
          { r: 38,  fill: '#FFFFFF' },
        ];
      case 'outline-rings':
        return [
          { r: 360, stroke: '#E5E7EB', strokeWidth: 1.5, opacity: 0.3 },
          { r: 300, stroke: '#CBD5E1', strokeWidth: 1.5, opacity: 0.4 },
          { r: 240, stroke: '#94A3B8', strokeWidth: 1.5, opacity: 0.5 },
          { r: 180, stroke: '#64748B', strokeWidth: 1.5, opacity: 0.6 },
          { r: 120, stroke: '#475569', strokeWidth: 1.5, opacity: 0.7 },
          { r: 60,  stroke: '#EF4444', strokeWidth: 2,   opacity: 0.9 },
        ];
      case 'outline-red':
        return [
          { r: 360, stroke: '#EF4444', strokeWidth: 1,   opacity: 0.15 },
          { r: 300, stroke: '#EF4444', strokeWidth: 1.2, opacity: 0.25 },
          { r: 240, stroke: '#EF4444', strokeWidth: 1.5, opacity: 0.4 },
          { r: 180, stroke: '#EF4444', strokeWidth: 1.8, opacity: 0.55 },
          { r: 120, stroke: '#EF4444', strokeWidth: 2,   opacity: 0.75 },
          { r: 60,  stroke: '#EF4444', strokeWidth: 2.5, opacity: 0.95 },
        ];
      case 'mini-target':
        return [
          { r: 60, fill: '#FDECEC' },
          { r: 44, fill: '#FECACA' },
          { r: 28, fill: '#FCA5A5' },
          { r: 14, fill: '#EF4444' },
        ];
    }
  };

  const layers = getLayers();
  const isMini = variant === 'mini-target';
  const viewBox = isMini ? "0 0 120 120" : "0 0 400 400";
  const center = isMini 
    ? { cx: 60, cy: 60 } 
    : placement === 'right-center' 
      ? { cx: 400, cy: 200 }
      : placement === 'top-right'
        ? { cx: 400, cy: 0 }
        : placement === 'bottom-right'
          ? { cx: 400, cy: 400 }
          : placement === 'bottom-left'
            ? { cx: 0, cy: 400 }
            : placement === 'top-left'
              ? { cx: 0, cy: 0 }
              : { cx: 200, cy: 200 };

  const shadowOffset = isMini ? -2 : -5;
  const shadowBlur = isMini ? 3 : 6;
  const shadowOpacity = variant.includes('neutral') ? 0.07 : variant === 'dark-ambient' ? 0.4 : 0.22;

  const defaultOpacity = 
    opacity !== undefined 
      ? opacity 
      : variant === 'neutral-light' 
        ? 0.7 
        : variant === 'neutral-sand' 
          ? 0.75 
          : variant === 'dark-ambient' 
            ? 0.5 
            : variant === 'soft-rose'
              ? 0.65
              : 0.95;

  return (
    <div 
      className={`pointer-events-none select-none overflow-hidden ${animate ? 'animate-pulse' : ''} ${className}`}
      style={{ opacity: defaultOpacity }}
    >
      <svg 
        viewBox={viewBox} 
        className="w-full h-full object-cover" 
        preserveAspectRatio="xMidYMid slice"
      >
        {!isOutline && (
          <defs>
            <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow 
                dx={shadowOffset} 
                dy="0" 
                stdDeviation={shadowBlur} 
                floodColor="#000000" 
                floodOpacity={shadowOpacity} 
              />
            </filter>
          </defs>
        )}
        {layers.map((layer: LayerItem, idx: number) => {
          if (isOutline) {
            return (
              <circle
                key={idx}
                cx={center.cx}
                cy={center.cy}
                r={layer.r}
                fill="none"
                stroke={layer.stroke}
                strokeWidth={layer.strokeWidth}
                strokeDasharray={idx % 2 === 1 ? "4 4" : undefined}
                opacity={layer.opacity}
              />
            );
          }
          return (
            <circle
              key={idx}
              cx={center.cx}
              cy={center.cy}
              r={layer.r}
              fill={layer.fill}
              filter={idx > 0 ? `url(#${filterId})` : undefined}
            />
          );
        })}
      </svg>
    </div>
  );
};
