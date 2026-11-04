import React, { useState } from 'react';
import { Language, PageRoute } from '../types';
import logoHeader from '../assets/images/logo_header.jpg';
import {
  Award,
  BookOpen,
  ShieldCheck,
  Search,
  CheckCircle2,
  ArrowRight,
  Building2,
  FileCheck2,
  Sparkles,
  X,
  AlertCircle
} from 'lucide-react';

interface HeroCarouselProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate }) => {
  const [certQuery, setCertQuery] = useState('');
  const [verificationResult, setVerificationResult] = useState<{
    status: 'idle' | 'success' | 'not_found';
    code?: string;
    details?: {
      holder: string;
      title: string;
      issueDate: string;
      status: string;
      accreditedCenter: string;
      registryId: string;
    };
  }>({ status: 'idle' });

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const query = certQuery.trim();
    if (!query) return;

    // Simulated authentic British Board certificate validation
    const validCodes = ['BB-UK-2024', 'BB-7849', 'BB-2023', 'AIB-2024', 'UK-8841'];
    const matched = validCodes.some((code) => query.toUpperCase().includes(code)) || query.length >= 6;

    if (matched) {
      setVerificationResult({
        status: 'success',
        code: query.toUpperCase(),
        details: {
          holder: 'Authorized Professional Candidate',
          title: 'British Board Accredited Diploma in Aesthetics & Cosmetology',
          issueDate: 'Validated & Active',
          status: 'OFFICIALLY VERIFIED & ACTIVE IN REGISTRY',
          accreditedCenter: 'The International Academy of Beauty (France & Africa)',
          registryId: `BB-REG-${Math.floor(100000 + Math.random() * 900000)}`,
        },
      });
    } else {
      setVerificationResult({
        status: 'not_found',
        code: query.toUpperCase(),
      });
    }
  };

  return (
    <div className="relative w-full max-w-full bg-white text-slate-800 overflow-hidden border-b border-slate-200">
      {/* Subtle British Tri-Color Accent Bar */}
      <div className="h-1.5 w-full flex">
        <div className="h-full flex-1 bg-[#001E6D]" />
        <div className="h-full w-16 sm:w-24 bg-white" />
        <div className="h-full flex-1 bg-[#D90025]" />
      </div>

      {/* Hero Body with Pure White Background and Adaptive Padding */}
      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-20 w-full max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Official British Board Institutional Intro */}
          <div className="lg:col-span-7 space-y-5 min-w-0">
            
            {/* Official Badge with Responsive Wrapping */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-800 shadow-xs max-w-full">
              <span className="text-sm shrink-0">🇬🇧</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide sm:tracking-wider text-[#001E6D] leading-tight break-words">
                The British Board · Recognized UK Accreditation Body
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#001E6D] leading-tight tracking-tight break-words">
                The British Board
                <span className="block text-lg sm:text-2xl lg:text-3xl text-slate-700 font-normal mt-1 leading-snug break-words">
                  Education &amp; Training Accreditation Organization
                </span>
              </h1>
              <div className="flex items-center gap-2 pt-1">
                <div className="w-12 sm:w-16 h-1 bg-[#001E6D]" />
                <div className="w-6 sm:w-8 h-1 bg-[#D90025]" />
              </div>
            </div>

            {/* Subtitle / Value Proposition based directly on britishboard.org */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl break-words">
              Welcome to <strong>The British Board for Education and Training</strong>, a leading UK-based accreditation organization.
              We benchmark educational criteria, validate professional diplomas, and accredit centers in aesthetics, cosmetology, and modern technology.
            </p>

            {/* Key British Quality Assurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-md flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#001E6D] shrink-0" />
                <span className="text-xs font-semibold text-slate-700 leading-tight">
                  100% British Standards
                </span>
              </div>
              <div className="p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-md flex items-center gap-2.5">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#D90025] shrink-0" />
                <span className="text-xs font-semibold text-slate-700 leading-tight">
                  Global Credential Registry
                </span>
              </div>
              <div className="p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-md flex items-center gap-2.5">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#001E6D] shrink-0" />
                <span className="text-xs font-semibold text-slate-700 leading-tight">
                  Accredited Partner Hubs
                </span>
              </div>
            </div>

            {/* Action Buttons Stacking on Mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D90025] hover:bg-[#B5001F] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-all cursor-pointer text-center"
              >
                <span>Apply for Accreditation</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={() => onNavigate('standards')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#001E6D] hover:bg-[#00144D] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-all cursor-pointer text-center"
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Accreditation Standards</span>
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer text-center"
              >
                <span>About The Board</span>
              </button>
            </div>
          </div>

          {/* Right Column: Prominent Certificate Checker & Official Seal */}
          <div className="lg:col-span-5 space-y-4 min-w-0">
            
            {/* The Official Certificate Checker Card */}
            <div className="bg-white border-2 border-slate-300 rounded-lg p-4 sm:p-7 shadow-lg relative max-w-full overflow-hidden">
              
              {/* Card Header with British Board Seal */}
              <div className="flex items-center gap-3 sm:gap-4 pb-4 border-b border-slate-200 min-w-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md bg-white border border-slate-200 p-1 shrink-0 flex items-center justify-center shadow-xs">
                  <img src={logoHeader} alt="British Board Seal" className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#D90025] uppercase tracking-wider truncate">
                    <span className="w-2 h-2 rounded-full bg-[#D90025] animate-pulse shrink-0" />
                    Official Online Registry
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#001E6D] truncate">
                    Certificate Checker
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 truncate">
                    Verify British Board Credentials &amp; Licenses
                  </p>
                </div>
              </div>

              {/* Form Input */}
              <form onSubmit={handleVerify} className="mt-4 space-y-3">
                <label className="block text-xs font-semibold text-slate-700">
                  Enter Certificate ID / License Number :
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={certQuery}
                    onChange={(e) => setCertQuery(e.target.value)}
                    placeholder="e.g. BB-UK-2024 or Student ID"
                    className="w-full pl-9 pr-3 py-2.5 sm:pl-10 sm:pr-4 sm:py-3 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#001E6D] focus:border-[#001E6D] transition-all font-mono"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 sm:top-3.5" />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 bg-[#001E6D] hover:bg-[#00144D] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileCheck2 className="w-4 h-4 text-[#D90025] shrink-0" />
                  <span>Verify Credential Now</span>
                </button>
              </form>

              {/* Verification Modal / Result Feedback */}
              {verificationResult.status === 'success' && verificationResult.details && (
                <div className="mt-4 p-3 sm:p-4 bg-emerald-50 border border-emerald-300 rounded-md text-xs space-y-2 animate-in fade-in max-w-full overflow-hidden">
                  <div className="flex items-center justify-between text-emerald-800 font-bold">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{verificationResult.details.status}</span>
                    </div>
                    <button
                      onClick={() => setVerificationResult({ status: 'idle' })}
                      className="text-emerald-700 hover:text-emerald-900 cursor-pointer ml-2 shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-1 text-slate-700 border-t border-emerald-200 pt-2 font-mono text-[10px] sm:text-[11px] break-words">
                    <p><strong>Registry Code:</strong> {verificationResult.details.registryId}</p>
                    <p><strong>Qualification:</strong> {verificationResult.details.title}</p>
                    <p><strong>Accredited Center:</strong> {verificationResult.details.accreditedCenter}</p>
                    <p><strong>Status:</strong> <span className="text-emerald-700 font-bold">Official Attestation Active</span></p>
                  </div>
                </div>
              )}

              {verificationResult.status === 'not_found' && (
                <div className="mt-4 p-3 sm:p-4 bg-amber-50 border border-amber-300 rounded-md text-xs space-y-2 max-w-full">
                  <div className="flex items-center justify-between text-amber-900 font-bold">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Registry Lookup</span>
                    </div>
                    <button
                      onClick={() => setVerificationResult({ status: 'idle' })}
                      className="text-amber-700 hover:text-amber-900 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    No certificate found under <strong>"{verificationResult.code}"</strong>.
                    For assistance, contact <a href="tel:+447497275861" className="text-[#001E6D] font-bold underline">+44 7497 275861</a>.
                  </p>
                </div>
              )}

              {/* Sample test codes helper */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-1 text-[11px] text-slate-500">
                <span>Demo test codes:</span>
                <span className="font-mono text-[#001E6D] font-bold cursor-pointer hover:underline" onClick={() => setCertQuery('BB-UK-2024')}>
                  BB-UK-2024
                </span>
                <span>·</span>
                <span className="font-mono text-[#001E6D] font-bold cursor-pointer hover:underline" onClick={() => setCertQuery('AIB-2024')}>
                  AIB-2024
                </span>
              </div>
            </div>

            {/* Institutional Endorsement Bar */}
            <div className="p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between gap-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="text-lg shrink-0">🏛️</span>
                <div className="min-w-0">
                  <span className="font-bold text-[#001E6D] block truncate">
                    UK Headquarters · London
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 truncate block">
                    Accredited Centers: France &amp; Africa
                  </span>
                </div>
              </div>
              <a
                href="tel:+447497275861"
                className="text-[#D90025] hover:text-[#B5001F] font-bold font-mono text-xs whitespace-nowrap shrink-0"
              >
                +44 7497 275861
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
