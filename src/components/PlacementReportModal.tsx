import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { PlacementReportData } from '../utils/reportGenerator';
import { 
  FileText, 
  Download, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Compass, 
  BarChart3, 
  Award,
  Layers,
  Building2,
  Calendar
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
    const verifyUrl = `${window.location.origin}/?verify=${reportData.credentialId}`;
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
    // Set body print target to 'report' so only the report prints
    document.body.setAttribute('data-print-target', 'report');
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-4xl w-full my-8 shadow-2xl shadow-black text-zinc-100 relative flex flex-col max-h-[92vh]">
        
        {/* Modal Top Control Bar (Hidden in Print) */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-black/80 rounded-t-2xl no-print">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-serif">
                Professional Engineering Diagnostic Report
              </h3>
              <p className="text-[11px] text-amber-400 font-medium">
                JIET Training & Placement Cell · Powered by Kapil
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

        {/* Scrollable Printable Report Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8" id="jiet-printable-report">
          
          {/* Document Institutional Header */}
          <div className="border-b-2 border-amber-500/40 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold text-amber-400 tracking-widest uppercase mb-1">
                JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white font-serif tracking-tight">
                COMPREHENSIVE PLACEMENT READINESS REPORT
              </h1>
              <p className="text-xs text-zinc-400 mt-0.5">
                Technical Interview Diagnostic, Algorithmic Mastery Matrix & Industry Roadmap
              </p>
            </div>

            <div className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl">
              {qrCodeUrl && (
                <img src={qrCodeUrl} alt="Report Verification QR" className="w-16 h-16 rounded bg-white p-0.5" />
              )}
              <div className="text-[11px] font-mono text-zinc-300 space-y-0.5">
                <div className="text-amber-400 font-bold">VERIFIED REPORT</div>
                <div className="text-[10px] text-zinc-400">ID: {reportData.credentialId}</div>
                <div className="text-[10px] text-zinc-500">{reportData.reportDate}</div>
              </div>
            </div>
          </div>

          {/* Student Profile Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black p-4 rounded-xl border border-zinc-850 text-xs">
            <div>
              <span className="text-zinc-500 block text-[11px]">Learner Name</span>
              <strong className="text-white font-serif text-sm">{reportData.studentName}</strong>
            </div>
            <div>
              <span className="text-zinc-500 block text-[11px]">Roll / Scholar No</span>
              <strong className="font-mono text-zinc-200">{reportData.rollNo}</strong>
            </div>
            <div>
              <span className="text-zinc-500 block text-[11px]">Department</span>
              <strong className="text-zinc-200">{reportData.branch}</strong>
            </div>
            <div>
              <span className="text-zinc-500 block text-[11px]">Curriculum Solved</span>
              <strong className="text-amber-400 font-bold">{reportData.solvedCount} / {reportData.totalCount} ({reportData.completionRate}%)</strong>
            </div>
          </div>

          {/* Score Hero Panel (1 to 100) */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-black via-zinc-950 to-zinc-900 border border-amber-500/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Placement Readiness Rating</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                {reportData.tier}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
                {reportData.tierDescription}
              </p>
              <div className="text-xs text-zinc-400 pt-1">
                Estimated Industry Readiness: <strong className="text-amber-400">{reportData.percentile}th Percentile</strong> among candidate pool.
              </div>
            </div>

            {/* Score Dial (1 to 100) */}
            <div className="relative shrink-0 flex flex-col items-center justify-center w-36 h-36 rounded-full bg-black border-4 border-amber-400/70 shadow-lg shadow-amber-500/20">
              <span className="text-4xl sm:text-5xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-300">
                {reportData.score}
              </span>
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">
                OUT OF 100
              </span>
            </div>

          </div>

          {/* Strengths & Weaknesses 2-Column Deck */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Core Strengths */}
            <div className="bg-black/80 border border-zinc-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 pb-2 border-b border-zinc-850">
                <CheckCircle2 className="w-4 h-4 fill-amber-400 text-black" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Demonstrated Strengths
                </h3>
              </div>
              <div className="space-y-3">
                {reportData.strengths.map((s, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-zinc-900 border border-zinc-850 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{s.title}</span>
                      <span className="text-[10px] text-amber-400 font-mono bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">{s.tag}</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed text-[11px]">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Weaknesses & Blind Spots */}
            <div className="bg-black/80 border border-zinc-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-zinc-300 pb-2 border-b border-zinc-850">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Targeted Blind Spots & Focus
                </h3>
              </div>
              <div className="space-y-3">
                {reportData.weaknesses.map((w, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-zinc-900 border border-zinc-850 space-y-1 text-xs">
                    <span className="font-bold text-zinc-200 block">{w.title}</span>
                    <p className="text-zinc-400 leading-relaxed text-[11px]">
                      {w.description}
                    </p>
                    <div className="text-[10px] text-amber-400/90 font-mono pt-1">
                      {w.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Module-by-Module Mastery Matrix */}
          <div className="bg-black/80 border border-zinc-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-850">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Curriculum Module Mastery Matrix (8 Modules)
                </h3>
              </div>
              <span className="text-xs text-zinc-400 font-mono">
                Total Solved: {reportData.solvedCount} / {reportData.totalCount}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-500 uppercase text-[10px]">
                    <th className="py-2">Module</th>
                    <th className="py-2">Primary Pattern</th>
                    <th className="py-2">Progress</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  {reportData.moduleMastery.map((m) => (
                    <tr key={m.moduleNumber} className="hover:bg-zinc-900/40">
                      <td className="py-2.5 font-medium text-white">
                        Mod {m.moduleNumber}: {m.moduleName}
                      </td>
                      <td className="py-2.5 text-zinc-400 font-mono text-[11px]">
                        {m.primaryPattern}
                      </td>
                      <td className="py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-zinc-900 rounded-full h-1.5 overflow-hidden border border-zinc-800">
                            <div
                              className="bg-amber-400 h-1.5 rounded-full"
                              style={{ width: `${m.percentage}%` }}
                            />
                          </div>
                          <span className="text-[11px] font-mono text-zinc-300">
                            {m.solvedProblems}/{m.totalProblems} ({m.percentage}%)
                          </span>
                        </div>
                      </td>
                      <td className="py-2.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
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
          <div className="bg-black/80 border border-zinc-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 pb-2 border-b border-zinc-850">
              <Compass className="w-4 h-4" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Targeted 4-Phase Placement Conversion Roadmap
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reportData.opportunityRoadmap.map((road, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-850 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-300">{road.phase}</span>
                  </div>
                  <div className="text-[11px] font-semibold text-zinc-300">
                    Focus: {road.focus}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-400 text-[11px]">
                    {road.actionItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="pt-1 text-[10px] text-zinc-500">
                    Target Hiring: <strong className="text-zinc-300">{road.targetCompanies}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Endorsement and Faculty Signatures */}
          <div className="pt-6 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
            <div className="text-center sm:text-left space-y-1">
              <div className="font-serif italic text-base text-amber-300 font-bold border-b border-zinc-700 pb-1 w-44">
                Kapil Narula
              </div>
              <div className="font-bold text-white text-[11px] uppercase tracking-wider">KAPIL NARULA</div>
              <div className="text-[10px] text-zinc-400">Lead Faculty & Platform Architect · JIET Connect</div>
            </div>

            <div className="text-center sm:text-right space-y-1">
              <div className="font-serif italic text-base text-zinc-200 font-bold border-b border-zinc-700 pb-1 w-44 ml-auto">
                Training & Placement Cell
              </div>
              <div className="font-bold text-white text-[11px] uppercase tracking-wider">JIET CAREER DEVELOPMENT</div>
              <div className="text-[10px] text-amber-400 font-mono">Official Validation: {reportData.credentialId}</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
