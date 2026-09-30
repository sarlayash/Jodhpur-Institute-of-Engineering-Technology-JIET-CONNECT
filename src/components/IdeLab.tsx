import React, { useState, useEffect } from 'react';
import { ExecutionResult, Language, Problem, TestCase } from '../types';
import { runTests } from '../utils/codeRunner';
import { 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Clock, 
  HardDrive, 
  CheckCircle2, 
  XCircle, 
  Code2, 
  Lightbulb, 
  Eye, 
  ChevronDown
} from 'lucide-react';

interface IdeLabProps {
  currentProblem: Problem;
  onSelectProblem: (problem: Problem) => void;
  allProblems: Problem[];
  preferredLanguage: Language;
  onProblemSolved: (problemId: string) => void;
  onSwitchToVisualizer: () => void;
  onSwitchToTips: () => void;
  isSolved: boolean;
}

export const IdeLab: React.FC<IdeLabProps> = ({
  currentProblem,
  onSelectProblem,
  allProblems,
  preferredLanguage,
  onProblemSolved,
  onSwitchToVisualizer,
  onSwitchToTips,
  isSolved
}) => {
  const [language, setLanguage] = useState<Language>(preferredLanguage || 'cpp');
  const [code, setCode] = useState<string>(currentProblem.starterCode[language] || '');
  const [activeTab, setActiveTab] = useState<'console' | 'tests' | 'custom'>('tests');
  const [customInput, setCustomInput] = useState('');
  const [customExpected, setCustomExpected] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync code when problem or language changes
  useEffect(() => {
    setCode(currentProblem.starterCode[language] || '');
    setExecutionResult(null);
  }, [currentProblem.id, language]);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    setCode(currentProblem.starterCode[newLang] || '');
    setExecutionResult(null);
  };

  const handleResetStarter = () => {
    setCode(currentProblem.starterCode[language]);
    setExecutionResult(null);
  };

  const handleLoadFullSolution = () => {
    setCode(currentProblem.starterCode[language]);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      let customTc: TestCase | undefined;
      if (activeTab === 'custom' && customInput.trim()) {
        customTc = {
          id: 'custom-user',
          input: customInput.trim(),
          expectedOutput: customExpected.trim() || 'Simulated Output'
        };
      }

      const result = runTests(currentProblem, code, language, customTc);
      setExecutionResult(result);
      setIsRunning(false);
      setActiveTab('console');

      if (result.passed && (!customTc || result.passedTests === result.totalTests)) {
        onProblemSolved(currentProblem.id);
      }
    }, 350);
  };

  return (
    <div className="space-y-4 pb-12">
      
      {/* Top Problem Navigation & Language Bar */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-xl">
        
        {/* Problem Selector Dropdown */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 md:w-80">
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
                  Mod {p.moduleNumber} · [{p.type}] {p.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {isSolved && (
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5 fill-amber-400 text-black" /> Solved
            </span>
          )}
        </div>

        {/* Language Tabs & Code Actions */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Languages: C, C++, Java, Python */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900 rounded-lg border border-zinc-800">
            {(['c', 'cpp', 'java', 'python'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                  language === lang
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {lang === 'cpp' ? 'C++' : lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <button
            onClick={handleCopyCode}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-xs transition-colors"
            title="Copy Code"
          >
            {copied ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={handleResetStarter}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-xs transition-colors"
            title="Reset to Starter Code"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Run Code Button (Elite Gold) */}
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="px-4 py-2 text-xs sm:text-sm font-extrabold rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 disabled:opacity-50 text-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all active:scale-95"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>{isRunning ? 'Compiling...' : 'Run & Test'}</span>
          </button>

        </div>

      </div>

      {/* Main Split Layout: Left Problem Docs, Right IDE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left Column: Problem Brief & Complexity Specification (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 shadow-xl space-y-4">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
                <span>Module {currentProblem.moduleNumber}: {currentProblem.moduleName}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span className="text-amber-400 font-bold">
                  {currentProblem.type}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight font-serif">
                {currentProblem.title}
              </h2>
            </div>

            {/* Real World Scenario */}
            <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-amber-500/20 text-xs text-zinc-300 leading-relaxed">
              <span className="font-bold text-amber-400 block mb-0.5 uppercase tracking-wider text-[10px]">Engineering Context</span>
              {currentProblem.realWorldScenario}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {currentProblem.description}
              </p>
            </div>

            {/* Pattern Badge */}
            <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-300">Pattern: {currentProblem.patternName}</span>
                </span>
                <button
                  onClick={onSwitchToTips}
                  className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Tips & Tricks →
                </button>
              </div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                {currentProblem.patternWhy}
              </p>
            </div>

            {/* Complexity Specs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs">
                <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold text-zinc-200">Time Complexity</span>
                </div>
                <div className="font-mono text-sm font-bold text-amber-300">
                  {currentProblem.timeComplexity.average}
                </div>
                <div className="text-[11px] text-zinc-500 mt-1 line-clamp-2">
                  {currentProblem.timeComplexity.explanation}
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs">
                <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
                  <HardDrive className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="font-semibold text-zinc-200">Memory Space</span>
                </div>
                <div className="font-mono text-sm font-bold text-zinc-300">
                  {currentProblem.memoryComplexity.space}
                </div>
                <div className="text-[11px] text-zinc-500 mt-1 line-clamp-2">
                  {currentProblem.memoryComplexity.explanation}
                </div>
              </div>
            </div>

            {/* Sample Test Case Previews */}
            <div>
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Sample Test Vectors
              </h4>
              <div className="space-y-2">
                {currentProblem.testCases.map((tc, idx) => (
                  <div key={tc.id || idx} className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono space-y-1">
                    <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                      <span className="text-amber-400 font-bold">Vector #{idx + 1}</span>
                      {tc.explanation && <span className="font-sans text-[11px] text-zinc-500 truncate max-w-[200px]">{tc.explanation}</span>}
                    </div>
                    <div className="text-zinc-300">
                      <span className="text-zinc-500 font-sans">Input: </span>{tc.input.replace(/\n/g, ' ')}
                    </div>
                    <div className="text-amber-300">
                      <span className="text-zinc-500 font-sans">Expected: </span>{tc.expectedOutput.replace(/\n/g, ' ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick jump button to Visualizer */}
            <div className="pt-2">
              <button
                onClick={onSwitchToVisualizer}
                className="w-full py-2.5 px-3 text-xs font-semibold rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 flex items-center justify-center gap-2 border border-zinc-800 hover:border-amber-500/40 transition-all"
              >
                <Eye className="w-4 h-4 text-amber-400" />
                <span>Open Interactive Step-by-Step Visualizer</span>
              </button>
            </div>

          </div>

        </div>

        {/* Right Column: Code Editor & Execution Console (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          
          {/* Code Editor Container */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-xl flex flex-col flex-1">
            
            {/* Editor Top Bar */}
            <div className="bg-black px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-zinc-200 font-bold">
                  solution.{language === 'cpp' ? 'cpp' : language === 'c' ? 'c' : language === 'java' ? 'java' : 'py'}
                </span>
                <span className="text-[11px] text-zinc-500">
                  (Ready to compile)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleLoadFullSolution}
                  className="text-amber-400 hover:text-amber-300 text-[11px] font-semibold"
                >
                  Reload Template
                </button>
              </div>
            </div>

            {/* Textarea Editor with Obsidian Styling */}
            <div className="relative flex-1 min-h-[380px] bg-black p-4 font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="w-full h-full min-h-[380px] bg-transparent resize-none border-none outline-none font-mono text-zinc-100 selection:bg-amber-400/30 whitespace-pre"
              />
            </div>

          </div>

          {/* Console & Test Execution Results */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
            
            {/* Console Tabs */}
            <div className="bg-black px-4 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab('tests')}
                  className={`px-3 py-2 text-xs font-bold border-b-2 transition-all ${
                    activeTab === 'tests'
                      ? 'border-amber-400 text-amber-300'
                      : 'border-transparent text-zinc-500 hover:text-white'
                  }`}
                >
                  Test Results {executionResult && `(${executionResult.passedTests}/${executionResult.totalTests})`}
                </button>
                <button
                  onClick={() => setActiveTab('console')}
                  className={`px-3 py-2 text-xs font-bold border-b-2 transition-all ${
                    activeTab === 'console'
                      ? 'border-amber-400 text-amber-300'
                      : 'border-transparent text-zinc-500 hover:text-white'
                  }`}
                >
                  Compiler Output
                </button>
                <button
                  onClick={() => setActiveTab('custom')}
                  className={`px-3 py-2 text-xs font-bold border-b-2 transition-all ${
                    activeTab === 'custom'
                      ? 'border-amber-400 text-amber-300'
                      : 'border-transparent text-zinc-500 hover:text-white'
                  }`}
                >
                  Custom Input
                </button>
              </div>

              {executionResult && (
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 py-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-white font-bold">{executionResult.runtimeMs} ms</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <HardDrive className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="text-zinc-300">{executionResult.memoryKb} KB</span>
                  </span>
                </div>
              )}
            </div>

            {/* Console Content */}
            <div className="p-4 min-h-[160px] text-xs">
              
              {/* Tab: Test Results */}
              {activeTab === 'tests' && (
                <div>
                  {!executionResult ? (
                    <div className="text-zinc-500 text-center py-8">
                      Press <strong className="text-amber-400">"Run & Test"</strong> to compile and execute against the curriculum test matrix.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                        <div className="flex items-center gap-2">
                          {executionResult.passed ? (
                            <span className="text-amber-400 font-bold flex items-center gap-1 text-sm">
                              <CheckCircle2 className="w-4 h-4 fill-amber-400 text-black" /> PASSED ALL TEST CASES
                            </span>
                          ) : (
                            <span className="text-rose-400 font-bold flex items-center gap-1 text-sm">
                              <XCircle className="w-4 h-4" /> TEST CASES FAILED ({executionResult.passedTests}/{executionResult.totalTests})
                            </span>
                          )}
                        </div>
                        <div className="text-zinc-400 text-xs">
                          Execution: <span className="text-white font-mono">{executionResult.runtimeMs}ms</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        {executionResult.testDetails.map((td, idx) => (
                          <div
                            key={td.testId}
                            className={`p-3 rounded-lg border text-xs font-mono space-y-1 ${
                              td.passed
                                ? 'bg-zinc-900 border-amber-500/30 text-zinc-200'
                                : 'bg-rose-950/20 border-rose-900/40 text-rose-200'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-amber-300">
                                Case #{idx + 1}: {td.passed ? 'ACCEPTED' : 'WRONG ANSWER'}
                              </span>
                              <span className="text-zinc-500 text-[11px]">{td.durationMs}ms</span>
                            </div>
                            <div className="text-zinc-300">
                              <span className="text-zinc-500">Input: </span>
                              {td.input}
                            </div>
                            <div>
                              <span className="text-zinc-500">Expected: </span>
                              <span className="text-amber-300">{td.expected}</span>
                            </div>
                            <div>
                              <span className="text-zinc-500">Actual: </span>
                              <span className={td.passed ? 'text-white' : 'text-rose-300 font-bold'}>
                                {td.actual}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tab: Compiler Output */}
              {activeTab === 'console' && (
                <div className="font-mono text-xs text-zinc-300 space-y-1 bg-black p-3.5 rounded-lg border border-zinc-800">
                  {!executionResult ? (
                    <div className="text-zinc-600">Ready for compiler diagnostics...</div>
                  ) : (
                    executionResult.consoleLogs.map((log, i) => (
                      <div
                        key={i}
                        className={
                          log.includes('[SUCCESS]')
                            ? 'text-amber-400 font-bold'
                            : log.includes('[Error]') || log.includes('failed')
                            ? 'text-rose-400 font-semibold'
                            : 'text-zinc-400'
                        }
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Tab: Custom Input */}
              {activeTab === 'custom' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Custom Test Input:
                    </label>
                    <textarea
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder="Enter raw input format matching the problem constraints..."
                      rows={2}
                      className="w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Expected Output (Optional):
                    </label>
                    <input
                      type="text"
                      value={customExpected}
                      onChange={(e) => setCustomExpected(e.target.value)}
                      placeholder="Expected output string..."
                      className="w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Switch to this tab and press "Run & Test" to execute your custom test input.
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
