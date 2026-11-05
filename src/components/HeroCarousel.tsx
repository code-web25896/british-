import React, { useState, useEffect } from 'react';
import { Language, PageRoute, CertificateRecord } from '../types';
import { OFFICIAL_CERTIFICATES } from '../data/siteData';
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
  AlertCircle,
  Printer,
  Calendar,
  GraduationCap
} from 'lucide-react';

interface HeroCarouselProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate }) => {
  const [certQuery, setCertQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    status: 'idle' | 'success' | 'not_found';
    code?: string;
    certificate?: CertificateRecord;
  }>({ status: 'idle' });

  // Handle ESC key to close popup modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);


  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const query = certQuery.trim();
    if (!query) return;

    // Normalize search (case-insensitive, ignore spaces, with or without dashes)
    const cleanQuery = query.toUpperCase().replace(/\s+/g, '');
    const cleanQueryAlphaNum = query.toUpperCase().replace(/[^A-Z0-9]/g, '');

    const found = OFFICIAL_CERTIFICATES.find((cert) => {
      const cleanCertCode = cert.code.toUpperCase().replace(/\s+/g, '');
      const cleanCertAlphaNum = cert.code.toUpperCase().replace(/[^A-Z0-9]/g, '');
      return cleanCertCode === cleanQuery || cleanCertAlphaNum === cleanQueryAlphaNum;
    });

    if (found) {
      setVerificationResult({
        status: 'success',
        code: found.code,
        certificate: found,
      });
    } else {
      setVerificationResult({
        status: 'not_found',
        code: query,
      });
    }
    setIsModalOpen(true);
  };

  const handlePrintAttestation = () => {
    const cert = verificationResult.certificate;
    if (!cert) return;
    const printWindow = window.open('', '_blank', 'width=860,height=680');
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>The British Board – Certificate Attestation</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: Georgia, 'Times New Roman', serif; padding: 48px; color: #1e293b; background: #fff; }
          .tri-bar { display: flex; height: 6px; width: 100%; margin-bottom: 32px; }
          .tri-blue { flex: 1; background: #001E6D; }
          .tri-white { width: 60px; background: #fff; }
          .tri-red { flex: 1; background: #D90025; }
          .header { text-align: center; padding-bottom: 24px; border-bottom: 2px solid #001E6D; margin-bottom: 28px; }
          .board-title { color: #001E6D; font-size: 26px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; }
          .board-sub { font-size: 13px; color: #475569; margin-top: 4px; }
          .verified-badge { display: inline-block; margin-top: 10px; background: #dcfce7; border: 1px solid #16a34a; color: #15803d; font-size: 11px; font-weight: bold; padding: 4px 14px; border-radius: 999px; letter-spacing: 1px; text-transform: uppercase; }
          .holder-label { text-align: center; font-size: 10px; text-transform: uppercase; letter-spacing: 3px; color: #94a3b8; margin-bottom: 6px; }
          .student-name { text-align: center; font-size: 32px; font-weight: 900; color: #001E6D; margin-bottom: 12px; }
          .code-badge { display: block; text-align: center; margin-bottom: 28px; }
          .code-badge span { background: #001E6D; color: #fff; font-family: 'Courier New', monospace; font-size: 14px; font-weight: bold; padding: 6px 20px; border-radius: 4px; letter-spacing: 2px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
          .field { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; }
          .field.full { grid-column: span 2; }
          .field label { display: block; font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; font-family: Arial, sans-serif; }
          .field .val { font-size: 15px; font-weight: bold; color: #1e293b; }
          .field .val.red { color: #D90025; }
          .field .val.blue { color: #001E6D; }
          .footer { margin-top: 28px; border-top: 1px solid #e2e8f0; padding-top: 16px; display: flex; justify-content: space-between; align-items: center; font-size: 10px; color: #94a3b8; font-family: Arial, sans-serif; }
          .footer strong { color: #001E6D; }
          @media print { body { padding: 24px; } }
        </style>
      </head>
      <body>
        <div class="tri-bar"><div class="tri-blue"></div><div class="tri-white"></div><div class="tri-red"></div></div>
        <div class="header">
          <div class="board-title">🇬🇧 The British Board</div>
          <div class="board-sub">Education &amp; Training Accreditation Organization · United Kingdom</div>
          <div class="verified-badge">✓ Officially Verified &amp; Active in Registry</div>
        </div>
        <div class="holder-label">Certificate Holder</div>
        <div class="student-name">${cert.studentName}</div>
        <div class="code-badge"><span>${cert.code}</span></div>
        <div class="grid">
          <div class="field">
            <label>Passport No. / ID</label>
            <div class="val">${cert.passportNumber}</div>
          </div>
          <div class="field">
            <label>Promotion Year</label>
            <div class="val blue">${cert.year}</div>
          </div>
          <div class="field full">
            <label>Specialty / Qualification</label>
            <div class="val red">${cert.specialty}</div>
          </div>
          <div class="field full">
            <label>Accredited Training Center</label>
            <div class="val">${cert.accreditedCenter}</div>
          </div>
        </div>
        <div class="footer">
          <span>UK Registry Reference: <strong>UKPRN 10062939</strong></span>
          <span>Issued by The British Board for Education and Training</span>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 400);
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
                  Accredited Partner Centers
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
                    placeholder="Enter Certificate ID / License Number"
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

              {/* Quick Card Status Banner with button to re-open popup */}
              {verificationResult.status === 'success' && verificationResult.certificate && (
                <div className="mt-4 p-3 bg-emerald-50 border border-emerald-300 rounded-lg text-xs flex items-center justify-between gap-2 shadow-2xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-bold text-emerald-950 truncate">
                        {verificationResult.certificate.studentName}
                      </p>
                      <p className="text-[10px] text-emerald-700 truncate font-mono">
                        {verificationResult.certificate.code} · Verified
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] rounded cursor-pointer whitespace-nowrap shadow-xs"
                  >
                    View Details
                  </button>
                </div>
              )}

              {verificationResult.status === 'not_found' && !isModalOpen && (
                <div className="mt-4 p-3 bg-rose-50 border border-rose-300 rounded-lg text-xs flex items-center justify-between gap-2 shadow-2xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span className="text-[11px] text-rose-800 font-semibold truncate">
                      Certificate Not Found
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold text-[10px] rounded cursor-pointer whitespace-nowrap"
                  >
                    Details
                  </button>
                </div>
              )}
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

      {/* ======================================================== */}
      {/* PRO POPUP MODAL: OFFICIALLY VERIFIED CERTIFICATE (SUCCESS) */}
      {/* ======================================================== */}
      {isModalOpen && verificationResult.status === 'success' && verificationResult.certificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border-2 border-slate-300 overflow-hidden my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* British Tri-Color Top Accent Bar */}
            <div className="h-2 w-full flex">
              <div className="h-full flex-1 bg-[#001E6D]" />
              <div className="h-full w-20 bg-white" />
              <div className="h-full flex-1 bg-[#D90025]" />
            </div>

            {/* Modal Header */}
            <div className="p-5 sm:p-6 pb-4 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white border-2 border-slate-200 p-1.5 shrink-0 shadow-sm flex items-center justify-center">
                  <img src={logoHeader} alt="British Board Seal" className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-300 text-[10px] font-bold text-[#001E6D] uppercase tracking-wider">
                    <span>🇬🇧</span>
                    <span>Official Registry Attestation</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#001E6D] leading-tight mt-1">
                    The British Board
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Education &amp; Training Accreditation Organization · UK
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center cursor-pointer transition-colors shrink-0 shadow-2xs"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Congratulatory Ribbon */}
            <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white px-5 sm:px-6 py-3.5 flex items-center justify-between gap-3 shadow-inner">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-100" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-200 block">
                    Verification Successful · Official Record
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-white leading-tight">
                    🎉 Congratulations! Authentic &amp; Verified Certificate
                  </h4>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white/20 text-[10px] font-mono font-bold tracking-wider uppercase">
                Status: Active
              </span>
            </div>

            {/* Official Student Certificate Details Card */}
            <div className="p-5 sm:p-6 space-y-4">
              {/* Prominent Student Name Card */}
              <div className="text-center p-4 sm:p-5 rounded-xl bg-slate-50 border-2 border-emerald-300 shadow-xs relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1 bg-emerald-500 rounded-b" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-slate-500 block mb-1">
                  Certificate Holder (Student Name)
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#001E6D] tracking-wide">
                  {verificationResult.certificate.studentName}
                </h2>
                <div className="inline-flex items-center gap-2 mt-2.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold font-mono shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Certificate Code: {verificationResult.certificate.code}
                </div>
              </div>

              {/* Data Grid: Passport, Specialty, Year, Accredited Center */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* Passport Number */}
                <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
                  <span className="text-[11px] font-medium text-slate-500 block">Passport No. / ID:</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-900 mt-0.5 block">
                    {verificationResult.certificate.passportNumber}
                  </span>
                </div>

                {/* Promotion Year */}
                <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
                  <span className="text-[11px] font-medium text-slate-500 block">Promotion Year:</span>
                  <span className="font-serif text-sm sm:text-base font-bold text-[#001E6D] mt-0.5 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#D90025]" />
                    {verificationResult.certificate.year}
                  </span>
                </div>

                {/* Specialty */}
                <div className="sm:col-span-2 p-3.5 bg-white border border-slate-200 rounded-lg shadow-2xs">
                  <span className="text-[11px] font-medium text-slate-500 block">Specialty / Qualification:</span>
                  <div className="flex items-center gap-2 mt-1">
                    <GraduationCap className="w-5 h-5 text-[#D90025] shrink-0" />
                    <span className="font-serif text-base font-bold text-[#D90025]">
                      {verificationResult.certificate.specialty}
                    </span>
                  </div>
                </div>

                {/* Accredited Center */}
                <div className="sm:col-span-2 p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700">
                  <span className="text-[11px] font-medium text-slate-500 block">Accredited Training Center:</span>
                  <span className="font-semibold text-xs sm:text-sm text-[#001E6D] mt-0.5 block">
                    {verificationResult.certificate.accreditedCenter}
                  </span>
                </div>
              </div>

              {/* Official Attestation Footnote */}
              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg flex items-center justify-between text-[11px] text-emerald-900">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="font-semibold">UK Registry Reference: UKPRN 10062939</span>
                </div>
                <span className="font-bold uppercase tracking-wider text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  100% Authenticated
                </span>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrintAttestation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
              >
                <Printer className="w-4 h-4 text-[#001E6D]" />
                <span>Print Attestation</span>
              </button>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 bg-[#001E6D] hover:bg-[#00144D] text-white rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* PRO POPUP MODAL: CERTIFICATE NOT FOUND (ERROR) */}
      {/* ======================================================== */}
      {isModalOpen && verificationResult.status === 'not_found' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border-2 border-rose-300 overflow-hidden my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top red accent bar */}
            <div className="h-2 w-full bg-[#D90025]" />

            {/* Header */}
            <div className="p-5 pb-4 bg-rose-50 border-b border-rose-200 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-rose-700 block">
                    UK Official Registry
                  </span>
                  <h3 className="font-serif text-lg font-bold text-rose-950 leading-tight">
                    Certificate Not Found
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-rose-700 hover:text-rose-950 cursor-pointer p-1 rounded hover:bg-rose-100 transition-colors shrink-0"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-3 text-xs text-slate-700">
              <p className="leading-relaxed">
                No active record was found in the official registry for certificate code:
              </p>
              <div className="p-3 bg-rose-50/70 border border-rose-200 rounded-lg text-center font-mono font-bold text-sm text-rose-700 break-all">
                "{verificationResult.code}"
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Please verify your certificate code or contact The British Board administration:
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs">
                <span className="font-medium text-slate-600">Telephone Assistance:</span>
                <a href="tel:+447497275861" className="font-bold text-[#001E6D] hover:underline font-mono">
                  +44 7497 275861
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-md text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Close &amp; Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

