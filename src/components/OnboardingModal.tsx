import React, { useState } from 'react';
import { UserProfile, Language } from '../types';
import { GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl shadow-black text-zinc-100 relative overflow-hidden">
        
        {/* Subtle Luxury Gold Ambient Corner Light */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3.5 mb-6 relative">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-inner">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>{isEditMode ? 'Learner Profile Settings' : 'Begin Your Coding Journey'}</span>
            </h2>
            <p className="text-xs text-amber-400/90 font-medium tracking-wide">
              Jodhpur Institute of Engineering & Technology · JIET CONNECT
            </p>
          </div>
        </div>

        {!isEditMode && (
          <div className="p-4 mb-6 rounded-xl bg-zinc-900/90 border border-amber-500/20 text-xs text-zinc-300 space-y-1.5 relative">
            <div className="flex items-center gap-1.5 font-bold text-amber-400 uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>No Sign-Up or Passwords Required</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Enter your name to personalize your elite engineering workspace, solve programs in C, C++, Java, & Python, unlock prestige badges, and generate official QR-verified certificates Powered By Kapil | Knowledge Multiverse Architect.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aditya Sharma"
              className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
            <span className="text-[11px] text-zinc-500 mt-1 block">
              This name will be embossed on your official QR-verified certificate.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Roll / Scholar No. (Optional)
              </label>
              <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                placeholder="e.g. 21EJICS042"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Department / Branch
              </label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
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
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
              Preferred Starter Language
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['cpp', 'c', 'java', 'python'] as Language[]).map((lang) => (
                <button
                  type="button"
                  key={lang}
                  onClick={() => setPreferredLanguage(lang)}
                  className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all ${
                    preferredLanguage === lang
                      ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 border-amber-400 text-black shadow-md'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-700'
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
                className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={!name.trim()}
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 disabled:opacity-50 text-black text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <span>{isEditMode ? 'Update Profile' : 'Start Practicing Now'}</span>
              <CheckCircle2 className="w-4 h-4 fill-black text-amber-300" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
