import React, { useState } from 'react';
import { UserProfile, Language } from '../types';
import { GraduationCap, Sparkles, CheckCircle2, BookOpen } from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onSave: (profile: Partial<UserProfile>) => void;
  onClose?: () => void;
  currentProfile: UserProfile;
  isEditMode?: boolean;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onSave,
  onClose,
  currentProfile,
  isEditMode = false
}) => {
  const [name, setName] = useState(currentProfile.name || '');
  const [rollNo, setRollNo] = useState(currentProfile.rollNo || '');
  const [branch, setBranch] = useState(currentProfile.branch || 'Computer Science & Engineering');
  const [preferredLanguage, setPreferredLanguage] = useState<Language>(currentProfile.preferredLanguage || 'cpp');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onSave({
      name: name.trim(),
      rollNo: rollNo.trim() || undefined,
      branch: branch.trim(),
      preferredLanguage
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-slate-100">
        
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">
              {isEditMode ? 'Learner Profile Settings' : 'Begin Your Coding Journey'}
            </h2>
            <p className="text-xs text-slate-400">
              Jodhpur Institute of Engineering & Technology · JIET CONNECT
            </p>
          </div>
        </div>

        {!isEditMode && (
          <div className="p-3.5 mb-6 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300 space-y-1">
            <div className="flex items-center gap-1.5 font-medium text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>No Sign-Up or Passwords Required</span>
            </div>
            <p className="text-slate-400">
              Enter your name to personalize your coding workspace, solve programs in C, C++, Java, & Python, unlock engineering badges, and generate official QR-verified certificates powered by Kapil.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aditya Sharma"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">
              This name will be printed on your official QR-verified certificate.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Roll / Scholar No. (Optional)
              </label>
              <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                placeholder="e.g. 21EJICS042"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Department / Branch
              </label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Computer Science & Engineering">CSE (Computer Science)</option>
                <option value="Information Technology">Information Technology</option>
                <option value="AI & Data Science">AI & Data Science</option>
                <option value="Electronics & Communication">Electronics & Comm.</option>
                <option value="Mechanical Engineering">Mechanical Engg.</option>
                <option value="Civil Engineering">Civil Engg.</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Preferred Starter Language
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['cpp', 'c', 'java', 'python'] as Language[]).map((lang) => (
                <button
                  type="button"
                  key={lang}
                  onClick={() => setPreferredLanguage(lang)}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                    preferredLanguage === lang
                      ? 'bg-blue-600 border-blue-500 text-white shadow-sm'
                      : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {lang === 'cpp' ? 'C++' : lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3">
            {isEditMode && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={!name.trim()}
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center gap-2"
            >
              <span>{isEditMode ? 'Update Profile' : 'Start Practicing Now'}</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
