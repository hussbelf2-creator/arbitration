"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inquiryType, setInquiryType] = useState<string>("case_filing");
  const [detailedInquiry, setDetailedInquiry] = useState<string>("");
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);

  const detailedInquiryRef = useRef<HTMLTextAreaElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccessToast(true);
    setTimeout(() => {
      toastRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName("الملف المرفق: " + e.target.files[0].name);
    }
  };

  const prefillOfficeBooking = (officeName: string) => {
    setInquiryType("room_booking");
    const prefilledText =
      "طلب رسمي لحجز قاعة استماع وتنسيق زيارة لمكتب المركز في: " +
      officeName +
      "، بتاريخ: ";
    setDetailedInquiry(prefilledText);
    if (detailedInquiryRef.current) {
      detailedInquiryRef.current.focus();
      detailedInquiryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };

  return (
    <>
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="w-full pt-20 bg-surface-ivory min-h-screen">
        {/* Top Sovereign Security Strip */}
        <div className="w-full bg-emerald-deepest border-b border-gold-deep/30 py-2 px-4 md:px-8 text-surface-container-lowest">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="inline-flex w-2 h-2 rounded-full bg-secondary-fixed-dim animate-ping"></span>
              <span className="text-gold-light font-medium">
                أمانة سر التحكيم الدولي وقيد الدعاوى
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-slate-300">
                الاستجابة الرسمية للتدابير التحفظية والوقتية متاحة على مدار الساعة
                (24/7)
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-300 text-[11px]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-gold-light">
                  lock
                </span>
                نظام قيد مشفر معتمد ISO 27001
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-gold-light">
                  schedule
                </span>
                الرياض (GMT+3) • جنيف (GMT+1) • لندن (GMT+0)
              </span>
            </div>
          </div>
        </div>

        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full bg-gradient-to-b from-surface-parchment/80 via-surface-ivory to-surface-ivory pt-12 pb-16 border-b border-border-subtle">
          {/* Architectural Background Ornamentation */}
          <div className="absolute inset-0 bg-[radial-gradient(#063D31_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none"></div>
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Hero Text */}
              <div className="lg:col-span-8 space-y-4 text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-subtle border border-primary-container/15 text-primary-container text-xs font-semibold">
                  <span className="material-symbols-outlined text-[15px] text-gold-deep">
                    account_balance
                  </span>
                  <span className="">
                    بوابة الاتصال والتنسيق القضائي الدولي • IOADR Judicial
                    Protocol
                  </span>
                </div>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary-container tracking-tight leading-[1.25]">
                  اتصل بنا ومكاتب المركز الإقليمية
                </h1>
                <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-3xl">
                  تضع أمانة السر العامة وقلم القضايا كافة قنواتها المؤسسية في
                  خدمتكم لتسجيل المنازعات، حجز قاعات جلسات الاستماع المهيأة
                  دبلوماسياً، وتقديم الدعم الإجرائي واللوجستي وفق أرفع معايير الحياد
                  والسرية القضائية المطلقة.
                </p>
                {/* 3 Rapid Action Strip Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {/* Emergency Hot-Line */}
                  <div className="bg-surface-container-lowest border border-border-subtle hover:border-gold-deep/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 text-status-error mb-2">
                      <span className="material-symbols-outlined text-[20px]">
                        emergency
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider">
                        التحكيم الطارئ (24/7)
                      </span>
                    </div>
                    <p
                      className="text-lg font-bold text-primary-container font-mono tracking-tight"
                      dir="ltr"
                    >
                      +966 11 800 4623
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      تعيين محكم الطوارئ خلال 24 ساعة للتدابير الوقتية
                    </p>
                  </div>
                  {/* Registry Filing */}
                  <div className="bg-surface-container-lowest border border-border-subtle hover:border-gold-deep/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 text-primary-container mb-2">
                      <span className="material-symbols-outlined text-[20px] text-gold-deep">
                        mark_email_read
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider">
                        قلم أمانة السر وقيد القضايا
                      </span>
                    </div>
                    <p
                      className="text-base font-bold text-primary-container font-mono"
                      dir="ltr"
                    >
                      registry@ioadr.org
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      إيداع عريضة التحكيم ولوائح الخصومة الرسمية
                    </p>
                  </div>
                  {/* Hearing Suites Booking */}
                  <div className="bg-surface-container-lowest border border-border-subtle hover:border-gold-deep/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 text-gold-deep mb-2">
                      <span className="material-symbols-outlined text-[20px]">
                        meeting_room
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider">
                        حجز قاعات الجلسات الهجينة
                      </span>
                    </div>
                    <p
                      className="text-base font-bold text-primary-container font-mono"
                      dir="ltr"
                    >
                      hearings@ioadr.org
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      قاعات مجهزة في الرياض، دبي، جنيف، ولندن
                    </p>
                  </div>
                </div>
              </div>
              {/* Hero Left Integrity Badge Card */}
              <div className="lg:col-span-4">
                <div className="relative bg-gradient-to-br from-primary-container via-emerald-deepest to-primary-container text-surface-container-lowest rounded-2xl p-6 shadow-xl border border-gold-deep/30 overflow-hidden">
                  <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-gold-light/10 rounded-full blur-2xl"></div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-lowest/10 border border-gold-light/40 flex items-center justify-center text-gold-light">
                        <span className="material-symbols-outlined text-2xl">
                          verified_user
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gold-light">
                          ميثاق السرية المؤسسية
                        </h3>
                        <span className="text-[11px] text-slate-300 font-mono">
                          SEC-CERT-2025
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] px-2.5 py-1 rounded bg-gold-deep/30 text-gold-light border border-gold-light/30 font-semibold">
                      اعتماد سيادي
                    </span>
                  </div>
                  <div className="py-4 space-y-2">
                    <p className="text-xs text-slate-200 leading-relaxed">
                      تخضع جميع المراسلات والمذكرات ولوائح الخصومة وحجوزات القاعات
                      لاتفاقيات عدم الإفصاح الصارمة وبروتوكول لاهاي لأمن الإجراءات
                      الرقمية (ISO 27001).
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span className="">أمانة سر التحكيم العام</span>
                    <span className="text-gold-light font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-status-success"></span>
                      دوائر اتصال مقفلة 100%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAST TRACK EMERGENCY BANNER ================= */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 -mt-6 relative z-20">
          <div className="rounded-2xl bg-gradient-to-r from-emerald-subtle via-surface-container-lowest to-surface-parchment p-5 border border-status-error/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-status-error/10 text-status-error flex items-center justify-center shrink-0 border border-status-error/20">
                <span className="material-symbols-outlined text-2xl">
                  fmd_bad
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h4 className="font-bold text-primary-container text-base">
                    المسار الإجرائي المستعجل للتدابير الوقتية والتحفظية
                  </h4>
                  <span className="bg-status-error text-white text-[11px] px-2 py-0.5 rounded font-bold">
                    بت سريع: 24-48 ساعة
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                  للشركات والكيانات التي تتطلب أوامر حجز تحفظي عاجلة أو وقف التصرف
                  بالأصول قبل تشكيل الهيئة الموضوعية، تواصلوا فوراً مع رئيس قلم
                  الطوارئ.
                </p>
              </div>
            </div>
            <button
              className="shrink-0 w-full md:w-auto px-5 py-2.5 rounded-xl bg-status-error hover:bg-status-error/90 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
              onClick={() => setIsModalOpen(true)}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">bolt</span>
              <span className="">تقديم طلب تعيين محكم طوارئ</span>
            </button>
          </div>
        </section>

        {/* ================= TWO COLUMN WORKSPACE: DOCKET FORM & SECRETARIAT INTEL ================= */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Right Main Column: Docket Filing & Inquiry Form (8 Cols) */}
            <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl border border-border-subtle p-6 md:p-8 shadow-sm">
              {/* Form Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-border-subtle">
                <div>
                  <span className="text-xs font-mono font-semibold text-gold-deep tracking-wider uppercase">
                    REGISTRY DOCKET FILING &amp; INQUIRY
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-container mt-1">
                    نموذج الاستفسار وقيد الدعاوى والمذكرات
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 bg-emerald-subtle text-status-success px-3 py-1.5 rounded-lg text-xs font-medium self-start sm:self-auto border border-status-success/20">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  <span className="">نظام تشفير معتمد (256-Bit SSL)</span>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant mt-4 mb-6 leading-relaxed">
                يرجى تزويد قلم أمانة السر بالبيانات الدقيقة لتوجيه طلبكم أو مسودة
                قيد النزاع إلى الدائرة الإجرائية المختصة خلال 4 ساعات عمل رسمية.
              </p>
              {/* Form Element */}
              <form
                className="space-y-6"
                id="arbitrationInquiryForm"
                onSubmit={handleFormSubmit}
              >
                {/* Category Radio Cards */}
                <div>
                  <label className="block text-sm font-bold text-primary-container mb-2.5">
                    تصنيف المعاملة أو الاستفسار القضائي{" "}
                    <span className="text-status-error">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label className="relative flex items-center p-3.5 rounded-xl border border-border-subtle hover:border-gold-deep bg-surface-parchment/30 cursor-pointer transition-all has-[:checked]:border-primary-container has-[:checked]:bg-emerald-subtle/70 has-[:checked]:shadow-sm">
                      <input
                        checked={inquiryType === "case_filing"}
                        className="accent-primary-container h-4 w-4 ml-3"
                        name="inquiry_type"
                        onChange={() => setInquiryType("case_filing")}
                        type="radio"
                        value="case_filing"
                      />
                      <div>
                        <span className="text-xs font-bold text-primary-container block">
                          قيد دعوى تحكيم جديدة
                        </span>
                        <span className="text-[11px] text-on-surface-variant block mt-0.5">
                          إيداع عريضة التحكيم والبينات
                        </span>
                      </div>
                    </label>
                    <label className="relative flex items-center p-3.5 rounded-xl border border-border-subtle hover:border-gold-deep bg-surface-parchment/30 cursor-pointer transition-all has-[:checked]:border-primary-container has-[:checked]:bg-emerald-subtle/70 has-[:checked]:shadow-sm">
                      <input
                        checked={inquiryType === "room_booking"}
                        className="accent-primary-container h-4 w-4 ml-3"
                        name="inquiry_type"
                        onChange={() => setInquiryType("room_booking")}
                        type="radio"
                        value="room_booking"
                      />
                      <div>
                        <span className="text-xs font-bold text-primary-container block">
                          حجز قاعات جلسات استماع
                        </span>
                        <span className="text-[11px] text-on-surface-variant block mt-0.5">
                          مرافق الرياض • دبي • جنيف • لندن
                        </span>
                      </div>
                    </label>
                    <label className="relative flex items-center p-3.5 rounded-xl border border-border-subtle hover:border-gold-deep bg-surface-parchment/30 cursor-pointer transition-all has-[:checked]:border-primary-container has-[:checked]:bg-emerald-subtle/70 has-[:checked]:shadow-sm">
                      <input
                        checked={inquiryType === "general_legal"}
                        className="accent-primary-container h-4 w-4 ml-3"
                        name="inquiry_type"
                        onChange={() => setInquiryType("general_legal")}
                        type="radio"
                        value="general_legal"
                      />
                      <div>
                        <span className="text-xs font-bold text-primary-container block">
                          استفسار مالي أو إجرائي
                        </span>
                        <span className="text-[11px] text-on-surface-variant block mt-0.5">
                          حساب الرسوم وجداول المحكمين
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                {/* Structured Input Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-primary-container mb-1.5"
                      htmlFor="fullName"
                    >
                      الاسم الكامل لمقدم الطلب{" "}
                      <span className="text-status-error">*</span>
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all"
                      id="fullName"
                      placeholder="مثال: سعادة المستشار عبدالله بن خالد القحطاني"
                      required
                      type="text"
                    />
                  </div>
                  {/* Legal Capacity */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-primary-container mb-1.5"
                      htmlFor="applicantRole"
                    >
                      الصفة في النزاع <span className="text-status-error">*</span>
                    </label>
                    <select
                      className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all"
                      defaultValue=""
                      id="applicantRole"
                      required
                    >
                      <option disabled value="">
                        اختر الصفة القانونية في النزاع...
                      </option>
                      <option value="legal_counsel">
                        محامٍ / وكيل نظامي لطرف في النزاع
                      </option>
                      <option value="arbitrator">
                        محكّم مقيد / عضو هيئة تحكيم
                      </option>
                      <option value="in_house_counsel">
                        مستشار قانوني عام لشركة / مؤسسة
                      </option>
                      <option value="dispute_party">
                        طرف أصيل في النزاع (مدعٍ / مدعى عليه)
                      </option>
                      <option value="government_envoy">
                        ممثل جهة سيادية / حكومية
                      </option>
                    </select>
                  </div>
                  {/* Entity Name */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-primary-container mb-1.5"
                      htmlFor="entityName"
                    >
                      اسم المنشأة أو مكتب المحاماة{" "}
                      <span className="text-status-error">*</span>
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all"
                      id="entityName"
                      placeholder="مثال: شركة الاستشارات القانونية الدولية المحدودة"
                      required
                      type="text"
                    />
                  </div>
                  {/* Case Docket Ref (Optional) */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-primary-container mb-1.5"
                      htmlFor="caseReference"
                    >
                      رقم الدعوى المرجعي{" "}
                      <span className="text-on-surface-variant font-normal text-[11px]">
                        (إن وُجد)
                      </span>
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm font-mono text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all"
                      dir="ltr"
                      id="caseReference"
                      placeholder="IOADR-ARB-2025-0842"
                      type="text"
                    />
                  </div>
                  {/* Email Address */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-primary-container mb-1.5"
                      htmlFor="emailAddr"
                    >
                      البريد الإلكتروني المعتمد للمراسلات{" "}
                      <span className="text-status-error">*</span>
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm font-mono text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all"
                      dir="ltr"
                      id="emailAddr"
                      placeholder="counsel@legalchambers.com"
                      required
                      type="email"
                    />
                  </div>
                  {/* Phone Number */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-primary-container mb-1.5"
                      htmlFor="phoneNumber"
                    >
                      رقم الهاتف مع الرمز الدولي{" "}
                      <span className="text-status-error">*</span>
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3.5 py-2.5 text-sm font-mono text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all"
                      dir="ltr"
                      id="phoneNumber"
                      placeholder="+966 50 123 4567"
                      required
                      type="tel"
                    />
                  </div>
                </div>
                {/* Detailed Message / Summary */}
                <div>
                  <label
                    className="block text-xs font-semibold text-primary-container mb-1.5"
                    htmlFor="detailedInquiry"
                  >
                    تفاصيل الاستفسار أو موجز النزاع{" "}
                    <span className="text-status-error">*</span>
                  </label>
                  <textarea
                    className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg p-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all leading-relaxed"
                    id="detailedInquiry"
                    onChange={(e) => setDetailedInquiry(e.target.value)}
                    placeholder="يرجى كتابة ملخص عن موضوع النزاع، القيمة التقريبية للمطالبة، أو استفساركم الإجرائي حول قواعد المركز وقاعات الجلسات..."
                    ref={detailedInquiryRef}
                    required
                    rows={4}
                    value={detailedInquiry}
                  ></textarea>
                </div>
                {/* PDF Upload Box */}
                <div className="rounded-xl border-2 border-dashed border-border-subtle bg-surface-parchment/40 p-5 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-surface-container-lowest text-gold-deep flex items-center justify-center shadow-sm mb-2">
                      <span className="material-symbols-outlined text-2xl">
                        upload_file
                      </span>
                    </div>
                    <p className="text-sm font-bold text-primary-container">
                      إرفاق ملخص إجرائي، عريضة الدعوى أو مسودة شرط التحكيم (PDF)
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      الحد الأقصى للملف 25 ميجابايت • يتم حفظ وتشفير الوثائق وفق
                      معايير الحماية المصرفية
                    </p>
                    <label className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest border border-border-subtle text-primary-container text-xs font-semibold shadow-sm hover:bg-surface-container cursor-pointer transition-colors">
                      <span className="material-symbols-outlined text-[16px]">
                        attach_file
                      </span>
                      <span className="">اختيار ملف من الجهاز</span>
                      <input
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="dossierUpload"
                        onChange={handleFileChange}
                        type="file"
                      />
                    </label>
                    {selectedFileName && (
                      <span
                        className="text-xs text-status-success font-bold mt-2.5"
                        id="selectedFileName"
                      >
                        {selectedFileName}
                      </span>
                    )}
                  </div>
                </div>
                {/* Attestation Agreement */}
                <div className="bg-surface-parchment/60 rounded-xl p-4 border border-border-subtle">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      className="mt-1 rounded accent-primary-container h-4 w-4"
                      required
                      type="checkbox"
                    />
                    <span className="text-xs text-on-surface-variant leading-relaxed">
                      أقر بصفتي النظامية أعلاه بصحة ودقة البيانات المقدمة، وأوافق على
                      معالجة هذا الطلب وفق ميثاق السرية المؤسسي وقواعد التحكيم
                      الصادرة عن المكتب الدولي للتحكيم وتسوية المنازعات (IOADR).
                    </span>
                  </label>
                </div>
                {/* Form Actions & Response Info */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px] text-gold-deep">
                      timer
                    </span>
                    <span className="">
                      المعدل المعتاد للرد: ساعتان خلال أوقات الدوام الرسمي
                    </span>
                  </div>
                  <button
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary-container hover:bg-emerald-deepest text-white text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2.5"
                    type="submit"
                  >
                    <span className="">إرسال الطلب إلى قلم أمانة السر</span>
                    <span className="material-symbols-outlined text-[18px] text-gold-light">
                      send
                    </span>
                  </button>
                </div>
                {/* Success Toast Alert */}
                {showSuccessToast && (
                  <div
                    className="rounded-xl bg-emerald-subtle border border-status-success/30 p-4 text-status-success text-xs sm:text-sm flex items-start gap-3"
                    id="formSuccessToast"
                    ref={toastRef}
                  >
                    <span className="material-symbols-outlined text-2xl text-status-success shrink-0">
                      check_circle
                    </span>
                    <div>
                      <p className="font-bold text-sm">
                        تم إرسال طلبكم بنجاح إلى قلم أمانة السر (DOCKET #CONF-2025-99)
                      </p>
                      <p className="text-on-surface-variant text-xs mt-0.5">
                        تم تسجيل المعاملة في الخادم القضائي المشفر، وسيتواصل معكم
                        المستشار الإجرائي عبر البريد الإلكتروني المعتمد.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Left Column: Secretariat Hours, Senior Officers & Protocol (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Official Working Hours Card */}
              <div className="bg-surface-container-lowest rounded-2xl border border-border-subtle p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-border-subtle pb-3.5">
                  <div className="w-9 h-9 rounded-lg bg-surface-container text-gold-deep flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">
                      hourglass_top
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-primary-container">
                      أوقات العمل الرسمية
                    </h3>
                    <span className="text-[11px] text-on-surface-variant">
                      أمانة السر وقبول الإيداعات المباشرة
                    </span>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-surface-parchment/40 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-primary-container block">
                        الرياض (المقر الرئيسي)
                      </span>
                      <span className="text-on-surface-variant text-[11px]">
                        الأحد - الخميس (08:30 ص - 05:00 م)
                      </span>
                    </div>
                    <span className="font-mono text-gold-deep font-bold text-xs">
                      GMT+3
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-parchment/40 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-primary-container block">
                        دبي (DIFC)
                      </span>
                      <span className="text-on-surface-variant text-[11px]">
                        الإثنين - الجمعة (09:00 ص - 05:30 م)
                      </span>
                    </div>
                    <span className="font-mono text-gold-deep font-bold text-xs">
                      GMT+4
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-parchment/40 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-primary-container block">
                        جنيف ولندن (أوروبا)
                      </span>
                      <span className="text-on-surface-variant text-[11px]">
                        الإثنين - الجمعة (09:00 ص - 05:00 م)
                      </span>
                    </div>
                    <span className="font-mono text-gold-deep font-bold text-xs">
                      GMT+1/0
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-emerald-subtle border border-primary-container/10 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-primary-container mb-1">
                    <span className="material-symbols-outlined text-[16px] text-status-success">
                      cloud_done
                    </span>
                    <span className="">البوابة الإلكترونية للقيد (24/7/365)</span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed">
                    يقبل نظام القيد الإلكتروني المذكرات والدعاوى دون توقف، وتعتمد
                    مهلة الإيداع حسب توقيت الخادم المرجعي بالرياض.
                  </p>
                </div>
              </div>

              {/* Key Secretariat Officers Card */}
              <div className="bg-surface-container-lowest rounded-2xl border border-border-subtle p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-border-subtle pb-3.5">
                  <div className="w-9 h-9 rounded-lg bg-surface-container text-gold-deep flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">
                      badge
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-primary-container">
                      كبار مسؤولي أمانة سر القضايا
                    </h3>
                    <span className="text-[11px] text-on-surface-variant">
                      التواصل المباشر مع مديري الدوائر
                    </span>
                  </div>
                </div>
                <div className="space-y-3.5 text-xs">
                  {/* Officer 1 */}
                  <div className="flex items-start gap-3 pb-3 border-b border-border-subtle/60">
                    <div className="w-9 h-9 rounded-full bg-primary-container text-gold-light flex items-center justify-center font-bold text-sm shrink-0">
                      ق
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-primary-container text-xs">
                        المستشار / قيس بن سفيان الزهراني
                      </h4>
                      <span className="text-[11px] text-gold-deep block">
                        الأمين العام المساعد ورئيس قلم التحكيم الدولي
                      </span>
                      <a
                        className="font-mono text-[11px] text-on-surface-variant hover:text-gold-deep flex items-center gap-1"
                        dir="ltr"
                        href="mailto:case.management@ioadr.org"
                      >
                        <span className="material-symbols-outlined text-[13px]">
                          mail
                        </span>{" "}
                        case.management@ioadr.org
                      </a>
                    </div>
                  </div>
                  {/* Officer 2 */}
                  <div className="flex items-start gap-3 pb-3 border-b border-border-subtle/60">
                    <div className="w-9 h-9 rounded-full bg-emerald-deepest text-gold-light flex items-center justify-center font-bold text-sm shrink-0">
                      إ
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-primary-container text-xs">
                        د. إيلينا فون فايدلر
                      </h4>
                      <span className="text-[11px] text-gold-deep block">
                        رئيسة قلم التنسيق الأوروبي وشؤون المعاهدات (جنيف)
                      </span>
                      <a
                        className="font-mono text-[11px] text-on-surface-variant hover:text-gold-deep flex items-center gap-1"
                        dir="ltr"
                        href="mailto:geneva.secretariat@ioadr.org"
                      >
                        <span className="material-symbols-outlined text-[13px]">
                          mail
                        </span>{" "}
                        geneva.secretariat@ioadr.org
                      </a>
                    </div>
                  </div>
                  {/* Officer 3 */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary-container text-gold-light flex items-center justify-center font-bold text-sm shrink-0">
                      ن
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-primary-container text-xs">
                        أ. نورة عبدالعزيز المنصور
                      </h4>
                      <span className="text-[11px] text-gold-deep block">
                        مديرة شؤون جلسات الاستماع والخدمات اللوجستية
                      </span>
                      <a
                        className="font-mono text-[11px] text-on-surface-variant hover:text-gold-deep flex items-center gap-1"
                        dir="ltr"
                        href="mailto:facilities@ioadr.org"
                      >
                        <span className="material-symbols-outlined text-[13px]">
                          mail
                        </span>{" "}
                        facilities@ioadr.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Protocol & Official Delegations Box */}
              <div className="bg-surface-parchment/60 rounded-2xl border border-border-subtle p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-primary-container font-bold text-xs">
                  <span className="material-symbols-outlined text-gold-deep text-lg">
                    shield
                  </span>
                  <span className="">بروتوكول الزيارات الرسمية والوفود</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  يُشترط التنسيق الأمني المسبق بـ 24 ساعة للوفود القانونية التي تزيد
                  عن 8 أفراد أو التي تطلب إجراءات مرافقة دبلوماسية عبر بوابة كبار
                  الشخصيات (VIP Gate).
                </p>
                <div className="pt-1">
                  <a
                    className="inline-flex items-center gap-1 text-gold-deep text-xs font-semibold hover:underline"
                    href="mailto:protocol@ioadr.org"
                  >
                    <span className="">طلب ترتيب بروتوكولي خاص</span>
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_back
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HEARING SUITES & TECH INFRASTRUCTURE ================= */}
        <section className="w-full bg-surface-container-low/60 border-y border-border-subtle py-14">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-gold-deep tracking-wider uppercase">
                  JUDICIAL HEARING SUITES &amp; TECH
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-container">
                  قاعات جلسات الاستماع والبيئة التقنية المعتمدة
                </h2>
                <p className="text-sm text-on-surface-variant max-w-2xl">
                  مرافق متكاملة مهيأة لعقد جلسات التحكيم الحضورية والهجينة وفق أعلى
                  المواصفات القضائية والأمنية.
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-lowest border border-border-subtle text-primary-container hover:bg-surface-container text-xs font-semibold transition-colors self-start md:self-auto shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-[16px] text-gold-deep">
                  download
                </span>
                <span className="">تحميل كراس مواصفات القاعات (PDF)</span>
              </a>
            </div>
            {/* 2 Visual Showcase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Room Card 1 */}
              <div className="bg-surface-container-lowest rounded-2xl border border-border-subtle overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-60 overflow-hidden relative">
                  <img
                    alt="قاعة الملك فهد الكبرى لجلسات الاستماع بالرياض"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXOwSw1ZI6HbV46EsqJQ7MZn0H4-gw8kskCXsqbGzw_TtbMtMIUgiIbe9oi2b8z04whZ_zIFozrXDfuTRh6KQwSKldJzKszzp4SHwMvKzOarjyqh3rogUhHs6GDfqOfxisdkQg451nPJIysPY586UR1D0HURRCg9FLcBZASPKA5zGAHZeb3WeV8NTngAM2kRtFQ9UKRQsf1iN_MJFLF4vfwz14LS7EXg8HWEvHGqCn"
                  />
                  <div className="absolute top-3 right-3 bg-primary-container/90 backdrop-blur text-white text-[11px] font-mono px-2.5 py-1 rounded-md">
                    الرياض • KAFD
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-primary-container">
                    قاعة الملك فهد الكبرى لجلسات الاستماع
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    تتسع لـ 45 شخصاً، مجهزة بنظام العرض التفاعلي للبينات والمستندات،
                    وكاميرات تتبع المتحدث التلقائية، وربط مشفر متعدد النقاط للشهود
                    والخبراء.
                  </p>
                </div>
              </div>
              {/* Room Card 2 */}
              <div className="bg-surface-container-lowest rounded-2xl border border-border-subtle overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-60 overflow-hidden relative">
                  <img
                    alt="أجنحة المداولة المغلقة للهيئات التحكيمية"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTwvVu4KG4iJ59xwv225QR-38zsuGx1JsiNQN8VQPZvkB-3H36JlJQq44_PwAIGNHRQSuRxt3wVCbrnk2OfC6DYb1X6WtU8tbkMopqwvNGaxcpXgDwAgl7MpPfaX_LbzcluexqDOvBjJUWdpN8fXIPy1tiBSN6Dwa7l14opCdBhQVGu7WsGCiuK2DSXF5peFl5Et2huTB8UVU-YQkZFFWRoCKaX2EgJZKy1tvLlgrm"
                  />
                  <div className="absolute top-3 right-3 bg-primary-container/90 backdrop-blur text-white text-[11px] font-mono px-2.5 py-1 rounded-md">
                    جنيف • دبي
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-primary-container">
                    أجنحة المداولة المغلقة للهيئات التحكيمية
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    غرف معزولة صوتياً من الدرجة الدبلوماسية مخصصة لخلوة المحكمين
                    ومداولة مسودات الأحكام مع دوائر اتصال سحابي داخلية مقفلة ومحمية.
                  </p>
                </div>
              </div>
            </div>
            {/* 4 Technology Spec Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-4 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-subtle text-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    record_voice_over
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-primary-container">
                    ترجمة فورية متزامنة
                  </h4>
                  <p className="text-[11px] text-on-surface-variant mt-1 leading-normal">
                    4 كبائن ترجمة فورية تدعم العربية، الإنجليزية، الفرنسية، والصينية.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-4 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-subtle text-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    satellite_alt
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-primary-container">
                    إنترنت فضائي مزدوج
                  </h4>
                  <p className="text-[11px] text-on-surface-variant mt-1 leading-normal">
                    اتصال احتياطي مشفر Starlink يضمن استمرار الجلسات دون انقطاع ثانية
                    واحدة.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-4 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-subtle text-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    mic_external_on
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-primary-container">
                    تدوين محاضر فوري
                  </h4>
                  <p className="text-[11px] text-on-surface-variant mt-1 leading-normal">
                    تسجيل صوتي عالي النقاء وتفريغ نصوص فوري موثق ومعتمد قضائياً في
                    نفس اليوم.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-4 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-subtle text-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    admin_panel_settings
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-primary-container">
                    مداخل ومصاعد مؤمنة
                  </h4>
                  <p className="text-[11px] text-on-surface-variant mt-1 leading-normal">
                    مسارات خاصة تضمن حماية وسرية كبار الشهود والخبراء والوفود
                    الرسمية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= REGIONAL & INTERNATIONAL OFFICES GRID ================= */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
          <div className="space-y-8">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-gold-deep tracking-wider uppercase">
                GLOBAL HUBS &amp; ARBITRAL SEATS
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-container">
                شبكة المكاتب الإقليمية والدولية ومراكز الجلسات
              </h2>
              <p className="text-sm text-on-surface-variant max-w-2xl">
                ينتشر المكتب الدولي للتحكيم عبر 4 مراكز قضائية استراتيجية لتقديم
                الدعم الميداني والتقني للخصوم وهيئات التحكيم.
              </p>
            </div>
            {/* 4 Balanced Office Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Office 1: Riyadh (HQ) */}
              <div className="bg-surface-container-lowest rounded-2xl border border-gold-deep/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                <div className="h-1.5 w-full bg-gold-deep"></div>
                <div className="p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary-container text-white">
                        المقر الرئيسي العام
                      </span>
                      <h3 className="font-serif font-bold text-base text-primary-container mt-1.5">
                        الرياض، السعودية
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gold-light/20 text-gold-deep flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-lg">
                        location_city
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    مركز الملك عبدالله المالي (KAFD)، البرج المالي 04، الأدوار 28 -
                    31. يضم 6 قاعات جلسات استماع وغرف مداولة معزولة.
                  </p>
                  <div className="space-y-2 pt-2 border-t border-border-subtle text-xs">
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="">التوقيت المحلي:</span>
                      <span
                        className="font-mono font-bold text-primary-container"
                        dir="ltr"
                      >
                        AST (GMT+3)
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="">الهاتف المباشر:</span>
                      <span
                        className="font-mono font-bold text-primary-container"
                        dir="ltr"
                      >
                        +966 11 800 4600
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="">البريد الإلكتروني:</span>
                      <span
                        className="font-mono font-bold text-gold-deep"
                        dir="ltr"
                      >
                        riyadh@ioadr.org
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3.5 bg-surface-container-low border-t border-border-subtle">
                  <button
                    className="w-full py-2 px-3 rounded-lg bg-primary-container hover:bg-emerald-deepest text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    onClick={() => prefillOfficeBooking("الرياض - مركز KAFD")}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[15px] text-gold-light">
                      calendar_month
                    </span>
                    <span className="">طلب حجز قاعة / زيارة</span>
                  </button>
                </div>
              </div>
              {/* Office 2: Dubai */}
              <div className="bg-surface-container-lowest rounded-2xl border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                <div className="h-1.5 w-full bg-primary-container"></div>
                <div className="p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-surface-container text-primary-container">
                        المكتب الإقليمي للشرق الأوسط
                      </span>
                      <h3 className="font-serif font-bold text-base text-primary-container mt-1.5">
                        دبي، الإمارات
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-surface-container text-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-lg">
                        domain
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    مركز دبي المالي العالمي (DIFC)، البوابة 05، الطابق 14. مهيأ
                    لمنازعات المصارف، الإنشاءات البحرية والتحكيم الهجين.
                  </p>
                  <div className="space-y-2 pt-2 border-t border-border-subtle text-xs">
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="">التوقيت المحلي:</span>
                      <span
                        className="font-mono font-bold text-primary-container"
                        dir="ltr"
                      >
                        GST (GMT+4)
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="">الهاتف المباشر:</span>
                      <span
                        className="font-mono font-bold text-primary-container"
                        dir="ltr"
                      >
                        +971 4 362 8800
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="">البريد الإلكتروني:</span>
                      <span
                        className="font-mono font-bold text-gold-deep"
                        dir="ltr"
                      >
                        dubai@ioadr.org
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3.5 bg-surface-container-low border-t border-border-subtle">
                  <button
                    className="w-full py-2 px-3 rounded-lg bg-primary-container hover:bg-emerald-deepest text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    onClick={() => prefillOfficeBooking("دبي - مركز DIFC")}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[15px] text-gold-light">
                      calendar_month
                    </span>
                    <span className="">طلب حجز قاعة / زيارة</span>
                  </button>
                </div>
              </div>
              {/* Office 3: Geneva */}
              <div className="bg-surface-container-lowest rounded-2xl border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                <div className="h-1.5 w-full bg-primary-container"></div>
                <div className="p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-surface-container text-primary-container">
                        المقر الأوروبي والتحكيم الدولي
                      </span>
                      <h3 className="font-serif font-bold text-base text-primary-container mt-1.5">
                        جنيف، سويسرا
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-surface-container text-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-lg">
                        gavel
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Rue du Rhône 42, Quartier des Banques, 1204 Genève. التنسيق مع
                    المنظمات الدولية ومنازعات الاستثمار الدولي الثنائي.
                  </p>
                  <div className="space-y-2 pt-2 border-t border-border-subtle text-xs">
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="">التوقيت المحلي:</span>
                      <span
                        className="font-mono font-bold text-primary-container"
                        dir="ltr"
                      >
                        CET (GMT+1)
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="">الهاتف المباشر:</span>
                      <span
                        className="font-mono font-bold text-primary-container"
                        dir="ltr"
                      >
                        +41 22 819 9200
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="">البريد الإلكتروني:</span>
                      <span
                        className="font-mono font-bold text-gold-deep"
                        dir="ltr"
                      >
                        geneva@ioadr.org
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3.5 bg-surface-container-low border-t border-border-subtle">
                  <button
                    className="w-full py-2 px-3 rounded-lg bg-primary-container hover:bg-emerald-deepest text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    onClick={() => prefillOfficeBooking("جنيف - Rue du Rhône")}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[15px] text-gold-light">
                      calendar_month
                    </span>
                    <span className="">طلب حجز قاعة / زيارة</span>
                  </button>
                </div>
              </div>
              {/* Office 4: London */}
              <div className="bg-surface-container-lowest rounded-2xl border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                <div className="h-1.5 w-full bg-primary-container"></div>
                <div className="p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-surface-container text-primary-container">
                        مكتب الارتباط والتجارة الدولية
                      </span>
                      <h3 className="font-serif font-bold text-base text-primary-container mt-1.5">
                        لندن، المملكة المتحدة
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-surface-container text-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-lg">
                        balance
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Crown Office Row, The Temple, London EC4Y 7BB. تنسيق المنازعات
                    العابرة للحدود الخاضعة للقانون الإنجليزي وعقود الطاقة العالمية.
                  </p>
                  <div className="space-y-2 pt-2 border-t border-border-subtle text-xs">
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="">التوقيت المحلي:</span>
                      <span
                        className="font-mono font-bold text-primary-container"
                        dir="ltr"
                      >
                        GMT / BST
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="">الهاتف المباشر:</span>
                      <span
                        className="font-mono font-bold text-primary-container"
                        dir="ltr"
                      >
                        +44 20 7946 0910
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant">
                      <span className="">البريد الإلكتروني:</span>
                      <span
                        className="font-mono font-bold text-gold-deep"
                        dir="ltr"
                      >
                        london@ioadr.org
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3.5 bg-surface-container-low border-t border-border-subtle">
                  <button
                    className="w-full py-2 px-3 rounded-lg bg-primary-container hover:bg-emerald-deepest text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                    onClick={() => prefillOfficeBooking("لندن - The Temple")}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[15px] text-gold-light">
                      calendar_month
                    </span>
                    <span className="">طلب حجز قاعة / زيارة</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LOGISTICS, PARKING & ACCESS GUIDE ================= */}
        <section className="w-full bg-surface-parchment/50 border-t border-border-subtle py-14">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-gold-deep tracking-wider uppercase">
                  LOCATION, PARKING &amp; LOGISTICS
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-container">
                  إرشادات الوصول ومواقف السيارات للوفود
                </h2>
                <p className="text-sm text-on-surface-variant max-w-2xl">
                  موقع المقر الرئيسي في مركز الملك عبدالله المالي (KAFD) مجهز بمسارات
                  وصول ميسرة وخدمات صف السيارات للمحكمين والمتقاضين.
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-border-subtle text-primary-container hover:bg-surface-container text-xs font-semibold transition-colors shadow-sm self-start md:self-auto"
                href="https://maps.google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px] text-gold-deep">
                  navigation
                </span>
                <span className="">فتح الموقع في خرائط Google</span>
              </a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Location Visual Graphic Representation */}
              <div className="lg:col-span-6 bg-surface-container-lowest rounded-2xl border border-border-subtle p-4 shadow-sm">
                <div className="h-80 w-full rounded-xl bg-gradient-to-br from-primary-container via-emerald-deepest to-primary-container p-6 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#E5C158_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-gold-light bg-black/30 px-2 py-0.5 rounded border border-gold-light/20">
                        GPS: 24.7618° N, 46.6406° E
                      </span>
                      <h3 className="font-serif text-xl font-bold mt-2">
                        المقر الرئيسي العام • مركز KAFD
                      </h3>
                      <p className="text-xs text-slate-300">
                        البرج المالي 04 • البوابة الغربية، الرياض
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gold-light/10 border border-gold-light/30 flex items-center justify-center text-gold-light">
                      <span className="material-symbols-outlined text-2xl">
                        pin_drop
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">نقطة الدخول الرسمية:</span>
                      <span className="font-bold text-gold-light">
                        بوابة الوفود القضائية (Gate West-2)
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">أقرب محطة مترو:</span>
                      <span className="font-bold text-white">
                        محطة قطار كافد المركزية (الخط الأزرق)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3 Protocol Logistics Feature Cards */}
              <div className="lg:col-span-6 space-y-3.5">
                <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-4 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-subtle text-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl text-gold-deep">
                      local_parking
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs sm:text-sm text-primary-container">
                      مواقف السيارات وخدمة صف السيارات (Valet)
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      تتوفر مواقف محجوزة مسبقاً لهيئات التحكيم في القبو B2، مع خدمة صف
                      سيارات مجانية لكافة أطراف الخصومة عند إبراز إشعار جلسة التحكيم
                      الصادر من أمانة السر.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-4 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-subtle text-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl text-gold-deep">
                      train
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs sm:text-sm text-primary-container">
                      قطار الرياض (مترو كافد)
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      محطة مترو كافد المركزية (الخط الأزرق والبرتقالي) ترتبط مباشرة
                      بجسر المشاة المكيف المؤدي إلى مدخل قاعات الجلسات في البرج
                      الرابع دون الحاجة للخروج للشارع.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-4 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-subtle text-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl text-gold-deep">
                      flight_land
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs sm:text-sm text-primary-container">
                      الوصول من مطار الملك خالد الدولي (RUH)
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      يبعد المركز مسافة 22 دقيقة فقط عن صالات المطار الدولية، وتوفر
                      إدارة المراسم خدمة الاستقبال الدبلوماسي للمحكمين الدوليين
                      القادمين من الخارج.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROCEDURAL FAQ SECTION ================= */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
          <div className="space-y-8">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-gold-deep tracking-wider uppercase">
                PROCEDURAL FAQ
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-container">
                الأسئلة الشائعة حول التواصل وإجراءات القيد والزيارة
              </h2>
              <p className="text-sm text-on-surface-variant max-w-2xl">
                إجابات معتمدة من قلم التحكيم حول الشروط الشكلية للمراسلات وحضور
                الجلسات.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* FAQ 1 */}
              <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2.5 text-primary-container">
                  <span className="material-symbols-outlined text-gold-deep text-xl">
                    help_outline
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm">
                    هل يشترط حجز موعد مسبق لإيداع طلب التحكيم حضورياً؟
                  </h4>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed pr-7">
                  يُفضل إجراء قيد الدعوى عبر البوابة الإلكترونية المعتمدة لضمان
                  التوثيق الفوري. وفي حال رغبة الوكيل بإيداع المستندات ونسخ البينات
                  ورقياً بالمقر الرئيسي، يمكن الحضور مباشرة إلى مكتب قلم التسجيل دون
                  موعد خلال ساعات العمل الرسمية (08:30 ص إلى 04:30 م).
                </p>
              </div>
              {/* FAQ 2 */}
              <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2.5 text-primary-container">
                  <span className="material-symbols-outlined text-gold-deep text-xl">
                    badge
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm">
                    كيف يتم التحقق من هوية الأطراف والوكلاء في الجلسات الحضورية؟
                  </h4>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed pr-7">
                  يتعين على كافة المحامين وممثلي الخصوم إبراز بطاقة الهوية الوطنية أو
                  جواز السفر ساري المفعول، بالإضافة إلى نسخة مطابقة للأصل من الوكالة
                  الشرعية أو التفويض الرسمي المعتمد المانح لصلاحية الترافع أمام هيئات
                  التحكيم.
                </p>
              </div>
              {/* FAQ 3 */}
              <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2.5 text-primary-container">
                  <span className="material-symbols-outlined text-gold-deep text-xl">
                    videocam
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm">
                    ما هي آليات الاستماع عن بُعد للمحكمين والشهود المقيمين خارج الدولة؟
                  </h4>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed pr-7">
                  يسمح نظام إدارة الجلسات في المركز بانعقاد الجلسات الهجينة بالكامل.
                  توفر أمانة السر رابطاً مشفراً مشروطاً بتسجيل الدخول الثنائي، مع فحص
                  تقني مسبق لجودة الصوت والصورة وكاميرا 360 درجة لضمان عدم وجود أي
                  مؤثرات أو تلقين للشاهد أثناء الإدلاء بإفادته.
                </p>
              </div>
              {/* FAQ 4 */}
              <div className="bg-surface-container-lowest rounded-xl border border-border-subtle p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2.5 text-primary-container">
                  <span className="material-symbols-outlined text-gold-deep text-xl">
                    lock_clock
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm">
                    ما مدى سرية المراسلات المرسلة عبر نموذج الموقع الإلكتروني؟
                  </h4>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed pr-7">
                  كافة البيانات والمرفقات المودعة عبر النموذج تخضع فورياً لحماية
                  بروتوكول السرية القضائية للمركز، ولا يطلع عليها سوى أمين السر
                  المكلف بالملف والمستشار القانوني المشرف، ولا تشارك البيانات مع أي
                  طرف ثالث بأي حال.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= EMERGENCY MODAL ================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-emerald-deepest/80 backdrop-blur-sm flex items-center justify-center p-4"
          id="emergencyArbitrationModal"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div className="bg-surface-container-lowest max-w-lg w-full rounded-2xl p-6 shadow-2xl relative border-t-4 border-status-error text-right space-y-4">
            <button
              className="absolute top-4 left-4 text-on-surface-variant hover:text-primary transition-colors"
              onClick={() => setIsModalOpen(false)}
              type="button"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <div className="flex items-center gap-2.5 text-status-error">
              <span className="material-symbols-outlined text-3xl">bolt</span>
              <h3 className="font-serif font-bold text-lg">
                قيد طلب تعيين محكم الطوارئ المستعجل
              </h3>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              يُخصص هذا الإجراء حصرياً للطلبات الوقتية والتحفظية التي لا تحتمل
              التأخير لحين تشكيل هيئة التحكيم الموضوعية (وفق المادة 24 من قواعد
              IOADR).
            </p>
            <div className="p-3.5 rounded-xl bg-surface-parchment/70 text-on-surface-variant space-y-1.5 text-xs">
              <p className="font-bold text-primary-container">
                متطلبات القيد الفوري:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[11px]">
                <li className="">
                  بيان سبب الاستعجال والضرر الجسيم المحتمل حدوثه في حال التأخير.
                </li>
                <li className="">صورة اتفاق أو شرط التحكيم الساري.</li>
                <li className="">
                  سداد رسم قيد طلب الطوارئ المقرر خلال 12 ساعة من الإيداع.
                </li>
              </ul>
            </div>
            <div className="space-y-2 pt-1">
              <a
                className="w-full py-2.5 rounded-xl bg-status-error hover:bg-status-error/90 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                href="tel:+966118004623"
              >
                <span className="material-symbols-outlined text-[18px]">
                  call
                </span>
                <span className="">
                  الاتصال بالخط الساخن للمنازعات الطارئة (+966 11 800 4623)
                </span>
              </a>
              <a
                className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary-container text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                href="mailto:emergency@ioadr.org?subject=URGENT:%20Emergency%20Arbitrator%20Request"
              >
                <span className="material-symbols-outlined text-[18px]">
                  outgoing_mail
                </span>
                <span className="">
                  إرسال الطلب عبر بريد الطوارئ المباشر (emergency@ioadr.org)
                </span>
              </a>
            </div>
            <p className="text-center text-[10px] text-on-surface-variant/70">
              المرجع القانوني: اتفاقية نيويورك 1958 ونظام التحكيم السعودي ولائحة
              IOADR التنفيذية
            </p>
          </div>
        </div>
      )}

      {/* ================= INSTITUTIONAL FOOTER ================= */}
      <footer className="w-full bg-emerald-deepest text-white border-t-2 border-border-gilded pt-14 pb-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
            {/* About Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gold-light text-3xl">
                  balance
                </span>
                <h3 className="font-serif font-bold text-lg text-gold-light">
                  المكتب الدولي للتحكيم وتسوية المنازعات
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                هيئة تحكيمية دولية مستقلة تكرس معايير النزاهة المؤسسية والسيادية،
                وتقدم خدمات فض المنازعات التجارية والاستثمارية وفق أرفع المعايير
                العالمية والأنظمة المعتمدة.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 text-gold-light text-xs font-medium">
                  <span className="material-symbols-outlined text-base">
                    support_agent
                  </span>
                  <span className="">الخط الساخن للمنازعات:</span>
                  <span className="text-white font-bold font-mono" dir="ltr">
                    +966 11 800 4623
                  </span>
                </div>
              </div>
            </div>
            {/* Regional Seats */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-gold-light border-r-2 border-gold-light pr-2">
                المقرات الإقليمية والدولية
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-gold-light mt-0.5">
                    location_on
                  </span>
                  <span className="">
                    <strong>الرياض:</strong> برج KAFD 04، طريق الملك فهد
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-gold-light mt-0.5">
                    location_on
                  </span>
                  <span className="">
                    <strong>دبي:</strong> مركز دبي المالي العالمي (DIFC)
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-gold-light mt-0.5">
                    location_on
                  </span>
                  <span className="">
                    <strong>جنيف:</strong> حي البنوك والمنظمات الدولية
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-gold-light mt-0.5">
                    location_on
                  </span>
                  <span className="">
                    <strong>لندن:</strong> محكمة التحكيم التجاري، The Temple
                  </span>
                </li>
              </ul>
            </div>
            {/* Accreditations */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-gold-light border-r-2 border-gold-light pr-2">
                الاعتمادات والعضويات
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="">معتمد وفق اتفاقية نيويورك لعام 1958</li>
                <li className="">عضو الاتحاد الدولي لمؤسسات التحكيم (IFCAI)</li>
                <li className="">شريك موثوق لدى هيئة تسوية منازعات الاستثمار</li>
                <li className="">نظام إدارة قضايا متوافق مع ISO 27001</li>
              </ul>
            </div>
            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-gold-light border-r-2 border-gold-light pr-2">
                روابط نظامية
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    href="/knowledge-center"
                  >
                    قواعد وإجراءات التحكيم 2024
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    href="/calculator"
                  >
                    حاسبة أتعاب التحكيم والمصروفات
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    href="/about"
                  >
                    ميثاق الشرف وسلوك المحكمين
                  </Link>
                </li>
                <li className="">
                  <a
                    className="hover:text-gold-light transition-colors"
                    href="#"
                  >
                    إخلاء المسؤولية القانونية
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p className="">
              © 2025 المكتب الدولي للتحكيم وتسوية المنازعات (IOADR). جميع الحقوق
              محفوظة ومسجلة نظاماً.
            </p>
            <div className="flex items-center gap-4">
              <a className="hover:text-gold-light transition-colors" href="#">
                سياسة الخصوصية وسرية الجلسات
              </a>
              <span className="">•</span>
              <a className="hover:text-gold-light transition-colors" href="#">
                الشروط والأحكام التنظيمية
              </a>
              <span className="">•</span>
              <a className="hover:text-gold-light transition-colors" href="#">
                إشعارات الامتثال والشفافية
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

