import React from 'react';
import { Award, User, Sparkles, Terminal } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  currentTab: 'curriculum' | 'ide' | 'visualizer' | 'patterns' | 'certificates';
  setCurrentTab: (tab: 'curriculum' | 'ide' | 'visualizer' | 'patterns' | 'certificates') => void;
  userProfile: UserProfile;
  onOpenProfile: () => void;
  solvedCount: number;
  totalProblems: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  userProfile,
  onOpenProfile,
  solvedCount,
  totalProblems
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Brand title */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setCurrentTab('curriculum')}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              J
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                JIET CONNECT
              </div>
              <div className="text-[11px] text-slate-400 font-normal leading-none hidden sm:block">
                Powered by Kapil
              </div>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setCurrentTab('curriculum')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
              currentTab === 'curriculum'
                ? 'bg-slate-800 text-blue-400 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Curriculum
          </button>
          <button
            onClick={() => setCurrentTab('ide')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
              currentTab === 'ide'
                ? 'bg-slate-800 text-blue-400 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            IDE & Lab
          </button>
          <button
            onClick={() => setCurrentTab('visualizer')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
              currentTab === 'visualizer'
                ? 'bg-slate-800 text-blue-400 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Visualizer
          </button>
          <button
            onClick={() => setCurrentTab('patterns')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
              currentTab === 'patterns'
                ? 'bg-slate-800 text-blue-400 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Patterns & Tips
          </button>
          <button
            onClick={() => setCurrentTab('certificates')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
              currentTab === 'certificates'
                ? 'bg-slate-800 text-blue-400 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Certificates & Badges
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 text-slate-200 text-xs sm:text-sm transition-colors"
            title="Edit profile & learner credentials"
          >
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-medium truncate max-w-[120px] sm:max-w-[160px]">
              {userProfile.name || 'Set Name'}
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:inline tabular-nums">
              ({solvedCount}/{totalProblems})
            </span>
          </button>

          <button
            onClick={() => setCurrentTab('certificates')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-colors"
          >
            <Award className="w-4 h-4" />
            <span className="hidden sm:inline">QR Certificate</span>
          </button>
        </div>

      </div>

      {/* Mobile sub-bar */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-800/80 px-2 py-1.5 bg-slate-900/90 text-xs">
        <button
          onClick={() => setCurrentTab('curriculum')}
          className={`px-2 py-1 rounded ${currentTab === 'curriculum' ? 'text-blue-400 font-semibold' : 'text-slate-400'}`}
        >
          Curriculum
        </button>
        <button
          onClick={() => setCurrentTab('ide')}
          className={`px-2 py-1 rounded ${currentTab === 'ide' ? 'text-blue-400 font-semibold' : 'text-slate-400'}`}
        >
          IDE
        </button>
        <button
          onClick={() => setCurrentTab('visualizer')}
          className={`px-2 py-1 rounded ${currentTab === 'visualizer' ? 'text-blue-400 font-semibold' : 'text-slate-400'}`}
        >
          Visualizer
        </button>
        <button
          onClick={() => setCurrentTab('patterns')}
          className={`px-2 py-1 rounded ${currentTab === 'patterns' ? 'text-blue-400 font-semibold' : 'text-slate-400'}`}
        >
          Tips
        </button>
        <button
          onClick={() => setCurrentTab('certificates')}
          className={`px-2 py-1 rounded ${currentTab === 'certificates' ? 'text-blue-400 font-semibold' : 'text-slate-400'}`}
        >
          Badges
        </button>
      </div>
    </header>
  );
};
