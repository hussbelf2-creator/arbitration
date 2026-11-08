"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function MediaCenterPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [formFeedbackVisible, setFormFeedbackVisible] = useState<boolean>(false);

  const handleEventRegister = () => {
    alert(
      "تم توجيهك إلى بوابة التسجيل الدبلوماسي للمؤتمر السنوي 2025. يرجى إكمال إدخال بيانات الوفد عبر نظام التحكيم الإلكتروني."
    );
  };

  const downloadAgenda = () => {
    alert(
      "جاري تحميل جدول أعمال المؤتمر السنوي للتحكيم والاستثمار 2025 بصيغة PDF..."
    );
  };

  const downloadPressRelease = (ref: string) => {
    alert("جاري تحميل البيان الصحفي المعتمد: " + ref + ".pdf");
  };

  const downloadAsset = (assetName: string) => {
    alert("بدأ تنزيل أصول الهوية الإعلامية: " + assetName + ".zip");
  };

  const handleMediaFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormFeedbackVisible(true);
    e.currentTarget.reset();
    setTimeout(() => {
      setFormFeedbackVisible(false);
    }, 7000);
  };

  const isEventVisible = (category: string) => {
    return activeCategory === "all" || activeCategory === category;
  };

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-surface-ivory">
        <div className="flex flex-col w-full">
          {/* Top Sovereign Strip / Notice Bar */}
          <div className="w-full bg-emerald-deepest text-surface-ivory py-space-xs px-gutter shadow-sm">
            <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-sm font-legal-code text-legal-code">
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex w-2 h-2 rounded-full bg-gold-light animate-pulse"></span>
                <span className="text-gold-light font-bold">
                  إحاطة إعلامية عاجلة:
                </span>
                <span className="text-surface-container-high">
                  فتح باب الاعتماد الصحفي للمؤتمر السنوي الدولي للتحكيم والاستثمار
                  2025 في الرياض وجنيف.
                </span>
              </div>
              <div className="flex items-center gap-space-md text-surface-container-high">
                <span className="text-gold-light">
                  رقم الاعتماد الدولي: IOADR-PRESS-2025
                </span>
                <span className="hidden sm:inline">|</span>
                <span className="text-surface-container-high">
                  تحديث مباشر: 1446 هـ / 2025 م
                </span>
              </div>
            </div>
          </div>

          {/* Hero Section & Media Navigation */}
          <section className="relative w-full bg-gradient-to-b from-surface-parchment to-surface-ivory pt-space-xl pb-space-2xl overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 1440 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="text-emerald-subtle"
                  d="M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,192C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                  fill="currentColor"
                  fillOpacity="0.6"
                ></path>
              </svg>
            </div>
            <div className="relative max-w-[1360px] mx-auto px-gutter flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-lowest rounded-full shadow-sm mb-space-md">
                <span
                  className="material-symbols-outlined text-gold-deep text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  campaign
                </span>
                <span className="font-label-sm text-label-sm text-gold-deep uppercase tracking-wider">
                  المركز الإعلامي والفعاليات الدولية المؤسسية
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg md:text-display-hero md:font-display-hero text-primary max-w-4xl tracking-tight leading-tight mb-space-md">
                منصة الحوار التحكيمي والأنباء القضائية الدولية
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed mb-space-xl">
                المرجع الصحفي والمعرفي المعتمد للبيانات الرسمية، المؤتمرات الدولية
                المتخصصة، واللقاءات الاستراتيجية لتطوير فض منازعات التجارة
                والاستثمار وحوكمة العدالة البديلة عبر القارات.
              </p>
              {/* Quick Section Anchor Tabs */}
              <div className="w-full max-w-4xl bg-surface-container-lowest p-space-xs rounded-xl shadow-md flex flex-wrap items-center justify-around gap-space-xs">
                <a
                  className="flex-1 min-w-[140px] py-space-sm px-space-md text-center rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"
                  href="#featured-event"
                >
                  <span className="material-symbols-outlined align-middle ml-1 text-gold-deep text-lg">
                    event_upcoming
                  </span>
                  الحدث الرئيسي
                </a>
                <a
                  className="flex-1 min-w-[140px] py-space-sm px-space-md text-center rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"
                  href="#events-calendar"
                >
                  <span className="material-symbols-outlined align-middle ml-1 text-gold-deep text-lg">
                    calendar_month
                  </span>
                  رزنامة الورش
                </a>
                <a
                  className="flex-1 min-w-[140px] py-space-sm px-space-md text-center rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"
                  href="#press-releases"
                >
                  <span className="material-symbols-outlined align-middle ml-1 text-gold-deep text-lg">
                    article
                  </span>
                  البيانات الصحفية
                </a>
                <a
                  className="flex-1 min-w-[140px] py-space-sm px-space-md text-center rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"
                  href="#media-gallery"
                >
                  <span className="material-symbols-outlined align-middle ml-1 text-gold-deep text-lg">
                    video_library
                  </span>
                  التسجيلات والوسائط
                </a>
                <a
                  className="flex-1 min-w-[140px] py-space-sm px-space-md text-center rounded-lg font-label-lg text-label-lg bg-primary-container text-surface-ivory shadow-sm hover:bg-emerald-deepest transition-all"
                  href="#press-kit"
                >
                  <span className="material-symbols-outlined align-middle ml-1 text-gold-light text-lg">
                    folder_zip
                  </span>
                  الحقيبة الإعلامية
                </a>
              </div>
            </div>
          </section>

          {/* Section 2: Featured Upcoming Event (Presidential Level Card) */}
          <section
            className="w-full py-space-2xl px-gutter bg-surface-ivory"
            id="featured-event"
          >
            <div className="max-w-[1360px] mx-auto">
              <div className="flex items-center justify-between mb-space-lg">
                <div>
                  <span className="font-label-sm text-label-sm text-gold-deep uppercase tracking-widest block mb-space-xs">
                    القمة الدولية السنوية
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary">
                    المؤتمر السنوي الدولي للتحكيم والاستثمار 2025
                  </h2>
                </div>
                <div className="hidden lg:flex items-center gap-space-sm font-label-lg text-label-lg text-gold-deep bg-surface-container-low px-space-md py-space-xs rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-gold-deep">
                    public
                  </span>
                  <span>
                    نسخة هجينة رفيعة المستوى (الرياض • جنيف • بث مباشر دولي)
                  </span>
                </div>
              </div>
              {/* Hero Event Card */}
              <div className="bg-primary-container text-surface-ivory rounded-xl p-space-xl shadow-xl relative overflow-hidden">
                <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-gold-light/10 blur-3xl pointer-events-none"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl relative z-10 items-center">
                  {/* Main Event Information */}
                  <div className="lg:col-span-7 flex flex-col gap-space-md">
                    <div className="flex flex-wrap items-center gap-space-xs">
                      <span className="px-space-sm py-space-xs bg-gold-light text-primary rounded font-label-sm text-label-sm font-bold shadow-sm">
                        فعالية معتمدة رسمياً
                      </span>
                      <span className="px-space-sm py-space-xs bg-emerald-deepest text-surface-container-high rounded font-legal-code text-legal-code">
                        CONF-IOADR/2025/SA-CH
                      </span>
                      <span className="px-space-sm py-space-xs bg-surface-container-lowest/10 text-gold-light rounded font-label-sm text-label-sm">
                        الاعتماد المهني: 24 ساعة تدريبية
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-surface-ivory leading-snug">
                      مستقبل سيادة العقود الاستثمارية وفض منازعات الطاقة النظيفة
                      والتكنولوجيا السيادية
                    </h3>
                    <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
                      تحت رعاية شرفية دولية وبحضور قضاة محاكم التمييز ومحكمين
                      معتمدين لدى غرفة التجارة الدولية (ICC) والمركز الدولي لتسوية
                      منازعات الاستثمار (ICSID)، يبحث المؤتمر أحدث التطورات
                      النظامية والتشريعية في تنفيذ الأحكام التحكيمية وفق اتفاقية
                      نيويورك 1958.
                    </p>
                    {/* Metrics & Countdown Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md bg-emerald-deepest/60 p-space-md rounded-lg shadow-inner">
                      <div className="flex flex-col text-center">
                        <span
                          className="font-headline-md text-headline-md text-gold-light font-bold"
                          id="countdown-days"
                        >
                          48
                        </span>
                        <span className="font-label-sm text-label-sm text-surface-container-high">
                          يوم متبقي
                        </span>
                      </div>
                      <div className="flex flex-col text-center">
                        <span
                          className="font-headline-md text-headline-md text-surface-ivory font-bold"
                          id="countdown-hours"
                        >
                          14
                        </span>
                        <span className="font-label-sm text-label-sm text-surface-container-high">
                          ساعة
                        </span>
                      </div>
                      <div className="flex flex-col text-center">
                        <span className="font-headline-md text-headline-md text-gold-light font-bold">
                          35+
                        </span>
                        <span className="font-label-sm text-label-sm text-surface-container-high">
                          قاضٍ ومحكم دولي
                        </span>
                      </div>
                      <div className="flex flex-col text-center">
                        <span className="font-headline-md text-headline-md text-surface-ivory font-bold">
                          1200+
                        </span>
                        <span className="font-label-sm text-label-sm text-surface-container-high">
                          مشارك مسجل
                        </span>
                      </div>
                    </div>
                    {/* Action CTA */}
                    <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                      <button
                        className="px-space-xl py-space-sm bg-gold-light text-primary hover:bg-gold-deep hover:text-surface-ivory rounded font-label-lg text-label-lg font-bold transition-all shadow-md flex items-center gap-space-xs"
                        onClick={handleEventRegister}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-xl">
                          how_to_reg
                        </span>
                        تسجيل حضور / طلب مشاركة رسمية
                      </button>
                      <button
                        className="px-space-lg py-space-sm bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-surface-ivory rounded font-label-lg text-label-lg transition-all flex items-center gap-space-xs"
                        onClick={downloadAgenda}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-gold-light text-xl">
                          download
                        </span>
                        تحميل جدول الأعمال المفصل (PDF)
                      </button>
                    </div>
                  </div>
                  {/* Event Visual & Keynote Arbitrators */}
                  <div className="lg:col-span-5 flex flex-col gap-space-md">
                    <div className="relative rounded-xl overflow-hidden shadow-lg h-56 bg-emerald-deepest">
                      <img
                        alt="Grand international arbitration summit hall"
                        className="w-full h-full object-cover opacity-85"
                        data-alt="Grand international arbitration summit hall with sovereign flags, diplomat delegates seated at curved wooden tables, warm amber chandelier illumination, deep emerald carpet, dignified legal assembly atmosphere."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU27iU3u42NRR6I9bZUrWspR0L374vtJeYcxG_RI01k8X1uIQkGuEnoy2CAkFngAfiD395msqmtC33pI3sui6ETws6PGgSP0o-Dm-VXjZJCTAlbMqn-d-_wHghwFcdpUFjEuihDjZ0xr5rA3SopCbNYBtS66LcuvhfUMm7ba4N7PEOE_g2tUgCfRyWDKRtBmUcYjqXZkgaQrvRftK2TG0Uc9eW3Ew18SZPTmbw4Bzs"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 right-3 text-right">
                        <span className="font-legal-code text-legal-code text-gold-light">
                          الرياض • قاعة المحاكمة الصورية الدولية KAFD
                        </span>
                        <p className="font-label-sm text-label-sm text-surface-ivory">
                          14 - 16 مايو 2025 | بالتزامن مع مقر جنيف
                        </p>
                      </div>
                    </div>
                    {/* Keynote Speakers preview */}
                    <div className="bg-surface-container-lowest/5 p-space-md rounded-lg shadow-sm">
                      <span className="font-label-sm text-label-sm text-gold-light block mb-space-sm">
                        المتحدثون الرئيسيون ورؤساء الجلسات:
                      </span>
                      <div className="grid grid-cols-3 gap-space-sm">
                        <div className="flex flex-col items-center text-center">
                          <img
                            alt="د. منصور الهذلي"
                            className="w-14 h-14 rounded-full object-cover shadow-md mb-1"
                            data-alt="Portrait of senior Middle Eastern international arbitrator, wearing bespoke formal charcoal suit, intellectual expression, distinguished white hair, dark studio background."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIFRrd19uvAU_5yqiEC8Eg8uJHf1RRcd3cr-979ikc1c9VrWWH1DUWrosYGOzynQV_zHok6Nn1Ltp4WKAtk2_O_sYPm4-f78vFGiNRmZExyRPrTnAi9G0C-K3KLNJRfEi_wVaC5nDglN85IHj3gsF4uBRek-z5x9IwXoVyb5yvj33tKD4aQBqKrNiQ_c4dN0sT2qJXnA-Gyfsk8Soo-mSVVNRuMDUP67Si-C1D2rSG"
                          />
                          <span className="font-label-sm text-label-sm text-surface-ivory truncate w-full font-bold">
                            د. منصور الهذلي
                          </span>
                          <span className="font-legal-code text-legal-code text-surface-container-high truncate w-full">
                            رئيس الدائرة التجارية سابقاً
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <img
                            alt="بروفيسور كلوديا فالك"
                            className="w-14 h-14 rounded-full object-cover shadow-md mb-1"
                            data-alt="Distinguished European female legal scholar in formal navy attire, serious demeanor, library with leatherbound law treaties behind, professional cinematic lighting."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJCWgVMAQYnDMjNTZgZtom0803AXVYpNN2Dcv2LeI3j9esFdLCdDNZyTLsABD95I6SqTwADqEumiGhTxOXPd4Wt99Zkm2gKqnKmbTnqXpAyneDEFj9UhRWI5rzMPwO_WFcCV8VirSX35y6Yeta2vwOskeIvOSpocvodT9gj39LGEedeuvcz0OO3dkDs4_XmPxpt5V0iW7cKUIszPFkGH3AsGZG33SiTxTbCtqY7ryi"
                          />
                          <span className="font-label-sm text-label-sm text-surface-ivory truncate w-full font-bold">
                            بروفيسور كلوديا فالك
                          </span>
                          <span className="font-legal-code text-legal-code text-surface-container-high truncate w-full">
                            عضو محكمة التحكيم بجنيف
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <img
                            alt="السير جوليان برين"
                            className="w-14 h-14 rounded-full object-cover shadow-md mb-1"
                            data-alt="Eminent British barrister in dark executive robe, senior legal counsel, dignified poise, warm rim light, academic background."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq8r-ZHPEb9mlgjV0T4_UW8AFkTpEGWTnLuLQzGe8Gvlobb0lAyxDthGx4BCB0l99aWcuwR6agK5IsqrnXtQChIIXWC7DuS3UpuQdXIgk58bes3mmdLcN81UNzkaChM9XrsdRqdV-knbi1EVHxvmdv54dLgr6DyrWgDvR97tBOWHgu7y5HWDblGNRL1N9FPwH50uQT8hXwPZuLRIe-I2yGF5jgkQSUtxh0nLptp0Q9"
                          />
                          <span className="font-label-sm text-label-sm text-surface-ivory truncate w-full font-bold">
                            السير جوليان برين
                          </span>
                          <span className="font-legal-code text-legal-code text-surface-container-high truncate w-full">
                            خبير عقود FIDIC الدولية
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Upcoming Webinars & Specialized Legal Workshops (Filterable) */}
          <section
            className="w-full py-space-2xl px-gutter bg-surface-parchment"
            id="events-calendar"
          >
            <div className="max-w-[1360px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
                <div>
                  <span className="font-label-sm text-label-sm text-gold-deep uppercase tracking-widest block mb-space-xs">
                    البرنامج العلمي والتأهيلي
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary">
                    رزنامة الفعاليات وجلسات العمل القانونية
                  </h2>
                </div>
                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-space-xs bg-surface-container-lowest p-1 rounded-lg shadow-sm">
                  <button
                    className={`filter-btn px-space-md py-space-xs rounded font-label-sm text-label-sm transition-colors ${
                      activeCategory === "all"
                        ? "active-filter font-bold bg-primary text-surface-ivory"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                    onClick={() => setActiveCategory("all")}
                    type="button"
                  >
                    الكل (12)
                  </button>
                  <button
                    className={`filter-btn px-space-md py-space-xs rounded font-label-sm text-label-sm transition-colors ${
                      activeCategory === "conference"
                        ? "active-filter font-bold bg-primary text-surface-ivory"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                    onClick={() => setActiveCategory("conference")}
                    type="button"
                  >
                    مؤتمرات حضورية
                  </button>
                  <button
                    className={`filter-btn px-space-md py-space-xs rounded font-label-sm text-label-sm transition-colors ${
                      activeCategory === "webinar"
                        ? "active-filter font-bold bg-primary text-surface-ivory"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                    onClick={() => setActiveCategory("webinar")}
                    type="button"
                  >
                    ندوات افتراضية
                  </button>
                  <button
                    className={`filter-btn px-space-md py-space-xs rounded font-label-sm text-label-sm transition-colors ${
                      activeCategory === "workshop"
                        ? "active-filter font-bold bg-primary text-surface-ivory"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                    onClick={() => setActiveCategory("workshop")}
                    type="button"
                  >
                    ورش تدريبية معتمدة
                  </button>
                </div>
              </div>
              {/* Grid of Workshops & Dockets */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
                id="events-grid"
              >
                {/* Event Card 1 */}
                {isEventVisible("workshop") && (
                  <div
                    className="event-item bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1"
                    data-category="workshop"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className="px-space-sm py-1 bg-emerald-subtle text-status-success rounded font-label-sm text-label-sm font-semibold">
                          ورشة عمل احترافية
                        </span>
                        <span className="font-legal-code text-legal-code text-gold-deep">
                          28 يونيو 2025
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">
                        فض منازعات عقود الفيديك (FIDIC) الكبرى وإجراءات لجان تفادي
                        الخلافات (DAAB)
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                        تحليل شامل للشروط النموذجية للمشاريع الإنشائية العملاقة،
                        تقييم مطالبات التمديد الزمني والتعويض المالي، مع تدريب على
                        صياغة مذكرات الدفوع الفنية.
                      </p>
                    </div>
                    <div className="pt-space-md bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-base text-gold-deep">
                          location_on
                        </span>
                        <span>مركز التدريب - KAFD، الرياض</span>
                      </div>
                      <a
                        className="font-label-sm text-label-sm text-primary font-bold hover:text-gold-deep flex items-center"
                        href="#"
                      >
                        حجز مقعد
                        <span className="material-symbols-outlined text-sm mr-1">
                          arrow_back
                        </span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Event Card 2 */}
                {isEventVisible("webinar") && (
                  <div
                    className="event-item bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1"
                    data-category="webinar"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className="px-space-sm py-1 bg-surface-container text-primary rounded font-label-sm text-label-sm font-semibold">
                          ندوة افتراضية دولية
                        </span>
                        <span className="font-legal-code text-legal-code text-gold-deep">
                          12 يوليو 2025
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">
                        التحكيم في نزاعات عقود الطاقة المتجددة والهيدروجين الأخضر
                        عابرة الحدود
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                        مناقشة نزاعات معاهدة ميثاق الطاقة (ECT)، مخاطر السياسات
                        التنظيمية، ومعايير تقييم الأضرار في مشاريع التحول المناخي
                        بمشاركة مستشارين من لندن وجنيف.
                      </p>
                    </div>
                    <div className="pt-space-md bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-base text-gold-deep">
                          videocam
                        </span>
                        <span>بث حي مشفر (Zoom Legal)</span>
                      </div>
                      <a
                        className="font-label-sm text-label-sm text-primary font-bold hover:text-gold-deep flex items-center"
                        href="#"
                      >
                        تسجيل مجاني
                        <span className="material-symbols-outlined text-sm mr-1">
                          arrow_back
                        </span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Event Card 3 */}
                {isEventVisible("workshop") && (
                  <div
                    className="event-item bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1"
                    data-category="workshop"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className="px-space-sm py-1 bg-emerald-subtle text-status-success rounded font-label-sm text-label-sm font-semibold">
                          برنامج تخصصي نخبوي
                        </span>
                        <span className="font-legal-code text-legal-code text-gold-deep">
                          5 أغسطس 2025
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">
                        الذكاء الاصطناعي والأدلة الرقمية في إجراءات التحكيم التجاري
                        المعاصر
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                        معايير إثبات حجية المستندات الإلكترونية، استخدام خوارزميات
                        تحليل العقود دون الإخلال بمبدأ السرية والمواجهة القضائية
                        وفق إرشادات محكمة السيليكون.
                      </p>
                    </div>
                    <div className="pt-space-md bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-base text-gold-deep">
                          verified
                        </span>
                        <span>شهادة حضور معتمدة</span>
                      </div>
                      <a
                        className="font-label-sm text-label-sm text-primary font-bold hover:text-gold-deep flex items-center"
                        href="#"
                      >
                        حجز مقعد
                        <span className="material-symbols-outlined text-sm mr-1">
                          arrow_back
                        </span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Event Card 4 */}
                {isEventVisible("conference") && (
                  <div
                    className="event-item bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1"
                    data-category="conference"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className="px-space-sm py-1 bg-secondary-fixed text-on-secondary-fixed rounded font-label-sm text-label-sm font-semibold">
                          منتدى إقليمي سنوي
                        </span>
                        <span className="font-legal-code text-legal-code text-gold-deep">
                          19 سبتمبر 2025
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">
                        ملتقى محكمي الشرق الأوسط وشمال أفريقيا: تسريع نفاذ الأحكام
                        وصناديق التمويل
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                        جلسات طاولة مستديرة لبحث دور التمويل من الطرف الثالث
                        (Third-Party Funding) وأثره على نزاهة إجراءات التحكيم
                        الدولي وإفصاحات المحكمين.
                      </p>
                    </div>
                    <div className="pt-space-md bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-base text-gold-deep">
                          hotel
                        </span>
                        <span>فندق الريتز كارلتون، الرياض</span>
                      </div>
                      <a
                        className="font-label-sm text-label-sm text-primary font-bold hover:text-gold-deep flex items-center"
                        href="#"
                      >
                        تقديم طلب
                        <span className="material-symbols-outlined text-sm mr-1">
                          arrow_back
                        </span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Event Card 5 */}
                {isEventVisible("webinar") && (
                  <div
                    className="event-item bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1"
                    data-category="webinar"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className="px-space-sm py-1 bg-surface-container text-primary rounded font-label-sm text-label-sm font-semibold">
                          حلقة نقاش مغلقة
                        </span>
                        <span className="font-legal-code text-legal-code text-gold-deep">
                          2 أكتوبر 2025
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">
                        الوساطة الاتفاقية التجارية في ضوء اتفاقية سنغافورة: صياغة
                        محاضر التسوية
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                        كيفية تحويل وثائق الوساطة الناجحة إلى سندات تنفيذية دولية
                        ملزمة دون الحاجة لإجراءات تقاضٍ استئنافية مطولة.
                      </p>
                    </div>
                    <div className="pt-space-md bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-base text-gold-deep">
                          laptop_mac
                        </span>
                        <span>عبر المنصة الرقمية IOADR</span>
                      </div>
                      <a
                        className="font-label-sm text-label-sm text-primary font-bold hover:text-gold-deep flex items-center"
                        href="#"
                      >
                        التسجيل مغلق
                        <span className="material-symbols-outlined text-sm mr-1">
                          lock
                        </span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Event Card 6 */}
                {isEventVisible("workshop") && (
                  <div
                    className="event-item bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1"
                    data-category="workshop"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-space-sm">
                        <span className="px-space-sm py-1 bg-emerald-subtle text-status-success rounded font-label-sm text-label-sm font-semibold">
                          تدريب مكثف
                        </span>
                        <span className="font-legal-code text-legal-code text-gold-deep">
                          14 نوفمبر 2025
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">
                        مهارات استجواب الشهود والخبراء الفنيين أمام هيئات التحكيم
                        الدولية
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                        محاكاة حية لجلسات المرافعة الشفهية وفق قواعد IBA المعنية
                        بالحصول على الأدلة في التحكيم التجاري الدولي.
                      </p>
                    </div>
                    <div className="pt-space-md bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-base text-gold-deep">
                          gavel
                        </span>
                        <span>قاعة المحكمة الافتراضية، جنيف</span>
                      </div>
                      <a
                        className="font-label-sm text-label-sm text-primary font-bold hover:text-gold-deep flex items-center"
                        href="#"
                      >
                        حجز مقعد
                        <span className="material-symbols-outlined text-sm mr-1">
                          arrow_back
                        </span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Section 4: Press Releases & Official Statements (Bento Legal Grid) */}
          <section
            className="w-full py-space-2xl px-gutter bg-surface-ivory"
            id="press-releases"
          >
            <div className="max-w-[1360px] mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-space-md mb-space-xl">
                <div>
                  <span className="font-label-sm text-label-sm text-gold-deep uppercase tracking-widest block mb-space-xs">
                    البيانات والأخبار الرسمية
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary">
                    المستجدات القضائية والمؤسسية
                  </h2>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="font-legal-code text-legal-code text-on-surface-variant">
                    البيانات مصنفة ومؤرخة بحسب الأمانة العامة
                  </span>
                  <button
                    className="px-space-md py-space-xs rounded bg-surface-container-low text-primary hover:bg-surface-container font-label-sm text-label-sm flex items-center gap-1 transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm">
                      rss_feed
                    </span>
                    تلقي التنبيهات
                  </button>
                </div>
              </div>
              {/* Bento Grid Layout for News */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                {/* Main Lead Story (Takes 7 cols) */}
                <article className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col justify-between">
                  <div className="relative h-72 w-full bg-primary-container">
                    <img
                      alt="توقيع مذكرة تعاون قضائي"
                      className="w-full h-full object-cover"
                      data-alt="Official diplomatic signing ceremony in luxurious marble hall with national and institutional flags, two high ranking legal executives signing heavy leatherbound treaties with gold fountain pens."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0LqSRn3-7I0TK4P6lJWzHYAozLviPFhuNFUaeA6q7gLRIlqrFuWXj66uMFVacUAKVQB5UmgBANDR6uTkBlgwGlDFVazZ6Ayedek22HtCSzFgPrK20oCXUfFL0HqZzn4uOeUe78zQqKhXLzdW6Hk2lHYCYUWmkmg0RUd3SWQOCmEuE3Fm5JtaUNzekKBGGR8RnVSh_Y8KVjuN0NIRwZ9aCGiVRT0iiM8ZOnMHK0G4K"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-deepest via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 right-4 left-4 flex justify-between items-end">
                      <span className="px-space-sm py-space-xs bg-gold-light text-primary rounded font-label-sm text-label-sm font-bold">
                        بيان رئاسي رقم 2025/11
                      </span>
                      <span className="font-legal-code text-legal-code text-surface-container-high bg-emerald-deepest/70 px-space-xs py-0.5 rounded">
                        24 أبريل 2025
                      </span>
                    </div>
                  </div>
                  <div className="p-space-xl flex flex-col gap-space-sm">
                    <h3 className="font-headline-md text-headline-md text-primary leading-tight">
                      توقيع مذكرة تعاون قضائي ودبلوماسي مع محكمة التحكيم الدائمة في
                      لاهاي لتعزيز نفاذ الأحكام
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      أبرم المكتب الدولي للتحكيم اتفاقية استراتيجية تهدف إلى تبادل
                      الخبرات الفنية، وتنسيق قوائم المحكمين الدوليين المؤهلين للنظر
                      في دعاوى الاستثمار السيادية، وتسهيل إجراءات استضافة جلسات
                      التحكيم المشتركة في مقري الرياض وجنيف.
                    </p>
                    <div className="pt-space-md flex items-center justify-between">
                      <div className="flex items-center gap-space-xs text-gold-deep font-legal-code text-legal-code">
                        <span className="material-symbols-outlined text-base">
                          verified_user
                        </span>
                        <span>بيان صادر عن مكتب الأمين العام</span>
                      </div>
                      <button
                        className="px-space-md py-space-xs rounded bg-surface-container hover:bg-surface-variant text-primary font-label-sm text-label-sm flex items-center gap-space-xs transition-colors"
                        onClick={() => downloadPressRelease("PR-2025-11")}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-base text-gold-deep">
                          picture_as_pdf
                        </span>
                        تحميل نص البيان الرسمي (PDF)
                      </button>
                    </div>
                  </div>
                </article>
                {/* Secondary News Stack (Takes 5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-space-lg">
                  {/* News Item 2 */}
                  <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="px-space-xs py-0.5 bg-emerald-subtle text-status-success rounded font-legal-code text-legal-code">
                          تحديث تشريعي
                        </span>
                        <span className="font-legal-code text-legal-code text-outline">
                          18 أبريل 2025
                        </span>
                      </div>
                      <h4 className="font-title-md text-title-md text-primary mb-space-xs">
                        إصدار اللائحة الإجرائية المحدثة للتحكيم الإلكتروني المعجل
                        لعام 2025
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm">
                        اعتماد مسار الفصل في الدعاوى متدنية القيمة خلال 45 يوماً فقط
                        مع تخفيض الرسوم الإدارية بنسبة 30% لدعم الشركات الناشئة
                        والمتوسطة.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-space-xs">
                      <span className="text-gold-deep font-legal-code text-legal-code">
                        اللائحة التنظيمية #IOADR-REG-25
                      </span>
                      <a
                        className="font-label-sm text-label-sm text-primary font-bold hover:text-gold-deep"
                        href="#"
                      >
                        قراءة المزيد ←
                      </a>
                    </div>
                  </article>
                  {/* News Item 3 */}
                  <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="px-space-xs py-0.5 bg-surface-container text-primary rounded font-legal-code text-legal-code">
                          تقرير دوري
                        </span>
                        <span className="font-legal-code text-legal-code text-outline">
                          02 أبريل 2025
                        </span>
                      </div>
                      <h4 className="font-title-md text-title-md text-primary mb-space-xs">
                        إحصائيات الربع الأول 2025: نمو حجم القضايا المسجلة بنسبة 42%
                        بقيمة تتجاوز 3.8 مليار ريال
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm">
                        قطاع البنية التحتية والإنشاءات يتصدر النزاعات بنسبة 48%،
                        يليه قطاع الاتصالات والتقنية بنسبة 26%، ومعدل مدة النزاع يسجل
                        رقماً قياسياً جديداً.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-space-xs">
                      <span className="text-gold-deep font-legal-code text-legal-code">
                        التقرير الإحصائي Q1
                      </span>
                      <a
                        className="font-label-sm text-label-sm text-primary font-bold hover:text-gold-deep"
                        href="#"
                      >
                        قراءة المزيد ←
                      </a>
                    </div>
                  </article>
                  {/* News Item 4 */}
                  <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="px-space-xs py-0.5 bg-surface-parchment text-secondary rounded font-legal-code text-legal-code">
                          تعيينات قضائية
                        </span>
                        <span className="font-legal-code text-legal-code text-outline">
                          22 مارس 2025
                        </span>
                      </div>
                      <h4 className="font-title-md text-title-md text-primary mb-space-xs">
                        انضمام 14 محكماً دولياً جديداً إلى جدول المحكمين المعتمدين من
                        8 دول
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-sm">
                        المرشحون الجدد يمثلون تخصصات دقيقة في تمويل المشاريع،
                        الملكية الفكرية، وعقود الفضاء السيادي.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-space-xs">
                      <span className="text-gold-deep font-legal-code text-legal-code">
                        مرسوم الاعتماد #PANEL-2025
                      </span>
                      <a
                        className="font-label-sm text-label-sm text-primary font-bold hover:text-gold-deep"
                        href="#"
                      >
                        قراءة المزيد ←
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Media Gallery & Video Coverage */}
          <section
            className="w-full py-space-2xl px-gutter bg-surface-parchment"
            id="media-gallery"
          >
            <div className="max-w-[1360px] mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-space-md mb-space-xl">
                <div>
                  <span className="font-label-sm text-label-sm text-gold-deep uppercase tracking-widest block mb-space-xs">
                    المرئيات والتوثيق الرقمي
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary">
                    التغطيات المرئية والجلسات الافتتاحية
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  أرشيف مرئي موثق للمحاضرات القانونية والجلسات العامة للمحاكمات
                  الصورية ومداخلات فقهاء القانون الدولي.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                {/* Video Card 1 */}
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md group">
                  <div className="relative h-52 bg-emerald-deepest">
                    <img
                      alt="الجلسة الافتتاحية مؤتمر 2024"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      data-alt="High level keynote panel at an arbitration congress with five international judges in business suits behind a mahogany panel, microphones, institutional emblem backdrop, cinematic lighting."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7wsnC1kRttIxdBWiBIOLDsJZh4zhPm7vDfmVH4GcQl-px497NHUQ935X98s49akGFJRkl7vvalnF-3Nd5zH1xGCMJlQgadK49WTxfUw0XpLjb1e5qUEmOEDtrKAv47jJFyElrlVCIbPaQXbjsZPObqJAt8TJlv07HHYzRp7wiXY16EZBx5G-f4IizO0g5f0bRtEYPLSt8F0cbz3vOThl8tGpFCSrqjfac7eVciiQm"
                    />
                    <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-gold-light text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span
                          className="material-symbols-outlined text-2xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          play_arrow
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 px-space-xs py-0.5 bg-emerald-deepest/90 text-surface-ivory rounded font-legal-code text-legal-code">
                      42:15 دقيقة
                    </div>
                  </div>
                  <div className="p-space-md flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-gold-deep">
                      الجلسة الافتتاحية • مؤتمر 2024
                    </span>
                    <h4 className="font-title-md text-title-md text-primary">
                      تكامل القضاء الوطني والتحكيم التجاري: ضمانات الإنفاذ والرقابة
                      الإجرائية
                    </h4>
                    <span className="font-legal-code text-legal-code text-outline mt-space-xs">
                      الرياض • 8,420 مشاهدة
                    </span>
                  </div>
                </div>
                {/* Video Card 2 */}
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md group">
                  <div className="relative h-52 bg-emerald-deepest">
                    <img
                      alt="لقاء خاص مع خبير"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      data-alt="Legal scholar being interviewed in a modern studio with architectural scale model and gold institutional crest on dark green fabric backdrop."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-MTOvgTlQ1eDkZhQ8e9wB8ALGoKoB89O9WFF6X6YoGCv7xYZjD5ffYcm9grc33cPHUADB2LkwXpcPRvM_DonWloZ_Fuf6JhjS1m9G9DUnQcS69NF1FxxKOgqVBFoquFfvO4tt1wMSsCBPMkH8ycKoZ_1xfEUi9RmIUv4TlEWkhcMW5W1vlAnH-WZvs62AGBKw25venHE6cXo_fq-p9DwMHvmryz80JVC18a0iDLXm"
                    />
                    <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-gold-light text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span
                          className="material-symbols-outlined text-2xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          play_arrow
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 px-space-xs py-0.5 bg-emerald-deepest/90 text-surface-ivory rounded font-legal-code text-legal-code">
                      18:40 دقيقة
                    </div>
                  </div>
                  <div className="p-space-md flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-gold-deep">
                      لقاء خاص مع خبير
                    </span>
                    <h4 className="font-title-md text-title-md text-primary">
                      حوار مع نائب رئيس اللجنة الاستشارية الدولية: متطلبات صياغة
                      مشارطة التحكيم الآمنة
                    </h4>
                    <span className="font-legal-code text-legal-code text-outline mt-space-xs">
                      جنيف • 5,110 مشاهدات
                    </span>
                  </div>
                </div>
                {/* Video Card 3 */}
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md group">
                  <div className="relative h-52 bg-emerald-deepest">
                    <img
                      alt="الجولة النهائية لمسابقة المحاكمة الصورية"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      data-alt="Moot court setting with youth advocates presenting arguments before three robe-wearing arbitrators in an oak paneled courtroom."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuClOM4C4K8LioB2SgNX3Ag8GajSvQE6tZ_KMHeiJlDY1vWwvUqb11hAcbBZWP1TiY90aLzNI-INKWs1jpEXjFbTkoUhQ5n6-kFP2GGI8NclCF368BucT-1PQGGLVksQcjEXIR79bYSHvmE5ieFMsRxCCVlLlqExz73JWme1-ttYKqjRDMCBgF9T5smZfQ979pY1NVD7xXBE781jL_tplfA6D-HerGIs2whUhJY46Zn5"
                    />
                    <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-gold-light text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span
                          className="material-symbols-outlined text-2xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          play_arrow
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 px-space-xs py-0.5 bg-emerald-deepest/90 text-surface-ivory rounded font-legal-code text-legal-code">
                      31:05 دقيقة
                    </div>
                  </div>
                  <div className="p-space-md flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm text-gold-deep">
                      المنافسة الدولية السنوية
                    </span>
                    <h4 className="font-title-md text-title-md text-primary">
                      الجولة النهائية لمسابقة المحاكمة الصورية الدولية لطلاب كليات
                      الحقوق
                    </h4>
                    <span className="font-legal-code text-legal-code text-outline mt-space-xs">
                      لندن • 12,900 مشاهدة
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Press Kit & Media Inquiry Accreditation Form */}
          <section
            className="w-full py-space-2xl px-gutter bg-surface-ivory"
            id="press-kit"
          >
            <div className="max-w-[1360px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                {/* Left / Brand Kit & Downloads Column (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-space-lg">
                  <div>
                    <span className="font-label-sm text-label-sm text-gold-deep uppercase tracking-widest block mb-space-xs">
                      أدوات النشر والتغطية
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-space-sm">
                      الحقيبة الإعلامية الرسمية (Brand Kit)
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      نوفر لممثلي وسائل الإعلام والصحف القانونية المواد الرسمية
                      المعتمدة لضمان الدقة في استخدام الشعار المؤسسي والبيانات
                      القيادية.
                    </p>
                  </div>
                  {/* Downloadable Resource Cards */}
                  <div className="flex flex-col gap-space-sm">
                    {/* Asset 1 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between hover:bg-surface-container-low transition-colors">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-emerald-subtle text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-xl">
                            token
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-title-md text-title-md text-primary">
                            حزمة الشعارات المعتمدة (Vector &amp; High-Res)
                          </span>
                          <span className="font-legal-code text-legal-code text-outline">
                            SVG, PNG, EPS (35 MB) • الألوان الملكية والذهبية
                          </span>
                        </div>
                      </div>
                      <button
                        className="p-space-xs text-gold-deep hover:text-primary transition-colors"
                        onClick={() => downloadAsset("logo-pack")}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-2xl">
                          download
                        </span>
                      </button>
                    </div>
                    {/* Asset 2 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between hover:bg-surface-container-low transition-colors">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-emerald-subtle text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-xl">
                            badge
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-title-md text-title-md text-primary">
                            الصور الرسمية لأعضاء مجلس الإدارة والقيادة
                          </span>
                          <span className="font-legal-code text-legal-code text-outline">
                            صور استوديو مفرغة بدقة 4K مع السير الذاتية
                          </span>
                        </div>
                      </div>
                      <button
                        className="p-space-xs text-gold-deep hover:text-primary transition-colors"
                        onClick={() => downloadAsset("leadership-pack")}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-2xl">
                          download
                        </span>
                      </button>
                    </div>
                    {/* Asset 3 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between hover:bg-surface-container-low transition-colors">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-emerald-subtle text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-xl">
                            menu_book
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-title-md text-title-md text-primary">
                            دليل الهوية البصرية وإرشادات الصياغة
                          </span>
                          <span className="font-legal-code text-legal-code text-outline">
                            PDF (12 صفحة) • قواعد النشر والاقتباس القضائي
                          </span>
                        </div>
                      </div>
                      <button
                        className="p-space-xs text-gold-deep hover:text-primary transition-colors"
                        onClick={() => downloadAsset("brand-guidelines")}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-2xl">
                          download
                        </span>
                      </button>
                    </div>
                    {/* Asset 4 */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between hover:bg-surface-container-low transition-colors">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-emerald-subtle text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-xl">
                            insights
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-title-md text-title-md text-primary">
                            التقرير السنوي الشامل والرسوم البيانية
                          </span>
                          <span className="font-legal-code text-legal-code text-outline">
                            نسخة إعلامية مجهزة للاقتباس والإنفوجرافيك
                          </span>
                        </div>
                      </div>
                      <button
                        className="p-space-xs text-gold-deep hover:text-primary transition-colors"
                        onClick={() => downloadAsset("annual-report")}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-2xl">
                          download
                        </span>
                      </button>
                    </div>
                  </div>
                  {/* Protocol Notice */}
                  <div className="bg-surface-container p-space-md rounded-xl shadow-sm flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-gold-deep text-xl mt-0.5">
                      policy
                    </span>
                    <div className="flex flex-col font-legal-code text-legal-code text-on-surface-variant leading-relaxed">
                      <span className="font-bold text-primary">
                        تنبيه سرية المداولات:
                      </span>
                      يُحظر نشر أي مداولات لقضايا منظورة أمام هيئات التحكيم بالمركز
                      التزاماً بالمادة (38) من اللائحة الإجرائية وقواعد السرية
                      القضائية.
                    </div>
                  </div>
                </div>

                {/* Right / Media Accreditation & Inquiry Form (7 cols) */}
                <div className="lg:col-span-7 bg-surface-container-lowest p-space-xl rounded-xl shadow-lg">
                  <div className="flex items-center gap-space-sm mb-space-md pb-space-sm border-b-0">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-gold-light shadow-md">
                      <span className="material-symbols-outlined text-2xl">
                        contact_mail
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        طلب الاعتماد الصحفي والاستفسارات الإعلامية
                      </h3>
                      <p className="font-body-sm text-body-sm text-outline">
                        تستجيب إدارة الاتصال المؤسسي خلال 4 ساعات عمل رسمية
                      </p>
                    </div>
                  </div>
                  <form
                    className="flex flex-col gap-space-md"
                    id="media-accreditation-form"
                    onSubmit={handleMediaFormSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      {/* Name */}
                      <div className="flex flex-col gap-space-xs">
                        <label
                          className="font-label-lg text-label-lg text-on-surface"
                          htmlFor="journalist-name"
                        >
                          الاسم الثلاثي للصحفي / المراسل *
                        </label>
                        <input
                          className="w-full bg-surface-ivory px-space-md py-space-sm rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-gold-deep shadow-sm"
                          id="journalist-name"
                          placeholder="مثال: عبد الرحمن بن صالح آل الشيخ"
                          required
                          type="text"
                        />
                      </div>
                      {/* Media Entity */}
                      <div className="flex flex-col gap-space-xs">
                        <label
                          className="font-label-lg text-label-lg text-on-surface"
                          htmlFor="media-organization"
                        >
                          المؤسسة الإعلامية أو الصحفية *
                        </label>
                        <input
                          className="w-full bg-surface-ivory px-space-md py-space-sm rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-gold-deep shadow-sm"
                          id="media-organization"
                          placeholder="مثال: صحيفة الشرق الأوسط / وكالة رويترز"
                          required
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      {/* Professional Email */}
                      <div className="flex flex-col gap-space-xs">
                        <label
                          className="font-label-lg text-label-lg text-on-surface"
                          htmlFor="journalist-email"
                        >
                          البريد الإلكتروني المهني *
                        </label>
                        <input
                          className="w-full bg-surface-ivory px-space-md py-space-sm rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-gold-deep shadow-sm"
                          id="journalist-email"
                          placeholder="name@agency.com"
                          required
                          type="email"
                        />
                      </div>
                      {/* Phone & WhatsApp */}
                      <div className="flex flex-col gap-space-xs">
                        <label
                          className="font-label-lg text-label-lg text-on-surface"
                          htmlFor="journalist-phone"
                        >
                          رقم الاتصال المباشر (مع الرمز الدولي) *
                        </label>
                        <input
                          className="w-full text-right bg-surface-ivory px-space-md py-space-sm rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-gold-deep shadow-sm"
                          dir="ltr"
                          id="journalist-phone"
                          placeholder="+966 50 000 0000"
                          required
                          type="tel"
                        />
                      </div>
                    </div>
                    {/* Inquiry Nature */}
                    <div className="flex flex-col gap-space-xs">
                      <label
                        className="font-label-lg text-label-lg text-on-surface"
                        htmlFor="inquiry-type"
                      >
                        طبيعة الطلب الإعلامي *
                      </label>
                      <select
                        className="w-full bg-surface-ivory px-space-md py-space-sm rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-gold-deep shadow-sm font-body-md"
                        id="inquiry-type"
                      >
                        <option value="event-coverage">
                          طلب تصريح تغطية صحفية للمؤتمر السنوي 2025
                        </option>
                        <option value="interview">
                          طلب مقابلة خاصة مع الأمين العام أو أحد المحكمين
                        </option>
                        <option value="press-statement">
                          طلب تعقيب رسمي أو توضيح على بيان صحفي
                        </option>
                        <option value="academic">
                          طلب بيانات إحصائية لدراسة وبحث قانوني متخصص
                        </option>
                      </select>
                    </div>
                    {/* Message Details */}
                    <div className="flex flex-col gap-space-xs">
                      <label
                        className="font-label-lg text-label-lg text-on-surface"
                        htmlFor="inquiry-details"
                      >
                        تفاصيل الاستفسار ومحاور التغطية المقترحة *
                      </label>
                      <textarea
                        className="w-full bg-surface-ivory px-space-md py-space-sm rounded-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-gold-deep shadow-sm"
                        id="inquiry-details"
                        placeholder="يرجى كتابة الأسئلة المحددة، الموعد النهائي للنشر، وتفاصيل الفريق الصحفي..."
                        required
                        rows={4}
                      ></textarea>
                    </div>
                    {/* Press Card / Credentials Upload */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-gold-deep text-2xl">
                          attach_file
                        </span>
                        <div className="flex flex-col">
                          <span className="font-label-lg text-label-lg text-primary">
                            إرفاق بطاقة الصحافة أو خطاب التكليف (اختياري)
                          </span>
                          <span className="font-legal-code text-legal-code text-outline">
                            PDF أو JPG (بحد أقصى 10 ميغابايت)
                          </span>
                        </div>
                      </div>
                      <label className="px-space-md py-space-xs bg-surface-container-lowest text-primary hover:bg-surface-container rounded font-label-sm text-label-sm cursor-pointer shadow-sm transition-colors">
                        اختيار ملف
                        <input className="hidden" type="file" />
                      </label>
                    </div>
                    {/* Submit Button & Feedback Area */}
                    <div className="flex flex-col gap-space-sm pt-space-xs">
                      <button
                        className="w-full py-space-sm px-space-xl bg-primary hover:bg-emerald-deepest text-surface-ivory rounded font-label-lg text-label-lg font-bold shadow-md transition-all flex items-center justify-center gap-space-xs"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-gold-light">
                          send
                        </span>
                        إرسال الطلب واعتماد الملف الإعلامي
                      </button>
                      {formFeedbackVisible && (
                        <div
                          className="p-space-sm bg-emerald-subtle text-status-success rounded text-center font-label-sm text-label-sm"
                          id="form-feedback"
                        >
                          تم استلام طلب الاعتماد الصحفي بنجاح. سيقوم الملحق
                          الإعلامي بالتواصل معكم لتزويدكم ببطاقة الدخول ورمز البث
                          المشفر.
                        </div>
                      )}
                    </div>
                  </form>
                </div>
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
                © 2025 المكتب الدولي للتحكيم وتسوية المنازعات (IOADR). جميع الحقوق
                الملكية والنظامية محفوظة.
              </p>
            </div>
            <div className="flex items-center gap-space-lg font-label-sm text-label-sm">
              <a
                className="hover:text-gold-light transition-colors"
                data-path="seeyasat-al-khosousiya"
                href="#"
              >
                سياسة الخصوصية والسرية المصرفية
              </a>
              <a
                className="hover:text-gold-light transition-colors"
                data-path="al-shoroot-wal-ahkam"
                href="#"
              >
                الشروط والأحكام العامة
              </a>
              <a
                className="hover:text-gold-light transition-colors"
                data-path="meethaq-al-sharaf-al-qadaee"
                href="#"
              >
                ميثاق الشرف القضائي
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

