import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './components/Header';
import { OnboardingModal } from './components/OnboardingModal';
import { CurriculumView } from './components/CurriculumView';
import { IdeLab } from './components/IdeLab';
import { VisualizerTab } from './components/VisualizerTab';
import { PatternTipsTab } from './components/PatternTipsTab';
import { CertificateView } from './components/CertificateView';
import { VerificationModal } from './components/VerificationModal';
import { PlacementReportModal } from './components/PlacementReportModal';
import { BadgeDownloadModal } from './components/BadgeDownloadModal';
import { allProblems } from './data/problemsData';
import { initialBadges } from './data/badgesData';
import { generatePlacementReport } from './utils/reportGenerator';
import { Badge, Problem, UserProfile } from './types';

const STORAGE_KEY = 'jiet_connect_learner_profile';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'curriculum' | 'ide' | 'visualizer' | 'patterns' | 'certificates'>('curriculum');
  const [currentProblem, setCurrentProblem] = useState<Problem>(allProblems[0]);
  
  // User Profile State
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return {
      name: '',
      rollNo: '',
      branch: 'Computer Science & Engineering',
      joinedAt: new Date().toISOString(),
      solvedProblemIds: [],
      attemptedProblemIds: [],
      preferredLanguage: 'cpp',
      earnedBadgeIds: ['b-first-step'],
      certificateId: `JIET-KAPIL-2026-${Math.floor(100000 + Math.random() * 900000)}`
    };
  });

  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [selectedBadgeForDownload, setSelectedBadgeForDownload] = useState<Badge | null>(null);
  const [verificationCredentialId, setVerificationCredentialId] = useState('');

  // Check if initial user has no name -> open onboarding modal
  useEffect(() => {
    if (!userProfile.name) {
      setIsOnboardingOpen(true);
    }
  }, [userProfile.name]);

  // Check URL params for ?verify=ID
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const verifyId = params.get('verify');
    if (verifyId) {
      setVerificationCredentialId(verifyId);
      setIsVerificationOpen(true);
    }
  }, []);

  // Save profile changes to localStorage
  const saveProfile = (updated: Partial<UserProfile>) => {
    setUserProfile((prev) => {
      const next = { ...prev, ...updated };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleOnboardingSave = (info: Partial<UserProfile>) => {
    saveProfile(info);
    setIsOnboardingOpen(false);
    confetti({ 
      particleCount: 70, 
      spread: 70,
      colors: ['#f59e0b', '#fbbf24', '#ffffff', '#71717a']
    });
  };

  const handleEditProfileSave = (info: Partial<UserProfile>) => {
    saveProfile(info);
    setIsEditProfileOpen(false);
  };

  // When a problem is solved in the IDE
  const handleProblemSolved = (problemId: string) => {
    if (!userProfile.solvedProblemIds.includes(problemId)) {
      const nextSolved = [...userProfile.solvedProblemIds, problemId];
      
      const nextBadges = [...userProfile.earnedBadgeIds];
      if (!nextBadges.includes('b-first-step')) nextBadges.push('b-first-step');

      const mod1Ids = allProblems.filter(p => p.moduleNumber === 1).map(p => p.id);
      if (mod1Ids.every(id => nextSolved.includes(id)) && !nextBadges.includes('b-graph-architect')) {
        nextBadges.push('b-graph-architect');
      }

      if (nextSolved.length >= 34 && !nextBadges.includes('b-jiet-excellence')) {
        nextBadges.push('b-jiet-excellence');
      }

      saveProfile({
        solvedProblemIds: nextSolved,
        earnedBadgeIds: nextBadges
      });

      confetti({
        particleCount: 80,
        spread: 70,
        colors: ['#f59e0b', '#fbbf24', '#ffffff', '#a1a1aa'],
        origin: { y: 0.7 }
      });
    }
  };

  const handleSelectProblem = (problem: Problem, tab: 'ide' | 'visualizer' | 'patterns' = 'ide') => {
    setCurrentProblem(problem);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solvedSet = new Set(userProfile.solvedProblemIds);
  const isCurrentProblemSolved = solvedSet.has(currentProblem.id);

  // Compute live placement report data
  const reportData = generatePlacementReport(userProfile, allProblems);

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 font-sans selection:bg-amber-400/30">
      
      {/* 3-Zone Header Contract */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        userProfile={userProfile}
        onOpenProfile={() => setIsEditProfileOpen(true)}
        onOpenPlacementReport={() => setIsReportOpen(true)}
        solvedCount={userProfile.solvedProblemIds.length}
        totalProblems={allProblems.length}
      />

      {/* Main App Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {currentTab === 'curriculum' && (
          <CurriculumView
            problems={allProblems}
            userProfile={userProfile}
            onSelectProblem={handleSelectProblem}
          />
        )}

        {currentTab === 'ide' && (
          <IdeLab
            currentProblem={currentProblem}
            onSelectProblem={setCurrentProblem}
            allProblems={allProblems}
            preferredLanguage={userProfile.preferredLanguage}
            onProblemSolved={handleProblemSolved}
            onSwitchToVisualizer={() => setCurrentTab('visualizer')}
            onSwitchToTips={() => setCurrentTab('patterns')}
            isSolved={isCurrentProblemSolved}
          />
        )}

        {currentTab === 'visualizer' && (
          <VisualizerTab
            currentProblem={currentProblem}
            onSelectProblem={setCurrentProblem}
            allProblems={allProblems}
            onOpenIde={() => setCurrentTab('ide')}
          />
        )}

        {currentTab === 'patterns' && (
          <PatternTipsTab
            currentProblem={currentProblem}
            onSelectProblem={setCurrentProblem}
            allProblems={allProblems}
            onOpenIde={() => setCurrentTab('ide')}
          />
        )}

        {currentTab === 'certificates' && (
          <CertificateView
            userProfile={userProfile}
            problems={allProblems}
            badges={initialBadges}
            onOpenVerificationModal={(id) => {
              setVerificationCredentialId(id);
              setIsVerificationOpen(true);
            }}
            onOpenEditProfile={() => setIsEditProfileOpen(true)}
            onOpenPlacementReport={() => setIsReportOpen(true)}
            onSelectBadge={(badge) => setSelectedBadgeForDownload(badge)}
          />
        )}
      </main>

      {/* Onboarding Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onSave={handleOnboardingSave}
        currentProfile={userProfile}
      />

      {/* Edit Profile Modal */}
      <OnboardingModal
        isOpen={isEditProfileOpen}
        onSave={handleEditProfileSave}
        onClose={() => setIsEditProfileOpen(false)}
        currentProfile={userProfile}
        isEditMode={true}
      />

      {/* QR Credential Verification Live Modal */}
      <VerificationModal
        isOpen={isVerificationOpen}
        onClose={() => setIsVerificationOpen(false)}
        userProfile={userProfile}
        credentialId={verificationCredentialId || userProfile.certificateId}
      />

      {/* Comprehensive Placement Readiness Diagnostic Report Modal */}
      <PlacementReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        reportData={reportData}
      />

      {/* Badge PNG & PDF Download Modal */}
      <BadgeDownloadModal
        badge={selectedBadgeForDownload}
        isOpen={!!selectedBadgeForDownload}
        onClose={() => setSelectedBadgeForDownload(null)}
        userProfile={userProfile}
      />

      {/* Elite Academic Footer */}
      <footer className="mt-20 border-t border-zinc-900 bg-black py-10 text-center text-xs text-zinc-500 no-print">
        <div className="max-w-7xl mx-auto px-4 space-y-2.5">
          <div className="font-bold text-zinc-300 font-serif tracking-wide text-sm">
            JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY · JIET CONNECT
          </div>
          <p className="text-[11px] text-amber-400 font-medium">
            An All-in-One Educational Hub for Comprehensive Coding Practice · Powered by Kapil
          </p>
          <div className="text-[10px] text-zinc-600">
            Autonomous Institution · Approved by AICTE, Affiliated to BTU Bikaner · NH-62, Mogra, Jodhpur, Rajasthan
          </div>
        </div>
      </footer>

    </div>
  );
}
