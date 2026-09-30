import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';
import { Badge, Problem, UserProfile } from '../types';
import { 
  Award, 
  Printer, 
  QrCode, 
  ShieldCheck, 
  CheckCircle2, 
  Share2, 
  Sparkles,
  ExternalLink,
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
  const isComplete = solvedCount >= 1; // Can claim credential once at least 1 problem is solved

  const credentialId = userProfile.certificateId || `JIET-KAPIL-2026-${Math.abs(hashString(userProfile.name + 'JIET')).toString(16).toUpperCase()}`;

  // Generate real QR code encoding verification URL
  useEffect(() => {
    const verificationUrl = `${window.location.origin}/?verify=${credentialId}`;
    QRCode.toDataURL(verificationUrl, {
      width: 220,
      margin: 1,
      color: {
        dark: '#0f172a',
        light: '#ffffff'
      }
    })
      .then((url) => setQrCodeDataUrl(url))
      .catch((err) => console.error(err));
  }, [credentialId]);

  const handlePrint = () => {
    confetti({
      particleCount: 80,
      spread: 70,
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
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>QR-Verified Institute Certificate</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Credential issued by Jodhpur Institute of Engineering and Technology · Powered by Kapil
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleVerifyClick}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verify Live Credential</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow-md transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Official Certificate Visual Frame */}
      <div className="flex justify-center">
        <div
          ref={certificateRef}
          id="jiet-printable-certificate"
          className="w-full max-w-4xl bg-[#FCFAF5] text-slate-900 rounded-2xl border-8 border-double border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          
          {/* Subtle ornate background watermark pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Certificate Inner Border */}
          <div className="border border-slate-400/60 p-6 sm:p-10 rounded-xl relative">
            
            {/* Top Emblem and Header */}
            <div className="text-center space-y-2 mb-8">
              
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 text-amber-400 mb-2 shadow-md">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div className="text-xs font-bold tracking-widest text-slate-600 uppercase">
                JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase font-serif">
                CERTIFICATE OF EXCELLENCE
              </h1>

              <div className="text-xs font-semibold tracking-wider text-blue-900 uppercase">
                IN COMPREHENSIVE CODING & ALGORITHMIC ARCHITECTURE
              </div>

              <div className="text-xs text-slate-500 font-medium">
                JIET CONNECT PROGRAM · POWERED BY KAPIL
              </div>

            </div>

            {/* Recipient Text */}
            <div className="text-center space-y-4 my-8">
              <p className="text-xs sm:text-sm text-slate-600 italic">
                This is to officially certify that
              </p>

              <div className="border-b-2 border-slate-800 pb-2 inline-block min-w-[280px]">
                <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif tracking-wide">
                  {userProfile.name || 'Honorable Student'}
                </span>
              </div>

              <div className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
                Roll No: <span className="font-semibold text-slate-900 font-mono">{userProfile.rollNo || 'JIET-2026-REG'}</span> · Department of <span className="font-semibold text-slate-900">{userProfile.branch}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed pt-2">
                has demonstrated outstanding algorithmic competence by analyzing, testing, compiling, and solving rigorous algorithmic engineering problems across C, C++, Java, and Python, mastering time-space complexity optimization and architectural patterns.
              </p>
            </div>

            {/* Bottom Proof Deck: Signatures, QR Code & Seal */}
            <div className="pt-8 mt-8 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Left: Lead Faculty Signature */}
              <div className="text-center sm:text-left space-y-1">
                <div className="font-serif italic text-base text-slate-900 font-bold border-b border-slate-400 pb-1 w-44 text-center sm:text-left">
                  Kapil Narula
                </div>
                <div className="text-xs font-bold text-slate-900">KAPIL</div>
                <div className="text-[11px] text-slate-600">Lead Faculty & Platform Architect</div>
                <div className="text-[10px] text-slate-500">JIET Coding Curriculum</div>
              </div>

              {/* Center: Real Scannable QR Code */}
              <div className="flex flex-col items-center cursor-pointer group" onClick={handleVerifyClick} title="Scan or click to verify authentic credential">
                {qrCodeDataUrl ? (
                  <div className="p-2 bg-white rounded-lg border border-slate-300 shadow-sm group-hover:border-blue-500 transition-colors">
                    <img
                      src={qrCodeDataUrl}
                      alt="Verified Certificate QR Code"
                      className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-500">
                    Generating QR...
                  </div>
                )}
                <div className="text-[10px] font-mono text-slate-600 mt-1 flex items-center gap-1 group-hover:text-blue-700">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Scan to Verify</span>
                </div>
              </div>

              {/* Right: Academic Seal & ID */}
              <div className="text-center sm:text-right space-y-1">
                <div className="font-serif italic text-base text-slate-900 font-bold border-b border-slate-400 pb-1 w-44 text-center sm:text-right ml-auto">
                  Dean Academics
                </div>
                <div className="text-xs font-bold text-slate-900">JIET ACADEMIC COUNCIL</div>
                <div className="text-[11px] text-slate-600 font-mono">
                  ID: {credentialId}
                </div>
                <div className="text-[10px] text-slate-500">
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
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>Earned Engineering Badges</span>
            </h3>
            <p className="text-xs text-slate-400">
              Complete curriculum questions and run multi-language solutions to unlock prestigious badges.
            </p>
          </div>
          <div className="text-xs text-slate-400">
            <span className="font-bold text-white tabular-nums">{userProfile.earnedBadgeIds?.length || 1}</span> of{' '}
            <span className="tabular-nums">{badges.length}</span> Badges Unlocked
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
                    ? 'bg-slate-900/90 border-blue-500/40 shadow-sm'
                    : 'bg-slate-900/40 border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${
                      isUnlocked
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white truncate">
                        {badge.title}
                      </h4>
                      {isUnlocked && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-relaxed">
                      {badge.description}
                    </p>
                    <div className="mt-2 text-[10px] text-slate-500 font-medium">
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
