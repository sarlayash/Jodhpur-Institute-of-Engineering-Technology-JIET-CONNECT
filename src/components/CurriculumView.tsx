import React, { useState } from 'react';
import { Problem, ProblemType, UserProfile } from '../types';
import { curriculumModules } from '../data/problemsData';
import { 
  CheckCircle2, 
  Search, 
  ArrowRight, 
  Sparkles, 
  Eye, 
  Lightbulb,
  Clock,
  HardDrive
} from 'lucide-react';

interface CurriculumViewProps {
  problems: Problem[];
  userProfile: UserProfile;
  onSelectProblem: (problem: Problem, tab?: 'ide' | 'visualizer' | 'patterns') => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({
  problems,
  userProfile,
  onSelectProblem
}) => {
  const [selectedModule, setSelectedModule] = useState<number | 'all'>('all');
  const [selectedType, setSelectedType] = useState<ProblemType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProblems = problems.filter((p) => {
    if (selectedModule !== 'all' && p.moduleNumber !== selectedModule) return false;
    if (selectedType !== 'all' && p.type !== selectedType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchPattern = p.patternName.toLowerCase().includes(q);
      const matchModule = p.moduleName.toLowerCase().includes(q);
      const matchScenario = p.realWorldScenario.toLowerCase().includes(q);
      if (!matchTitle && !matchPattern && !matchModule && !matchScenario) return false;
    }
    return true;
  });

  const solvedSet = new Set(userProfile.solvedProblemIds);
  const totalSolved = problems.filter(p => solvedSet.has(p.id)).length;
  const progressPercent = Math.round((totalSolved / problems.length) * 100);

  return (
    <div className="space-y-8 pb-12">
      
      {/* Elite Hero Banner: Black, Grey, and Gold */}
      <div className="rounded-2xl bg-gradient-to-r from-black via-zinc-950 to-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl text-white relative overflow-hidden">
        
        {/* Subtle Gold Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl relative">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 mb-2 uppercase">
            <span>DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING</span>
            <span className="text-zinc-600">·</span>
            <span>POWERED BY KAPIL | KNOWLEDGE MULTIVERSE ARCHITECT</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 font-serif">
            JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-light">
            JIET CONNECT: An All-in-One Educational Hub for Comprehensive Coding Practice. Master architectural algorithmic engineering in C, C++, Java, and Python with live visualizers, pattern identification, complexity metrics, and official QR-verified certification.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 bg-zinc-900/90 px-3.5 py-1.5 rounded-lg border border-zinc-800 text-zinc-300">
              <span className="font-bold text-amber-300 tabular-nums">{totalSolved}</span> of{' '}
              <span className="tabular-nums text-white font-semibold">{problems.length}</span> Solved ({progressPercent}%)
            </div>
            <div className="flex items-center gap-1.5 bg-zinc-900/90 px-3.5 py-1.5 rounded-lg border border-zinc-800 text-zinc-300">
              <span className="text-amber-400 font-bold">8</span> Curated Tech Modules
            </div>
            <div className="flex items-center gap-1.5 bg-zinc-900/90 px-3.5 py-1.5 rounded-lg border border-zinc-800 text-zinc-300">
              <span className="text-zinc-400">Languages:</span>
              <span className="text-white font-medium">C · C++ · Java · Python</span>
            </div>
          </div>
        </div>

        {/* Gold Progress Bar */}
        <div className="mt-6 w-full bg-zinc-900 rounded-full h-2 overflow-hidden border border-zinc-800 relative">
          <div
            className="bg-gradient-to-r from-amber-500 via-amber-300 to-yellow-500 h-2 rounded-full transition-all duration-500 shadow-sm shadow-amber-400/50"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search problems, patterns (e.g. BFS, Two Pointers, Sieve, QuickSort)..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Type Filter Tabs (Inclass / Postclass) */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900 rounded-lg shrink-0 border border-zinc-800">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                selectedType === 'all'
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Types ({problems.length})
            </button>
            <button
              onClick={() => setSelectedType('Inclass')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                selectedType === 'Inclass'
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Inclass Questions (18)
            </button>
            <button
              onClick={() => setSelectedType('Postclass')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                selectedType === 'Postclass'
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Postclass Questions (16)
            </button>
          </div>

        </div>

        {/* Modules Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedModule('all')}
            className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
              selectedModule === 'all'
                ? 'bg-amber-400/10 text-amber-300 border border-amber-500/40 font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            All Modules
          </button>
          {curriculumModules.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModule(m.id)}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                selectedModule === m.id
                  ? 'bg-amber-400/10 text-amber-300 border border-amber-500/40 font-bold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              Mod {m.id}: {m.name}
            </button>
          ))}
        </div>

      </div>

      {/* Problems List Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
          <span>Showing <strong className="text-white font-mono">{filteredProblems.length}</strong> practice problems</span>
          <span>Click any card to start writing code in the IDE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProblems.map((problem) => {
            const isSolved = solvedSet.has(problem.id);
            return (
              <div
                key={problem.id}
                className={`group relative rounded-xl border p-5 transition-all bg-zinc-950 hover:border-amber-500/50 shadow-sm hover:shadow-xl hover:shadow-black flex flex-col justify-between ${
                  isSolved
                    ? 'border-amber-500/40 bg-zinc-950'
                    : 'border-zinc-800'
                }`}
              >
                <div>
                  
                  {/* Clean unboxed metadata with separators (Anti-Slop compliant) */}
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                    <span className="font-bold text-amber-400">
                      Mod {problem.moduleNumber}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-zinc-300 font-medium">
                      {problem.type}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-zinc-400">
                      {problem.difficulty}
                    </span>
                    {isSolved && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-amber-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 fill-amber-400 text-black" /> Solved
                        </span>
                      </>
                    )}
                  </div>

                  {/* Problem Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5 font-serif">
                    {problem.title}
                  </h3>

                  {/* Real World Scenario snippet */}
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-3">
                    {problem.realWorldScenario}
                  </p>

                  {/* Pattern & Complexity Badges */}
                  <div className="pt-2 border-t border-zinc-900 flex flex-wrap items-center gap-3 text-[11px] text-zinc-400">
                    <div className="flex items-center gap-1 text-zinc-300">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{problem.patternName}</span>
                    </div>
                    <div className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      <span>{problem.timeComplexity.average}</span>
                    </div>
                    <div className="flex items-center gap-1 font-mono">
                      <HardDrive className="w-3 h-3 text-zinc-500" />
                      <span>{problem.memoryComplexity.space}</span>
                    </div>
                  </div>

                </div>

                {/* Card Actions */}
                <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onSelectProblem(problem, 'visualizer')}
                      className="px-2.5 py-1 text-xs font-medium rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center gap-1 transition-colors border border-zinc-800"
                      title="Step through algorithm visualizer"
                    >
                      <Eye className="w-3 h-3 text-amber-400" />
                      <span>Visualize</span>
                    </button>
                    <button
                      onClick={() => onSelectProblem(problem, 'patterns')}
                      className="px-2.5 py-1 text-xs font-medium rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center gap-1 transition-colors border border-zinc-800"
                      title="Remembering tips and tricks"
                    >
                      <Lightbulb className="w-3 h-3 text-amber-400" />
                      <span>Tips</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onSelectProblem(problem, 'ide')}
                    className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black flex items-center gap-1.5 shadow-md shadow-amber-500/10 transition-all active:scale-95"
                  >
                    <span>Solve in IDE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
