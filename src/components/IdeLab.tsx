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
  Terminal, 
  Code2, 
  Lightbulb, 
  Eye, 
  BookOpen,
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
    setCode(currentProblem.starterCode[language]); // starter has full solution runnable implementation
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
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-sm">
        
        {/* Problem Selector Dropdown */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 md:w-80">
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
                  Mod {p.moduleNumber} · [{p.type}] {p.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {isSolved && (
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2.5 py-1 rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5" /> Solved
            </span>
          )}
        </div>

        {/* Language Tabs & Code Actions */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Languages: C, C++, Java, Python */}
          <div className="flex items-center gap-1 p-1 bg-slate-800 rounded-lg">
            {(['c', 'cpp', 'java', 'python'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  language === lang
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'cpp' ? 'C++' : lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <button
            onClick={handleCopyCode}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs transition-colors"
            title="Copy Code"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={handleResetStarter}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs transition-colors"
            title="Reset to Starter Code"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Run Code Button */}
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white flex items-center gap-1.5 shadow-md transition-colors"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{isRunning ? 'Compiling...' : 'Run & Test'}</span>
          </button>

        </div>

      </div>

      {/* Main Split Layout: Left Problem Docs, Right IDE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left Column: Problem Brief & Complexity Specification (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm space-y-4">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                <span>Module {currentProblem.moduleNumber}: {currentProblem.moduleName}</span>
                <span aria-hidden="true">·</span>
                <span className={currentProblem.type === 'Inclass' ? 'text-amber-400' : 'text-purple-400'}>
                  {currentProblem.type}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                {currentProblem.title}
              </h2>
            </div>

            {/* Real World Scenario */}
            <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-900/40 text-xs text-blue-200 leading-relaxed">
              <span className="font-semibold text-blue-300 block mb-0.5">Engineering Context:</span>
              {currentProblem.realWorldScenario}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentProblem.description}
              </p>
            </div>

            {/* Pattern Badge */}
            <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pattern: {currentProblem.patternName}</span>
                </span>
                <button
                  onClick={onSwitchToTips}
                  className="text-[11px] text-blue-400 hover:underline font-medium"
                >
                  Tips & Tricks →
                </button>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                {currentProblem.patternWhy}
              </p>
            </div>

            {/* Complexity Specs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span className="font-semibold text-slate-200">Time Complexity</span>
                </div>
                <div className="font-mono text-sm font-bold text-blue-300">
                  {currentProblem.timeComplexity.average}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  {currentProblem.timeComplexity.explanation}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                  <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold text-slate-200">Memory Space</span>
                </div>
                <div className="font-mono text-sm font-bold text-emerald-300">
                  {currentProblem.memoryComplexity.space}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  {currentProblem.memoryComplexity.explanation}
                </div>
              </div>
            </div>

            {/* Sample Test Case Previews */}
            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Sample Test Vectors
              </h4>
              <div className="space-y-2">
                {currentProblem.testCases.map((tc, idx) => (
                  <div key={tc.id || idx} className="p-2.5 rounded bg-slate-800 border border-slate-700/60 text-xs font-mono space-y-1">
                    <div className="flex items-center justify-between text-slate-400 text-[11px]">
                      <span>Test Case #{idx + 1}</span>
                      {tc.explanation && <span className="font-sans text-[11px] text-slate-500 truncate max-w-[200px]">{tc.explanation}</span>}
                    </div>
                    <div className="text-slate-300">
                      <span className="text-slate-500 font-sans">Input: </span>{tc.input.replace(/\n/g, ' ')}
                    </div>
                    <div className="text-blue-300">
                      <span className="text-slate-500 font-sans">Expected: </span>{tc.expectedOutput.replace(/\n/g, ' ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick jump button to Visualizer */}
            <div className="pt-2">
              <button
                onClick={onSwitchToVisualizer}
                className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>Open Interactive Step-by-Step Visualizer</span>
              </button>
            </div>

          </div>

        </div>

        {/* Right Column: Code Editor & Execution Console (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          
          {/* Code Editor Container */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col flex-1">
            
            {/* Editor Top Bar */}
            <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span className="font-mono text-slate-300">
                  solution.{language === 'cpp' ? 'cpp' : language === 'c' ? 'c' : language === 'java' ? 'java' : 'py'}
                </span>
                <span className="text-[11px] text-slate-500">
                  (Ready to compile)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleLoadFullSolution}
                  className="text-blue-400 hover:text-blue-300 text-[11px] font-medium"
                >
                  Reload Template
                </button>
              </div>
            </div>

            {/* Textarea Editor with Monospace Styling */}
            <div className="relative flex-1 min-h-[360px] bg-slate-950 p-4 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="w-full h-full min-h-[360px] bg-transparent resize-none border-none outline-none font-mono text-slate-100 selection:bg-blue-600/30 whitespace-pre"
              />
            </div>

          </div>

          {/* Console & Test Execution Results */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
            
            {/* Console Tabs */}
            <div className="bg-slate-950 px-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab('tests')}
                  className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors ${
                    activeTab === 'tests'
                      ? 'border-blue-500 text-blue-400'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Test Results {executionResult && `(${executionResult.passedTests}/${executionResult.totalTests})`}
                </button>
                <button
                  onClick={() => setActiveTab('console')}
                  className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors ${
                    activeTab === 'console'
                      ? 'border-blue-500 text-blue-400'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Compiler Output
                </button>
                <button
                  onClick={() => setActiveTab('custom')}
                  className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors ${
                    activeTab === 'custom'
                      ? 'border-blue-500 text-blue-400'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Custom Input
                </button>
              </div>

              {executionResult && (
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 py-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{executionResult.runtimeMs} ms</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{executionResult.memoryKb} KB</span>
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
                    <div className="text-slate-500 text-center py-8">
                      Click <strong className="text-emerald-400">"Run & Test"</strong> to compile and execute test vectors.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          {executionResult.passed ? (
                            <span className="text-emerald-400 font-bold flex items-center gap-1 text-sm">
                              <CheckCircle2 className="w-4 h-4" /> Passed All Test Cases
                            </span>
                          ) : (
                            <span className="text-rose-400 font-bold flex items-center gap-1 text-sm">
                              <XCircle className="w-4 h-4" /> Test Cases Failed ({executionResult.passedTests}/{executionResult.totalTests})
                            </span>
                          )}
                        </div>
                        <div className="text-slate-400 text-xs">
                          Simulated Execution: <span className="text-white font-mono">{executionResult.runtimeMs}ms</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        {executionResult.testDetails.map((td, idx) => (
                          <div
                            key={td.testId}
                            className={`p-3 rounded-lg border text-xs font-mono space-y-1 ${
                              td.passed
                                ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-200'
                                : 'bg-rose-950/20 border-rose-900/40 text-rose-200'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold">
                                Case #{idx + 1}: {td.passed ? 'ACCEPTED' : 'WRONG ANSWER'}
                              </span>
                              <span className="text-slate-400 text-[11px]">{td.durationMs}ms</span>
                            </div>
                            <div className="text-slate-300">
                              <span className="text-slate-500">Input: </span>
                              {td.input}
                            </div>
                            <div>
                              <span className="text-slate-500">Expected: </span>
                              <span className="text-blue-300">{td.expected}</span>
                            </div>
                            <div>
                              <span className="text-slate-500">Actual: </span>
                              <span className={td.passed ? 'text-emerald-300' : 'text-rose-300 font-bold'}>
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
                <div className="font-mono text-xs text-slate-300 space-y-1 bg-slate-950 p-3 rounded-lg border border-slate-800">
                  {!executionResult ? (
                    <div className="text-slate-500">Ready for compiler diagnostics...</div>
                  ) : (
                    executionResult.consoleLogs.map((log, i) => (
                      <div
                        key={i}
                        className={
                          log.includes('[SUCCESS]')
                            ? 'text-emerald-400 font-semibold'
                            : log.includes('[Error]') || log.includes('failed')
                            ? 'text-rose-400 font-semibold'
                            : 'text-slate-400'
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
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Custom Test Input:
                    </label>
                    <textarea
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder="Enter raw input format matching the problem constraints..."
                      rows={2}
                      className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Expected Output (Optional):
                    </label>
                    <input
                      type="text"
                      value={customExpected}
                      onChange={(e) => setCustomExpected(e.target.value)}
                      placeholder="Expected output string..."
                      className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="text-[11px] text-slate-400">
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
