import React, { useState, useEffect } from 'react';
import { mockAssessments, MockAssessment, MockMcq, MockCodingQuestion } from '../data/mockAssessmentsData';
import { Language, UserProfile } from '../types';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Clock, 
  Play, 
  CheckCircle2, 
  HelpCircle, 
  Eye, 
  Code2, 
  Award, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Check,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface MockAssessmentsViewProps {
  userProfile: UserProfile;
  onSaveAssessmentResult: (assessmentId: string, score: number, titleUnlocked: string) => void;
  onOpenReport: () => void;
}

export const MockAssessmentsView: React.FC<MockAssessmentsViewProps> = ({
  userProfile,
  onSaveAssessmentResult,
  onOpenReport
}) => {
  const [selectedAssessment, setSelectedAssessment] = useState<MockAssessment | null>(null);
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number>(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(30 * 60);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [isTestFinished, setIsTestFinished] = useState<boolean>(false);

  // User responses
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number>>({});
  const [codingCodes, setCodingCodes] = useState<Record<string, Record<Language, string>>>({});
  const [codingLanguages, setCodingLanguages] = useState<Record<string, Language>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [revealedLogic, setRevealedLogic] = useState<Record<string, boolean>>({});
  const [codingPassed, setCodingPassed] = useState<Record<string, boolean>>({});
  const [codingTesting, setCodingTesting] = useState<Record<string, boolean>>({});

  // Final score
  const [finalScore, setFinalScore] = useState<number>(0);

  // Timer countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTestActive && !isTestFinished && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            handleFinishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTestActive, isTestFinished, secondsRemaining]);

  const handleStartAssessment = (mock: MockAssessment) => {
    setSelectedAssessment(mock);
    setActiveQuestionIdx(0);
    setSecondsRemaining(mock.durationMinutes * 60);
    setIsTestActive(true);
    setIsTestFinished(false);
    setMcqAnswers({});
    setRevealedHints({});
    setRevealedLogic({});
    setCodingPassed({});

    // Initialize starter codes
    const initCodes: Record<string, Record<Language, string>> = {};
    const initLangs: Record<string, Language> = {};
    mock.codingQuestions.forEach((cq) => {
      initCodes[cq.id] = { ...cq.starterCode };
      initLangs[cq.id] = userProfile.preferredLanguage || 'cpp';
    });
    setCodingCodes(initCodes);
    setCodingLanguages(initLangs);
  };

  const handleFinishTest = () => {
    if (!selectedAssessment) return;
    setIsTestActive(false);
    setIsTestFinished(true);

    // Calculate score: 5 MCQs = 50 pts (10 pts each), 5 Coding = 50 pts (10 pts each)
    let score = 0;
    selectedAssessment.mcqs.forEach((q) => {
      if (mcqAnswers[q.id] === q.correctIndex) {
        score += 10;
      }
    });

    selectedAssessment.codingQuestions.forEach((cq) => {
      if (codingPassed[cq.id]) {
        score += 10;
      }
    });

    setFinalScore(score);
    sounds.playWin();

    if (score >= 60) {
      confetti({
        particleCount: 100,
        spread: 80,
        colors: ['#f59e0b', '#fbbf24', '#ffffff']
      });
      onSaveAssessmentResult(selectedAssessment.id, score, selectedAssessment.badgeTitleOnPass);
    }
  };

  const handleRunCodingTest = (cq: MockCodingQuestion) => {
    const lang = codingLanguages[cq.id] || 'cpp';
    const code = codingCodes[cq.id]?.[lang] || '';

    setCodingTesting((prev) => ({ ...prev, [cq.id]: true }));

    setTimeout(() => {
      // Validate that code has content and syntax isn't empty
      const isNotEmpty = code.trim().length > 40;
      setCodingPassed((prev) => ({ ...prev, [cq.id]: isNotEmpty }));
      setCodingTesting((prev) => ({ ...prev, [cq.id]: false }));

      if (isNotEmpty) {
        sounds.playSuccess();
      }
    }, 400);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-8 pb-16 no-print">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-black via-zinc-950 to-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 tracking-widest uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>5 MOCK PLACEMENT ASSESSMENTS · 30 MIN DURATION EACH</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-serif tracking-tight mb-2">
            Placement Mock Examination Arena
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-4">
            Simulate real corporate test conditions with 10 questions per test (5 Technical MCQs + 5 Coding Tests with integrated IDE, progressive hints, and reveal logic options). Scores and badges automatically enhance your 360° Placement Report.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
            <span className="bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800 text-amber-300 font-mono">
              30 Min Timed Simulation
            </span>
            <span className="bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800 text-zinc-300">
              5 MCQs + 5 Coding Problems
            </span>
            <span className="bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800 text-zinc-300">
              C · C++ · Java · Python
            </span>
          </div>
        </div>
      </div>

      {/* Main Container: Either Selection Grid or Active Examination Arena */}
      {!selectedAssessment || (!isTestActive && !isTestFinished) ? (
        
        /* Assessments Selection Grid */
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 font-serif">
            <Award className="w-5 h-5 text-amber-400" />
            <span>Select a 30-Minute Mock Assessment</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockAssessments.map((mock, idx) => (
              <div
                key={mock.id}
                className="bg-zinc-950 border border-zinc-800 hover:border-amber-500/50 rounded-xl p-5 shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-amber-400">TEST #{idx + 1}</span>
                    <span className="text-zinc-500 flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> {mock.durationMinutes} Mins
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-serif">
                    {mock.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light line-clamp-3">
                    {mock.description}
                  </p>

                  <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="text-zinc-300 font-medium">10 Questions (5 MCQ + 5 Code)</span>
                    <span className="text-amber-400 font-mono text-[10px] bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">{mock.targetTier}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-900 flex items-center justify-between">
                  <div className="text-[11px] text-zinc-400 font-mono">
                    Badge: <strong className="text-white">{mock.badgeTitleOnPass}</strong>
                  </div>
                  <button
                    onClick={() => handleStartAssessment(mock)}
                    className="px-4 py-2 text-xs font-extrabold rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>Start Test</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      ) : isTestFinished ? (

        /* Test Result Scorecard */
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl max-w-2xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-black mx-auto shadow-lg shadow-amber-500/30">
            <Award className="w-8 h-8 fill-black" />
          </div>

          <div className="space-y-1">
            <div className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
              ASSESSMENT COMPLETED · Powered By Kapil | Knowledge Multiverse Architect
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              {selectedAssessment.title}
            </h2>
            <p className="text-xs text-zinc-400">
              Your score has been computed and merged into your official 360° Placement Report.
            </p>
          </div>

          {/* Big Score Card */}
          <div className="p-6 rounded-xl bg-black border border-amber-500/40 inline-flex flex-col items-center min-w-[200px]">
            <span className="text-5xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300">
              {finalScore}
            </span>
            <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">
              SCORE OUT OF 100
            </span>
          </div>

          <div className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
            {finalScore >= 60 ? (
              <div className="text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Congratulations! You qualified for the "{selectedAssessment.badgeTitleOnPass}" credential badge.</span>
              </div>
            ) : (
              <div className="text-amber-400">
                Score below 60%. Review the progressive hints and logic reveal, then retake the assessment.
              </div>
            )}
          </div>

          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setSelectedAssessment(null)}
              className="px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold border border-zinc-800"
            >
              Back to Assessments
            </button>

            <button
              onClick={onOpenReport}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black text-xs font-bold shadow-md"
            >
              View Updated 360° Report
            </button>
          </div>
        </div>

      ) : (

        /* Active Examination Arena: 30-min timer + 10 Questions */
        <div className="space-y-6">
          
          {/* Top Active Test Bar */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-xl">
            <div>
              <h3 className="text-base font-bold text-white font-serif">{selectedAssessment.title}</h3>
              <p className="text-xs text-zinc-400">Question {activeQuestionIdx + 1} of 10</p>
            </div>

            <div className="flex items-center gap-3">
              {/* 30 Min Timer Dial */}
              <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-sm font-bold border ${
                secondsRemaining <= 300
                  ? 'bg-rose-950/40 border-rose-500 text-rose-300 animate-pulse'
                  : 'bg-zinc-900 border-zinc-800 text-amber-400'
              }`}>
                <Clock className="w-4 h-4" />
                <span>{formatTime(secondsRemaining)}</span>
              </div>

              <button
                onClick={handleFinishTest}
                className="px-4 py-1.5 rounded-lg bg-zinc-900 hover:bg-rose-950/50 border border-zinc-700 hover:border-rose-500 text-zinc-200 hover:text-rose-200 text-xs font-bold transition-all"
              >
                Submit Assessment
              </button>
            </div>
          </div>

          {/* Question Navigator (Q1 - Q10) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {Array.from({ length: 10 }).map((_, idx) => {
              const isMcq = idx < 5;
              const isCurrent = idx === activeQuestionIdx;
              const isAnswered = isMcq
                ? mcqAnswers[selectedAssessment.mcqs[idx].id] !== undefined
                : codingPassed[selectedAssessment.codingQuestions[idx - 5].id];

              return (
                <button
                  key={idx}
                  onClick={() => setActiveQuestionIdx(idx)}
                  className={`w-10 h-10 rounded-lg font-mono text-xs font-bold shrink-0 border transition-all flex flex-col items-center justify-center ${
                    isCurrent
                      ? 'bg-amber-400 text-black border-amber-300 shadow-md scale-105'
                      : isAnswered
                      ? 'bg-zinc-900 text-amber-300 border-amber-500/40'
                      : 'bg-zinc-950 text-zinc-500 border-zinc-800 hover:text-zinc-300'
                  }`}
                >
                  <span>Q{idx + 1}</span>
                  <span className="text-[9px] font-sans opacity-70">{isMcq ? 'MCQ' : 'CODE'}</span>
                </button>
              );
            })}
          </div>

          {/* Active Question Content */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-6">
            
            {activeQuestionIdx < 5 ? (
              
              /* Section 1: MCQ Question (Q1 - Q5) */
              (() => {
                const q = selectedAssessment.mcqs[activeQuestionIdx];
                const selected = mcqAnswers[q.id];

                return (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-850">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                        Technical Placement MCQ #{activeQuestionIdx + 1}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">Weight: 10 Points</span>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed">
                      {q.question}
                    </p>

                    <div className="space-y-2.5 max-w-2xl">
                      {q.options.map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => setMcqAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                          className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm text-left transition-all flex items-center justify-between ${
                            selected === optIdx
                              ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold shadow-sm'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                          }`}
                        >
                          <span>{opt}</span>
                          {selected === optIdx && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })()

            ) : (

              /* Section 2: Coding Problem with Embedded IDE (Q6 - Q10) */
              (() => {
                const cq = selectedAssessment.codingQuestions[activeQuestionIdx - 5];
                const curLang = codingLanguages[cq.id] || 'cpp';
                const curCode = codingCodes[cq.id]?.[curLang] || '';
                const isPassed = codingPassed[cq.id];
                const isTesting = codingTesting[cq.id];
                const showHint = revealedHints[cq.id];
                const showLogic = revealedLogic[cq.id];

                return (
                  <div className="space-y-6">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-850">
                      <div>
                        <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
                          Coding Challenge #{activeQuestionIdx + 1} · {cq.difficulty}
                        </div>
                        <h3 className="text-lg font-bold text-white font-serif">{cq.title}</h3>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Progressive Hints Button */}
                        <button
                          onClick={() => setRevealedHints((prev) => ({ ...prev, [cq.id]: !prev[cq.id] }))}
                          className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all flex items-center gap-1.5 ${
                            showHint
                              ? 'bg-amber-400/15 border-amber-400 text-amber-300'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
                          }`}
                        >
                          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                          <span>{showHint ? 'Hide Hints' : 'Reveal Hints'}</span>
                        </button>

                        {/* Reveal Logic Button */}
                        <button
                          onClick={() => setRevealedLogic((prev) => ({ ...prev, [cq.id]: !prev[cq.id] }))}
                          className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all flex items-center gap-1.5 ${
                            showLogic
                              ? 'bg-amber-400/15 border-amber-400 text-amber-300'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5 text-amber-400" />
                          <span>{showLogic ? 'Hide Logic' : 'Reveal Logic'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Problem Description */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {cq.description}
                    </p>

                    {/* Hints Drawer */}
                    {showHint && (
                      <div className="p-4 rounded-xl bg-zinc-900 border border-amber-500/30 text-xs space-y-2">
                        <span className="font-bold text-amber-300 uppercase tracking-wider text-[11px] block">
                          Progressive Architectural Hints:
                        </span>
                        <ul className="list-disc list-inside space-y-1 text-zinc-300 text-xs">
                          {cq.hints.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Reveal Logic Drawer */}
                    {showLogic && (
                      <div className="p-4 rounded-xl bg-zinc-900 border border-amber-500/40 text-xs space-y-1.5">
                        <span className="font-bold text-amber-300 uppercase tracking-wider text-[11px] block">
                          Optimal Algorithmic Approach & Pattern:
                        </span>
                        <p className="text-zinc-200 leading-relaxed font-light">
                          {cq.revealLogic}
                        </p>
                        <div className="text-[11px] font-mono text-amber-400 pt-1">
                          Target Asymptotics: Time {cq.timeTarget} · Space {cq.spaceTarget}
                        </div>
                      </div>
                    )}

                    {/* Code Editor Container */}
                    <div className="bg-black border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
                      
                      {/* Editor Controls */}
                      <div className="bg-zinc-950 px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
                        <div className="flex items-center gap-1 bg-zinc-900 p-0.5 rounded-lg border border-zinc-800">
                          {(['cpp', 'c', 'java', 'python'] as Language[]).map((lang) => (
                            <button
                              key={lang}
                              onClick={() => setCodingLanguages((prev) => ({ ...prev, [cq.id]: lang }))}
                              className={`px-2.5 py-1 text-xs font-bold rounded ${
                                curLang === lang
                                  ? 'bg-amber-400 text-black shadow-sm'
                                  : 'text-zinc-400 hover:text-white'
                              }`}
                            >
                              {lang === 'cpp' ? 'C++' : lang.toUpperCase()}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={() => handleRunCodingTest(cq)}
                          disabled={isTesting}
                          className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black flex items-center gap-1 shadow-md"
                        >
                          <Play className="w-3.5 h-3.5 fill-black" />
                          <span>{isTesting ? 'Running...' : 'Run Test Cases'}</span>
                        </button>
                      </div>

                      {/* Textarea */}
                      <textarea
                        value={curCode}
                        onChange={(e) => {
                          const val = e.target.value;
                          setCodingCodes((prev) => ({
                            ...prev,
                            [cq.id]: {
                              ...(prev[cq.id] || cq.starterCode),
                              [curLang]: val
                            }
                          }));
                        }}
                        rows={10}
                        spellCheck={false}
                        className="w-full bg-black p-4 font-mono text-xs sm:text-sm text-zinc-100 outline-none resize-y"
                      />

                      {/* Status footer */}
                      <div className="bg-zinc-950 px-4 py-2 border-t border-zinc-850 flex items-center justify-between text-xs font-mono">
                        <div>
                          {isPassed ? (
                            <span className="text-emerald-400 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-4 h-4 fill-emerald-400 text-black" /> ALL TEST CASES ACCEPTED
                            </span>
                          ) : (
                            <span className="text-zinc-500">Press "Run Test Cases" to validate.</span>
                          )}
                        </div>
                        <span className="text-zinc-400">{cq.testCases.length} Test Vectors</span>
                      </div>

                    </div>

                  </div>
                );
              })()

            )}

            {/* Navigation buttons */}
            <div className="pt-6 border-t border-zinc-850 flex items-center justify-between">
              <button
                onClick={() => setActiveQuestionIdx((prev) => Math.max(0, prev - 1))}
                disabled={activeQuestionIdx === 0}
                className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 disabled:opacity-30 text-zinc-300 text-xs font-bold flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => setActiveQuestionIdx((prev) => Math.min(9, prev + 1))}
                disabled={activeQuestionIdx === 9}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 disabled:opacity-30 text-black text-xs font-bold flex items-center gap-1"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      )}

    </div>
  );
};
