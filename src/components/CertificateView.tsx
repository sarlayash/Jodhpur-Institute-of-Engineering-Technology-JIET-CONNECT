import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';
import { Badge, Problem, UserProfile } from '../types';
import { downloadCertificateAsPng, downloadBadgeAsPng } from '../utils/canvasExport';
import { getVerificationUrl } from '../utils/qrHelper';
import { 
  Award, 
  Printer, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  GraduationCap,
  Download,
  TrendingUp,
  Smartphone
} from 'lucide-react';

interface CertificateViewProps {
  userProfile: UserProfile;
  problems: Problem[];
  badges: Badge[];
  onOpenVerificationModal: (certId: string) => void;
  onOpenEditProfile: () => void;
  onOpenPlacementReport: () => void;
  onSelectBadge: (badge: Badge) => void;
}

export const CertificateView: React.FC<CertificateViewProps> = ({
  userProfile,
  problems,
  badges,
  onOpenVerificationModal,
  onOpenEditProfile,
  onOpenPlacementReport,
  onSelectBadge
}) => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [isExportingPng, setIsExportingPng] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const solvedSet = new Set(userProfile.solvedProblemIds);
  const solvedCount = problems.filter(p => solvedSet.has(p.id)).length;

  const credentialId = userProfile.certificateId || `JIET-KAPIL-2026-${Math.abs(hashString(userProfile.name + 'JIET')).toString(16).toUpperCase()}`;

  useEffect(() => {
    // Generate Mobile-Proof Absolute Verification URL (No 404 on phones!)
    const verificationUrl = getVerificationUrl(credentialId);
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

  const handleDownloadPdf = () => {
    document.body.setAttribute('data-print-target', 'certificate');
    const cleanup = () => {
      document.body.removeAttribute('data-print-target');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    confetti({
      particleCount: 100,
      spread: 80,
      colors: ['#f59e0b', '#d97706', '#ffffff', '#71717a'],
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const handleDownloadPng = async () => {
    setIsExportingPng(true);
    try {
      await downloadCertificateAsPng(userProfile, credentialId);
      confetti({
        particleCount: 80,
        spread: 60,
        colors: ['#f59e0b', '#fbbf24', '#ffffff']
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsExportingPng(false);
    }
  };

  const handleVerifyClick = () => {
    onOpenVerificationModal(credentialId);
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* Top Banner & Control Deck with PNG & PDF & Report Actions */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-zinc-950 border border-zinc-800 p-5 rounded-2xl shadow-xl no-print">
        <div>
          <div className="text-[11px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
            <Award className="w-4 h-4" />
            <span>OFFICIAL ENGINEERING CREDENTIALS · POWERED BY KAPIL | KNOWLEDGE MULTIVERSE ARCHITECT</span>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight font-serif">
            QR-Verified Institute Certificate & Placement Dossier
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-amber-400 inline" />
            <span>QR Code verified on all mobile devices with zero 404 errors.</span>
          </p>
        </div>

        {/* Action Buttons Deck */}
        <div className="flex flex-wrap items-center gap-2.5">
          
          {/* Placement Report Button */}
          <button
            onClick={onOpenPlacementReport}
            className="px-3.5 py-2 text-xs font-bold rounded-lg bg-zinc-900 hover:bg-zinc-850 text-amber-300 border border-amber-500/40 hover:border-amber-400 flex items-center gap-1.5 transition-all shadow-sm"
          >
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span>Placement 360° Report (PDF)</span>
          </button>

          {/* Download Certificate PNG */}
          <button
            onClick={handleDownloadPng}
            disabled={isExportingPng}
            className="px-3.5 py-2 text-xs font-bold rounded-lg bg-zinc-900 hover:bg-zinc-850 text-white border border-zinc-700 hover:border-amber-400 flex items-center gap-1.5 transition-all shadow-sm"
            title="Download high-resolution Certificate as PNG image"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>{isExportingPng ? 'Rendering PNG...' : 'Certificate PNG'}</span>
          </button>

          {/* Download Certificate PDF */}
          <button
            onClick={handleDownloadPdf}
            className="px-4 py-2 text-xs font-extrabold rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition-all active:scale-95"
            title="Download Certificate formatted for PDF print"
          >
            <Printer className="w-4 h-4 fill-black" />
            <span>Certificate PDF</span>
          </button>

          {/* Verify Live */}
          <button
            onClick={handleVerifyClick}
            className="p-2 text-xs font-bold rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:text-white transition-colors"
            title="Verify Live Credential"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
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

              <div className="text-xs text-amber-400 font-bold tracking-widest uppercase">
                Powered By Kapil | Knowledge Multiverse Architect
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

            {/* Bottom Proof Deck: Sole Signatory Kapil & Mobile QR Code (NO DEANS) */}
            <div className="pt-8 mt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Left: Lead Faculty Signature - Kapil Narula */}
              <div className="text-center sm:text-left space-y-1">
                <div className="font-serif italic text-base text-amber-300 font-bold border-b border-amber-500/40 pb-1 w-48 text-center sm:text-left">
                  Kapil Narula
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">KAPIL NARULA</div>
                <div className="text-[11px] text-amber-400 font-medium">Lead Faculty & Platform Architect</div>
                <div className="text-[9px] text-zinc-400 uppercase tracking-widest font-semibold">Powered By Kapil | Knowledge Multiverse Architect</div>
              </div>

              {/* Center: Mobile-Verified Scannable QR Code */}
              <div className="flex flex-col items-center cursor-pointer group" onClick={handleVerifyClick} title="Scan on any smartphone to verify">
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
                  <span>Scan On Mobile To Verify</span>
                </div>
              </div>

              {/* Right: Official Credential ID & Validation Authority */}
              <div className="text-center sm:text-right space-y-1">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  AUTHENTICATED RECORD
                </div>
                <div className="font-mono text-xs font-bold text-white border-b border-zinc-700 pb-1 w-48 text-center sm:text-right ml-auto">
                  ID: {credentialId}
                </div>
                <div className="text-[11px] text-zinc-400 font-medium">JIET CONNECT VERIFICATION</div>
                <div className="text-[10px] text-zinc-500">
                  Issued: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Badges Section with PNG & PDF Download Capabilities */}
      <div className="space-y-4 pt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2 font-serif">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Earned Engineering Badges · Powered By Kapil | Knowledge Multiverse Architect</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Each badge can be downloaded in high-resolution PNG or printable PDF format for resumes & LinkedIn.
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
                className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-zinc-950 border-amber-500/40 shadow-lg'
                    : 'bg-zinc-950/40 border-zinc-800 opacity-50'
                }`}
              >
                <div>
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

                {/* Badge Action Buttons for PNG & PDF */}
                {isUnlocked && (
                  <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between gap-2">
                    <span className="text-[10px] text-zinc-500 font-mono">Powered By Kapil | Knowledge Multiverse Architect</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => downloadBadgeAsPng(badge, userProfile)}
                        className="px-2.5 py-1 text-[11px] font-bold rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 flex items-center gap-1 transition-colors"
                        title="Download Badge as PNG"
                      >
                        <Download className="w-3 h-3 text-amber-400" />
                        <span>PNG</span>
                      </button>
                      <button
                        onClick={() => onSelectBadge(badge)}
                        className="px-2.5 py-1 text-[11px] font-bold rounded bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 transition-colors"
                        title="Open Badge PDF & Print view"
                      >
                        <Printer className="w-3 h-3 text-amber-400" />
                        <span>PDF</span>
                      </button>
                    </div>
                  </div>
                )}

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
