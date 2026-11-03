import React, { useState } from 'react';
import { Language, PageRoute, ContactFormData } from '../types';
import { translations } from '../i18n/translations';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Shield } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const t = translations[language];

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setSubmissionStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    // Functional form dispatch with documented institutional endpoint simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('success');
      // Store submission log locally for auditing/confirmation
      try {
        const existing = JSON.parse(localStorage.getItem('abac_inquiries') || '[]');
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('abac_inquiries', JSON.stringify(existing));
      } catch {
        // LocalStorage fallback
      }

      // Reset form fields
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }, 1200);
  };

  return (
    <div className="w-full pt-28 pb-20 bg-[#F8F6F2]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#78163D] font-semibold block mb-2">
            {t.contact.kicker}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#202020] font-medium leading-tight">
            {t.contact.title}
          </h1>
          <div className="w-20 h-[2px] bg-[#C6A56B] my-4" />
          <p className="text-base text-stone-600 font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Official Contact Placeholders & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#202020] text-white p-8 rounded-sm border border-[#C6A56B]/30 shadow-xl space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C6A56B] font-semibold block mb-1">
                  Official Registry
                </span>
                <h3 className="font-serif text-xl font-medium text-white">
                  {t.contact.infoTitle}
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  {t.contact.infoSubtitle}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-stone-800 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#78163D] flex items-center justify-center shrink-0 text-[#C6A56B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block font-medium">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href="mailto:contact@lacademie-internationale.com"
                      className="text-stone-200 font-serif font-semibold hover:text-[#C6A56B] transition-colors"
                    >
                      {t.contact.emailPlaceholder}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#78163D] flex items-center justify-center shrink-0 text-[#C6A56B]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block font-medium">
                      {t.contact.phoneLabel}
                    </span>
                    <a
                      href="tel:+447497275861"
                      className="text-stone-200 font-serif font-semibold hover:text-[#C6A56B] transition-colors tabular-nums block"
                    >
                      {t.contact.phonePlaceholder}
                    </a>
                    <span className="text-[11px] text-stone-400 mt-0.5 block">
                      Ligne directe internationale & secrétariat pédagogique
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#78163D] flex items-center justify-center shrink-0 text-[#C6A56B]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block font-medium">
                      {t.contact.addressLabel}
                    </span>
                    <span className="text-stone-200 font-serif font-semibold">
                      {t.contact.addressPlaceholder}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-stone-900 border border-stone-800 rounded-sm text-[11px] text-stone-400 leading-relaxed flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
                <span>{t.contact.privacyNotice}</span>
              </div>
            </div>

            {/* Associated Academy reminder */}
            <div className="bg-white p-6 border border-[#C6A56B]/25 rounded-sm shadow-sm space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#78163D] font-bold block">
                Partner Training Hubs
              </span>
              <p className="font-serif text-sm font-semibold text-[#202020]">
                Strategic Academic Partnership
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Practical training and clinical examination facilities are organized in partnership with L’Académie Internationale de Beauté across Paris and Tunis campuses.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 border border-[#C6A56B]/30 rounded-sm shadow-md">
              <h3 className="font-serif text-xl sm:text-2xl text-[#202020] font-semibold mb-2">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                {t.contact.requiredNotice}
              </p>

              {/* Success Notification */}
              {submissionStatus === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-sm text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span className="font-bold block mb-1">Inquiry Registered Successfully</span>
                    {t.contact.successMessage}
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {submissionStatus === 'error' && (
                <div className="mb-6 p-4 bg-rose-50 border border-rose-300 rounded-sm text-rose-800 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    {t.contact.errorMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    {t.contact.nameLabel} *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-sm border transition-colors bg-[#F8F6F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#78163D] ${
                      errors.fullName ? 'border-rose-400' : 'border-[#C6A56B]/40'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-rose-600 mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      {t.contact.emailInputLabel} *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailInputPlaceholder}
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-sm border transition-colors bg-[#F8F6F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#78163D] ${
                        errors.email ? 'border-rose-400' : 'border-[#C6A56B]/40'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-600 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      {t.contact.phoneInputLabel} *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.phoneInputPlaceholder}
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-sm border transition-colors bg-[#F8F6F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#78163D] ${
                        errors.phone ? 'border-rose-400' : 'border-[#C6A56B]/40'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-rose-600 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Country & Subject Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      {t.contact.countryLabel} *
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder={t.contact.countryPlaceholder}
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-sm border transition-colors bg-[#F8F6F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#78163D] ${
                        errors.country ? 'border-rose-400' : 'border-[#C6A56B]/40'
                      }`}
                    />
                    {errors.country && (
                      <span className="text-[11px] text-rose-600 mt-1 block">
                        {errors.country}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      {t.contact.subjectLabel} *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t.contact.subjectPlaceholder}
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-sm border transition-colors bg-[#F8F6F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#78163D] ${
                        errors.subject ? 'border-rose-400' : 'border-[#C6A56B]/40'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-rose-600 mt-1 block">
                        {errors.subject}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    {t.contact.messageLabel} *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-sm border transition-colors bg-[#F8F6F2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#78163D] ${
                      errors.message ? 'border-rose-400' : 'border-[#C6A56B]/40'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-600 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury w-full sm:w-auto px-9 py-4 bg-[#78163D] hover:bg-[#8F1B4A] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-300 border border-[#C6A56B] shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-[#C6A56B] rtl:rotate-180" />
                    <span>{isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
