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
          {/* Section 1: Sovereign Hero Section (Negative margin under translucent shell) */}
          <section className="relative w-full -mt-20 pt-28 pb-space-2xl bg-emerald-deepest text-surface-ivory overflow-hidden">
            {/* Architectural Micro-Grid Background with Subtle Islamic Geometric Embellishments */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen">
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
                    <path
                      d="M0 0 L50 50 M50 0 L0 50"
                      opacity="0.3"
                      stroke="#E5C158"
                      strokeDasharray="2 3"
                      strokeWidth="0.5"
                    ></path>
                    <circle
                      cx="25"
                      cy="25"
                      fill="none"
                      opacity="0.4"
                      r="8"
                      stroke="#E5C158"
                      strokeWidth="0.5"
                    ></circle>
                    <circle
                      cx="25"
                      cy="25"
                      fill="#E5C158"
                      opacity="0.8"
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
            <div className="relative max-w-[1360px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center pt-space-lg">
              {/* Text & Primary Call-to-Actions (Column 7 / 12) */}
              <div className="lg:col-span-7 flex flex-col items-start text-right">
                {/* Institutional Protocol Badge */}
                <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container text-gold-light shadow-md mb-space-lg">
                  <span className="w-2 h-2 rounded-full bg-gold-light animate-pulse"></span>
                  <span className="font-label-sm text-label-sm tracking-wide">
                    الولاية القضائية الدولية المستقلة | أمانة السر العامة
                  </span>
                  <span className="text-gold-light/40">|</span>
                  <span className="font-legal-code text-legal-code text-surface-container-high">
                    CIVIL &amp; COMMERCIAL DISPUTES
                  </span>
                </div>
                {/* Hero Headline */}
                <h1 className="font-display-hero text-display-hero text-surface-ivory leading-tight tracking-tight mb-space-md">
                  الريادة العالمية في الفصل في{" "}
                  <span className="text-gold-light">المنازعات التجارية</span>{" "}
                  والاستثمارية
                </h1>
                {/* Legal Statement & Subtext */}
                <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl leading-relaxed mb-space-xl">
                  هيئة تحكيمية دولية عليا توفر بيئة إجرائية محايدة وفائقة السرية،
                  تتولى إدارة وتسوية النزاعات المعقدة العابرة للحدود بموجب
                  اتفاقية نيويورك لعام 1958، وقواعد لجنة الأمم المتحدة للقانون
                  التجاري الدولي (UNCITRAL).
                </p>
                {/* CTAs Dual Button Bar */}
                <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
                  <Link
                    className="inline-flex items-center justify-center gap-space-sm px-space-xl py-4 bg-secondary text-surface-ivory hover:bg-gold-deep rounded-sm font-label-lg text-label-lg transition-all shadow-[0_8px_20px_rgba(119,90,0,0.25)] hover:shadow-none hover:translate-y-px"
                    data-path="qayd-dawa"
                    href="/new-case"
                  >
                    <span className="material-symbols-outlined text-surface-ivory text-xl">
                      gavel
                    </span>
                    <span className="">قيد طلب تحكيم فوري</span>
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center gap-space-sm px-space-xl py-4 bg-surface-container-lowest/10 text-gold-light hover:bg-surface-container-lowest/20 rounded-sm font-label-lg text-label-lg transition-all backdrop-blur-sm shadow-sm"
                    data-path="hasebat-al-rusoom"
                    href="/calculator"
                  >
                    <span className="material-symbols-outlined text-gold-light text-xl">
                      calculate
                    </span>
                    <span className="">حساب تكاليف النزاع التقديرية</span>
                  </Link>
                </div>
                {/* Diplomatic Treaty Endorsements Footnote */}
                <div className="mt-space-2xl pt-space-md flex flex-wrap items-center gap-space-lg text-surface-variant font-legal-code text-legal-code opacity-85">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-gold-light text-base">
                      verified
                    </span>
                    <span className="">إنفاذ فوري في 172 دولة ذات سيادة</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-gold-light/40"></span>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-gold-light text-base">
                      lock
                    </span>
                    <span className="">
                      بروتوكولات التشفير الدبلوماسي العالي
                    </span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-gold-light/40"></span>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-gold-light text-base">
                      balance
                    </span>
                    <span className="">
                      مطابق لمعايير IBA الدولية لتضارب المصالح
                    </span>
                  </div>
                </div>
              </div>
              {/* Floating Presidential Emblem & Live Tribunal Widget (Column 5 / 12) */}
              <div className="lg:col-span-5 relative mt-space-xl lg:mt-0">
                {/* Background Decorative Vignette */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-gold-deep/20 via-transparent to-primary-container/40 rounded-xl blur-xl"></div>
                {/* Sovereign Presidential Case Panel */}
                <div className="relative bg-primary-container text-surface-ivory p-space-xl rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden">
                  {/* Golden Radial Accent inside Card */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-light/10 rounded-bl-full pointer-events-none"></div>
                  {/* Top Row: Emblem Signature and Status */}
                  <div className="flex items-start justify-between pb-space-lg mb-space-lg">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-lg bg-emerald-deepest flex items-center justify-center text-gold-light shadow-md">
                        <span className="material-symbols-outlined text-2xl">
                          account_balance
                        </span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="font-headline-sm text-headline-sm text-surface-ivory leading-tight">
                          محكمة التحكيم العامة
                        </span>
                        <span className="font-legal-code text-legal-code text-gold-light">
                          CHAMBER OF CROSS-BORDER ARBITRATION
                        </span>
                      </div>
                    </div>
                    <div className="px-space-sm py-1 bg-surface-container-lowest/10 text-gold-light rounded-sm font-legal-code text-legal-code flex items-center gap-1 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-status-success animate-ping"></span>
                      <span className="">نظام البت الفوري مفعّل</span>
                    </div>
                  </div>
                  {/* Dynamic Active Tribunal Preview Card */}
                  <div className="bg-emerald-deepest/90 p-space-md rounded-lg mb-space-lg shadow-sm">
                    <div className="flex items-center justify-between text-surface-variant font-legal-code text-legal-code mb-space-xs">
                      <span className="">
                        رقم النزاع المسجل: IOADR-ARB-8831
                      </span>
                      <span className="text-gold-light">منعقدة الآن في جنيف</span>
                    </div>
                    <div className="font-title-md text-title-md text-surface-ivory font-bold mb-1">
                      نزاع عقود البنية التحتية لقطاع الطاقة البحرية
                    </div>
                    <p className="font-body-sm text-body-sm text-surface-variant leading-relaxed line-clamp-2">
                      تداول دفوع بطلان التعويضات ومطابقة شروط الفيديك الذهبية
                      FIDIC Silver Book مع التقرير المحاسبي الدولي.
                    </p>
                    <div className="mt-space-sm pt-space-xs flex items-center justify-between font-label-sm text-label-sm">
                      <span className="text-surface-container-high">
                        قيمة المطالبة:{" "}
                        <strong className="text-gold-light font-legal-code">
                          184,500,000 USD
                        </strong>
                      </span>
                      <span className="text-primary-fixed bg-primary-container px-2 py-0.5 rounded-sm">
                        الجلسة الإجرائية الرابعة
                      </span>
                    </div>
                  </div>
                  {/* Trust Proof Metrics within Floating Card */}
                  <div className="grid grid-cols-2 gap-space-md pt-space-xs">
                    <div className="bg-primary/60 p-space-sm rounded-lg flex flex-col items-center text-center">
                      <span className="font-headline-md text-headline-md text-gold-light font-bold">
                        100%
                      </span>
                      <span className="font-label-sm text-label-sm text-surface-container-high mt-0.5">
                        امتثال لسرية المداولات
                      </span>
                    </div>
                    <div className="bg-primary/60 p-space-sm rounded-lg flex flex-col items-center text-center">
                      <span className="font-headline-md text-headline-md text-gold-light font-bold">
                        0
                      </span>
                      <span className="font-label-sm text-label-sm text-surface-container-high mt-0.5">
                        أحكام مبطلة قضائياً
                      </span>
                    </div>
                  </div>
                  {/* Interactive Fast-Filing Tooltip */}
                  <div className="mt-space-md pt-space-md flex items-center justify-between text-surface-variant font-label-sm text-label-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-gold-light text-base">
                        schedule
                      </span>
                      <span className="">
                        زمن الفحص الأولي للطلب: أقل من 6 ساعات
                      </span>
                    </div>
                    <Link
                      className="text-gold-light hover:text-surface-ivory font-bold flex items-center gap-1 transition-colors"
                      data-path="bawabat-al-tahkeem"
                      href="/new-case"
                    >
                      <span className="">دخول النظام</span>
                      <span className="material-symbols-outlined text-sm">
                        arrow_back
                      </span>
                    </Link>
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

          {/* Section 3: Comprehensive Institutional Services Grid (4 Columns) */}
          <section className="w-full py-space-2xl bg-surface-ivory">
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
                  <Link
                    className="inline-flex items-center justify-between pt-space-md text-primary font-label-lg text-label-lg group-hover:text-gold-deep transition-colors"
                    data-path="qayd-dawa"
                    href="/new-case"
                  >
                    <span className="">طلب تشكيل هيئة</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_back
                    </span>
                  </Link>
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
                  <Link
                    className="inline-flex items-center justify-between pt-space-md text-primary font-label-lg text-label-lg group-hover:text-gold-deep transition-colors"
                    data-path="al-lawaeh-wal-qararat"
                    href="/knowledge-center"
                  >
                    <span className="">قواعد الوساطة</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_back
                    </span>
                  </Link>
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
                  <Link
                    className="inline-flex items-center justify-between pt-space-md text-primary font-label-lg text-label-lg group-hover:text-gold-deep transition-colors"
                    data-path="daleel-al-mohakameen"
                    href="/arbitrators"
                  >
                    <span className="">استعراض الدليل</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_back
                    </span>
                  </Link>
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
                  <Link
                    className="inline-flex items-center justify-between pt-space-md text-primary font-label-lg text-label-lg group-hover:text-gold-deep transition-colors"
                    data-path="bawabat-al-tahkeem"
                    href="/new-case"
                  >
                    <span className="">دخول البوابة</span>
                    <span className="material-symbols-outlined text-lg">
                      arrow_back
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: The 4-Step Arbitration Procedural Timeline */}
          <section className="w-full py-space-2xl bg-surface-parchment">
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
              <div className="mt-space-xl bg-primary-container text-surface-ivory p-space-lg rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-md shadow-md">
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
          <section className="w-full py-space-2xl bg-surface-ivory">
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
                <Link
                  className="inline-flex items-center gap-space-xs text-primary hover:text-gold-deep font-label-lg text-label-lg font-bold transition-colors"
                  data-path="al-lawaeh-wal-qararat"
                  href="/knowledge-center"
                >
                  <span className="">عرض المكتبة القانونية الكاملة</span>
                  <span className="material-symbols-outlined text-lg">
                    arrow_back
                  </span>
                </Link>
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
                    <Link
                      className="text-primary hover:text-gold-deep font-bold flex items-center gap-1"
                      href="/knowledge-center"
                    >
                      <span className="material-symbols-outlined text-sm">
                        download
                      </span>
                      <span className="">تحميل النسخة المعتمدة</span>
                    </Link>
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
                    <Link
                      className="text-primary hover:text-gold-deep font-bold flex items-center gap-1"
                      href="/calculator"
                    >
                      <span className="material-symbols-outlined text-sm">
                        download
                      </span>
                      <span className="">تحميل الجدول الرسمي</span>
                    </Link>
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
                    <Link
                      className="text-primary hover:text-gold-deep font-bold flex items-center gap-1"
                      href="/knowledge-center"
                    >
                      <span className="material-symbols-outlined text-sm">
                        download
                      </span>
                      <span className="">استعراض المبادئ</span>
                    </Link>
                  </div>
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
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 bg-gold-light text-primary hover:bg-gold-deep hover:text-surface-ivory rounded-sm font-label-lg text-label-lg font-bold transition-all shadow-md"
                  data-path="qayd-dawa"
                  href="/new-case"
                >
                  <span className="material-symbols-outlined text-base">
                    verified_user
                  </span>
                  <span className="">التحقق من صحة حكم صادر</span>
                </Link>
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 bg-surface-container-lowest/10 text-surface-ivory hover:bg-surface-container-lowest/20 rounded-sm font-label-lg text-label-lg transition-all"
                  data-path="ettasel-bina"
                  href="/contact"
                >
                  <span className="">التواصل الدبلوماسي</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full bg-emerald-deepest text-surface-ivory mt-space-2xl">
        <div className="max-w-[1360px] mx-auto px-gutter pt-space-2xl pb-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-3 h-3 rounded-full bg-gold-light"></div>
                <span className="font-headline-sm text-headline-sm text-surface-ivory">
                  المكتب الدولي للتحكيم
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                هيئة قضائية تحكيمية دولية مستقلة مكرسة لتسوية النزاعات التجارية
                والاستثمارية عبر الحدود بموجب اتفاقية نيويورك 1958 وقواعد
                الأونسيترال الدولية.
              </p>
              <div className="flex items-center gap-space-sm pt-space-xs">
                <span className="material-symbols-outlined text-gold-light text-xl">
                  verified_user
                </span>
                <span className="font-legal-code text-legal-code text-gold-light">
                  معتمد وموثق دولياً وفق المعايير الدبلوماسية
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-md">
              <span className="font-title-md text-title-md text-surface-ivory">
                المقار والمكاتب الإقليمية
              </span>
              <div className="flex flex-col gap-space-sm text-surface-container-high font-body-sm text-body-sm">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-gold-light text-lg">
                    location_on
                  </span>
                  <div>
                    <strong className="text-surface-ivory block font-label-sm text-label-sm">
                      الرياض (المقر الرئيسي)
                    </strong>
                    <span className="">
                      مركز الملك عبد الله المالي، برج التحكيم الدولي
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-gold-light text-lg">
                    location_on
                  </span>
                  <div>
                    <strong className="text-surface-ivory block font-label-sm text-label-sm">
                      جنيف
                    </strong>
                    <span className="">
                      Rue du Rhône 42, Quartier des Banques
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-gold-light text-lg">
                    location_on
                  </span>
                  <div>
                    <strong className="text-surface-ivory block font-label-sm text-label-sm">
                      لندن
                    </strong>
                    <span className="">
                      1 Crown Office Row, Temple, London EC4Y
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-space-md">
              <span className="font-title-md text-title-md text-surface-ivory">
                الإجراءات والخدمات القانونية
              </span>
              <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-container-high">
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    data-path="qayd-dawa"
                    href="/new-case"
                  >
                    إيداع طلب تحكيم عاجل
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    data-path="hasebat-al-rusoom"
                    href="/calculator"
                  >
                    جدول المصاريف والأتعاب الإدارية
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    data-path="daleel-al-mohakameen"
                    href="/arbitrators"
                  >
                    قائمة المحكمين المعتمدين وجداول الخبراء
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    data-path="al-lawaeh-wal-qararat"
                    href="/knowledge-center"
                  >
                    لائحة التحكيم المؤسسي وقواعد الوساطة
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="hover:text-gold-light transition-colors"
                    data-path="namathij-shorout-al-tahkeem"
                    href="/services#model-clauses"
                  >
                    النماذج القياسية لشرط التحكيم التعاقدي
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-md">
              <span className="font-title-md text-title-md text-surface-ivory">
                الامتثال والاتفاقيات الدولية
              </span>
              <div className="bg-primary-container p-space-md rounded-lg flex flex-col gap-space-xs shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                <span className="font-label-sm text-label-sm text-gold-light">
                  اتفاقية نيويورك 1958
                </span>
                <p className="font-legal-code text-legal-code text-surface-container leading-relaxed">
                  تتمتع أحكام المحكمين الصادرة عن المكتب بالنفاذ الإلزامي المتبادل
                  في أكثر من 172 دولة عضواً في اتفاقية الاعتراف بقرارات التحكيم
                  الأجنبية وتنفيذها.
                </p>
              </div>
              <div className="flex flex-col gap-1 text-surface-container-high font-legal-code text-legal-code">
                <span className="text-gold-light font-label-sm text-label-sm">
                  سجل الاعتماد المؤسسي
                </span>
                <span className="">REG-INT-ARB/7702-SA-CH-UK</span>
              </div>
            </div>
          </div>
          <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-surface-container-high">
            <div className="flex items-center gap-space-md text-right">
              <p className="">
                © 2025 المكتب الدولي للتحكيم وتسوية المنازعات (IOADR). جميع
                الحقوق الملكية والنظامية محفوظة.
              </p>
            </div>
            <div className="flex items-center gap-space-lg font-label-sm text-label-sm">
              <Link
                className="hover:text-gold-light transition-colors"
                data-path="seeyasat-al-khosousiya"
                href="/knowledge-center"
              >
                سياسة الخصوصية والسرية المصرفية
              </Link>
              <Link
                className="hover:text-gold-light transition-colors"
                data-path="al-shoroot-wal-ahkam"
                href="/knowledge-center"
              >
                الشروط والأحكام العامة
              </Link>
              <Link
                className="hover:text-gold-light transition-colors"
                data-path="meethaq-al-sharaf-al-qadaee"
                href="/knowledge-center"
              >
                ميثاق الشرف القضائي
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

