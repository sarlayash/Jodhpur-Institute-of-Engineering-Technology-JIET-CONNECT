import React from 'react';
import { UserProfile } from '../types';
import { ShieldCheck, CheckCircle2, Award, X, ExternalLink, GraduationCap } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-slate-100 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Verification Status Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-emerald-400 tracking-wider uppercase flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Official Credential Verified</span>
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              JIET Academic Verification Portal
            </h2>
          </div>
        </div>

        {/* Credential Data Table */}
        <div className="space-y-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs">
          
          <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
            <span className="text-slate-400">Student Name</span>
            <span className="font-bold text-white text-sm">
              {userProfile.name || 'Aditya Sharma'}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
            <span className="text-slate-400">Roll / Scholar No</span>
            <span className="font-mono text-slate-200">
              {userProfile.rollNo || 'JIET-2026-REG'}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
            <span className="text-slate-400">Institution</span>
            <span className="text-slate-200 text-right">
              Jodhpur Institute of Engineering & Technology
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
            <span className="text-slate-400">Department</span>
            <span className="text-slate-200">
              {userProfile.branch}
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
            <span className="text-slate-400">Program Director</span>
            <span className="text-blue-400 font-semibold">
              Kapil Narula (Lead Faculty)
            </span>
          </div>

          <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
            <span className="text-slate-400">Credential ID</span>
            <span className="font-mono text-emerald-400 font-semibold text-[11px]">
              {credentialId}
            </span>
          </div>

          <div className="flex justify-between items-center py-1">
            <span className="text-slate-400">Validation Timestamp</span>
            <span className="text-slate-300">
              Verified Real-Time (2026-09-30)
            </span>
          </div>

        </div>

        {/* Competencies Verified */}
        <div className="mt-4 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-xs text-slate-300 space-y-1.5">
          <span className="font-semibold text-white block">
            Algorithmic Competencies Certified:
          </span>
          <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300 pt-1">
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Graph Adjacency & BFS/DFS</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Two Pointers</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Sieve & Number Theory</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">Divide & Conquer</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">C · C++ · Java · Python</span>
          </div>
        </div>

        {/* Close Modal CTA */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
          >
            Close Verification Window
          </button>
        </div>

      </div>
    </div>
  );
};
