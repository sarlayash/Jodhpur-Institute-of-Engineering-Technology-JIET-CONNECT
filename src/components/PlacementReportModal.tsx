import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { PlacementReportData } from '../utils/reportGenerator';
import { getVerificationUrl } from '../utils/qrHelper';
import { 
  FileText, 
  Download, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Compass, 
  BarChart3, 
  Smartphone,
  Award
} from 'lucide-react';

interface PlacementReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportData: PlacementReportData;
}

export const PlacementReportModal: React.FC<PlacementReportModalProps> = ({
  isOpen,
  onClose,
  reportData
}) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    // Generate Mobile-Proof Absolute Verification URL (No 404 on phones!)
    const verifyUrl = getVerificationUrl(reportData.credentialId);
    QRCode.toDataURL(verifyUrl, {
      width: 140,
      margin: 1,
      color: { dark: '#09090b', light: '#ffffff' }
    })
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error(err));
  }, [reportData.credentialId]);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    document.body.setAttribute('data-print-target', 'report');
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto no-print">
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-4xl w-full my-8 shadow-2xl shadow-black text-zinc-100 relative flex flex-col max-h-[92vh]">
        
        {/* Modal Top Control Bar (Hidden in Print) */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-black/80 rounded-t-2xl no-print">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-serif">
                360° Placement Readiness Diagnostic Report
              </h3>
              <p className="text-[11px] text-amber-400 font-medium">
                JIET CONNECT · POWERED BY KAPIL ONLY
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black text-xs font-bold flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Report</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Report Container (Formatted for Clean 2-Page Print) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8" id="jiet-printable-report">
          
          {/* ================= PAGE 1 ================= */}
          <div className="report-page border-2 border-amber-500/40 p-6 sm:p-8 rounded-2xl bg-black space-y-6 relative">
            
            {/* Document Institutional Header */}
            <div className="border-b-2 border-amber-500/40 pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-bold text-amber-400 tracking-widest uppercase mb-1">
                  JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY
                </div>
                <h1 className="text-xl sm:text-2xl font-black text-white font-serif tracking-tight">
                  360° COMPREHENSIVE PLACEMENT READINESS REPORT
                </h1>
                <div className="text-xs text-amber-400 font-bold tracking-wider uppercase mt-0.5">
                  POWERED BY KAPIL ONLY
                </div>
              </div>

              <div className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl">
                {qrCodeUrl && (
                  <img src={qrCodeUrl} alt="Report Verification QR" className="w-16 h-16 rounded bg-white p-0.5" />
                )}
                <div className="text-[11px] font-mono text-zinc-300 space-y-0.5">
                  <div className="text-amber-400 font-bold flex items-center gap-1">
                    <Smartphone className="w-3 h-3" /> Mobile Verified
                  </div>
                  <div className="text-[10px] text-zinc-400">ID: {reportData.credentialId}</div>
                  <div className="text-[10px] text-zinc-500">{reportData.reportDate}</div>
                </div>
              </div>
            </div>

            {/* Student Profile Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-zinc-950 p-4 rounded-xl border border-zinc-850 text-xs">
              <div>
                <span className="text-zinc-500 block text-[11px]">Learner Candidate</span>
                <strong className="text-white font-serif text-sm">{reportData.studentName}</strong>
              </div>
              <div>
                <span className="text-zinc-500 block text-[11px]">Roll / Scholar No</span>
                <strong className="font-mono text-zinc-200">{reportData.rollNo}</strong>
              </div>
              <div>
                <span className="text-zinc-500 block text-[11px]">Department / Branch</span>
                <strong className="text-zinc-200">{reportData.branch}</strong>
              </div>
              <div>
                <span className="text-zinc-500 block text-[11px]">Curriculum Solved</span>
                <strong className="text-amber-400 font-bold">{reportData.solvedCount} / {reportData.totalCount} ({reportData.completionRate}%)</strong>
              </div>
            </div>

            {/* 360° Score Hero Panel (1 to 100) */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-black border border-amber-500/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>360° Placement Readiness Rating</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                  {reportData.tier}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed font-light">
                  {reportData.tierDescription}
                </p>
                <div className="text-xs text-zinc-400 pt-1 flex flex-wrap items-center gap-3">
                  <span>Candidate Percentile: <strong className="text-amber-400">{reportData.percentile}th Percentile</strong></span>
                  <span>Aptitude Score: <strong className="text-amber-400">{reportData.aptitudeScore} pts</strong></span>
                  <span>Mocks Completed: <strong className="text-amber-400">{reportData.mockAssessmentsCompleted} / 5</strong></span>
                </div>
              </div>

              {/* Score Dial (1 to 100) */}
              <div className="relative shrink-0 flex flex-col items-center justify-center w-36 h-36 rounded-full bg-black border-4 border-amber-400/80 shadow-lg shadow-amber-500/20">
                <span className="text-4xl sm:text-5xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-300">
                  {reportData.score}
                </span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">
                  OUT OF 100
                </span>
              </div>

            </div>

            {/* Unlocked Titles */}
            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-850 flex items-center gap-2 text-xs">
              <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px] shrink-0">
                Unlocked Placement Titles:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {reportData.unlockedTitles.map((t, idx) => (
                  <span key={idx} className="bg-amber-400/10 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded text-[11px] font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Strengths & Weaknesses 2-Column Deck */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Core Strengths */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 pb-2 border-b border-zinc-850">
                  <CheckCircle2 className="w-4 h-4 fill-amber-400 text-black" />
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    Demonstrated Technical Strengths
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {reportData.strengths.slice(0, 3).map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-black border border-zinc-850 space-y-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-[11px]">{s.title}</span>
                        <span className="text-[9px] text-amber-400 font-mono bg-amber-400/10 px-1.5 py-0.5 rounded">{s.tag}</span>
                      </div>
                      <p className="text-zinc-400 leading-relaxed text-[10px] font-light">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weaknesses & Blind Spots */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-zinc-300 pb-2 border-b border-zinc-850">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    Targeted Growth & Blind Spots
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {reportData.weaknesses.slice(0, 3).map((w, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-black border border-zinc-850 space-y-1 text-xs">
                      <span className="font-bold text-zinc-200 block text-[11px]">{w.title}</span>
                      <p className="text-zinc-400 leading-relaxed text-[10px] font-light">
                        {w.description}
                      </p>
                      <div className="text-[9px] text-amber-400/90 font-mono pt-0.5">
                        {w.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Page 1 Footer */}
            <div className="pt-3 border-t border-zinc-850 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>JIET CONNECT · 360° PLACEMENT DOSSIER · POWERED BY KAPIL ONLY</span>
              <span>Page 1 of 2</span>
            </div>

          </div>


          {/* ================= PAGE 2 ================= */}
          <div className="report-page border-2 border-amber-500/40 p-6 sm:p-8 rounded-2xl bg-black space-y-6 relative">
            
            {/* Header Page 2 */}
            <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">
                  TECHNICAL MASTERY MATRIX & INTERVIEW ROADMAP
                </span>
                <h3 className="text-base font-bold text-white font-serif">
                  Curriculum Competencies & Corporate Preparation Strategy
                </h3>
              </div>
              <span className="text-xs text-zinc-400 font-mono">Candidate: {reportData.studentName}</span>
            </div>

            {/* Module-by-Module Mastery Matrix (8 Modules) */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-850">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-amber-400" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Curriculum Module Mastery Matrix (8 Technical Modules)
                  </h4>
                </div>
                <span className="text-xs text-zinc-400 font-mono">
                  Solved: {reportData.solvedCount} / {reportData.totalCount}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-500 uppercase text-[10px]">
                      <th className="py-1.5">Module</th>
                      <th className="py-1.5">Primary Pattern</th>
                      <th className="py-1.5">Solved</th>
                      <th className="py-1.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900">
                    {reportData.moduleMastery.map((m) => (
                      <tr key={m.moduleNumber} className="hover:bg-zinc-900/40">
                        <td className="py-2 font-medium text-white text-[11px]">
                          Mod {m.moduleNumber}: {m.moduleName}
                        </td>
                        <td className="py-2 text-zinc-400 font-mono text-[10px]">
                          {m.primaryPattern}
                        </td>
                        <td className="py-2">
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-zinc-900 rounded-full h-1.5 overflow-hidden border border-zinc-800">
                              <div
                                className="bg-amber-400 h-1.5 rounded-full"
                                style={{ width: `${m.percentage}%` }}
                              />
                            </div>
                            <span className="text-[10px] font-mono text-zinc-300">
                              {m.solvedProblems}/{m.totalProblems} ({m.percentage}%)
                            </span>
                          </div>
                        </td>
                        <td className="py-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                              m.status === 'Mastered'
                                ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                                : m.status === 'Proficient'
                                ? 'bg-zinc-800 text-zinc-200 border border-zinc-700'
                                : m.status === 'In Progress'
                                ? 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                                : 'bg-zinc-950 text-zinc-500 border border-zinc-900'
                            }`}
                          >
                            {m.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4-Phase Opportunity Roadmap for Placement Drives */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 pb-2 border-b border-zinc-850">
                <Compass className="w-4 h-4" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Targeted 4-Phase Corporate Hiring Roadmap
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reportData.opportunityRoadmap.map((road, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-black border border-zinc-850 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-300 text-[11px]">{road.phase}</span>
                    </div>
                    <div className="text-[10px] font-semibold text-zinc-300">
                      Focus: {road.focus}
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-zinc-400 text-[10px] font-light">
                      {road.actionItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="pt-1 text-[9px] text-zinc-500">
                      Target Companies: <strong className="text-zinc-300">{road.targetCompanies}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Endorsement and Sole Faculty Signature: KAPIL ONLY */}
            <div className="pt-5 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
              <div className="text-center sm:text-left space-y-1">
                <div className="font-serif italic text-base text-amber-300 font-bold border-b border-amber-500/40 pb-1 w-48">
                  Kapil Narula
                </div>
                <div className="font-bold text-white text-[11px] uppercase tracking-wider">KAPIL NARULA</div>
                <div className="text-[10px] text-amber-400 font-medium">Lead Faculty & Platform Architect</div>
                <div className="text-[9px] text-zinc-400 uppercase tracking-widest font-semibold">POWERED BY KAPIL ONLY</div>
              </div>

              <div className="text-center sm:text-right space-y-1">
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  AUTHENTICATED RECORD
                </div>
                <div className="font-mono text-xs font-bold text-white border-b border-zinc-700 pb-1 w-48 ml-auto">
                  ID: {reportData.credentialId}
                </div>
                <div className="text-[10px] text-zinc-400 font-mono">Mobile Validated (No 404)</div>
                <div className="text-[9px] text-zinc-500">Validated: {reportData.reportDate}</div>
              </div>
            </div>

            {/* Page 2 Footer */}
            <div className="pt-3 border-t border-zinc-850 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>JIET CONNECT · 360° PLACEMENT DOSSIER · POWERED BY KAPIL ONLY</span>
              <span>Page 2 of 2</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
