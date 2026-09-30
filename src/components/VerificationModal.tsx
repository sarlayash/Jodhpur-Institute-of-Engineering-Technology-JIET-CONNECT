import React from 'react';
import { UserProfile } from '../types';
import { ShieldCheck, CheckCircle2, X } from 'lucide-react';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfile;
  credentialId: string;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({
  isOpen,
  onClose,
  userProfile,
  credentialId
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl shadow-black text-zinc-100 relative overflow-hidden">
        
        {/* Subtle gold ambient glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Verification Status Header */}
        <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-zinc-850">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-amber-400 tracking-wider uppercase flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 fill-amber-400 text-black" />
              <span>Official Credential Verified</span>
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight font-serif">
              JIET Verification Portal · POWERED BY KAPIL ONLY
            </h2>
          </div>
        </div>

        {/* Credential Data Table */}
        <div className="space-y-3 bg-black/90 p-4 rounded-xl border border-zinc-850 text-xs">
          
          <div className="flex justify-between items-center py-1 border-b border-zinc-900">
            <span className="text-zinc-500">Student Name</span>
            <span className="font-bold text-amber-300 text-sm font-serif">
              {userProfile.name || 'Honorable Student'}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-zinc-900">
            <span className="text-zinc-500">Roll / Scholar No</span>
            <span className="font-mono text-white">
              {userProfile.rollNo || 'JIET-2026-REG'}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-zinc-900">
            <span className="text-zinc-500">Institution</span>
            <span className="text-zinc-300 text-right font-medium">
              Jodhpur Institute of Engineering & Technology
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-zinc-900">
            <span className="text-zinc-500">Department</span>
            <span className="text-zinc-300">
              {userProfile.branch}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-zinc-900">
            <span className="text-zinc-500">Program Architect & Lead</span>
            <span className="text-amber-400 font-bold">
              Kapil Narula (POWERED BY KAPIL ONLY)
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-zinc-900">
            <span className="text-zinc-500">Credential ID</span>
            <span className="font-mono text-amber-400 font-bold text-[11px]">
              {credentialId}
            </span>
          </div>

          <div className="flex justify-between items-center py-1">
            <span className="text-zinc-500">Device Compatibility</span>
            <span className="text-amber-300 font-mono">
              Universal Mobile & Desktop Verified
            </span>
          </div>

        </div>

        {/* Competencies Verified */}
        <div className="mt-4 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 space-y-1.5">
          <span className="font-bold text-zinc-200 block text-[11px] uppercase tracking-wider text-amber-400/90">
            Algorithmic Competencies Certified:
          </span>
          <div className="flex flex-wrap gap-1.5 text-[11px] text-zinc-300 pt-1">
            <span className="px-2 py-0.5 rounded bg-black border border-zinc-800 text-zinc-300">Graph Adjacency & BFS/DFS</span>
            <span className="px-2 py-0.5 rounded bg-black border border-zinc-800 text-zinc-300">Two Pointers</span>
            <span className="px-2 py-0.5 rounded bg-black border border-zinc-800 text-zinc-300">Sieve & Number Theory</span>
            <span className="px-2 py-0.5 rounded bg-black border border-zinc-800 text-zinc-300">Divide & Conquer</span>
            <span className="px-2 py-0.5 rounded bg-black border border-zinc-800 text-amber-400 font-mono">C · C++ · Java · Python</span>
          </div>
        </div>

        {/* Close Modal CTA */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black text-xs font-bold shadow-md transition-all active:scale-95"
          >
            Close Verification Window
          </button>
        </div>

      </div>
    </div>
  );
};
