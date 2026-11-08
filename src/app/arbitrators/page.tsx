"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ArbitratorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("all");
  const [selectedLang, setSelectedLang] = useState("all");
  const [currentSpecialty, setCurrentSpecialty] = useState("all");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll<HTMLElement>(
      ".arbitrator-card"
    );
    const query = searchQuery.trim().toLowerCase();
    let count = 0;

    cards.forEach((card) => {
      const cardText = card.innerText.toLowerCase();
      const category = card.getAttribute("data-category") || "";
      const status = card.getAttribute("data-status") || "";
      const lang = card.getAttribute("data-lang") || "";
      const jurisdiction = card.getAttribute("data-jurisdiction") || "";

      const matchesQuery = !query || cardText.includes(query);
      const matchesSpecialty =
        currentSpecialty === "all" || category.includes(currentSpecialty);
      const matchesJurisdiction =
        selectedJurisdiction === "all" ||
        jurisdiction.includes(selectedJurisdiction);

      let matchesLanguage = true;
      if (selectedLang === "ar") matchesLanguage = lang.includes("ar");
      else if (selectedLang === "en") matchesLanguage = lang.includes("en");
      else if (selectedLang === "fr") matchesLanguage = lang.includes("fr");
      else if (selectedLang === "bilingual")
        matchesLanguage = lang.includes("ar") && lang.includes("en");

      const matchesAvailability = !onlyAvailable || status === "available";

      if (
        matchesQuery &&
        matchesSpecialty &&
        matchesJurisdiction &&
        matchesLanguage &&
        matchesAvailability
      ) {
        card.style.display = "flex";
        count++;
      } else {
        card.style.display = "none";
      }
    });

    setVisibleCount(count);
  }, [
    searchQuery,
    selectedJurisdiction,
    selectedLang,
    currentSpecialty,
    onlyAvailable,
  ]);

  const resetAllFilters = () => {
    setSearchQuery("");
    setSelectedJurisdiction("all");
    setSelectedLang("all");
    setCurrentSpecialty("all");
    setOnlyAvailable(false);
  };

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-surface-ivory">
        <div className="flex flex-col w-full">
          {/* Sovereign Breadcrumb & Header Ribbon */}
          <section className="w-full bg-emerald-deepest text-surface-ivory relative overflow-hidden py-space-xl shadow-md">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="max-w-[1360px] mx-auto px-gutter relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                <div className="flex flex-col gap-space-xs max-w-3xl">
                  <div className="flex items-center gap-space-sm font-legal-code text-legal-code text-gold-light">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      <span className="material-symbols-outlined text-sm">
                        home
                      </span>
                      <span className="">الرئيسية</span>
                    </Link>
                    <span className="">/</span>
                    <span className="text-surface-variant">
                      الهيئة القضائية والخبراء
                    </span>
                    <span className="">/</span>
                    <span className="text-gold-light font-bold">
                      دليل المحكمين المعتمدين 2025
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-surface-ivory pt-space-xs tracking-tight">
                    جدول المحكمين والخبراء القضائيين الدوليين
                  </h1>
                  <p className="font-body-md text-body-md text-surface-container-high leading-relaxed mt-1">
                    قائمة النخبة القضائية المعتمدة للتسجيل وتشكيل هيئات التحكيم
                    وفق معايير الأونسيترال ومبادئ الحيدة والاستقلال التام الصادرة
                    عن نقابة المحامين الدولية (IBA Guidelines).
                  </p>
                </div>
                <div className="flex items-center gap-space-sm shrink-0">
                  <button
                    className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-primary-container text-surface-ivory rounded-lg hover:bg-tertiary-container transition-all shadow-sm"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-gold-light text-base">
                      verified
                    </span>
                    <span className="font-label-lg text-label-lg">
                      معايير إدراج المحكمين
                    </span>
                  </button>
                  <button
                    className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-gold-deep/20 text-gold-light rounded-lg hover:bg-gold-deep/30 transition-all"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-base">
                      download
                    </span>
                    <span className="font-label-lg text-label-lg">
                      تحميل القائمة PDF
                    </span>
                  </button>
                </div>
              </div>
              {/* Institutional Metrics Dashboard Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-xl pt-space-lg bg-primary/40 rounded-xl p-space-md shadow-sm">
                <div className="flex items-center gap-space-md px-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-gold-light text-2xl">
                      gavel
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className="font-headline-md text-headline-md text-surface-ivory font-bold">
                        142
                      </span>
                      <span className="font-legal-code text-legal-code text-gold-light">
                        محكماً
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-surface-container-high">
                      مقيداً بالجدول الدولي العام
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md px-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-gold-light text-2xl">
                      public
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className="font-headline-md text-headline-md text-surface-ivory font-bold">
                        18
                      </span>
                      <span className="font-legal-code text-legal-code text-gold-light">
                        دولة
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-surface-container-high">
                      ولاية قضائية معتمدة
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md px-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-gold-light text-2xl">
                      task_alt
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className="font-headline-md text-headline-md text-surface-ivory font-bold">
                        98.4%
                      </span>
                      <span className="font-legal-code text-legal-code text-emerald-subtle">
                        نفاذ دولي
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-surface-container-high">
                      بموجب اتفاقية نيويورك
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md px-space-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-gold-light text-2xl">
                      shield
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className="font-headline-md text-headline-md text-surface-ivory font-bold">
                        IBA
                      </span>
                      <span className="font-legal-code text-legal-code text-gold-light">
                        امتثال صارم
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-surface-container-high">
                      تضارب المصالح والحيدة
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Search & Precision Filtering Console */}
          <section className="max-w-[1360px] mx-auto px-gutter w-full -mt-6 relative z-20">
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xl">
              {/* Top Row: Primary Search & Direct Access */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-center">
                <div className="lg:col-span-6 relative">
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                    search
                  </span>
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-12 pl-4 py-3.5 bg-surface-ivory text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-low transition-all placeholder:text-outline"
                    id="arbitratorSearchInput"
                    placeholder="البحث بالاسم القضائي، الكود المهني (مثال: ARB-SA-044)، أو النطاق الموضوعي..."
                    type="text"
                  />
                </div>
                <div className="lg:col-span-3">
                  <div className="relative">
                    <select
                      value={selectedJurisdiction}
                      onChange={(e) => setSelectedJurisdiction(e.target.value)}
                      className="w-full appearance-none bg-surface-ivory text-on-surface py-3.5 px-4 rounded-lg font-label-lg text-label-lg focus:outline-none focus:bg-surface-container-low transition-all cursor-pointer"
                      id="jurisdictionSelect"
                    >
                      <option value="all">
                        كافة الولايات القضائية والجنسيات
                      </option>
                      <option value="sa">المملكة العربية السعودية</option>
                      <option value="ch">سويسرا (جنيف / زيورخ)</option>
                      <option value="uk">المملكة المتحدة (لندن)</option>
                      <option value="ae">الإمارات العربية المتحدة</option>
                      <option value="fr">فرنسا (باريس)</option>
                    </select>
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="relative">
                    <select
                      value={selectedLang}
                      onChange={(e) => setSelectedLang(e.target.value)}
                      className="w-full appearance-none bg-surface-ivory text-on-surface py-3.5 px-4 rounded-lg font-label-lg text-label-lg focus:outline-none focus:bg-surface-container-low transition-all cursor-pointer"
                      id="languageSelect"
                    >
                      <option value="all">لغات إجراءات التحكيم (الكل)</option>
                      <option value="ar">العربية (لغة رسمية)</option>
                      <option value="en">الإنجليزية (English)</option>
                      <option value="fr">الفرنسية (Français)</option>
                      <option value="bilingual">
                        ثنائي اللغة معتمد (عربي/إنجليزي)
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                      translate
                    </span>
                  </div>
                </div>
              </div>
              {/* Bottom Row: Categorical Specialty Badges & Quick Switches */}
              <div className="mt-space-md pt-space-md flex flex-wrap items-center justify-between gap-space-sm">
                <div
                  className="flex flex-wrap items-center gap-2"
                  id="specialtyFilterContainer"
                >
                  <span className="font-label-sm text-label-sm text-on-surface-variant ml-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      tune
                    </span>
                    التخصص الدقيق:
                  </span>
                  <button
                    onClick={() => setCurrentSpecialty("all")}
                    className={`filter-badge px-3.5 py-1.5 rounded-full font-label-sm text-label-sm transition-all ${
                      currentSpecialty === "all"
                        ? "active bg-primary text-surface-ivory shadow-sm"
                        : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
                    }`}
                    data-filter="all"
                    type="button"
                  >
                    كافة التخصصات (142)
                  </button>
                  <button
                    onClick={() => setCurrentSpecialty("fidic")}
                    className={`filter-badge px-3.5 py-1.5 rounded-full font-label-sm text-label-sm transition-all ${
                      currentSpecialty === "fidic"
                        ? "active bg-primary text-surface-ivory shadow-sm"
                        : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
                    }`}
                    data-filter="fidic"
                    type="button"
                  >
                    عقود الفيديك والإنشاءات الكبرى (FIDIC)
                  </button>
                  <button
                    onClick={() => setCurrentSpecialty("finance")}
                    className={`filter-badge px-3.5 py-1.5 rounded-full font-label-sm text-label-sm transition-all ${
                      currentSpecialty === "finance"
                        ? "active bg-primary text-surface-ivory shadow-sm"
                        : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
                    }`}
                    data-filter="finance"
                    type="button"
                  >
                    المصارف والتمويل الإسلامي
                  </button>
                  <button
                    onClick={() => setCurrentSpecialty("energy")}
                    className={`filter-badge px-3.5 py-1.5 rounded-full font-label-sm text-label-sm transition-all ${
                      currentSpecialty === "energy"
                        ? "active bg-primary text-surface-ivory shadow-sm"
                        : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
                    }`}
                    data-filter="energy"
                    type="button"
                  >
                    عقود الطاقة والبترول والغاز
                  </button>
                  <button
                    onClick={() => setCurrentSpecialty("tech")}
                    className={`filter-badge px-3.5 py-1.5 rounded-full font-label-sm text-label-sm transition-all ${
                      currentSpecialty === "tech"
                        ? "active bg-primary text-surface-ivory shadow-sm"
                        : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
                    }`}
                    data-filter="tech"
                    type="button"
                  >
                    النزاعات التقنية والسيبرانية
                  </button>
                  <button
                    onClick={() => setCurrentSpecialty("investment")}
                    className={`filter-badge px-3.5 py-1.5 rounded-full font-label-sm text-label-sm transition-all ${
                      currentSpecialty === "investment"
                        ? "active bg-primary text-surface-ivory shadow-sm"
                        : "bg-surface-container text-on-surface-variant hover:bg-surface-variant"
                    }`}
                    data-filter="investment"
                    type="button"
                  >
                    معاهدات الاستثمار الثنائية (BITs)
                  </button>
                </div>
                <div className="flex items-center gap-space-md">
                  <label className="inline-flex items-center gap-2 cursor-pointer select-none bg-surface-container-low px-3 py-1.5 rounded-lg">
                    <input
                      checked={onlyAvailable}
                      onChange={(e) => setOnlyAvailable(e.target.checked)}
                      className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer"
                      id="immediateAvailabilityCheck"
                      type="checkbox"
                    />
                    <span className="font-label-sm text-label-sm text-on-surface">
                      متاح للتعيين الفوري فقط
                    </span>
                    <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
                  </label>
                  <button
                    onClick={resetAllFilters}
                    className="font-label-sm text-label-sm text-gold-deep hover:underline"
                    id="resetFiltersBtn"
                    type="button"
                  >
                    إعادة تعيين الفلاتر
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Main Roster Area: Institutional 2-Column Desktop Grid */}
          <section className="max-w-[1360px] mx-auto px-gutter w-full py-space-2xl">
            <div className="flex items-center justify-between mb-space-lg">
              <div className="flex items-center gap-space-sm">
                <div className="w-2.5 h-6 bg-gold-deep rounded-full"></div>
                <h2 className="font-headline-sm text-headline-sm text-primary">
                  المحكمون المقيدون المعتمدون بالهيئة
                </h2>
                <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-0.5 rounded-full">
                  عرض 4 محكمين متميزين
                </span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                <span className="">الترتيب حسب:</span>
                <button
                  className="font-bold text-primary hover:text-gold-deep"
                  type="button"
                >
                  الأقدمية القضائية
                </button>
                <span className="">•</span>
                <button className="hover:text-primary" type="button">
                  عدد القضايا المكتملة
                </button>
              </div>
            </div>

            {/* 2-Column Responsive Grid */}
            <div
              ref={gridRef}
              className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl"
              id="arbitratorsGrid"
            >
              {/* Card 1: Dr. Khalid Al-Hashimi */}
              <article
                className="arbitrator-card bg-surface-container-lowest rounded-xl p-space-lg shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
                data-category="fidic"
                data-jurisdiction="sa"
                data-lang="ar en"
                data-status="available"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-gold-deep rounded-r-xl"></div>
                <div>
                  {/* Header block of Card */}
                  <div className="flex items-start justify-between gap-space-md mb-space-md pr-space-xs">
                    <div className="flex gap-space-md">
                      <div className="relative shrink-0">
                        <img
                          alt="المستشار د. خالد بن عبد الله الهاشمي"
                          className="w-24 h-28 object-cover rounded-lg shadow-sm"
                          data-alt="Dignified middle-aged Arab judge wearing bespoke dark legal formal attire, neutral professional corporate portrait lighting, elegant dark green studio backdrop, authoritative yet approachable presence, supreme judicial clarity."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6hl9oM_3fAs61TmryxmzWnDXcsOC45vEPL0QO5-DBjuE-3xQYTqBkHoBir111DP8eLWXVTd7jOE24L6CONMx7Puut1GPVsx2ci22aX3Ey4FOp69GcXg28cI9xbFW8LQLWWRuvzg5Qta90ZNCTMSBKpIJD8MqTHOd9dk7HajN1jFcxulCiTrwYc8kzpKmg-CD5QD_zEwJ3-h3QHJQK_Z9S_t8XJ-tnbWR8INbuOKI8"
                        />
                        <span
                          className="absolute -bottom-2 -left-2 bg-emerald-subtle text-status-success p-1 rounded-full shadow-sm flex items-center justify-center"
                          title="محكم رئيسي معتمد"
                        >
                          <span className="material-symbols-outlined text-sm font-bold">
                            verified
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-legal-code text-legal-code text-gold-deep tracking-wider font-semibold">
                            ARB-SA-018
                          </span>
                          <span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded">
                            رئيس هيئة تحكيم
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                          المستشار د. خالد بن عبد الله الهاشمي
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          رئيس محكمة استئناف تجارية سابق • زميل معتمد بالمجمع
                          الملكي للمحكمين (FCIArb - London)
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-status-success bg-emerald-subtle px-2 py-0.5 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-status-success"></span>
                            متاح للتعيين الفوري
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">
                              location_on
                            </span>
                            الرياض / دبي
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Expertise Badges */}
                  <div className="flex flex-wrap gap-1.5 my-space-sm pr-space-xs">
                    <span className="bg-surface-parchment text-secondary text-label-sm font-label-sm px-2.5 py-1 rounded">
                      عقود الفيديك والتشييد الهندسي (FIDIC)
                    </span>
                    <span className="bg-surface-parchment text-secondary text-label-sm font-label-sm px-2.5 py-1 rounded">
                      مشاريع البنية التحتية BOT/PPP
                    </span>
                    <span className="bg-surface-container text-on-surface-variant text-label-sm font-label-sm px-2.5 py-1 rounded">
                      التحكيم الإجرائي المقارن
                    </span>
                  </div>
                  {/* Legal Metrics Dossier */}
                  <div className="grid grid-cols-3 gap-2 my-space-md p-space-sm bg-surface-container-low rounded-lg text-center pr-space-xs">
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        28
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        عاماً من الخبرة القضائية
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        84
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        قضية تحكيمية مفصول فيها
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-gold-deep font-bold">
                        العربية / EN
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        لغات التقاضي والمرافعة
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed mb-space-md pr-space-xs">
                    متخصص في فض نزاعات المقاولات الكبرى، مشاريع المترو
                    والمطارات، والتحالفات الإنشائية متعددة الجنسيات. تولى رئاسة
                    42 هيئة تحكيم مؤسسية وخاصة وفق لوائح ICC وLCIA وغرف التجارة
                    الخليجية.
                  </p>
                </div>
                {/* Action Panel */}
                <div className="pt-space-md flex items-center justify-between gap-space-sm pr-space-xs">
                  <Link
                    href="/new-case"
                    className="w-full inline-flex items-center justify-center gap-space-xs py-2.5 px-space-md bg-primary text-surface-ivory hover:bg-emerald-deepest rounded-lg font-label-lg text-label-lg transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined text-gold-light text-base">
                      how_to_reg
                    </span>
                    <span className="">طلب ترشيح لهيئة التحكيم</span>
                  </Link>
                  <button
                    className="inline-flex items-center justify-center gap-1 py-2.5 px-space-md bg-surface-container text-primary hover:bg-surface-variant rounded-lg font-label-lg text-label-lg transition-colors shrink-0"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-base">
                      description
                    </span>
                    <span className="">السيرة الذاتية</span>
                  </button>
                </div>
              </article>

              {/* Card 2: Dr. Abdulrahman Al-Mansoor */}
              <article
                className="arbitrator-card bg-surface-container-lowest rounded-xl p-space-lg shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
                data-category="finance"
                data-jurisdiction="sa"
                data-lang="ar en"
                data-status="available"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-gold-deep rounded-r-xl"></div>
                <div>
                  {/* Header block of Card */}
                  <div className="flex items-start justify-between gap-space-md mb-space-md pr-space-xs">
                    <div className="flex gap-space-md">
                      <div className="relative shrink-0">
                        <img
                          alt="المستشار أ.د. عبد الرحمن المنصور"
                          className="w-24 h-28 object-cover rounded-lg shadow-sm"
                          data-alt="Distinguished senior scholar in modern academic and legal robes, seated in a dignified classical library with dark mahogany book cases, soft golden warm lighting, expressing immense financial and legal jurisprudence authority."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjhAM1MohXlNl9HXO4-JNVUNLKbK9qEJQME3PDV9o7zZkDVkplAxKkT2g6xyGlpVuczfllza8ji2n1pca2iMc5V03Gglbk2Eh2ce0VcdbB-I0SBJxaCVkqkhzDZIvQb8Bb8LX4czN8P8b2bFs2UU6CTMf4psgnhfWFpCZeOburFKiuOq6-keJX0LyRonL-rNQ0HXnlF0jUF9wyo3W1nSr-Xgoh8X_f7-MBa49Q6dSC"
                        />
                        <span
                          className="absolute -bottom-2 -left-2 bg-emerald-subtle text-status-success p-1 rounded-full shadow-sm flex items-center justify-center"
                          title="محكم رئيسي معتمد"
                        >
                          <span className="material-symbols-outlined text-sm font-bold">
                            verified
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-legal-code text-legal-code text-gold-deep tracking-wider font-semibold">
                            ARB-SA-044
                          </span>
                          <span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded">
                            عضو هيئة عليا
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                          المستشار أ.د. عبد الرحمن المنصور
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          أستاذ القانون التجاري والتمويل • عضو المجلس الشرعي
                          للأيوفي (AAOIFI)
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-status-success bg-emerald-subtle px-2 py-0.5 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-status-success"></span>
                            متاح للتعيين الفوري
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">
                              location_on
                            </span>
                            الرياض / المنامة
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Expertise Badges */}
                  <div className="flex flex-wrap gap-1.5 my-space-sm pr-space-xs">
                    <span className="bg-surface-parchment text-secondary text-label-sm font-label-sm px-2.5 py-1 rounded">
                      المصرفية والتمويل الإسلامي
                    </span>
                    <span className="bg-surface-parchment text-secondary text-label-sm font-label-sm px-2.5 py-1 rounded">
                      نزاعات الصكوك وأسواق المال
                    </span>
                    <span className="bg-surface-container text-on-surface-variant text-label-sm font-label-sm px-2.5 py-1 rounded">
                      صناديق الاستثمار السيادية
                    </span>
                  </div>
                  {/* Legal Metrics Dossier */}
                  <div className="grid grid-cols-3 gap-2 my-space-md p-space-sm bg-surface-container-low rounded-lg text-center pr-space-xs">
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        23
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        عاماً خبرة تخصصية
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        61
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        حكماً تحكيمياً مبرماً
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-gold-deep font-bold">
                        العربية / EN
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        لغات التحكيم المعتمدة
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed mb-space-md pr-space-xs">
                    خبير معتمد في معالجة منازعات عقود المرابحة، الاستصناع،
                    الصكوك الدولية، وإعادة الهيكلة المصرفية الكبرى. معتمد كخبير
                    محايد في نزاعات بنكية إقليمية تتجاوز قيمتها 3 مليارات دولار.
                  </p>
                </div>
                {/* Action Panel */}
                <div className="pt-space-md flex items-center justify-between gap-space-sm pr-space-xs">
                  <Link
                    href="/new-case"
                    className="w-full inline-flex items-center justify-center gap-space-xs py-2.5 px-space-md bg-primary text-surface-ivory hover:bg-emerald-deepest rounded-lg font-label-lg text-label-lg transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined text-gold-light text-base">
                      how_to_reg
                    </span>
                    <span className="">طلب ترشيح لهيئة التحكيم</span>
                  </Link>
                  <button
                    className="inline-flex items-center justify-center gap-1 py-2.5 px-space-md bg-surface-container text-primary hover:bg-surface-variant rounded-lg font-label-lg text-label-lg transition-colors shrink-0"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-base">
                      description
                    </span>
                    <span className="">السيرة الذاتية</span>
                  </button>
                </div>
              </article>

              {/* Card 3: Elena Kovacs */}
              <article
                className="arbitrator-card bg-surface-container-lowest rounded-xl p-space-lg shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
                data-category="energy investment"
                data-jurisdiction="ch"
                data-lang="en fr"
                data-status="busy"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-gold-deep rounded-r-xl"></div>
                <div>
                  {/* Header block of Card */}
                  <div className="flex items-start justify-between gap-space-md mb-space-md pr-space-xs">
                    <div className="flex gap-space-md">
                      <div className="relative shrink-0">
                        <img
                          alt="المستشارة د. إلينا كوفاتش"
                          className="w-24 h-28 object-cover rounded-lg shadow-sm"
                          data-alt="Professional female international commercial arbitrator in tailored charcoal blazer, confident diplomatic demeanor, Geneva high court executive setting, sharp natural daylight through historic glass windows."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiD-frHr9US5qkt7S5APG_MFoe41PuOSWUZRLTJ8k10YpbA6ofHZJW7OLO4jgp-CG3lrqTHAY0GlG_JbZdfOfw_k1g7rmkVMx0plCbUqMX42pl_XADs1czNiNKTyKqmc6VSW_5MWPEsBxTiUD-85gDZiFPn_UY9_Q5Ah9VC2lnDh0Y9ZUuPPhSM8SpCE_bDLWqOS9Xn9-t7HvXdxZYSSg93ilb8vWWbcg1xrRCbjKQ"
                        />
                        <span
                          className="absolute -bottom-2 -left-2 bg-emerald-subtle text-status-success p-1 rounded-full shadow-sm flex items-center justify-center"
                          title="محكم رئيسي معتمد"
                        >
                          <span className="material-symbols-outlined text-sm font-bold">
                            verified
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-legal-code text-legal-code text-gold-deep tracking-wider font-semibold">
                            ARB-CH-092
                          </span>
                          <span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded">
                            محكم دولي مقيم
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                          المستشارة د. إلينا كوفاتش (Elena Kovacs)
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          عضو هيئة التحكيم بغرفة سويسرا (SCAI) • مستشار عقود
                          الطاقة والغاز الطبيعي
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-status-warning bg-surface-parchment px-2 py-0.5 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-status-warning"></span>
                            جلسات نشطة (متاح من الربع القادم)
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">
                              location_on
                            </span>
                            جنيف / باريس
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Expertise Badges */}
                  <div className="flex flex-wrap gap-1.5 my-space-sm pr-space-xs">
                    <span className="bg-surface-parchment text-secondary text-label-sm font-label-sm px-2.5 py-1 rounded">
                      عقود الامتياز والبترول (Concessions)
                    </span>
                    <span className="bg-surface-parchment text-secondary text-label-sm font-label-sm px-2.5 py-1 rounded">
                      نزاعات الطاقة النظيفة والتعدين
                    </span>
                    <span className="bg-surface-container text-on-surface-variant text-label-sm font-label-sm px-2.5 py-1 rounded">
                      معاهدة ميثاق الطاقة (ECT)
                    </span>
                  </div>
                  {/* Legal Metrics Dossier */}
                  <div className="grid grid-cols-3 gap-2 my-space-md p-space-sm bg-surface-container-low rounded-lg text-center pr-space-xs">
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        19
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        عاماً من الممارسة الدولية
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        52
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        حكماً عابراً للحدود
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-gold-deep font-bold">
                        EN / FR
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        الإنجليزية والفرنسية
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed mb-space-md pr-space-xs">
                    تتمتع بخبرة واسعة في منازعات تسعير الغاز المسال، عقود مشاطرة
                    الإنتاج (PSA)، وحماية المستثمر الأجنبي ضد قرارات التأميم
                    ونزع الملكية غير المباشر في الشرق الأوسط وأوروبا الوسطى.
                  </p>
                </div>
                {/* Action Panel */}
                <div className="pt-space-md flex items-center justify-between gap-space-sm pr-space-xs">
                  <Link
                    href="/new-case"
                    className="w-full inline-flex items-center justify-center gap-space-xs py-2.5 px-space-md bg-primary text-surface-ivory hover:bg-emerald-deepest rounded-lg font-label-lg text-label-lg transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined text-gold-light text-base">
                      event_available
                    </span>
                    <span className="">حجز جدول التعيين المسبق</span>
                  </Link>
                  <button
                    className="inline-flex items-center justify-center gap-1 py-2.5 px-space-md bg-surface-container text-primary hover:bg-surface-variant rounded-lg font-label-lg text-label-lg transition-colors shrink-0"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-base">
                      description
                    </span>
                    <span className="">السيرة الذاتية</span>
                  </button>
                </div>
              </article>

              {/* Card 4: Eng. Tareq Al-Saadani */}
              <article
                className="arbitrator-card bg-surface-container-lowest rounded-xl p-space-lg shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
                data-category="tech"
                data-jurisdiction="sa uk"
                data-lang="ar en"
                data-status="available"
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-gold-deep rounded-r-xl"></div>
                <div>
                  {/* Header block of Card */}
                  <div className="flex items-start justify-between gap-space-md mb-space-md pr-space-xs">
                    <div className="flex gap-space-md">
                      <div className="relative shrink-0">
                        <img
                          alt="المستشار المهندس طارق السعدني"
                          className="w-24 h-28 object-cover rounded-lg shadow-sm"
                          data-alt="Mid-40s male expert arbitrator and technologist with sharp glasses, elegant modern bespoke suit with subtle pocket square, modern technology legal boardroom, warm architectural lighting with subtle green tones."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_aNWBc1dIZ-EAqFooX-xoKCXgeWmPLIERpmm8GjVbS1tC9etgvQBn0gTFr7YmcvkuKuNN-0bysop2ostZfAChQdWQMwNB20OJkgRYkFoV9N31lKUEEXyrdQZgcXU6zW70VO6G2k_1uZVyIxNOx7L_UWpWnSMi9XYFxI12BLaGtmEz6cA9faAgfm7RJ_L1nUFGG7-ZXvBdRufk_ilPXuRqkkQIjr5zfmA8tJEnFdNW"
                        />
                        <span
                          className="absolute -bottom-2 -left-2 bg-emerald-subtle text-status-success p-1 rounded-full shadow-sm flex items-center justify-center"
                          title="محكم رئيسي معتمد"
                        >
                          <span className="material-symbols-outlined text-sm font-bold">
                            verified
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-legal-code text-legal-code text-gold-deep tracking-wider font-semibold">
                            ARB-EXP-115
                          </span>
                          <span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-0.5 rounded">
                            خبير هندسي وقضائي
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                          المستشار المهندس طارق السعدني
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          خبير فض منازعات التقنية وعقود البرمجيات الضخمة • محكم
                          معتمد بمعهد WIPO
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-status-success bg-emerald-subtle px-2 py-0.5 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-status-success"></span>
                            متاح للتعيين الفوري
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">
                              location_on
                            </span>
                            الرياض / لندن
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Expertise Badges */}
                  <div className="flex flex-wrap gap-1.5 my-space-sm pr-space-xs">
                    <span className="bg-surface-parchment text-secondary text-label-sm font-label-sm px-2.5 py-1 rounded">
                      نزاعات التحول الرقمي وSaaS
                    </span>
                    <span className="bg-surface-parchment text-secondary text-label-sm font-label-sm px-2.5 py-1 rounded">
                      الأصول الرقمية والعقود الذكية
                    </span>
                    <span className="bg-surface-container text-on-surface-variant text-label-sm font-label-sm px-2.5 py-1 rounded">
                      الملكية الفكرية ونقل التكنولوجيا
                    </span>
                  </div>
                  {/* Legal Metrics Dossier */}
                  <div className="grid grid-cols-3 gap-2 my-space-md p-space-sm bg-surface-container-low rounded-lg text-center pr-space-xs">
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        15
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        عاماً في التقاضي التقني
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        39
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        تقرير خبرة وهيئة تحكيم
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-gold-deep font-bold">
                        العربية / EN
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        العربية والإنجليزية
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed mb-space-md pr-space-xs">
                    متخصص في تدقيق الكود البرمجي المتعاقد عليه، نزاعات الفشل في
                    تنفيذ أنظمة ERP للمؤسسات الكبرى، وتحديد المسؤولية التعاقدية
                    في حوادث الأمن السيبراني وتسريب البيانات التجارية السرية.
                  </p>
                </div>
                {/* Action Panel */}
                <div className="pt-space-md flex items-center justify-between gap-space-sm pr-space-xs">
                  <Link
                    href="/new-case"
                    className="w-full inline-flex items-center justify-center gap-space-xs py-2.5 px-space-md bg-primary text-surface-ivory hover:bg-emerald-deepest rounded-lg font-label-lg text-label-lg transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined text-gold-light text-base">
                      how_to_reg
                    </span>
                    <span className="">طلب ترشيح لهيئة التحكيم</span>
                  </Link>
                  <button
                    className="inline-flex items-center justify-center gap-1 py-2.5 px-space-md bg-surface-container text-primary hover:bg-surface-variant rounded-lg font-label-lg text-label-lg transition-colors shrink-0"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-base">
                      description
                    </span>
                    <span className="">السيرة الذاتية</span>
                  </button>
                </div>
              </article>
            </div>

            {/* Empty State (hidden by default) */}
            <div
              className={`${
                visibleCount === 0 ? "flex" : "hidden"
              } flex-col items-center justify-center p-space-2xl bg-surface-container-low rounded-xl text-center my-space-lg`}
              id="noResultsState"
            >
              <span className="material-symbols-outlined text-outline text-5xl mb-space-sm">
                person_search
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                لم يتم العثور على محكمين يطابقون معايير التصفية
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-md">
                يرجى تعديل معايير البحث أو مسح الفلاتر المختارة للاطلاع على
                المحكمين الآخرين المسجلين في القائمة العامة.
              </p>
              <button
                onClick={resetAllFilters}
                className="mt-space-md px-space-md py-space-sm bg-primary text-surface-ivory rounded-lg font-label-sm text-label-sm"
                type="button"
              >
                إعادة تعيين كافة الفلاتر
              </button>
            </div>
          </section>

          {/* International Charter of Impartiality (IBA Conflict Rules) Institutional Banner */}
          <section className="w-full bg-surface-parchment py-space-xl">
            <div className="max-w-[1360px] mx-auto px-gutter">
              <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-lg flex flex-col lg:flex-row items-center justify-between gap-space-xl">
                <div className="flex items-start gap-space-md">
                  <div className="w-16 h-16 rounded-full bg-emerald-subtle flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      balance
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm text-gold-deep bg-surface-container px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                        IBA Compliance Protocol
                      </span>
                      <span className="font-legal-code text-legal-code text-on-surface-variant">
                        معايير نقابة المحامين الدولية 2024
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      ميثاق الحيدة والاستقلال والإفصاح القضائي الصارم
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl leading-relaxed">
                      يخضع كافة المحكمين المدرجين في جدول &apos;المكتب الدولي
                      للتحكيم&apos; للتوقيع الإلزامي على إقرار التجرد والخلو من
                      أي مصالح متعارضة مع أطراف النزاع أو وكلائهم، وفق القوائم
                      الحمراء والبرتقالية والخضراء المنصوص عليها دولياً، مع
                      التزام فوري بإبلاغ الأمانة العامة بأي مستجد يمس الحياد.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-space-sm shrink-0 w-full lg:w-auto">
                  <Link
                    href="/knowledge-center"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-3 bg-primary text-surface-ivory rounded-lg font-label-lg text-label-lg hover:bg-emerald-deepest transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined text-gold-light text-base">
                      policy
                    </span>
                    <span className="">تحميل ميثاق الشرف والحياد</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-md py-3 bg-surface-container text-on-surface-variant hover:text-primary rounded-lg font-label-lg text-label-lg transition-colors"
                  >
                    <span className="">طلب رد أو استبدال محكم</span>
                  </Link>
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

