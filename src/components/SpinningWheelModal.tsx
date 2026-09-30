import React, { useState, useRef, useEffect } from 'react';
import { aptitudeQuestions, AptitudeQuestion } from '../data/aptitudeQuestions';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCw, 
  X,
  Volume2,
  ChevronRight
} from 'lucide-react';

interface SpinningWheelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuestionAnswered: (isCorrect: boolean, points: number) => void;
  wheelScore: number;
}

const SEGMENTS = [
  { label: 'Quantitative', color: '#b45309', textColor: '#ffffff' },
  { label: 'Logical', color: '#18181b', textColor: '#fbbf24' },
  { label: 'Technical CS', color: '#d97706', textColor: '#000000' },
  { label: 'Algorithms', color: '#27272a', textColor: '#fef08a' },
  { label: 'Probability', color: '#f59e0b', textColor: '#000000' },
  { label: 'OS & DBMS', color: '#09090b', textColor: '#fbbf24' },
  { label: 'Permutations', color: '#78350f', textColor: '#ffffff' },
  { label: 'Data Structures', color: '#3f3f46', textColor: '#fde68a' }
];

export const SpinningWheelModal: React.FC<SpinningWheelModalProps> = ({
  isOpen,
  onClose,
  onQuestionAnswered,
  wheelScore
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<AptitudeQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [lastTickSegment, setLastTickSegment] = useState<number>(-1);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw the initial spinning wheel on canvas
  useEffect(() => {
    if (!isOpen) return;
    drawWheel(rotationAngle);
  }, [isOpen, rotationAngle]);

  const drawWheel = (angleDeg: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = canvas.width;
    const center = size / 2;
    const radius = center - 16;
    const numSegments = SEGMENTS.length;
    const segmentAngle = (2 * Math.PI) / numSegments;

    ctx.clearRect(0, 0, size, size);

    // Save context for rotation
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate((angleDeg * Math.PI) / 180);

    // Draw slices
    for (let i = 0; i < numSegments; i++) {
      const seg = SEGMENTS[i];
      const startAngle = i * segmentAngle;
      const endAngle = startAngle + segmentAngle;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = seg.color;
      ctx.fill();

      // Gold divider
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Label text
      ctx.save();
      ctx.rotate(startAngle + segmentAngle / 2);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = seg.textColor;
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(seg.label, radius - 20, 0);
      ctx.restore();
    }

    ctx.restore();

    // Central Gold Hub
    ctx.beginPath();
    ctx.arc(center, center, 36, 0, 2 * Math.PI);
    ctx.fillStyle = '#09090b';
    ctx.fill();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 16px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SPIN', center, center);

    // Outer Rim Frame
    ctx.beginPath();
    ctx.arc(center, center, radius + 4, 0, 2 * Math.PI);
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 8;
    ctx.stroke();
  };

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setCurrentQuestion(null);
    setSelectedOption(null);
    setIsSubmitted(false);

    // Calculate random spin: at least 5 full rotations + random angle
    const extraRotations = 5 + Math.floor(Math.random() * 4);
    const targetSlice = Math.floor(Math.random() * SEGMENTS.length);
    const sliceAngle = 360 / SEGMENTS.length;
    // Align with top pointer at 270 deg (or 0 deg)
    const targetAngle = extraRotations * 360 + (360 - (targetSlice * sliceAngle + sliceAngle / 2));

    const durationMs = 3800;
    const startTime = performance.now();
    const initialAngle = rotationAngle % 360;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentDeg = initialAngle + (targetAngle - initialAngle) * easeOut;

      // Play tick sound every time a segment crosses
      const currentSeg = Math.floor((currentDeg % 360) / sliceAngle);
      if (currentSeg !== lastTickSegment) {
        sounds.playTick();
        setLastTickSegment(currentSeg);
      }

      setRotationAngle(currentDeg);
      drawWheel(currentDeg);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        sounds.playWin();

        // Pick a question from the 25 pool corresponding to the chosen segment or random
        const chosenQ = aptitudeQuestions[Math.floor(Math.random() * aptitudeQuestions.length)];
        setCurrentQuestion(chosenQ);

        confetti({
          particleCount: 50,
          spread: 60,
          colors: ['#f59e0b', '#fbbf24', '#ffffff']
        });
      }
    };

    requestAnimationFrame(animate);
  };

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || !currentQuestion || isSubmitted) return;

    setIsSubmitted(true);
    const isCorrect = selectedOption === currentQuestion.correctIndex;

    if (isCorrect) {
      sounds.playSuccess();
      confetti({
        particleCount: 70,
        spread: 70,
        colors: ['#f59e0b', '#22c55e', '#ffffff']
      });
      onQuestionAnswered(true, currentQuestion.points);
    } else {
      onQuestionAnswered(false, 0);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto no-print">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl shadow-black text-zinc-100 relative max-h-[92vh] overflow-y-auto">
        
        {/* Subtle gold ambient glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-850 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-inner">
              <RotateCw className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>25 HIGH-YIELD PLACEMENT MCQS · SOUND SYNTHESIZED</span>
              </div>
              <h2 className="text-xl font-bold text-white font-serif tracking-tight">
                Aptitude & Placement Lucky Wheel
              </h2>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg text-xs font-mono">
            <span className="text-zinc-400">Aptitude Score: </span>
            <span className="font-bold text-amber-400">{wheelScore} pts</span>
          </div>
        </div>

        {/* Wheel & Pointer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Wheel Stage */}
          <div className="flex flex-col items-center justify-center relative">
            
            {/* Top Indicator Pointer */}
            <div className="absolute -top-3 z-10 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-amber-400 drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]" />

            {/* Canvas Wheel */}
            <canvas
              ref={canvasRef}
              width={340}
              height={340}
              className="rounded-full shadow-2xl shadow-black cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={handleSpin}
            />

            {/* Spin CTA Button */}
            <button
              onClick={handleSpin}
              disabled={isSpinning}
              className="mt-5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 disabled:opacity-50 text-black font-extrabold text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all active:scale-95"
            >
              <RotateCw className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
              <span>{isSpinning ? 'Spinning...' : 'Spin the Wheel!'}</span>
            </button>
            <div className="text-[11px] text-zinc-500 mt-1.5 flex items-center gap-1">
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Synthesized Mechanical Audio Enabled</span>
            </div>

          </div>

          {/* Question / Result Panel */}
          <div className="bg-black/90 border border-zinc-800 rounded-xl p-5 min-h-[360px] flex flex-col justify-between">
            
            {!currentQuestion ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-zinc-300 font-serif">
                  Spin the Wheel to Unlock a Placement Question!
                </div>
                <p className="text-xs text-zinc-500 max-w-xs leading-relaxed font-light">
                  Covers Quantitative Aptitude, Logical Puzzles, Operating Systems, Computer Networks, and DBMS Normalization tested in placement assessments.
                </p>
              </div>
            ) : (
              <div className="space-y-4 flex-1 flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-850 text-xs">
                    <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                      {currentQuestion.category} · Question #{currentQuestion.id} of 25
                    </span>
                    <span className="font-mono text-zinc-400">+{currentQuestion.points} pts</span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-200 mt-3 font-medium leading-relaxed">
                    {currentQuestion.question}
                  </p>

                  {/* Options */}
                  <div className="space-y-2 mt-4">
                    {currentQuestion.options.map((opt, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrect = idx === currentQuestion.correctIndex;

                      let btnStyle = 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700';
                      if (isSelected) btnStyle = 'bg-amber-400/10 border-amber-400 text-amber-300';
                      if (isSubmitted) {
                        if (isCorrect) btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-300 font-bold';
                        else if (isSelected) btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-300';
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isSubmitted}
                          onClick={() => handleSelectOption(idx)}
                          className={`w-full p-2.5 text-left rounded-lg border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                          {isSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation after submission */}
                  {isSubmitted && (
                    <div className="mt-4 p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 space-y-1">
                      <span className="font-bold text-amber-400 block text-[11px] uppercase tracking-wider">
                        Solution Explanation:
                      </span>
                      <p className="leading-relaxed font-light text-[11px]">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-zinc-850 flex items-center justify-between">
                  {!isSubmitted ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={selectedOption === null}
                      className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 disabled:opacity-50 text-black font-bold text-xs shadow-md transition-all"
                    >
                      Confirm Answer
                    </button>
                  ) : (
                    <button
                      onClick={handleSpin}
                      disabled={isSpinning}
                      className="w-full py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Spin Again for Next Question</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
