import React, { useState, useEffect } from 'react';
import { Problem } from '../types';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Activity, 
  Layers, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

interface VisualizerTabProps {
  currentProblem: Problem;
  onSelectProblem: (problem: Problem) => void;
  allProblems: Problem[];
  onOpenIde: () => void;
}

export const VisualizerTab: React.FC<VisualizerTabProps> = ({
  currentProblem,
  onSelectProblem,
  allProblems,
  onOpenIde
}) => {
  const visualizerData = currentProblem.defaultVisualizerData;
  const steps = visualizerData.steps;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  useEffect(() => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  }, [currentProblem.id]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      const intervalMs = 1200 / playbackSpeed;
      timer = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, intervalMs);
    }
    return () => clearInterval(timer);
  }, [isPlaying, playbackSpeed, steps.length]);

  const currentStep = steps[currentStepIndex] || steps[0];
  const displayValues = currentStep.currentValues || visualizerData.initialState;

  const handleStepBack = () => {
    setIsPlaying(false);
    setCurrentStepIndex((prev) => Math.max(0, prev - 1));
  };

  const handleStepForward = () => {
    setIsPlaying(false);
    setCurrentStepIndex((prev) => Math.min(steps.length - 1, prev + 1));
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Visualizer Top Bar with Problem Selector */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-80">
            <select
              value={currentProblem.id}
              onChange={(e) => {
                const found = allProblems.find((p) => p.id === e.target.value);
                if (found) onSelectProblem(found);
              }}
              className="w-full appearance-none px-3.5 py-2 pr-9 rounded-lg bg-zinc-900 border border-zinc-800 text-white font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              {allProblems.map((p) => (
                <option key={p.id} value={p.id}>
                  Mod {p.moduleNumber} · {p.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <span className="text-xs text-zinc-400 hidden md:inline">
            Pattern: <span className="text-amber-400 font-bold">{currentProblem.patternName}</span>
          </span>
        </div>

        <button
          onClick={onOpenIde}
          className="px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/10 transition-all active:scale-95"
        >
          <span>Open in IDE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Interactive Sandbox Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Interactive Stage (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-xl min-h-[380px] flex flex-col justify-between">
            
            {/* Visualizer Stage Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-850">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                  Algorithmic Execution Canvas
                </span>
              </div>
              <div className="text-xs text-zinc-400 tabular-nums font-mono">
                Step <span className="text-amber-400 font-bold">{currentStepIndex + 1}</span> of{' '}
                <span className="text-white font-bold">{steps.length}</span>
              </div>
            </div>

            {/* Visual Canvas Representation */}
            <div className="py-8 flex flex-col items-center justify-center space-y-6">
              
              {/* If Graph-based problem */}
              {currentProblem.moduleNumber === 1 ? (
                <div className="w-full max-w-md bg-black/80 p-6 rounded-xl border border-zinc-800 flex flex-col items-center">
                  <div className="text-xs text-zinc-400 mb-4 font-mono uppercase tracking-wider text-[10px]">
                    Graph Transit Network Topology
                  </div>
                  
                  {/* SVG Graph Visualizer with Gold & Obsidian Aesthetics */}
                  <svg viewBox="0 0 300 180" className="w-full h-44">
                    {/* Base Inactive Edges */}
                    <line x1="50" y1="40" x2="150" y2="40" stroke="#3f3f46" strokeWidth="2.5" />
                    <line x1="50" y1="40" x2="100" y2="140" stroke="#3f3f46" strokeWidth="2.5" />
                    <line x1="150" y1="40" x2="100" y2="140" stroke="#3f3f46" strokeWidth="2.5" />
                    <line x1="150" y1="40" x2="250" y2="90" stroke="#3f3f46" strokeWidth="2.5" />

                    {/* Active Gold Highlight Lines */}
                    {currentStep.graphActiveEdges?.map(([u, v], i) => (
                      <line
                        key={i}
                        x1={u === '0' ? 50 : u === '1' ? 150 : u === '2' ? 100 : 250}
                        y1={u === '0' ? 40 : u === '1' ? 40 : u === '2' ? 140 : 90}
                        x2={v === '0' ? 50 : v === '1' ? 150 : v === '2' ? 100 : 250}
                        y2={v === '0' ? 40 : v === '1' ? 40 : v === '2' ? 140 : 90}
                        stroke="#f59e0b"
                        strokeWidth="4"
                      />
                    ))}

                    {/* Nodes: 0, 1, 2, 3 */}
                    {[
                      { id: '0', x: 50, y: 40, label: 'Station 0' },
                      { id: '1', x: 150, y: 40, label: 'Station 1' },
                      { id: '2', x: 100, y: 140, label: 'Station 2' },
                      { id: '3', x: 250, y: 90, label: 'Station 3' }
                    ].map((node) => {
                      const isActive = currentStep.graphActiveNodes?.includes(node.id);
                      return (
                        <g key={node.id}>
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r="18"
                            className={`transition-all duration-300 ${
                              isActive
                                ? 'fill-amber-400 stroke-yellow-200 stroke-2'
                                : 'fill-zinc-900 stroke-zinc-700'
                            }`}
                          />
                          <text
                            x={node.x}
                            y={node.y + 5}
                            textAnchor="middle"
                            className={`font-bold text-xs pointer-events-none ${
                              isActive ? 'fill-black' : 'fill-zinc-200'
                            }`}
                          >
                            {node.id}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              ) : (
                /* Array / Sequence / String Visualizer Blocks */
                <div className="w-full flex flex-col items-center">
                  <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl">
                    {displayValues.map((val, idx) => {
                      const isPrimary = currentStep.highlightIndices?.includes(idx);
                      const isSecondary = currentStep.secondaryIndices?.includes(idx);

                      return (
                        <div key={idx} className="flex flex-col items-center gap-1.5">
                          {/* Element block */}
                          <div
                            className={`w-12 h-14 rounded-lg flex items-center justify-center font-mono font-bold text-sm sm:text-base border shadow-sm transition-all duration-300 ${
                              isPrimary
                                ? 'bg-gradient-to-b from-amber-300 to-amber-500 border-amber-300 text-black scale-105 shadow-lg shadow-amber-500/20'
                                : isSecondary
                                ? 'bg-zinc-800 border-zinc-600 text-white scale-105'
                                : 'bg-zinc-900 border-zinc-800 text-zinc-300'
                            }`}
                          >
                            {val}
                          </div>

                          {/* Index Label */}
                          <span className="text-[11px] font-mono text-zinc-500">
                            [{idx}]
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Pointer indicators */}
                  <div className="mt-4 flex items-center gap-4 text-xs font-mono text-zinc-400">
                    {currentStep.highlightIndices && currentStep.highlightIndices.length > 0 && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                        <span className="text-zinc-300">Active / Left: Index {currentStep.highlightIndices.join(', ')}</span>
                      </div>
                    )}
                    {currentStep.secondaryIndices && currentStep.secondaryIndices.length > 0 && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 inline-block" />
                        <span className="text-zinc-400">Right / Partner: Index {currentStep.secondaryIndices.join(', ')}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>

            {/* Explanation Message Box */}
            <div className="bg-black p-4 rounded-xl border border-zinc-850 text-xs sm:text-sm text-zinc-200 space-y-1">
              <span className="text-amber-400 font-bold block text-xs uppercase tracking-wider">
                Step Operation:
              </span>
              <p className="leading-relaxed">
                {currentStep.description}
              </p>
            </div>

            {/* Playback Controls Deck */}
            <div className="mt-6 pt-4 border-t border-zinc-850 flex flex-wrap items-center justify-between gap-4">
              
              {/* Play / Step buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                  title="Reset to beginning"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={handleStepBack}
                  disabled={currentStepIndex === 0}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                  title="Step backward"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/10 transition-all"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-black" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-black" /> Play Animation
                    </>
                  )}
                </button>
                <button
                  onClick={handleStepForward}
                  disabled={currentStepIndex === steps.length - 1}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                  title="Step forward"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Speed Controller */}
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 p-1 rounded-lg">
                <span className="px-2 font-medium">Speed:</span>
                {[0.5, 1, 2].map((s) => (
                  <button
                    key={s}
                    onClick={() => setPlaybackSpeed(s)}
                    className={`px-2 py-1 rounded font-bold text-xs transition-colors ${
                      playbackSpeed === s
                        ? 'bg-amber-400 text-black'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* Right Concept & Variables Deck (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Variables Inspector */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 shadow-xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Live State Inspector</span>
            </h3>

            <div className="p-3 rounded-lg bg-black border border-zinc-850 font-mono text-xs space-y-2">
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-500">Current Phase</span>
                <span className="text-amber-400 font-bold">{currentStep.message}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1.5">
                <span className="text-zinc-500">Step Index</span>
                <span className="text-zinc-200">{currentStepIndex}</span>
              </div>
              {currentStep.variables &&
                Object.entries(currentStep.variables).map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-zinc-900 pb-1.5">
                    <span className="text-zinc-500">{k}</span>
                    <span className="text-amber-300 font-bold">{String(v)}</span>
                  </div>
                ))}
            </div>

            {/* Pattern Anchor Box */}
            <div className="p-4 rounded-xl bg-zinc-900/90 border border-amber-500/20 space-y-2">
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider text-[10px]">
                Pattern Invariant
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                {currentProblem.patternWhy}
              </p>
            </div>

            {/* Complexity Specs */}
            <div className="space-y-2 pt-2 border-t border-zinc-900">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Time Complexity:</span>
                <span className="font-mono font-bold text-amber-400">{currentProblem.timeComplexity.average}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400">Auxiliary Memory:</span>
                <span className="font-mono font-bold text-zinc-300">{currentProblem.memoryComplexity.space}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
