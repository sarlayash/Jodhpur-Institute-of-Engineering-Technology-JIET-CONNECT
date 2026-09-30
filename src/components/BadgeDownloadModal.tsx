import React from 'react';
import { Badge, UserProfile } from '../types';
import { downloadBadgeAsPng } from '../utils/canvasExport';
import { Award, Download, Printer, X, Sparkles, CheckCircle2 } from 'lucide-react';

interface BadgeDownloadModalProps {
  badge: Badge | null;
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfile;
}

export const BadgeDownloadModal: React.FC<BadgeDownloadModalProps> = ({
  badge,
  isOpen,
  onClose,
  userProfile
}) => {
  if (!isOpen || !badge) return null;

  const handleDownloadPng = async () => {
    await downloadBadgeAsPng(badge, userProfile);
  };

  const handleDownloadPdf = () => {
    document.body.setAttribute('data-print-target', 'badge');
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-md w-full p-6 shadow-2xl shadow-black text-zinc-100 relative overflow-hidden">
        
        {/* Subtle gold ambient glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors no-print"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-4 pt-2">
          
          {/* Badge Display Plate (Target for Print) */}
          <div id="jiet-printable-badge" className="p-6 rounded-2xl bg-black border-2 border-amber-500/50 flex flex-col items-center justify-center space-y-3 relative overflow-hidden">
            
            {/* Outer Decorative Ring */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 flex items-center justify-center text-black shadow-xl shadow-amber-500/20 relative">
              <Award className="w-12 h-12 fill-black stroke-amber-200" />
            </div>

            <div className="space-y-1 text-center">
              <div className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">
                JIET CONNECT · VERIFIED BADGE
              </div>
              <h3 className="text-xl font-extrabold text-white font-serif">
                {badge.title}
              </h3>
              <p className="text-xs text-amber-300/90 font-medium">
                Conferred to <strong className="text-white">{userProfile.name || 'Honorable Student'}</strong>
              </p>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-xs text-center pt-1 font-light">
              {badge.description}
            </p>

            <div className="text-[11px] text-zinc-500 font-mono bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
              Requirement: {badge.requirement}
            </div>

            <div className="pt-2 text-[10px] text-amber-400 font-semibold tracking-wide border-t border-zinc-850 w-full text-center">
              Verified by Kapil · Jodhpur Institute of Engineering & Technology
            </div>

          </div>

          {/* Download Action Buttons */}
          <div className="space-y-2 pt-2 no-print">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleDownloadPng}
                className="py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PNG</span>
              </button>

              <button
                onClick={handleDownloadPdf}
                className="py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-400 text-zinc-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95"
              >
                <Printer className="w-3.5 h-3.5 text-amber-400" />
                <span>Download PDF</span>
              </button>
            </div>

            <p className="text-[11px] text-zinc-500 text-center">
              High-resolution vector badge optimized for LinkedIn, portfolio showcases & resumes.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
