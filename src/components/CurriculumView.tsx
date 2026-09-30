import React, { useState } from 'react';
import { Problem, ProblemType, UserProfile } from '../types';
import { curriculumModules } from '../data/problemsData';
import { 
  CheckCircle2, 
  Search, 
  ArrowRight, 
  Sparkles, 
  Play, 
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
      
      {/* Hero Banner with Clean Academic Aesthetics */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 border border-slate-700/60 p-6 sm:p-8 shadow-xl text-white">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
            <span>DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING</span>
            <span>·</span>
            <span>POWERED BY KAPIL</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            JIET CONNECT: An All-in-One Educational Hub for Comprehensive Coding Practice. Solve real-world engineering problems in C, C++, Java, and Python with live visualizers, pattern identification, complexity metrics, and QR-verifiable institute certification.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <span className="font-semibold text-white tabular-nums">{totalSolved}</span> of{' '}
              <span className="tabular-nums">{problems.length}</span> Solved ({progressPercent}%)
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <span className="text-blue-400 font-medium">8</span> Curated Tech Modules
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <span>C · C++ · Java · Python IDE</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-full bg-slate-800/90 rounded-full h-2.5 overflow-hidden border border-slate-700/50">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search problems, patterns (e.g. BFS, Two Pointers, Sieve, QuickSort)..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Type Filter Tabs (Inclass / Postclass) */}
          <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-lg shrink-0">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedType === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Types ({problems.length})
            </button>
            <button
              onClick={() => setSelectedType('Inclass')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedType === 'Inclass'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Inclass Questions (18)
            </button>
            <button
              onClick={() => setSelectedType('Postclass')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedType === 'Postclass'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Postclass Questions (16)
            </button>
          </div>

        </div>

        {/* Modules Pill Grid */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedModule('all')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
              selectedModule === 'all'
                ? 'bg-slate-700 text-white border border-slate-600'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Modules
          </button>
          {curriculumModules.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModule(m.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
                selectedModule === m.id
                  ? 'bg-slate-700 text-white border border-slate-600'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              Mod {m.id}: {m.name}
            </button>
          ))}
        </div>

      </div>

      {/* Problems List Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>Showing {filteredProblems.length} practice problems</span>
          <span>Click any card to start writing code in the IDE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProblems.map((problem) => {
            const isSolved = solvedSet.has(problem.id);
            return (
              <div
                key={problem.id}
                className={`group relative rounded-xl border p-5 transition-all bg-slate-900/90 hover:border-blue-500/60 shadow-sm hover:shadow-md flex flex-col justify-between ${
                  isSolved
                    ? 'border-emerald-500/40 bg-emerald-950/10'
                    : 'border-slate-800'
                }`}
              >
                <div>
                  
                  {/* Clean unboxed metadata with separators (Anti-Slop compliant) */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-blue-400">
                      Mod {problem.moduleNumber}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className={problem.type === 'Inclass' ? 'text-amber-400 font-medium' : 'text-purple-400 font-medium'}>
                      {problem.type}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-300">
                      {problem.difficulty}
                    </span>
                    {isSolved && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Solved
                        </span>
                      </>
                    )}
                  </div>

                  {/* Problem Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-1.5">
                    {problem.title}
                  </h3>

                  {/* Real World Scenario snippet */}
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                    {problem.realWorldScenario}
                  </p>

                  {/* Pattern & Complexity Badges */}
                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                    <div className="flex items-center gap-1 text-slate-300">
                      <Sparkles className="w-3 h-3 text-blue-400" />
                      <span>{problem.patternName}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{problem.timeComplexity.average}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HardDrive className="w-3 h-3 text-slate-500" />
                      <span>{problem.memoryComplexity.space}</span>
                    </div>
                  </div>

                </div>

                {/* Card Actions */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onSelectProblem(problem, 'visualizer')}
                      className="px-2.5 py-1 text-xs font-medium rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                      title="Step through algorithm visualizer"
                    >
                      <Eye className="w-3 h-3 text-blue-400" />
                      <span>Visualize</span>
                    </button>
                    <button
                      onClick={() => onSelectProblem(problem, 'patterns')}
                      className="px-2.5 py-1 text-xs font-medium rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                      title="Remembering tips and tricks"
                    >
                      <Lightbulb className="w-3 h-3 text-amber-400" />
                      <span>Tips</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onSelectProblem(problem, 'ide')}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow-sm transition-colors"
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
