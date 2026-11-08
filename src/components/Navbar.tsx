"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutItems = [
    { label: "نبذة", path: "about-overview" },
    { label: "بدائل تسوية المنازعات في السعودية", path: "about-adr-sa" },
    { label: "مجلس الإدارة", path: "about-board" },
    { label: "الرئيس التنفيذي", path: "about-ceo" },
    { label: "اللجنة الاستشارية الدولية", path: "about-advisory-committee" },
    { label: "مجلس القرارات الفنية", path: "about-technical-decisions" },
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

        {/* 2. عناصر التنقل الرئيسية (وسط - بدون روابط) */}
        <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 flex-1 px-2">
          {/* 1. عن المركز (Dropdown) */}
          <div className="relative group">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-1 h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] text-on-surface-variant hover:text-primary hover:bg-surface-container-low group-hover:text-primary group-hover:bg-surface-container-low whitespace-nowrap transition-all duration-200 cursor-default"
            >
              <span>عن المركز</span>
              <span className="material-symbols-outlined text-[16px] text-gold-deep transition-transform duration-200 group-hover:rotate-180 leading-none">
                expand_more
              </span>
            </button>
            <div className="absolute top-full right-0 pt-2 w-64 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
              <div className="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-[0_12px_32px_rgba(6,61,49,0.12)] p-1.5 flex flex-col gap-0.5">
                {aboutItems.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    data-path={item.path}
                    className="w-full px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap cursor-default"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 2. خدماتنا (Dropdown) */}
          <div className="relative group">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-1 h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] text-on-surface-variant hover:text-primary hover:bg-surface-container-low group-hover:text-primary group-hover:bg-surface-container-low whitespace-nowrap transition-all duration-200 cursor-default"
            >
              <span>خدماتنا</span>
              <span className="material-symbols-outlined text-[16px] text-gold-deep transition-transform duration-200 group-hover:rotate-180 leading-none">
                expand_more
              </span>
            </button>
            <div className="absolute top-full right-0 pt-2 w-56 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
              <div className="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-[0_12px_32px_rgba(6,61,49,0.12)] p-1.5 flex flex-col gap-0.5">
                <button
                  type="button"
                  className="w-full px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap cursor-default"
                  data-path="services-arbitration"
                >
                  خدمات التحكيم
                </button>
                <button
                  type="button"
                  className="w-full px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap cursor-default"
                  data-path="services-mediation"
                >
                  خدمات الوساطة
                </button>
                <button
                  type="button"
                  className="w-full px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap cursor-default"
                  data-path="services-independent"
                >
                  خدمات مستقلة
                </button>
                <div className="my-1 border-t border-border-subtle/60"></div>
                <button
                  type="button"
                  className="w-full px-3.5 py-2.5 text-[13.5px] font-medium text-gold-deep hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right flex items-center justify-between whitespace-nowrap cursor-default"
                  data-path="hasebat-al-rusoom"
                >
                  <span>حاسبة الرسوم والأتعاب</span>
                  <span className="material-symbols-outlined text-[15px]">
                    calculate
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* 3. الشروط النموذجية */}
          <button
            type="button"
            className="inline-flex items-center justify-center h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] text-on-surface-variant hover:text-primary hover:bg-surface-container-low whitespace-nowrap transition-all duration-200 cursor-default"
            data-path="model-clauses"
          >
            الشروط النموذجية
          </button>

          {/* 4. المحايدون (Dropdown) */}
          <div className="relative group">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-1 h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] text-on-surface-variant hover:text-primary hover:bg-surface-container-low group-hover:text-primary group-hover:bg-surface-container-low whitespace-nowrap transition-all duration-200 cursor-default"
            >
              <span>المحايدون</span>
              <span className="material-symbols-outlined text-[16px] text-gold-deep transition-transform duration-200 group-hover:rotate-180 leading-none">
                expand_more
              </span>
            </button>
            <div className="absolute top-full right-0 pt-2 w-48 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
              <div className="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-[0_12px_32px_rgba(6,61,49,0.12)] p-1.5 flex flex-col gap-0.5">
                <button
                  type="button"
                  className="w-full px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap cursor-default"
                  data-path="neutrals-arbitrators"
                >
                  المحكمون
                </button>
                <button
                  type="button"
                  className="w-full px-3.5 py-2.5 text-[13.5px] font-medium text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors text-right block whitespace-nowrap cursor-default"
                  data-path="neutrals-mediators"
                >
                  الوسطاء
                </button>
              </div>
            </div>
          </div>

          {/* 5. الفعاليات */}
          <button
            type="button"
            className="inline-flex items-center justify-center h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] text-on-surface-variant hover:text-primary hover:bg-surface-container-low whitespace-nowrap transition-all duration-200 cursor-default"
            data-path="events"
          >
            الفعاليات
          </button>

          {/* 6. مركز المعرفة */}
          <button
            type="button"
            className="inline-flex items-center justify-center h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] text-on-surface-variant hover:text-primary hover:bg-surface-container-low whitespace-nowrap transition-all duration-200 cursor-default"
            data-path="knowledge-center"
          >
            مركز المعرفة
          </button>

          {/* 7. المركز الإعلامي */}
          <button
            type="button"
            className="inline-flex items-center justify-center h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] text-on-surface-variant hover:text-primary hover:bg-surface-container-low whitespace-nowrap transition-all duration-200 cursor-default"
            data-path="media-center"
          >
            المركز الإعلامي
          </button>

          {/* 8. اتصل بنا */}
          <button
            type="button"
            className="inline-flex items-center justify-center h-10 px-2.5 xl:px-3 rounded-lg font-label-lg text-[13.5px] xl:text-[14px] text-on-surface-variant hover:text-primary hover:bg-surface-container-low whitespace-nowrap transition-all duration-200 cursor-default"
            data-path="contact-us"
          >
            اتصل بنا
          </button>
        </nav>

        {/* 3. أزرار الإجراءات السريعة (يسار - بدون روابط) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 h-10 px-3.5 xl:px-4 bg-primary-container text-surface-ivory hover:bg-emerald-deepest rounded-lg font-label-lg text-[13px] xl:text-[14px] font-semibold whitespace-nowrap transition-all shadow-[0_2px_8px_rgba(6,61,49,0.14)] border border-border-gilded/30 cursor-default"
            data-path="bawabat-al-tahkeem"
          >
            <span className="material-symbols-outlined text-gold-light text-[18px] leading-none">
              gavel
            </span>
            <span>بوابة التحكيم الإلكتروني</span>
          </button>
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

      {/* القائمة المنسدلة للجوال والأجهزة اللوحية (بدون روابط) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-border-subtle shadow-xl px-4 pt-3 pb-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col gap-1 text-right">
            <div className="py-1.5 px-3 text-xs font-bold text-gold-deep uppercase tracking-wider">
              عن المركز
            </div>
            {aboutItems.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-right px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="my-1 border-t border-border-subtle/60"></div>
            <div className="py-1.5 px-3 text-xs font-bold text-gold-deep uppercase tracking-wider">
              الخدمات واللوائح
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-right px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              خدمات التحكيم والوساطة
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-right px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              حاسبة رسوم التحكيم
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-right px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              الشروط النموذجية
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-right px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              المحايدون (المحكمون والوسطاء)
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-right px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              الفعاليات
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-right px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              مركز المعرفة
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-right px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              المركز الإعلامي
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-right px-4 py-2 text-sm text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors"
            >
              اتصل بنا
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
