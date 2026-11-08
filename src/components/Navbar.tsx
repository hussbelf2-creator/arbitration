"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onSelectAboutTab?: (
    tabId:
      | "tab-overview"
      | "tab-adr"
      | "tab-board"
      | "tab-ceo"
      | "tab-advisory"
      | "tab-technical"
  ) => void;
}

export default function Navbar({ onSelectAboutTab }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAboutActive = pathname === "/about";
  const isServicesActive =
    pathname === "/services" || pathname === "/calculator";
  const isArbitratorsActive = pathname === "/arbitrators";
  const isMediaActive = pathname === "/media-center";
  const isKnowledgeActive = pathname === "/knowledge-center";
  const isContactActive = pathname === "/contact";

  const aboutItems: {
    label: string;
    path: string;
    tab:
      | "tab-overview"
      | "tab-adr"
      | "tab-board"
      | "tab-ceo"
      | "tab-advisory"
      | "tab-technical";
  }[] = [
    { label: "نبذة", path: "about-overview", tab: "tab-overview" },
    {
      label: "بدائل تسوية المنازعات في السعودية",
      path: "about-adr-sa",
      tab: "tab-adr",
    },
    { label: "مجلس الإدارة", path: "about-board", tab: "tab-board" },
    { label: "الرئيس التنفيذي", path: "about-ceo", tab: "tab-ceo" },
    {
      label: "اللجنة الاستشارية الدولية",
      path: "about-advisory-committee",
      tab: "tab-advisory",
    },
    {
      label: "مجلس القرارات الفنية",
      path: "about-technical-decisions",
      tab: "tab-technical",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-ivory/95 backdrop-blur-md border-b border-border-subtle/70 shadow-[0_2px_12px_rgba(6,61,49,0.06)]">
      <div className="h-20 max-w-[1380px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
        {/* 1. الشعار والهوية المؤسسية (يمين) */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 group focus:outline-none"
        >
          <div className="w-11 h-11 p-1 bg-surface-container-lowest rounded-full border border-border-gilded/40 shadow-[0_2px_8px_rgba(6,61,49,0.08)] flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
            <img
              alt="المكتب الدولي للتحكيم"
              className="w-full h-full rounded-full object-cover"
              src="/logo.jpg"
            />
          </div>
          <div className="flex flex-col text-right justify-center">
            <span className="font-headline-sm text-[18px] xl:text-[20px] font-bold text-primary leading-tight tracking-tight whitespace-nowrap">
              المكتب الدولي للتحكيم
            </span>
            <span className="font-label-sm text-[10px] font-semibold text-gold-deep tracking-wider uppercase leading-[1.3] whitespace-nowrap">
              International Office for <br />
              Arbitration &amp; Dispute Resolution
            </span>
          </div>
        </Link>

        {/* 2. روابط التنقل الرئيسية (وسط) */}
        <nav
          className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 flex-1 px-2"
          data-active-classes="bg-surface-container text-primary font-bold rounded-lg shadow-sm"
        >
          {/* 1. عن المركز (Dropdown) */}
          <div className="relative group">
            <Link
              href="/about"
              className={`inline-flex items-center justify-center gap-1 h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] whitespace-nowrap transition-all duration-200 ${
                isAboutActive
                  ? "bg-surface-container text-primary font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low group-hover:text-primary group-hover:bg-surface-container-low"
              }`}
            >
              <span>عن المركز</span>
              <span className="material-symbols-outlined text-[16px] text-gold-deep transition-transform duration-200 group-hover:rotate-180 leading-none">
                expand_more
              </span>
            </Link>
            <div className="absolute top-full right-0 pt-2 w-64 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
              <div className="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-[0_12px_32px_rgba(6,61,49,0.12)] p-1.5 flex flex-col gap-0.5">
                {aboutItems.map((item) =>
                  onSelectAboutTab ? (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => onSelectAboutTab(item.tab)}
                      data-path={item.path}
                      className="w-full px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.path}
                      href={`/about?tab=${item.tab}`}
                      data-path={item.path}
                      className="px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {/* 2. خدماتنا (Dropdown) */}
          <div className="relative group">
            <Link
              href="/services"
              className={`inline-flex items-center justify-center gap-1 h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] whitespace-nowrap transition-all duration-200 ${
                isServicesActive
                  ? "bg-surface-container text-primary font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low group-hover:text-primary group-hover:bg-surface-container-low"
              }`}
            >
              <span>خدماتنا</span>
              <span className="material-symbols-outlined text-[16px] text-gold-deep transition-transform duration-200 group-hover:rotate-180 leading-none">
                expand_more
              </span>
            </Link>
            <div className="absolute top-full right-0 pt-2 w-56 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
              <div className="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-[0_12px_32px_rgba(6,61,49,0.12)] p-1.5 flex flex-col gap-0.5">
                <Link
                  className="px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap"
                  data-path="services-arbitration"
                  href="/services"
                >
                  خدمات التحكيم
                </Link>
                <Link
                  className="px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap"
                  data-path="services-mediation"
                  href="/services"
                >
                  خدمات الوساطة
                </Link>
                <Link
                  className="px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap"
                  data-path="services-independent"
                  href="/services"
                >
                  خدمات مستقلة
                </Link>
                <div className="my-1 border-t border-border-subtle/60"></div>
                <Link
                  className="px-3.5 py-2.5 text-[13.5px] font-medium text-gold-deep hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right flex items-center justify-between whitespace-nowrap"
                  data-path="hasebat-al-rusoom"
                  href="/calculator"
                >
                  <span>حاسبة الرسوم والأتعاب</span>
                  <span className="material-symbols-outlined text-[15px]">
                    calculate
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* 3. الشروط النموذجية */}
          <Link
            className="inline-flex items-center justify-center h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] text-on-surface-variant hover:text-primary hover:bg-surface-container-low whitespace-nowrap transition-all duration-200"
            data-path="model-clauses"
            href="/services#model-clauses"
          >
            الشروط النموذجية
          </Link>

          {/* 4. المحايدون (Dropdown) */}
          <div className="relative group">
            <Link
              href="/arbitrators"
              className={`inline-flex items-center justify-center gap-1 h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] whitespace-nowrap transition-all duration-200 ${
                isArbitratorsActive
                  ? "bg-surface-container text-primary font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low group-hover:text-primary group-hover:bg-surface-container-low"
              }`}
            >
              <span>المحايدون</span>
              <span className="material-symbols-outlined text-[16px] text-gold-deep transition-transform duration-200 group-hover:rotate-180 leading-none">
                expand_more
              </span>
            </Link>
            <div className="absolute top-full right-0 pt-2 w-48 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
              <div className="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-[0_12px_32px_rgba(6,61,49,0.12)] p-1.5 flex flex-col gap-0.5">
                <Link
                  className="px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap"
                  data-path="neutrals-arbitrators"
                  href="/arbitrators"
                >
                  المحكمون
                </Link>
                <Link
                  className="px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap"
                  data-path="neutrals-mediators"
                  href="/arbitrators"
                >
                  الوسطاء
                </Link>
              </div>
            </div>
          </div>

          {/* 5. الفعاليات */}
          <Link
            className="inline-flex items-center justify-center h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] text-on-surface-variant hover:text-primary hover:bg-surface-container-low whitespace-nowrap transition-all duration-200"
            data-path="events"
            href="/media-center#events-calendar"
          >
            الفعاليات
          </Link>

          {/* 6. مركز المعرفة */}
          <Link
            className={`inline-flex items-center justify-center h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] whitespace-nowrap transition-all duration-200 ${
              isKnowledgeActive
                ? "bg-surface-container text-primary font-bold shadow-sm"
                : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
            }`}
            data-path="knowledge-center"
            href="/knowledge-center"
          >
            مركز المعرفة
          </Link>

          {/* 7. المركز الإعلامي */}
          <Link
            className={`inline-flex items-center justify-center h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] whitespace-nowrap transition-all duration-200 ${
              isMediaActive
                ? "bg-surface-container text-primary font-bold shadow-sm"
                : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
            }`}
            data-path="media-center"
            href="/media-center"
          >
            المركز الإعلامي
          </Link>

          {/* 8. اتصل بنا */}
          <Link
            className={`inline-flex items-center justify-center h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] whitespace-nowrap transition-all duration-200 ${
              isContactActive
                ? "bg-surface-container text-primary font-bold shadow-sm"
                : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
            }`}
            data-path="contact-us"
            href="/contact"
          >
            اتصل بنا
          </Link>
        </nav>

        {/* 3. أزرار الإجراءات السريعة (يسار) */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            className="inline-flex items-center justify-center gap-2 h-10 px-3.5 xl:px-4 bg-primary-container text-surface-ivory hover:bg-emerald-deepest rounded-lg font-label-lg text-[13px] xl:text-[14px] font-semibold whitespace-nowrap transition-all shadow-[0_2px_8px_rgba(6,61,49,0.14)] border border-border-gilded/30"
            data-path="bawabat-al-tahkeem"
            href="/new-case"
          >
            <span className="material-symbols-outlined text-gold-light text-[18px] leading-none">
              gavel
            </span>
            <span>بوابة التحكيم الإلكتروني</span>
          </Link>
          <button
            className="inline-flex items-center justify-center h-10 px-2.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container border border-border-subtle/70 font-label-sm text-xs font-bold transition-colors shrink-0"
            type="button"
          >
            EN
          </button>
          {/* زر القائمة للشاشات الصغيرة والمتوسطة */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-primary hover:bg-surface-container border border-border-subtle/70 transition-colors"
            aria-label="القائمة الرئيسية"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للجوال والأجهزة اللوحية */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-border-subtle shadow-xl px-4 pt-3 pb-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col gap-1 text-right">
            <div className="py-1.5 px-3 text-xs font-bold text-gold-deep uppercase tracking-wider">
              عن المركز
            </div>
            {aboutItems.map((item) => (
              <Link
                key={item.path}
                href={`/about?tab=${item.tab}`}
                onClick={() => {
                  if (onSelectAboutTab) onSelectAboutTab(item.tab);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="my-1 border-t border-border-subtle/60"></div>
            <div className="py-1.5 px-3 text-xs font-bold text-gold-deep uppercase tracking-wider">
              الخدمات واللوائح
            </div>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              خدمات التحكيم والوساطة
            </Link>
            <Link
              href="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              حاسبة رسوم التحكيم
            </Link>
            <Link
              href="/services#model-clauses"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              الشروط النموذجية
            </Link>
            <Link
              href="/arbitrators"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              المحايدون (المحكمون والوسطاء)
            </Link>
            <Link
              href="/media-center#events-calendar"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              الفعاليات
            </Link>
            <Link
              href="/knowledge-center"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              مركز المعرفة
            </Link>
            <Link
              href="/media-center"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              المركز الإعلامي
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

