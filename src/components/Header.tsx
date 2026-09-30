import React from 'react';
import { Award, User, TrendingUp, RotateCw, CheckSquare } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  currentTab: 'curriculum' | 'ide' | 'visualizer' | 'patterns' | 'certificates' | 'mocks';
  setCurrentTab: (tab: 'curriculum' | 'ide' | 'visualizer' | 'patterns' | 'certificates' | 'mocks') => void;
  userProfile: UserProfile;
  onOpenProfile: () => void;
  onOpenPlacementReport: () => void;
  onOpenWheel: () => void;
  solvedCount: number;
  totalProblems: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  userProfile,
  onOpenProfile,
  onOpenPlacementReport,
  onOpenWheel,
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
              <div className="text-[10px] text-amber-400 font-bold tracking-wider uppercase leading-none hidden sm:block">
                POWERED BY KAPIL ONLY
              </div>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => setCurrentTab('curriculum')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              currentTab === 'curriculum'
                ? 'bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            Curriculum
          </button>
          <button
            onClick={() => setCurrentTab('ide')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              currentTab === 'ide'
                ? 'bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            IDE & Lab
          </button>
          <button
            onClick={() => setCurrentTab('visualizer')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              currentTab === 'visualizer'
                ? 'bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            Visualizer
          </button>
          <button
            onClick={() => setCurrentTab('patterns')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              currentTab === 'patterns'
                ? 'bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            Tips
          </button>
          <button
            onClick={() => setCurrentTab('mocks')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
              currentTab === 'mocks'
                ? 'bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>Mocks (30m)</span>
          </button>
          <button
            onClick={() => setCurrentTab('certificates')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              currentTab === 'certificates'
                ? 'bg-zinc-900 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
            }`}
          >
            Credentials
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2">
          
          {/* Spinning Wheel CTA with Audio */}
          <button
            onClick={onOpenWheel}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all shadow-sm group"
            title="Spin the Aptitude & Placement Wheel (Sound enabled)"
          >
            <RotateCw className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="hidden sm:inline">Spin Wheel</span>
          </button>

          {/* Placement 360 Report Button */}
          <button
            onClick={onOpenPlacementReport}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-400/50 text-amber-300 text-xs font-semibold transition-all"
            title="Download 360° Placement Readiness Report (PDF & Score 1-100)"
          >
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>360° Report</span>
          </button>

          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/40 text-zinc-200 text-xs sm:text-sm transition-all"
            title="Edit profile & learner credentials"
          >
            <User className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium truncate max-w-[90px] sm:max-w-[130px]">
              {userProfile.name || 'Set Name'}
            </span>
          </button>

          <button
            onClick={() => setCurrentTab('certificates')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black shadow-md shadow-amber-500/20 transition-all active:scale-95"
          >
            <Award className="w-4 h-4 fill-black" />
            <span className="hidden sm:inline">Certificates</span>
          </button>
        </div>

      </div>

      {/* Mobile sub-bar */}
      <div className="lg:hidden flex items-center justify-around border-t border-zinc-800/80 px-2 py-1.5 bg-black/95 text-xs">
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
          onClick={() => setCurrentTab('mocks')}
          className={`px-2 py-1 rounded ${currentTab === 'mocks' ? 'text-amber-400 font-semibold' : 'text-zinc-400'}`}
        >
          Mocks
        </button>
        <button
          onClick={onOpenWheel}
          className="px-2 py-1 rounded text-amber-400 font-bold flex items-center gap-1"
        >
          <RotateCw className="w-3 h-3" />
          <span>Wheel</span>
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
