import React from 'react';
import { Award, User, TrendingUp } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  currentTab: 'curriculum' | 'ide' | 'visualizer' | 'patterns' | 'certificates';
  setCurrentTab: (tab: 'curriculum' | 'ide' | 'visualizer' | 'patterns' | 'certificates') => void;
  userProfile: UserProfile;
  onOpenProfile: () => void;
  onOpenPlacementReport: () => void;
  solvedCount: number;
  totalProblems: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  userProfile,
  onOpenProfile,
  onOpenPlacementReport,
  solvedCount,
  totalProblems
}) => {
  return (
    <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-zinc-800 text-zinc-100 shadow-xl no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Brand title in Elite Gold & Obsidian */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setCurrentTab('curriculum')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-600 flex items-center justify-center text-black font-extrabold text-lg shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              J
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors flex items-center gap-2">
                <span>JIET CONNECT</span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
              <div className="text-[11px] text-amber-400/90 font-medium tracking-wide uppercase leading-none hidden sm:block">
                Powered by Kapil
              </div>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setCurrentTab('curriculum')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all ${
              currentTab === 'curriculum'
                ? 'bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            Curriculum
          </button>
          <button
            onClick={() => setCurrentTab('ide')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all ${
              currentTab === 'ide'
                ? 'bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            IDE & Lab
          </button>
          <button
            onClick={() => setCurrentTab('visualizer')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all ${
              currentTab === 'visualizer'
                ? 'bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            Visualizer
          </button>
          <button
            onClick={() => setCurrentTab('patterns')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all ${
              currentTab === 'patterns'
                ? 'bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            Patterns & Tips
          </button>
          <button
            onClick={() => setCurrentTab('certificates')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all ${
              currentTab === 'certificates'
                ? 'bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            Certificates & Badges
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2">
          
          {/* Placement Report Button */}
          <button
            onClick={onOpenPlacementReport}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-400/50 text-amber-300 text-xs font-semibold transition-all"
            title="Download Placement Readiness Report (PDF & Score 1-100)"
          >
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>Placement Report</span>
          </button>

          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/40 text-zinc-200 text-xs sm:text-sm transition-all"
            title="Edit profile & learner credentials"
          >
            <User className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium truncate max-w-[100px] sm:max-w-[140px]">
              {userProfile.name || 'Set Name'}
            </span>
            <span className="text-[11px] text-amber-400 font-mono hidden sm:inline tabular-nums">
              [{solvedCount}/{totalProblems}]
            </span>
          </button>

          <button
            onClick={() => setCurrentTab('certificates')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black shadow-md shadow-amber-500/20 transition-all active:scale-95"
          >
            <Award className="w-4 h-4 fill-black" />
            <span className="hidden sm:inline">Credentials</span>
          </button>
        </div>

      </div>

      {/* Mobile sub-bar */}
      <div className="md:hidden flex items-center justify-around border-t border-zinc-800/80 px-2 py-1.5 bg-black/95 text-xs">
        <button
          onClick={() => setCurrentTab('curriculum')}
          className={`px-2 py-1 rounded ${currentTab === 'curriculum' ? 'text-amber-400 font-semibold' : 'text-zinc-400'}`}
        >
          Curriculum
        </button>
        <button
          onClick={() => setCurrentTab('ide')}
          className={`px-2 py-1 rounded ${currentTab === 'ide' ? 'text-amber-400 font-semibold' : 'text-zinc-400'}`}
        >
          IDE
        </button>
        <button
          onClick={() => setCurrentTab('visualizer')}
          className={`px-2 py-1 rounded ${currentTab === 'visualizer' ? 'text-amber-400 font-semibold' : 'text-zinc-400'}`}
        >
          Visualizer
        </button>
        <button
          onClick={() => setCurrentTab('patterns')}
          className={`px-2 py-1 rounded ${currentTab === 'patterns' ? 'text-amber-400 font-semibold' : 'text-zinc-400'}`}
        >
          Tips
        </button>
        <button
          onClick={() => setCurrentTab('certificates')}
          className={`px-2 py-1 rounded ${currentTab === 'certificates' ? 'text-amber-400 font-semibold' : 'text-zinc-400'}`}
        >
          Credentials
        </button>
      </div>
    </header>
  );
};
