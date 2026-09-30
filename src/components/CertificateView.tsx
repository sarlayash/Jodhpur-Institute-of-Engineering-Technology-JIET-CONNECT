import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';
import { Badge, Problem, UserProfile } from '../types';
import { 
  Award, 
  Printer, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  GraduationCap
} from 'lucide-react';

interface CertificateViewProps {
  userProfile: UserProfile;
  problems: Problem[];
  badges: Badge[];
  onOpenVerificationModal: (certId: string) => void;
  onOpenEditProfile: () => void;
}

export const CertificateView: React.FC<CertificateViewProps> = ({
  userProfile,
  problems,
  badges,
  onOpenVerificationModal,
  onOpenEditProfile
}) => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const certificateRef = useRef<HTMLDivElement>(null);

  const solvedSet = new Set(userProfile.solvedProblemIds);
  const solvedCount = problems.filter(p => solvedSet.has(p.id)).length;

  const credentialId = userProfile.certificateId || `JIET-KAPIL-2026-${Math.abs(hashString(userProfile.name + 'JIET')).toString(16).toUpperCase()}`;

  useEffect(() => {
    const verificationUrl = `${window.location.origin}/?verify=${credentialId}`;
    QRCode.toDataURL(verificationUrl, {
      width: 240,
      margin: 1,
      color: {
        dark: '#09090b',
        light: '#ffffff'
      }
    })
      .then((url) => setQrCodeDataUrl(url))
      .catch((err) => console.error(err));
  }, [credentialId]);

  const handlePrint = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      colors: ['#f59e0b', '#d97706', '#ffffff', '#71717a'],
      origin: { y: 0.6 }
    });
    window.print();
  };

  const handleVerifyClick = () => {
    onOpenVerificationModal(credentialId);
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* Top Banner & Control Deck */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-zinc-950 border border-zinc-800 p-5 rounded-xl shadow-xl">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-serif">
            <Award className="w-5 h-5 text-amber-400" />
            <span>QR-Verified Institute Certificate</span>
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Official Credential issued by Jodhpur Institute of Engineering and Technology · Powered by Kapil
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleVerifyClick}
            className="px-4 py-2 text-xs font-bold rounded-lg bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-500/40 hover:border-amber-400 flex items-center gap-1.5 transition-all shadow-sm"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Verify Live Credential</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-extrabold rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all active:scale-95"
          >
            <Printer className="w-4 h-4 fill-black" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Official Certificate Visual Frame: Elite Obsidian & Polished Gold */}
      <div className="flex justify-center">
        <div
          ref={certificateRef}
          id="jiet-printable-certificate"
          className="w-full max-w-4xl bg-gradient-to-b from-[#0e0e11] via-zinc-950 to-black text-white rounded-2xl border-4 border-amber-500/60 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          
          {/* Ornate Gold Border Geometry */}
          <div className="border border-amber-500/30 p-6 sm:p-10 rounded-xl relative overflow-hidden">
            
            {/* Corner Gold Flourishes */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-400 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-400 pointer-events-none" />

            {/* Top Emblem and Header */}
            <div className="text-center space-y-2 mb-8">
              
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-black mb-3 shadow-lg shadow-amber-500/30">
                <GraduationCap className="w-8 h-8 fill-black" />
              </div>

              <div className="text-xs font-extrabold tracking-widest text-amber-400 uppercase">
                JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-serif py-1">
                CERTIFICATE OF EXCELLENCE
              </h1>

              <div className="text-xs font-bold tracking-widest text-zinc-300 uppercase">
                IN COMPREHENSIVE CODING & ALGORITHMIC ARCHITECTURE
              </div>

              <div className="text-xs text-amber-400 font-semibold tracking-wide">
                JIET CONNECT PROGRAM · POWERED BY KAPIL
              </div>

            </div>

            {/* Recipient Text */}
            <div className="text-center space-y-4 my-8">
              <p className="text-xs sm:text-sm text-zinc-400 italic font-serif">
                This is to officially certify that
              </p>

              <div className="border-b border-amber-500/50 pb-2 inline-block min-w-[300px]">
                <span className="text-2xl sm:text-4xl font-extrabold font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300">
                  {userProfile.name || 'Honorable Student'}
                </span>
              </div>

              <div className="text-xs text-zinc-300 max-w-xl mx-auto leading-relaxed">
                Roll No: <span className="font-semibold text-white font-mono">{userProfile.rollNo || 'JIET-2026-REG'}</span> · Department of <span className="font-semibold text-white">{userProfile.branch}</span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed pt-2 font-light">
                has demonstrated outstanding algorithmic competence by analyzing, testing, compiling, and solving rigorous algorithmic engineering problems across C, C++, Java, and Python, mastering time-space complexity optimization and architectural patterns.
              </p>
            </div>

            {/* Bottom Proof Deck: Signatures, QR Code & Seal */}
            <div className="pt-8 mt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Left: Lead Faculty Signature */}
              <div className="text-center sm:text-left space-y-1">
                <div className="font-serif italic text-base text-amber-300 font-bold border-b border-zinc-700 pb-1 w-44 text-center sm:text-left">
                  Kapil Narula
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">KAPIL</div>
                <div className="text-[11px] text-zinc-400">Lead Faculty & Platform Architect</div>
                <div className="text-[10px] text-amber-400/90 font-medium">JIET Coding Curriculum</div>
              </div>

              {/* Center: Real Scannable QR Code */}
              <div className="flex flex-col items-center cursor-pointer group" onClick={handleVerifyClick} title="Scan or click to verify authentic credential">
                {qrCodeDataUrl ? (
                  <div className="p-2 bg-white rounded-lg border-2 border-amber-400 shadow-lg group-hover:scale-105 transition-transform">
                    <img
                      src={qrCodeDataUrl}
                      alt="Verified Certificate QR Code"
                      className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500">
                    Generating QR...
                  </div>
                )}
                <div className="text-[10px] font-mono text-amber-400 mt-1.5 flex items-center gap-1 group-hover:underline">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Scan / Click to Verify</span>
                </div>
              </div>

              {/* Right: Academic Seal & ID */}
              <div className="text-center sm:text-right space-y-1">
                <div className="font-serif italic text-base text-zinc-200 font-bold border-b border-zinc-700 pb-1 w-44 text-center sm:text-right ml-auto">
                  Dean Academics
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">JIET ACADEMIC COUNCIL</div>
                <div className="text-[11px] text-amber-400 font-mono">
                  ID: {credentialId}
                </div>
                <div className="text-[10px] text-zinc-500">
                  Issued: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Badges Section */}
      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 font-serif">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Earned Engineering Badges</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Complete curriculum questions and run multi-language solutions to unlock prestigious badges.
            </p>
          </div>
          <div className="text-xs text-zinc-400 font-mono">
            <span className="font-bold text-amber-400 tabular-nums">{userProfile.earnedBadgeIds?.length || 1}</span> /{' '}
            <span className="tabular-nums text-white">{badges.length}</span> Badges Unlocked
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {badges.map((badge) => {
            const isUnlocked = userProfile.earnedBadgeIds?.includes(badge.id) || badge.id === 'b-first-step';
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-xl border transition-all ${
                  isUnlocked
                    ? 'bg-zinc-950 border-amber-500/40 shadow-lg'
                    : 'bg-zinc-950/40 border-zinc-800 opacity-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${
                      isUnlocked
                        ? 'bg-gradient-to-br from-amber-400 to-yellow-600 text-black shadow-md'
                        : 'bg-zinc-900 text-zinc-600'
                    }`}
                  >
                    <Award className="w-5 h-5 fill-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white truncate">
                        {badge.title}
                      </h4>
                      {isUnlocked && (
                        <CheckCircle2 className="w-3.5 h-3.5 fill-amber-400 text-black shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400 line-clamp-2 mt-0.5 leading-relaxed font-light">
                      {badge.description}
                    </p>
                    <div className="mt-2 text-[10px] text-amber-400/90 font-mono font-medium">
                      Requirement: {badge.requirement}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
