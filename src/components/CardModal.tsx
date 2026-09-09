import { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface CardModalProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  tags?: string[];
  onClose: () => void;
}

export default function CardModal({ title, description, icon, features, tags, onClose }: CardModalProps) {
  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(11,11,15,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[85vh] bg-[#0B0B0F] border border-white/10 rounded-[20px] flex flex-col overflow-hidden shadow-2xl"
        style={{ animation: 'cardModalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-white/5 shrink-0 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            {icon && (
              <div className="w-12 h-12 rounded-full bg-[#1A1A24] border border-white/5 flex items-center justify-center text-[#EF4444] shrink-0">
                {icon}
              </div>
            )}
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors shrink-0 -mt-1 -mr-2"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-6 py-6 space-y-6 flex-1 custom-scrollbar">
          {/* Description */}
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            {description}
          </p>

          {/* Tags (for Careers/Roles) */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-[#1A1A24] border border-white/5 rounded-full text-xs text-white/70">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Features (for Services/Pricing) */}
          {features && features.length > 0 && (
            <div className="pt-2">
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider text-[#EF4444]">Included Features</h3>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer (Close button) */}
        <div className="px-6 py-4 border-t border-white/5 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#1A1A24] hover:bg-[#2A2A35] border border-white/10 text-white text-sm font-medium transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cardModalIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
