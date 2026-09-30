import React from 'react';
import { Problem } from '../types';
import { 
  Lightbulb, 
  AlertTriangle, 
  Sparkles, 
  Clock, 
  HardDrive, 
  ArrowRight, 
  CheckCircle2, 
  Bookmark,
  ChevronDown
} from 'lucide-react';

interface PatternTipsTabProps {
  currentProblem: Problem;
  onSelectProblem: (problem: Problem) => void;
  allProblems: Problem[];
  onOpenIde: () => void;
}

export const PatternTipsTab: React.FC<PatternTipsTabProps> = ({
  currentProblem,
  onSelectProblem,
  allProblems,
  onOpenIde
}) => {
  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Problem Navigation */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-80">
            <select
              value={currentProblem.id}
              onChange={(e) => {
                const found = allProblems.find((p) => p.id === e.target.value);
                if (found) onSelectProblem(found);
              }}
              className="w-full appearance-none px-3.5 py-2 pr-9 rounded-lg bg-slate-800 border border-slate-700 text-white font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {allProblems.map((p) => (
                <option key={p.id} value={p.id}>
                  Mod {p.moduleNumber} · {p.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <span className="text-xs text-slate-400 hidden md:inline">
            Module {currentProblem.moduleNumber}: {currentProblem.moduleName}
          </span>
        </div>

        <button
          onClick={onOpenIde}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-1.5 shadow-sm transition-colors"
        >
          <span>Practice in IDE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Pattern Overview Hero */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-xl text-white">
        <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold mb-2">
          <Sparkles className="w-4 h-4" />
          <span>ALGORITHMIC PATTERN BLUEPRINT</span>
          <span>·</span>
          <span>JIET CURRICULUM</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white mb-2">
          {currentProblem.patternName}
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          {currentProblem.patternWhy}
        </p>
      </div>

      {/* Grid: Tips & Tricks vs Traps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Remembering Tips and Tricks */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-amber-400">
            <Lightbulb className="w-5 h-5" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Remembering Tips & Tricks
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Mental hooks, algebraic invariants, and memory mnemonics to recall under interview pressure:
          </p>

          <div className="space-y-3">
            {currentProblem.tipsAndTricks.map((tip, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-slate-800/70 border border-slate-700/60 text-xs text-slate-200 flex items-start gap-2.5"
              >
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 mt-0.5 text-[11px]">
                  {idx + 1}
                </div>
                <div className="leading-relaxed">
                  {tip}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Traps & Edge Cases */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Common Traps & Edge Cases
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Frequent implementation bugs, compiler edge cases, and off-by-one errors:
          </p>

          <div className="space-y-3">
            {currentProblem.commonMistakes.map((mistake, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-rose-950/20 border border-rose-900/40 text-xs text-rose-200 flex items-start gap-2.5"
              >
                <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center shrink-0 mt-0.5 text-[11px]">
                  !
                </div>
                <div className="leading-relaxed">
                  {mistake}
                </div>
              </div>
            ))}
            {currentProblem.constraints && (
              <div className="p-3.5 rounded-lg bg-slate-800/70 border border-slate-700/60 text-xs text-slate-300">
                <span className="font-semibold text-slate-200 block mb-1">Guaranteed Constraints:</span>
                <ul className="list-disc list-inside space-y-0.5 text-slate-400 font-mono text-[11px]">
                  {currentProblem.constraints.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Complexity Breakdown Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-blue-400" />
          <span>Formal Complexity Proof & Asymptotic Analysis</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Time Complexity Breakdown</span>
              </span>
              <span className="text-xs font-mono font-bold text-blue-400">
                {currentProblem.timeComplexity.average}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono py-2 bg-slate-900 rounded-lg">
              <div>
                <span className="text-[10px] text-slate-500 block">Best</span>
                <span className="text-slate-300 font-bold">{currentProblem.timeComplexity.best}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Average</span>
                <span className="text-blue-300 font-bold">{currentProblem.timeComplexity.average}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">Worst</span>
                <span className="text-slate-300 font-bold">{currentProblem.timeComplexity.worst}</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              {currentProblem.timeComplexity.explanation}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <HardDrive className="w-4 h-4 text-emerald-400" />
                <span>Memory Space Breakdown</span>
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                {currentProblem.memoryComplexity.space}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              {currentProblem.memoryComplexity.explanation}
            </p>
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono">
              In-place optimization ensures minimal cache pollution and zero garbage collector overhead.
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
