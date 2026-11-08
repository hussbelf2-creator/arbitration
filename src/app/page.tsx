"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const handleCopyModelClause = () => {
    navigator.clipboard.writeText(
      "أي نزاع أو خلاف ينشأ عن هذا العقد أو يرتبط به يتم تسويته نهائياً عن طريق التحكيم وفقاً لقواعد المكتب الدولي للتحكيم وتسوية المنازعات (IOADR) بواسطة محكم أو أكثر يتم تعيينهم وفقاً لتلك القواعد."
    );
    alert("تم نسخ شرط التحكيم النموذجي إلى الحافظة بنجاح.");
  };

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-surface-ivory">
        <div className="flex flex-col w-full">
          {/* Section 1: Sovereign Hero Section (Clean, Balanced & Executive) */}
          <section className="relative w-full -mt-20 pt-32 pb-20 lg:pt-36 lg:pb-24 bg-emerald-deepest text-surface-ivory overflow-hidden">
            {/* Architectural Micro-Grid Background with Subtle Islamic Geometric Embellishments */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-screen">
              <svg
                className="w-full h-full"
                fill="none"
                height="100"
                viewBox="0 0 100 100"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    height="50"
                    id="islamic-geo-hero"
                    patternUnits="userSpaceOnUse"
                    width="50"
                  >
                    <path
                      d="M25 0 L50 25 L25 50 L0 25 Z"
                      fill="none"
                      opacity="0.6"
                      stroke="#E5C158"
                      strokeWidth="0.75"
                    ></path>
                    <circle
                      cx="25"
                      cy="25"
                      fill="#E5C158"
                      opacity="0.7"
                      r="1.5"
                    ></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#islamic-geo-hero)"
                  height="100%"
                  width="100%"
                ></rect>
              </svg>
            </div>

            {/* Radiant Ambient Gold Halos */}
            <div className="absolute -top-32 right-1/4 w-96 h-96 bg-gold-light/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-primary-container/60 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative max-w-[1360px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Right Column in RTL: Concise Headline, Clear Subtext & Primary CTAs (7 / 12) */}
              <div className="lg:col-span-7 flex flex-col items-start text-right">
                {/* Clean Institutional Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary-container/90 border border-border-gilded/30 text-gold-light shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-gold-light animate-pulse"></span>
                  <span className="font-label-sm text-xs font-semibold tracking-wide">
                    الولاية القضائية الدولية المستقلة • IOADR
                  </span>
                </div>

                {/* Balanced Hero Headline */}
                <h1 className="font-display-hero text-[36px] sm:text-[46px] lg:text-[52px] text-surface-ivory leading-[1.25] tracking-tight font-bold mb-6">
                  الريادة العالمية في الفصل في{" "}
                  <span className="text-gold-light">المنازعات التجارية</span>{" "}
                  والاستثمارية
                </h1>

                {/* Concise & Clear Subtitle */}
                <p className="font-body-lg text-[17px] sm:text-[18px] text-surface-container-high/90 max-w-xl leading-[1.8] mb-9">
                  هيئة تحكيمية دولية مستقلة توفر بيئة إجرائية محايدة لتسوية
                  النزاعات التجارية والاستثمارية وفق اتفاقية نيويورك 1958 وقواعد
                  الأونسيترال (UNCITRAL).
                </p>

                {/* Primary Dual Button Bar */}
                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                  <a
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-secondary text-surface-ivory hover:bg-gold-deep rounded-lg font-label-lg text-[15px] font-bold transition-all shadow-[0_8px_24px_rgba(119,90,0,0.28)] hover:translate-y-px"
                    data-path="qayd-dawa"
                    href="#procedural-timeline"
                  >
                    <span className="material-symbols-outlined text-surface-ivory text-xl">
                      gavel
                    </span>
                    <span>قيد طلب تحكيم فوري</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-surface-container-lowest/10 text-gold-light hover:bg-surface-container-lowest/20 border border-gold-light/25 rounded-lg font-label-lg text-[15px] font-semibold transition-all backdrop-blur-sm"
                    data-path="hasebat-al-rusoom"
                    href="#legal-repository"
                  >
                    <span className="material-symbols-outlined text-gold-light text-xl">
                      calculate
                    </span>
                    <span>حاسبة الرسوم التقديرية</span>
                  </a>
                </div>

                {/* Minimal Trust Highlights Row */}
                <div className="mt-10 pt-6 border-t border-surface-ivory/10 flex flex-wrap items-center gap-6 text-surface-container-high/85 font-label-sm text-xs">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gold-light text-lg">
                      verified
                    </span>
                    <span>إنفاذ دولي في 172 دولة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gold-light text-lg">
                      lock
                    </span>
                    <span>سرية تامة للمداولات</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gold-light text-lg">
                      balance
                    </span>
                    <span>معايير IBA للاستقلالية</span>
                  </div>
                </div>
              </div>

              {/* Left Column in RTL: Sleek Sovereign Emblem & Trust Card (5 / 12) */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-3 bg-gradient-to-tr from-gold-deep/20 via-transparent to-primary-container/40 rounded-2xl blur-xl pointer-events-none"></div>

                <div className="relative bg-primary-container/90 backdrop-blur-md border border-border-gilded/30 text-surface-ivory p-6 sm:p-8 rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.4)] overflow-hidden">
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-surface-ivory/10">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-emerald-deepest border border-border-gilded/30 flex items-center justify-center text-gold-light shadow-sm">
                        <span className="material-symbols-outlined text-2xl">
                          account_balance
                        </span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="font-headline-sm text-[18px] font-bold text-surface-ivory leading-tight">
                          محكمة التحكيم العامة
                        </span>
                        <span className="font-legal-code text-[11px] text-gold-light tracking-wider">
                          INTERNATIONAL ARBITRATION COURT
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-emerald-deepest/80 border border-status-success/40 text-gold-light rounded-full font-legal-code text-[11px] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
                      <span>معتمد دولياً</span>
                    </span>
                  </div>

                  {/* Center Official Emblem Showcase */}
                  <div className="relative rounded-xl bg-emerald-deepest/90 border border-border-gilded/25 p-5 mb-6 flex items-center gap-4 shadow-inner">
                    <img
                      src="/logo.jpg"
                      alt="المكتب الدولي للتحكيم"
                      className="w-20 h-20 rounded-xl object-cover border border-border-gilded/40 shrink-0 shadow-md"
                    />
                    <div className="flex flex-col text-right">
                      <span className="font-label-sm text-xs text-gold-light mb-1">
                        المركز الرئيسي • حضرموت - المكلا - فوة
                      </span>
                      <h3 className="font-title-md text-[16px] text-surface-ivory font-bold leading-snug">
                        المكتب الدولي للتحكيم وتسوية المنازعات
                      </h3>
                      <p className="font-body-sm text-xs text-surface-variant mt-1">
                        فصل قضائي ناجز، محكمون دوليون معتمدون، وأحكام قطعية
                        واجبة النفاذ.
                      </p>
                    </div>
                  </div>

                  {/* Clean 2-Column Key Guarantees */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-deepest/60 border border-surface-ivory/5 p-4 rounded-xl flex flex-col items-center text-center">
                      <span className="font-headline-md text-2xl text-gold-light font-bold">
                        100%
                      </span>
                      <span className="font-label-sm text-xs text-surface-container-high mt-1">
                        سرية وحصانة المداولات
                      </span>
                    </div>
                    <div className="bg-emerald-deepest/60 border border-surface-ivory/5 p-4 rounded-xl flex flex-col items-center text-center">
                      <span className="font-headline-md text-2xl text-gold-light font-bold">
                        172
                      </span>
                      <span className="font-label-sm text-xs text-surface-container-high mt-1">
                        دولة لاتفاقية نيويورك
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Key Performance Metrics Banner (Monolithic Sovereign Ribbon) */}
          <section className="w-full bg-surface-parchment text-on-surface py-space-xl shadow-inner relative z-10">
            <div className="max-w-[1360px] mx-auto px-gutter">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
                {/* Metric 1 */}
                <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 shrink-0 rounded-lg bg-emerald-subtle flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-3xl">
                      task_alt
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold">
                        98.4%
                      </span>
                    </div>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      نسبة الفصل وإنفاذ الأحكام
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      دون أي طعن بالبطلان ناجز أمام المحاكم الوطنية
                    </span>
                  </div>
                </div>
                {/* Metric 2 */}
                <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 shrink-0 rounded-lg bg-emerald-subtle flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-3xl">
                      hourglass_bottom
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold">
                        75
                      </span>
                      <span className="font-title-md text-title-md text-gold-deep font-bold">
                        يوماً
                      </span>
                    </div>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      متوسط المدة الزمنية للبت
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      للإجراءات السريعة والمنازعات المالية المصرفية
                    </span>
                  </div>
                </div>
                {/* Metric 3 */}
                <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 shrink-0 rounded-lg bg-emerald-subtle flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-3xl">
                      monetization_on
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold">
                        +4.2B
                      </span>
                      <span className="font-title-md text-title-md text-gold-deep font-bold">
                        $
                      </span>
                    </div>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      قيمة المطالبات المدارة
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      عقود الطاقة الكبرى والاستثمارات الأجنبية
                    </span>
                  </div>
                </div>
                {/* Metric 4 */}
                <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 shrink-0 rounded-lg bg-emerald-subtle flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-3xl">
                      groups_3
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold">
                        142
                      </span>
                      <span className="font-title-md text-title-md text-gold-deep font-bold">
                        محكماً
                      </span>
                    </div>
                    <span className="font-title-md text-title-md text-primary font-bold">
                      محكمون وخبراء معتمدون
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      قضاة سابقون وأساتذة قانون من 36 دولة
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2.5: عن المركز (About the Center) */}
          <section
            id="about-center"
            className="relative w-full py-space-2xl bg-surface-ivory overflow-hidden scroll-mt-20"
          >
            {/* Subtle Geometric Diamond Background Embellishments */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.045]">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 800 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="about-diamond-grid"
                    width="48"
                    height="48"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M24 4 L44 24 L24 44 L4 24 Z"
                      fill="#063d31"
                    />
                  </pattern>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#about-diamond-grid)"
                />
              </svg>
            </div>

            <div className="relative max-w-[1360px] mx-auto px-gutter">
              {/* Top Split: About Content (Right in RTL) & Visual Showcase (Left in RTL) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center mb-space-xl">
                {/* Text Content Column (Right in RTL) */}
                <div className="lg:col-span-5 flex flex-col items-start text-right">
                  <div className="inline-flex items-center gap-space-xs text-gold-deep font-label-sm text-label-sm mb-space-xs uppercase tracking-widest">
                    <span className="w-6 h-0.5 bg-gold-deep inline-block"></span>
                    <span>الهوية المؤسسية والرسالة</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-space-md">
                    عن المركز
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-space-xl">
                    مركز تحكيم دولي من السعودية، لا يهدف إلى الربح، يقدم خدمات
                    بدائل تسوية المنازعات وفق أفضل المعايير والممارسات الدولية،
                    في إطار مؤسسي مُحْكَم يضمن الوصول المُيَسَّر إلى العدالة
                    الناجزة لمنشآت الأعمال، محليًّا وإقليميًّا ودوليًّا.
                  </p>
                  <a
                    href="#adr-services"
                    className="inline-flex items-center justify-center gap-2 px-10 py-3 rounded-full bg-gradient-to-l from-primary-container to-status-success text-surface-ivory hover:from-emerald-deepest hover:to-primary-container font-label-lg text-label-lg font-bold shadow-[0_8px_20px_rgba(6,61,49,0.2)] hover:shadow-[0_12px_24px_rgba(6,61,49,0.28)] transition-all duration-300 border border-border-gilded/30"
                  >
                    <span>مزيد</span>
                    <span className="material-symbols-outlined text-gold-light text-base">
                      arrow_back
                    </span>
                  </a>
                </div>

                {/* Visual Showcase Card with Floating Badges (Left in RTL) */}
                <div className="lg:col-span-7 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(6,61,49,0.2)] border border-border-gilded/40 bg-gradient-to-br from-emerald-deepest via-primary-container to-emerald-deepest aspect-[16/9] flex items-center justify-center p-4 sm:p-6">
                    {/* Ambient Gold Glow Behind Logo */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.16),transparent_70%)] pointer-events-none"></div>
                    <img
                      src="/logo.jpg"
                      alt="شعار المكتب الدولي للتحكيم وتسوية المنازعات - IOADR"
                      className="relative z-10 h-full w-auto max-w-full object-contain rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.45)] border border-border-gilded/30 hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  {/* Floating Badge (Top Right of Image) */}
                  <div className="absolute -top-4 -right-4 sm:top-6 sm:-right-6 w-16 h-20 rounded-xl bg-gradient-to-b from-primary-container to-emerald-deepest border border-border-gilded/50 shadow-[0_12px_28px_rgba(6,61,49,0.3)] flex items-center justify-center text-gold-light z-10">
                    <span className="material-symbols-outlined text-3xl">
                      handshake
                    </span>
                  </div>

                  {/* Geometric Ribbon Accent (Bottom Right of Image) */}
                  <div
                    className="hidden sm:block absolute -bottom-5 right-14 w-9 h-20 bg-gold-light shadow-lg z-10"
                    style={{
                      clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)",
                    }}
                  ></div>
                </div>
              </div>

              {/* Bottom 3 Institutional Pillars Ribbon */}
              <div className="bg-surface-container rounded-2xl p-space-xl md:py-10 md:px-12 shadow-[0_12px_32px_rgba(6,61,49,0.06)] border border-border-subtle/80 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-border-subtle">
                  {/* Pillar 1 (Right in RTL) */}
                  <div className="flex flex-col items-center text-center px-space-md pt-space-md md:pt-0">
                    <div className="w-24 h-24 rounded-full bg-surface-container-lowest shadow-[0_6px_20px_rgba(6,61,49,0.08)] border border-border-gilded/30 flex items-center justify-center mb-space-md text-primary group hover:border-gold-deep transition-colors">
                      <div className="relative flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-primary-container">
                          account_balance
                        </span>
                        <span className="material-symbols-outlined text-xl text-gold-deep -mr-2 mt-4 bg-surface-container-lowest rounded-full p-0.5">
                          paid
                        </span>
                      </div>
                    </div>
                    <p className="font-title-md text-[16px] text-primary font-semibold leading-relaxed max-w-xs">
                      يتمتَّع بالشخصية الاعتبارية، وبالاستقلالَيْن المالي
                      والإداري عن القطاعَيْن الحكومي والخاص.
                    </p>
                  </div>

                  {/* Pillar 2 (Center) */}
                  <div className="flex flex-col items-center text-center px-space-md pt-space-lg md:pt-0">
                    <div className="w-24 h-24 rounded-full bg-surface-container-lowest shadow-[0_6px_20px_rgba(6,61,49,0.08)] border border-border-gilded/30 flex items-center justify-center mb-space-md text-primary group hover:border-gold-deep transition-colors">
                      <span className="material-symbols-outlined text-4xl text-primary-container">
                        groups
                      </span>
                    </div>
                    <p className="font-title-md text-[16px] text-primary font-semibold leading-relaxed max-w-xs">
                      مدعوم بمجلس متخصص، بخبراء دوليين مستقلين، للبت في الجوانب
                      الفنية المرتبطة بقضايا التحكيم.
                    </p>
                  </div>

                  {/* Pillar 3 (Left in RTL) */}
                  <div className="flex flex-col items-center text-center px-space-md pt-space-lg md:pt-0">
                    <div className="w-24 h-24 rounded-full bg-surface-container-lowest shadow-[0_6px_20px_rgba(6,61,49,0.08)] border border-border-gilded/30 flex items-center justify-center mb-space-md text-primary group hover:border-gold-deep transition-colors">
                      <div className="relative flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-primary-container">
                          description
                        </span>
                        <span className="material-symbols-outlined text-xl text-gold-deep -mr-2 mt-4 bg-surface-container-lowest rounded-full p-0.5">
                          balance
                        </span>
                      </div>
                    </div>
                    <p className="font-title-md text-[16px] text-primary font-semibold leading-relaxed max-w-xs">
                      قواعد إجرائية، وفق أفضل الممارسات الدولية.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2.6: خدماتنا (ADR Services Showcase) */}
          <section
            id="adr-services"
            className="relative w-full bg-primary-container text-surface-ivory overflow-hidden scroll-mt-20"
          >
            {/* Background Split Visual: Court Chamber + Judicial Gavel Watermark */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-6/12 pointer-events-none overflow-hidden">
              <img
                src="/services-chamber.jpg"
                alt="قاعة محكمة التحكيم الدولية - المكتب الدولي للتحكيم"
                className="w-full h-full object-cover opacity-35 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-emerald-deepest/80 via-primary-container/85 to-primary-container"></div>
              {/* Subtle Judicial Gavel & Scales Watermark */}
              <div className="absolute -bottom-10 right-6 text-gold-light/10 select-none">
                <span className="material-symbols-outlined text-[220px] leading-none">
                  gavel
                </span>
              </div>
            </div>

            {/* Subtle Gold Hairline Top & Bottom */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/40 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-light/40 to-transparent"></div>

            <div className="relative max-w-[1360px] mx-auto px-gutter py-space-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                {/* Right Column in RTL: "خدماتنا" Title & Vertical ADR Blocks */}
                <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row items-center justify-between gap-space-xl text-right">
                  {/* Section Title with Ribbon Accent */}
                  <div className="flex flex-col items-start sm:items-start shrink-0">
                    <div className="relative inline-flex items-center">
                      <span
                        className="w-5 h-14 bg-gold-light/90 rounded-sm ml-3 shrink-0 shadow-md"
                        style={{
                          clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)",
                        }}
                      ></span>
                      <h2 className="font-display-hero-mobile text-display-hero-mobile sm:text-[42px] text-surface-ivory font-bold tracking-tight">
                        خدماتنا
                      </h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-surface-container-high/85 mt-space-sm max-w-[220px] leading-relaxed">
                      منظومة متكاملة لبدائل تسوية المنازعات التجارية وفق أرقى
                      المعايير الدولية
                    </p>
                  </div>

                  {/* Vertical A - D - R Architectural Blocks */}
                  <div className="flex sm:flex-col items-center gap-3 select-none">
                    {[
                      { letter: "A", label: "Arbitration" },
                      { letter: "D", label: "Dispute" },
                      { letter: "R", label: "Resolution" },
                    ].map((block, idx) => (
                      <div
                        key={block.letter}
                        className={`w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-gradient-to-br from-[#e7cfa1] via-[#d7b575] to-[#b99046] text-emerald-deepest shadow-[0_14px_30px_rgba(0,0,0,0.35)] border border-surface-ivory/40 flex flex-col items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-105 ${idx === 1 ? "sm:-mr-3" : ""
                          }`}
                      >
                        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#03231C_1px,transparent_1px)] [background-size:8px_8px]"></div>
                        <span className="font-serif text-5xl sm:text-6xl font-extrabold leading-none tracking-tighter text-emerald-deepest drop-shadow-sm">
                          {block.letter}
                        </span>
                        <span className="font-legal-code text-[10px] uppercase tracking-widest text-emerald-deepest/80 font-bold mt-1">
                          {block.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Left Column in RTL: 3 Stacked Service Cards */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  {/* Card 1: خدمات التحكيم */}
                  <a
                    href="#specialized-services"
                    className="group relative bg-emerald-deepest/85 hover:bg-emerald-deepest p-space-lg sm:p-space-xl rounded-xl border border-gold-light/25 hover:border-gold-light/70 shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-all duration-300 flex flex-col gap-space-sm text-right"
                  >
                    <div className="flex items-center justify-between gap-space-md">
                      {/* Title & Icon (Right side in RTL) */}
                      <div className="flex items-center gap-space-md">
                        <div className="w-12 h-12 rounded-lg bg-primary-container border border-gold-light/30 flex items-center justify-center text-gold-light group-hover:bg-gold-light group-hover:text-emerald-deepest transition-colors shrink-0">
                          <span className="material-symbols-outlined text-2xl">
                            gavel
                          </span>
                        </div>
                        <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-surface-ivory font-bold group-hover:text-gold-light transition-colors">
                          خدمات التحكيم
                        </h3>
                      </div>

                      {/* Circular Arrow Action Button (Left side in RTL) */}
                      <span className="w-10 h-10 rounded-full bg-gold-light text-emerald-deepest flex items-center justify-center shadow-md group-hover:bg-surface-ivory group-hover:-translate-x-1 transition-all shrink-0">
                        <span className="material-symbols-outlined text-xl">
                          arrow_back
                        </span>
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-surface-container-high leading-relaxed pr-0 sm:pr-16">
                      تحكيم مؤسسي، بقواعد إجرائية متخصصة، على يد محكَّمين
                      مستقلين متخصصين، يصدر عنهم حكم نهائي، واجب التنفيذ،
                      محليًّا ودوليًّا.
                    </p>
                  </a>

                  {/* Card 2: خدمات الوساطة */}
                  <a
                    href="#specialized-services"
                    className="group relative bg-emerald-deepest/85 hover:bg-emerald-deepest p-space-lg sm:p-space-xl rounded-xl border border-gold-light/25 hover:border-gold-light/70 shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-all duration-300 flex flex-col gap-space-sm text-right"
                  >
                    <div className="flex items-center justify-between gap-space-md">
                      {/* Title & Icon (Right side in RTL) */}
                      <div className="flex items-center gap-space-md">
                        <div className="w-12 h-12 rounded-lg bg-primary-container border border-gold-light/30 flex items-center justify-center text-gold-light group-hover:bg-gold-light group-hover:text-emerald-deepest transition-colors shrink-0">
                          <span className="material-symbols-outlined text-2xl">
                            handshake
                          </span>
                        </div>
                        <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-surface-ivory font-bold group-hover:text-gold-light transition-colors">
                          خدمات الوساطة
                        </h3>
                      </div>

                      {/* Circular Arrow Action Button (Left side in RTL) */}
                      <span className="w-10 h-10 rounded-full bg-gold-light text-emerald-deepest flex items-center justify-center shadow-md group-hover:bg-surface-ivory group-hover:-translate-x-1 transition-all shrink-0">
                        <span className="material-symbols-outlined text-xl">
                          arrow_back
                        </span>
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-surface-container-high leading-relaxed pr-0 sm:pr-16">
                      وساطة مؤسسية، يديرها المركز وفق قواعده الإجرائية، لتكون
                      بديلًا منهجيًّا، يُسَهِّل الوصول إلى تسوية وُدِّية، يتوافق
                      عليها أطراف القضية.
                    </p>
                  </a>

                  {/* Card 3: خدمات مستقلة */}
                  <a
                    href="#specialized-services"
                    className="group relative bg-emerald-deepest/85 hover:bg-emerald-deepest p-space-lg sm:p-space-xl rounded-xl border border-gold-light/25 hover:border-gold-light/70 shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-all duration-300 flex flex-col gap-space-sm text-right"
                  >
                    <div className="flex items-center justify-between gap-space-md">
                      {/* Title & Icon (Right side in RTL) */}
                      <div className="flex items-center gap-space-md">
                        <div className="w-12 h-12 rounded-lg bg-primary-container border border-gold-light/30 flex items-center justify-center text-gold-light group-hover:bg-gold-light group-hover:text-emerald-deepest transition-colors shrink-0">
                          <span className="material-symbols-outlined text-2xl">
                            fact_check
                          </span>
                        </div>
                        <h3 className="font-headline-md text-headline-sm sm:text-headline-md text-surface-ivory font-bold group-hover:text-gold-light transition-colors">
                          خدمات مستقلة
                        </h3>
                      </div>

                      {/* Circular Arrow Action Button (Left side in RTL) */}
                      <span className="w-10 h-10 rounded-full bg-gold-light text-emerald-deepest flex items-center justify-center shadow-md group-hover:bg-surface-ivory group-hover:-translate-x-1 transition-all shrink-0">
                        <span className="material-symbols-outlined text-xl">
                          arrow_back
                        </span>
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-surface-container-high leading-relaxed pr-0 sm:pr-16">
                      خدمات داعمة للقضايا التي لا يديرها المركز، تساعد في حوكمة
                      إجراءات القضية، ومساعدة أطرافها على تركيز جهدهم في تسوية
                      النزاع القائم.
                    </p>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Corner Ribbon Accent */}
            <div
              className="hidden sm:block absolute -bottom-3 left-16 w-8 h-14 bg-gold-light/90 shadow-md pointer-events-none"
              style={{
                clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)",
              }}
            ></div>
          </section>

          {/* Section 3: Comprehensive Institutional Services Grid (4 Columns) */}
          <section
            id="specialized-services"
            className="w-full py-space-2xl bg-surface-ivory scroll-mt-20"
          >
            <div className="max-w-[1360px] mx-auto px-gutter">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md text-right">
                <div>
                  <div className="flex items-center gap-space-xs text-gold-deep font-label-sm text-label-sm mb-space-xs uppercase tracking-widest">
                    <span className="w-6 h-0.5 bg-gold-deep inline-block"></span>
                    <span className="">المنظومة المؤسسية الشاملة</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                    مجالات الاختصاص والخدمات القضائية المعتمدة
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  يقدم المكتب منظومة متكاملة لحل النزاعات تبدأ من تسوية المطالبات
                  ودياً بالوساطة الملزمة وحتى الأحكام التحكيمية القطعية غير
                  القابلة للطعن العادي.
                </p>
              </div>
              {/* Bento-style 4 Column Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
                {/* Service 1: Institutional Commercial Arbitration */}
                <div className="group bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right relative overflow-hidden">
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div>
                    <div className="w-14 h-14 rounded-lg bg-emerald-subtle text-primary flex items-center justify-center mb-space-lg group-hover:bg-primary-container group-hover:text-gold-light transition-colors">
                      <span className="material-symbols-outlined text-3xl">
                        apartment
                      </span>
                    </div>
                    <span className="font-legal-code text-legal-code text-gold-deep block mb-space-xs">
                      غرف متخصصة قطاعياً
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm font-bold">
                      التحكيم التجاري والاستثماري
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      إدارة منازعات عقود الفيديك (FIDIC)، مشاريع النفط والغاز،
                      التمويل الإسلامي، النزاعات المصرفية العابرة للحدود،
                      ومنازعات المساهمين والاستحواذ.
                    </p>
                    <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-gold-deep text-sm">
                          check_circle
                        </span>
                        <span className="">
                          لوائح تحكيم طارئة خلال 48 ساعة
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-gold-deep text-sm">
                          check_circle
                        </span>
                        <span className="">تدابير تحفظية ووقتية نافذة</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="inline-flex items-center justify-between pt-space-md text-primary font-label-lg text-label-lg group-hover:text-gold-deep transition-colors"
                    data-path="qayd-dawa"
                    href="#procedural-timeline"
                  >
                    <span className="">طلب تشكيل هيئة</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_back
                    </span>
                  </a>
                </div>
                {/* Service 2: Mediation and Conciliation */}
                <div className="group bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right relative overflow-hidden">
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div>
                    <div className="w-14 h-14 rounded-lg bg-emerald-subtle text-primary flex items-center justify-center mb-space-lg group-hover:bg-primary-container group-hover:text-gold-light transition-colors">
                      <span className="material-symbols-outlined text-3xl">
                        handshake
                      </span>
                    </div>
                    <span className="font-legal-code text-legal-code text-gold-deep block mb-space-xs">
                      اتفاقية سنغافورة للوساطة
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm font-bold">
                      الوساطة والتسوية الودية
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      مسار بديل عالي السرية يهدف للوصول إلى تسوية مرضية دون
                      الإضرار بالشراكات التجارية الاستراتيجية، مع إكساب محضر
                      الصلح الصيغة التنفيذية القضائية.
                    </p>
                    <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-gold-deep text-sm">
                          check_circle
                        </span>
                        <span className="">
                          وساطة محايدة بإشراف خبراء معتمدين
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-gold-deep text-sm">
                          check_circle
                        </span>
                        <span className="">حجية تنفيذية ملزمة أمام المحاكم</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="inline-flex items-center justify-between pt-space-md text-primary font-label-lg text-label-lg group-hover:text-gold-deep transition-colors"
                    data-path="al-lawaeh-wal-qararat"
                    href="#legal-repository"
                  >
                    <span className="">قواعد الوساطة</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_back
                    </span>
                  </a>
                </div>
                {/* Service 3: Nomination of International Arbitrators */}
                <div className="group bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right relative overflow-hidden">
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div>
                    <div className="w-14 h-14 rounded-lg bg-emerald-subtle text-primary flex items-center justify-center mb-space-lg group-hover:bg-primary-container group-hover:text-gold-light transition-colors">
                      <span className="material-symbols-outlined text-3xl">
                        badge
                      </span>
                    </div>
                    <span className="font-legal-code text-legal-code text-gold-deep block mb-space-xs">
                      سلطة التسمية والتعيين
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm font-bold">
                      تسمية المحكمين والخبراء
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      ممارسة صلاحيات سلطة التسمية المستقلة في حال تعذر اتفاق
                      الأطراف، وفحص طلبات الرد وتنحية المحكمين وفق إرشادات رابطة
                      المحامين الدولية (IBA).
                    </p>
                    <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-gold-deep text-sm">
                          check_circle
                        </span>
                        <span className="">
                          جداول دولية مصنفة بالتخصص الدقيق
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-gold-deep text-sm">
                          check_circle
                        </span>
                        <span className="">فحص صارم وموثق للاستقلالية</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="inline-flex items-center justify-between pt-space-md text-primary font-label-lg text-label-lg group-hover:text-gold-deep transition-colors"
                    data-path="daleel-al-mohakameen"
                    href="#about-center"
                  >
                    <span className="">استعراض الدليل</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_back
                    </span>
                  </a>
                </div>
                {/* Service 4: Electronic Arbitration & ODR Platform */}
                <div className="group bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right relative overflow-hidden">
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div>
                    <div className="w-14 h-14 rounded-lg bg-emerald-subtle text-primary flex items-center justify-center mb-space-lg group-hover:bg-primary-container group-hover:text-gold-light transition-colors">
                      <span className="material-symbols-outlined text-3xl">
                        devices
                      </span>
                    </div>
                    <span className="font-legal-code text-legal-code text-gold-deep block mb-space-xs">
                      المنصة السحابية المؤمنة (ODR)
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm font-bold">
                      التقاضي والتحكيم الإلكتروني
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      جلسات مرافعة افتراضية مشفرة، إيداع المستندات الرقمية مع
                      التوقيع الإلكتروني المعتمد، وإصدار مسودات القرارات بموجب
                      بروتوكولات الأمان السيبراني.
                    </p>
                    <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-gold-deep text-sm">
                          check_circle
                        </span>
                        <span className="">
                          قاعات استماع بتقنيات التشفير المتقدم
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-gold-deep text-sm">
                          check_circle
                        </span>
                        <span className="">
                          أرشفة وسجلات رقمية غير قابلة للتعديل
                        </span>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="inline-flex items-center justify-between pt-space-md text-primary font-label-lg text-label-lg group-hover:text-gold-deep transition-colors"
                    data-path="bawabat-al-tahkeem"
                    href="#procedural-timeline"
                  >
                    <span className="">دخول البوابة</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_back
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: The 4-Step Arbitration Procedural Timeline */}
          <section
            id="procedural-timeline"
            className="w-full py-space-2xl bg-surface-parchment scroll-mt-20"
          >
            <div className="max-w-[1360px] mx-auto px-gutter">
              {/* Section Intro */}
              <div className="text-center max-w-2xl mx-auto mb-space-2xl">
                <span className="font-label-sm text-label-sm text-gold-deep uppercase tracking-widest block mb-space-xs">
                  بروتوكول إدارة الدعاوى
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-space-sm">
                  مسار إجراءات سير الدعوى التحكيمية
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  خطوات واضحة ومحددة زمنياً وفق قواعد التحكيم المؤسسي لضمان حيدة
                  القضاء وسرعة الفصل وحصانة الحكم النهائي.
                </p>
              </div>
              {/* Wide 4-Step Horizontal Pipeline Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
                {/* Step 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col text-right relative">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-10 h-10 rounded-full bg-emerald-deepest text-gold-light font-display-hero-mobile text-headline-sm flex items-center justify-center font-bold">
                      1
                    </span>
                    <span className="font-legal-code text-legal-code text-gold-deep px-2 py-0.5 bg-surface-container rounded-sm">
                      المرحلة الأولى
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    قيد الطلب وفحص الشرط التحكيمي
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                    إيداع استدعاء التحكيم وسداد رسوم التسجيل، ومراجعة أمانة السر
                    لصحة وشمولية شرط التحكيم التعاقدي وإخطار الطرف المدعى عليه
                    فوراً.
                  </p>
                  <div className="mt-auto pt-space-sm bg-surface-container-low p-space-sm rounded-lg text-on-surface-variant font-legal-code text-legal-code">
                    المدى الزمني: من 3 إلى 7 أيام عمل
                  </div>
                </div>
                {/* Step 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col text-right relative">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-10 h-10 rounded-full bg-emerald-deepest text-gold-light font-display-hero-mobile text-headline-sm flex items-center justify-center font-bold">
                      2
                    </span>
                    <span className="font-legal-code text-legal-code text-gold-deep px-2 py-0.5 bg-surface-container rounded-sm">
                      المرحلة الثانية
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    تشكيل الهيئة وإقرارات الحيدة
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                    اختيار المحكم الفرد أو هيئة التحكيم الثلاثية، وتوقيع إقرارات
                    الاستقلال والنزاهة وتفرغ المحكمين قبل صدور أمر التشكيل
                    القضائي الرسمي.
                  </p>
                  <div className="mt-auto pt-space-sm bg-surface-container-low p-space-sm rounded-lg text-on-surface-variant font-legal-code text-legal-code">
                    المدى الزمني: 15 إلى 20 يوماً
                  </div>
                </div>
                {/* Step 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col text-right relative">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-10 h-10 rounded-full bg-emerald-deepest text-gold-light font-display-hero-mobile text-headline-sm flex items-center justify-center font-bold">
                      3
                    </span>
                    <span className="font-legal-code text-legal-code text-gold-deep px-2 py-0.5 bg-surface-container rounded-sm">
                      المرحلة الثالثة
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    إدارة الدعوى والمرافعات الشفهية
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                    عقد الاجتماع الإجرائي الأول، تبادل المذكرات والأدلة، ندب
                    الخبراء الفنيين عند الاقتضاء، وانعقاد جلسات الاستماع وسماع
                    الشهود حضورياً أو عن بعد.
                  </p>
                  <div className="mt-auto pt-space-sm bg-surface-container-low p-space-sm rounded-lg text-on-surface-variant font-legal-code text-legal-code">
                    المدى الزمني: جدول محدد ملزم للهيئة
                  </div>
                </div>
                {/* Step 4 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col text-right relative">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-10 h-10 rounded-full bg-emerald-deepest text-gold-light font-display-hero-mobile text-headline-sm flex items-center justify-center font-bold">
                      4
                    </span>
                    <span className="font-legal-code text-legal-code text-gold-deep px-2 py-0.5 bg-surface-container rounded-sm">
                      المرحلة الرابعة
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                    المداولة وصدور الحكم النهائي
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                    قفل باب المرافعة، التدقيق القانوني لحكم التحكيم من أمانة
                    السر لضمان صحة النفاذ، ثم تسليم النسخ الأصلية الممهورة
                    بالصيغة التنفيذية للأطراف.
                  </p>
                  <div className="mt-auto pt-space-sm bg-emerald-subtle p-space-sm rounded-lg text-status-success font-legal-code text-legal-code font-bold">
                    النتيجة: حكم بات نهائي واجب النفاذ
                  </div>
                </div>
              </div>
              {/* Interactive Clause Helper Bar */}
              <div
                id="model-clauses"
                className="mt-space-xl bg-primary-container text-surface-ivory p-space-lg rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-md shadow-md scroll-mt-24"
              >
                <div className="flex items-center gap-space-md text-right">
                  <span className="material-symbols-outlined text-gold-light text-3xl">
                    description
                  </span>
                  <div>
                    <h5 className="font-title-md text-title-md text-surface-ivory font-bold">
                      هل ترغب في صياغة شرط التحكيم النموذجي في عقودك التجارية؟
                    </h5>
                    <p className="font-body-sm text-body-sm text-surface-container-high">
                      احمِ استثماراتك عبر إدراج البند المعتمد للمكتب الدولي
                      للتحكيم (IOADR Model Clause).
                    </p>
                  </div>
                </div>
                <button
                  className="shrink-0 px-space-lg py-space-sm bg-gold-deep hover:bg-gold-light text-primary font-label-lg text-label-lg rounded-sm transition-all shadow-sm"
                  onClick={handleCopyModelClause}
                  type="button"
                >
                  نسخ شرط التحكيم النموذجي
                </button>
              </div>
            </div>
          </section>

          {/* Section 5: Legal Repository, Regulations & Judicial Precedents */}
          <section
            id="legal-repository"
            className="w-full py-space-2xl bg-surface-ivory scroll-mt-20"
          >
            <div className="max-w-[1360px] mx-auto px-gutter">
              <div className="flex flex-col md:flex-row items-end justify-between mb-space-xl gap-space-md text-right">
                <div>
                  <span className="font-label-sm text-label-sm text-gold-deep uppercase tracking-widest block mb-space-xs">
                    المرجعية المعرفية والنظامية
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                    مركز اللوائح والمبادئ والقرارات التحكيمية
                  </h2>
                </div>
                <a
                  className="inline-flex items-center gap-space-xs text-primary hover:text-gold-deep font-label-lg text-label-lg font-bold transition-colors"
                  data-path="al-lawaeh-wal-qararat"
                  href="#legal-repository"
                >
                  <span className="">عرض المكتبة القانونية الكاملة</span>
                  <span className="material-symbols-outlined text-lg">
                    arrow_back
                  </span>
                </a>
              </div>
              {/* Regulatory Documents Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                {/* Document 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between text-right hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-space-sm py-0.5 rounded-sm bg-primary/10 text-primary font-legal-code text-legal-code">
                        إصدار يناير 2025
                      </span>
                      <span className="material-symbols-outlined text-gold-deep text-2xl">
                        picture_as_pdf
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                      لائحة التحكيم المؤسسي المحدثة (2025)
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      تتضمن التعديلات الإجرائية الحديثة للتحكيم متعدد الأطراف،
                      الجلسات الافتراضية، وتعيين محكم الطوارئ قبل تشكيل الهيئة
                      الأصلية.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-md font-label-sm text-label-sm">
                    <span className="text-on-surface-variant font-legal-code">
                      PDF • 4.8 MB
                    </span>
                    <a
                      className="text-primary hover:text-gold-deep font-bold flex items-center gap-1"
                      href="#legal-repository"
                    >
                      <span className="material-symbols-outlined text-sm">
                        download
                      </span>
                      <span className="">تحميل النسخة المعتمدة</span>
                    </a>
                  </div>
                </div>
                {/* Document 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between text-right hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-space-sm py-0.5 rounded-sm bg-primary/10 text-primary font-legal-code text-legal-code">
                        دليل النفقات والمصاريف
                      </span>
                      <span className="material-symbols-outlined text-gold-deep text-2xl">
                        table_chart
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                      جدول المصاريف الإدارية وأتعاب المحكمين
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      جدول تناسبي دقيق ومعياري لحساب التكاليف القضائية وأتعاب
                      المحكمين بحسب قيمة المبلغ المتنازع عليه بدون أي رسوم خفية.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-md font-label-sm text-label-sm">
                    <span className="text-on-surface-variant font-legal-code">
                      PDF • 1.2 MB
                    </span>
                    <a
                      className="text-primary hover:text-gold-deep font-bold flex items-center gap-1"
                      href="#legal-repository"
                    >
                      <span className="material-symbols-outlined text-sm">
                        download
                      </span>
                      <span className="">تحميل الجدول الرسمي</span>
                    </a>
                  </div>
                </div>
                {/* Document 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between text-right hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-space-sm py-0.5 rounded-sm bg-primary/10 text-primary font-legal-code text-legal-code">
                        المجلة الدورية
                      </span>
                      <span className="material-symbols-outlined text-gold-deep text-2xl">
                        menu_book
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-primary font-bold mb-space-xs">
                      مختارات المبادئ القضائية السنوية
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      ملخص المبادئ النظامية المستخلصة من أحكام التحكيم غير
                      السرية في نزاعات المقاولات وتطبيقات القوة القاهرة وتوزيع
                      الأعباء.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-md font-label-sm text-label-sm">
                    <span className="text-on-surface-variant font-legal-code">
                      PDF • 8.1 MB
                    </span>
                    <a
                      className="text-primary hover:text-gold-deep font-bold flex items-center gap-1"
                      href="#legal-repository"
                    >
                      <span className="material-symbols-outlined text-sm">
                        download
                      </span>
                      <span className="">استعراض المبادئ</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5.5: آخر الأخبار (Latest News & Institutional Releases) */}
          <section
            id="latest-news"
            className="relative w-full py-space-2xl bg-surface-parchment overflow-hidden scroll-mt-20"
          >
            {/* Subtle Ambient Geometric Accent */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-light/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative max-w-[1360px] mx-auto px-gutter">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-right">
                <div>
                  <div className="inline-flex items-center gap-2 text-gold-deep font-label-sm text-xs mb-2 uppercase tracking-widest">
                    <span className="w-6 h-0.5 bg-gold-deep inline-block"></span>
                    <span>المركز الإعلامي والبيانات الصحفية</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="w-4 h-11 bg-primary-container rounded-sm shrink-0 shadow-sm"
                      style={{
                        clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)",
                      }}
                    ></span>
                    <h2 className="font-headline-lg text-[32px] sm:text-[38px] text-primary font-bold tracking-tight">
                      آخر الأخبار
                    </h2>
                  </div>
                </div>
                <p className="font-body-md text-[15px] text-on-surface-variant max-w-lg leading-relaxed">
                  أحدث المستجدات والاتفاقيات الدولية والفعاليات القضائية الصادرة
                  عن المكتب الدولي للتحكيم وتسوية المنازعات.
                </p>
              </div>

              {/* Editorial Bento Grid: 1 Featured Story (Right in RTL) + 3 Stacked News Cards (Left in RTL) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Featured Main News Card (7 Cols in RTL) */}
                <article className="lg:col-span-7 group bg-surface-container-lowest rounded-2xl border border-border-subtle/80 hover:border-border-gilded/60 shadow-[0_12px_36px_rgba(6,61,49,0.07)] hover:shadow-[0_20px_50px_rgba(6,61,49,0.14)] transition-all duration-300 overflow-hidden flex flex-col justify-between text-right">
                  <div>
                    {/* Featured Visual Container */}
                    <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-emerald-deepest">
                      <img
                        src="/news-court-stitch.jpg"
                        alt="قاعة محكمة التحكيم الدولية - جلسة مرافعة وهيئة التحكيم"
                        className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-deepest via-emerald-deepest/30 to-transparent"></div>

                      {/* Top Badges */}
                      <div className="absolute top-4 right-4 left-4 flex items-center justify-between gap-2">
                        <span className="px-3.5 py-1.5 rounded-full bg-gold-light text-emerald-deepest font-label-sm text-xs font-bold shadow-md flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-deepest animate-pulse"></span>
                          <span>بيان رسمي مميز</span>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-emerald-deepest/80 backdrop-blur-md text-surface-ivory border border-surface-ivory/15 font-legal-code text-xs flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-gold-light text-sm">
                            calendar_month
                          </span>
                          <span>15 مايو 2026</span>
                        </span>
                      </div>

                      {/* Bottom Overlay Location Tag */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 text-surface-ivory/90 font-legal-code text-xs">
                        <span className="material-symbols-outlined text-gold-light text-base">
                          location_on
                        </span>
                        <span>المكلا • المقر الرئيسي للمكتب الدولي للتحكيم</span>
                      </div>
                    </div>

                    {/* Featured Text Body */}
                    <div className="p-6 sm:p-8">
                      <h3 className="font-headline-md text-[22px] sm:text-[25px] text-primary group-hover:text-primary-container font-bold leading-snug mb-3 transition-colors">
                        المكتب الدولي للتحكيم يعتمد القواعد الإجرائية المحدثة
                        للفصل السريع في المنازعات التجارية والاستثمارية الكبرى
                      </h3>
                      <p className="font-body-md text-[15px] text-on-surface-variant leading-relaxed line-clamp-3">
                        أقر مجلس الإدارة منظومة القواعد الإجرائية المحدثة لعام
                        2026، والتي تتيح البت في النزاعات التجارية المستعجلة
                        خلال سقف زمني لا يتجاوز 60 يوماً، مع تعزيز صلاحيات محكم
                        الطوارئ وتكامل جلسات الاستماع الرقمية المشفرة وفق أعلى
                        المعايير الدولية.
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-border-subtle/60 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-on-surface-variant font-legal-code text-xs">
                      <span className="material-symbols-outlined text-gold-deep text-base">
                        schedule
                      </span>
                      <span>وقت القراءة: 3 دقائق</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary group-hover:text-gold-deep font-label-lg text-sm font-bold transition-colors cursor-default">
                      <span>اقرأ التفاصيل الكاملة</span>
                      <span className="w-8 h-8 rounded-full bg-surface-container group-hover:bg-primary-container group-hover:text-gold-light flex items-center justify-center transition-all group-hover:-translate-x-1">
                        <span className="material-symbols-outlined text-base">
                          arrow_back
                        </span>
                      </span>
                    </span>
                  </div>
                </article>

                {/* Right-to-Left Secondary Column: 3 Stacked Horizontal News Cards (5 Cols in RTL) */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-5">
                  {/* News Item 1 */}
                  <article className="group bg-surface-container-lowest p-5 rounded-2xl border border-border-subtle/80 hover:border-border-gilded/60 shadow-[0_6px_24px_rgba(6,61,49,0.05)] hover:shadow-[0_14px_34px_rgba(6,61,49,0.1)] transition-all duration-300 flex gap-4 items-center text-right">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-emerald-deepest relative">
                      <img
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=80"
                        alt="اتفاقية تعاون دولي في جنيف"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-emerald-deepest/15"></div>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-subtle text-primary-container font-label-sm text-[11px] font-bold">
                          شراكات دولية
                        </span>
                        <span className="text-on-surface-variant font-legal-code text-[11px]">
                          08 مايو 2026
                        </span>
                      </div>
                      <h4 className="font-title-md text-[15.5px] sm:text-[16.5px] text-primary group-hover:text-gold-deep font-bold leading-snug line-clamp-2 mb-2 transition-colors">
                        توقيع مذكرة تعاون قضائي مع مراكز التحكيم الأوروبية في
                        جنيف لتسهيل إنفاذ الأحكام العابرة للحدود
                      </h4>
                      <span className="inline-flex items-center gap-1 text-gold-deep font-label-sm text-xs font-bold cursor-default">
                        <span>عرض الخبر</span>
                        <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">
                          arrow_back
                        </span>
                      </span>
                    </div>
                  </article>

                  {/* News Item 2 */}
                  <article className="group bg-surface-container-lowest p-5 rounded-2xl border border-border-subtle/80 hover:border-border-gilded/60 shadow-[0_6px_24px_rgba(6,61,49,0.05)] hover:shadow-[0_14px_34px_rgba(6,61,49,0.1)] transition-all duration-300 flex gap-4 items-center text-right">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-emerald-deepest relative">
                      <img
                        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=80"
                        alt="الأسبوع الدولي لتسوية المنازعات"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-emerald-deepest/15"></div>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-md bg-secondary-fixed/60 text-on-secondary-fixed-variant font-label-sm text-[11px] font-bold">
                          المؤتمرات والفعاليات
                        </span>
                        <span className="text-on-surface-variant font-legal-code text-[11px]">
                          29 أبريل 2026
                        </span>
                      </div>
                      <h4 className="font-title-md text-[15.5px] sm:text-[16.5px] text-primary group-hover:text-gold-deep font-bold leading-snug line-clamp-2 mb-2 transition-colors">
                        انطلاق أعمال المنتدى السنوي لبدائل تسوية منازعات الطاقة
                        والبنية التحتية بمشاركة 45 دولة
                      </h4>
                      <span className="inline-flex items-center gap-1 text-gold-deep font-label-sm text-xs font-bold cursor-default">
                        <span>عرض الخبر</span>
                        <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">
                          arrow_back
                        </span>
                      </span>
                    </div>
                  </article>

                  {/* News Item 3 */}
                  <article className="group bg-surface-container-lowest p-5 rounded-2xl border border-border-subtle/80 hover:border-border-gilded/60 shadow-[0_6px_24px_rgba(6,61,49,0.05)] hover:shadow-[0_14px_34px_rgba(6,61,49,0.1)] transition-all duration-300 flex gap-4 items-center text-right">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-emerald-deepest relative">
                      <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80"
                        alt="انضمام محكمين دوليين جدد"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-emerald-deepest/15"></div>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-subtle text-primary-container font-label-sm text-[11px] font-bold">
                          جداول المحكمين
                        </span>
                        <span className="text-on-surface-variant font-legal-code text-[11px]">
                          18 أبريل 2026
                        </span>
                      </div>
                      <h4 className="font-title-md text-[15.5px] sm:text-[16.5px] text-primary group-hover:text-gold-deep font-bold leading-snug line-clamp-2 mb-2 transition-colors">
                        اعتماد انضمام 28 محكماً وخبيراً دولياً جديداً إلى القائمة
                        العليا للمحكمين في منازعات الفيديك والتمويل
                      </h4>
                      <span className="inline-flex items-center gap-1 text-gold-deep font-label-sm text-xs font-bold cursor-default">
                        <span>عرض الخبر</span>
                        <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">
                          arrow_back
                        </span>
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Sovereign Safeguards & Global Treaty Compliance Banner */}
          <section className="w-full bg-emerald-deepest text-surface-ivory py-space-xl relative overflow-hidden">
            {/* Fine Gold Hairline Embellishment */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-gold-light to-transparent opacity-40"></div>
            <div className="max-w-[1360px] mx-auto px-gutter flex flex-col lg:flex-row items-center justify-between gap-space-xl text-right">
              {/* Safeguard Overview */}
              <div className="flex items-start gap-space-lg max-w-3xl">
                <div className="w-16 h-16 shrink-0 rounded-xl bg-primary-container text-gold-light flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-4xl">
                    shield
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-space-xs text-gold-light font-label-sm text-label-sm mb-1">
                    <span className="">
                      الضمانات القضائية والحصانة الدولية
                    </span>
                    <span className="text-surface-variant">•</span>
                    <span className="">NEW YORK CONVENTION 1958</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-surface-ivory font-bold mb-space-xs">
                    أحكام ملزمة نهائية محصنة دولياً ضد التعطيل
                  </h3>
                  <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                    تتمتع وثائق وأحكام المكتب الدولي للتحكيم بالحجية القضائية
                    المطلقة المعترف بها في محاكم 172 دولة عضواً في اتفاقية
                    نيويورك، مع ضمان الحصانة الإجرائية الكاملة لهيئات التحكيم
                    وأمانة السر طوال فترة التداعي.
                  </p>
                </div>
              </div>
              {/* Action Box: Verification Portal */}
              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 bg-gold-light text-primary hover:bg-gold-deep hover:text-surface-ivory rounded-sm font-label-lg text-label-lg font-bold transition-all shadow-md"
                  data-path="qayd-dawa"
                  href="#procedural-timeline"
                >
                  <span className="material-symbols-outlined text-base">
                    verified_user
                  </span>
                  <span className="">التحقق من صحة حكم صادر</span>
                </a>
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-surface-container-lowest/10 text-surface-ivory hover:bg-surface-container-lowest/20 rounded-sm font-label-lg text-label-lg transition-all"
                  data-path="ettasel-bina"
                  href="#contact-footer"
                >
                  <span className="">التواصل الدبلوماسي</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer
        id="contact-footer"
        className="w-full bg-primary-container text-surface-ivory scroll-mt-20 relative overflow-hidden"
      >
        {/* Subtle Top Gold Hairline */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-light/40 to-transparent"></div>

        {/* Main 4-Column Footer Area */}
        <div className="max-w-[1360px] mx-auto px-gutter py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-right items-start">
            {/* Column 1 (Rightmost in RTL): الشعار والنبذة المختصرة (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start gap-5">
              <div className="flex items-center gap-3.5">
                <div className="w-16 h-16 p-1 rounded-2xl bg-emerald-deepest border border-border-gilded/40 shadow-lg flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src="/logo.jpg"
                    alt="المكتب الدولي للتحكيم"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-headline-sm text-[22px] font-bold text-surface-ivory leading-tight">
                    المكتب الدولي للتحكيم
                  </span>
                  <span className="font-legal-code text-[11px] text-gold-light tracking-wider uppercase mt-0.5">
                    International Office for Arbitration (IOADR)
                  </span>
                </div>
              </div>
              <p className="font-body-md text-[15px] text-surface-container-high/90 leading-relaxed max-w-sm">
                حلول إجرائية، وفق أفضل الممارسات الدولية، تقود النزاع إلى بَرِّ
                التسوية.
              </p>
            </div>

            {/* Column 2: روابط مساعدة (2 cols) */}
            <div className="lg:col-span-2 flex flex-col items-start gap-4">
              <h4 className="font-title-md text-[16px] font-bold text-gold-light">
                روابط مساعدة:
              </h4>
              <ul className="flex flex-col gap-3 font-body-md text-[14.5px] text-surface-ivory/90">
                <li className="flex items-center gap-2 group cursor-default">
                  <span className="material-symbols-outlined text-gold-light text-[18px] transition-transform group-hover:-translate-x-1">
                    chevron_left
                  </span>
                  <span className="group-hover:text-gold-light transition-colors">
                    قواعد التحكيم
                  </span>
                </li>
                <li className="flex items-center gap-2 group cursor-default">
                  <span className="material-symbols-outlined text-gold-light text-[18px] transition-transform group-hover:-translate-x-1">
                    chevron_left
                  </span>
                  <span className="group-hover:text-gold-light transition-colors">
                    حاسبة المركز
                  </span>
                </li>
                <li className="flex items-center gap-2 group cursor-default">
                  <span className="material-symbols-outlined text-gold-light text-[18px] transition-transform group-hover:-translate-x-1">
                    chevron_left
                  </span>
                  <span className="group-hover:text-gold-light transition-colors">
                    سجل قضيتك
                  </span>
                </li>
                <li className="flex items-center gap-2 group cursor-default">
                  <span className="material-symbols-outlined text-gold-light text-[18px] transition-transform group-hover:-translate-x-1">
                    chevron_left
                  </span>
                  <span className="group-hover:text-gold-light transition-colors">
                    انضم محكَّمًا
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 3: مبادرات المركز (3 cols) */}
            <div className="lg:col-span-3 flex flex-col items-start gap-4">
              <h4 className="font-title-md text-[16px] font-bold text-gold-light">
                مبادرات المركز:
              </h4>
              <ul className="flex flex-col gap-3 font-body-md text-[14.5px] text-surface-ivory/90">
                <li className="flex items-center gap-2 group cursor-default">
                  <span className="material-symbols-outlined text-gold-light text-[18px] transition-transform group-hover:-translate-x-1">
                    chevron_left
                  </span>
                  <span className="group-hover:text-gold-light transition-colors">
                    أكاديمية المكتب الدولي للتحكيم
                  </span>
                </li>
                <li className="flex items-center gap-2 group cursor-default">
                  <span className="material-symbols-outlined text-gold-light text-[18px] transition-transform group-hover:-translate-x-1">
                    chevron_left
                  </span>
                  <span className="group-hover:text-gold-light transition-colors">
                    الأسبوع الدولي لتسوية المنازعات
                  </span>
                </li>
                <li className="flex items-center gap-2 group cursor-default">
                  <span className="material-symbols-outlined text-gold-light text-[18px] transition-transform group-hover:-translate-x-1">
                    chevron_left
                  </span>
                  <span className="group-hover:text-gold-light transition-colors">
                    منافسة التحكيم التجاري الدولي
                  </span>
                </li>
                <li className="flex items-center gap-2 group cursor-default">
                  <span className="material-symbols-outlined text-gold-light text-[18px] transition-transform group-hover:-translate-x-1">
                    chevron_left
                  </span>
                  <span className="group-hover:text-gold-light transition-colors">
                    الزمالة الدولية للمحكمين المعتمدين
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4 (Leftmost in RTL): اتصل بنا + منصات التواصل (3 cols) */}
            <div className="lg:col-span-3 flex flex-col items-start gap-4">
              <h4 className="font-title-md text-[16px] font-bold text-gold-light">
                اتصل بنا:
              </h4>
              <ul className="flex flex-col gap-3 font-body-md text-[14.5px] text-surface-ivory/90">
                <li className="flex items-center gap-2.5 group cursor-default">
                  <span className="material-symbols-outlined text-gold-light text-[19px]">
                    smartphone
                  </span>
                  <span
                    dir="ltr"
                    className="font-legal-code text-[14px] group-hover:text-gold-light transition-colors"
                  >
                    +966-92000-3625
                  </span>
                </li>
                <li className="flex items-center gap-2.5 group cursor-default">
                  <span className="material-symbols-outlined text-gold-light text-[19px]">
                    mail
                  </span>
                  <span className="group-hover:text-gold-light transition-colors">
                    بريد إلكتروني
                  </span>
                </li>
                <li className="flex items-center gap-2.5 group cursor-default">
                  <span className="material-symbols-outlined text-gold-light text-[19px]">
                    map
                  </span>
                  <span className="group-hover:text-gold-light transition-colors">
                    مكاتبنا
                  </span>
                </li>
                <li className="flex items-center gap-2.5 group cursor-default">
                  <span className="material-symbols-outlined text-gold-light text-[19px]">
                    mark_email_read
                  </span>
                  <span className="group-hover:text-gold-light transition-colors">
                    اشترك بالنشرة البريدية
                  </span>
                </li>
              </ul>

              {/* Social Media Circular Buttons */}
              <div className="flex items-center gap-3 pt-2">
                {/* X (Twitter) */}
                <button
                  type="button"
                  aria-label="X"
                  className="w-10 h-10 rounded-full bg-gold-light text-emerald-deepest hover:bg-surface-ivory transition-all flex items-center justify-center shadow-md cursor-default"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                {/* LinkedIn */}
                <button
                  type="button"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-gold-light text-emerald-deepest hover:bg-surface-ivory transition-all flex items-center justify-center shadow-md cursor-default"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </button>
                {/* YouTube */}
                <button
                  type="button"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-gold-light text-emerald-deepest hover:bg-surface-ivory transition-all flex items-center justify-center shadow-md cursor-default"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Darker Copyright Bar */}
        <div className="w-full bg-emerald-deepest py-4 border-t border-surface-ivory/10">
          <div className="max-w-[1360px] mx-auto px-gutter text-center">
            <p className="font-body-sm text-[13px] text-surface-container-high/85">
              © 2026 جميع الحقوق محفوظة - المكتب الدولي للتحكيم وتسوية المنازعات
              (IOADR).
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

