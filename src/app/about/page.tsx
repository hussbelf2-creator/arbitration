"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type TabId =
  | "tab-overview"
  | "tab-adr"
  | "tab-board"
  | "tab-ceo"
  | "tab-advisory"
  | "tab-technical";

const VALID_TABS: TabId[] = [
  "tab-overview",
  "tab-adr",
  "tab-board",
  "tab-ceo",
  "tab-advisory",
  "tab-technical",
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabId>("tab-overview");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab") as TabId | null;
      if (tabParam && VALID_TABS.includes(tabParam)) {
        setActiveTab(tabParam);
      }
    }
  }, []);

  const handleSelectTab = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Navbar onSelectAboutTab={handleSelectTab} />

      <main className="w-full pt-20 bg-surface-ivory">
        <div className="flex flex-col w-full">
          {/* Breadcrumbs & Institutional Banner */}
          <div className="w-full bg-surface-container-low py-space-sm px-gutter">
            <div className="max-w-[1360px] mx-auto flex items-center justify-between text-body-sm">
              <nav
                aria-label="مسار التصفح"
                className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant"
              >
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1"
                  href="/"
                >
                  <span className="material-symbols-outlined text-sm">home</span>
                  <span>الرئيسية</span>
                </Link>
                <span className="material-symbols-outlined text-xs text-gold-deep rotate-180">
                  chevron_left
                </span>
                <span className="text-on-surface-variant">عن المركز</span>
                <span className="material-symbols-outlined text-xs text-gold-deep rotate-180">
                  chevron_left
                </span>
                <span className="text-primary font-bold">
                  نبذة والحوكمة المؤسسية
                </span>
              </nav>
              <div className="hidden md:flex items-center gap-space-sm">
                <span className="font-legal-code text-legal-code text-gold-deep tracking-wider">
                  DOC-REF: IOADR-CHARTER-2025
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-light"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  الاعتماد السيادي واللوائح السارية
                </span>
              </div>
            </div>
          </div>

          {/* Hero Section: Diplomatic Sovereign Presence */}
          <section className="relative w-full bg-primary-container text-surface-ivory overflow-hidden py-space-2xl">
            <div className="absolute inset-0 bg-gradient-to-l from-emerald-deepest via-primary-container to-emerald-deepest opacity-95"></div>
            {/* Faint Diplomatic Watermark Geometry */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 1200 800"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="600"
                  cy="400"
                  fill="none"
                  r="380"
                  stroke="currentColor"
                  strokeDasharray="8,8"
                  strokeWidth="2"
                ></circle>
                <circle
                  cx="600"
                  cy="400"
                  fill="none"
                  r="280"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></circle>
                <polygon
                  fill="none"
                  points="600,60 900,740 120,300 1080,300 300,740"
                  stroke="currentColor"
                  strokeWidth="1"
                ></polygon>
              </svg>
            </div>
            <div className="relative max-w-[1360px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-space-xs self-start px-space-md py-space-xs rounded-full bg-emerald-deepest text-gold-light shadow-sm">
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    account_balance
                  </span>
                  <span className="font-label-sm text-label-sm tracking-wider uppercase">
                    هيئة تحكيمية دولية مستقلة ومحكمة تجارية مختصة
                  </span>
                </div>
                <h1 className="font-display-hero text-display-hero text-surface-ivory leading-tight tracking-tight">
                  المكتب الدولي للتحكيم <br />
                  <span className="text-gold-light">وتسوية المنازعات</span>
                </h1>
                <p className="font-body-lg text-body-lg text-surface-container max-w-3xl leading-relaxed">
                  تأسس المركز كصرح قضائي وتحكيمي دولي يمارس ولايته المستقلة في فض
                  وتسوية المنازعات التجارية والاستثمارية العابرة للحدود. يستند
                  المركز في أحكامه وقواعده إلى مقتضيات اتفاقية نيويورك لعام 1958،
                  وقواعد لجنة الأمم المتحدة للقانون التجاري الدولي (UNCITRAL)،
                  موفراً بيئة مؤسسية محايدة تحظى بإنفاذ قضائي إلزامي في 172 دولة.
                </p>
                <div className="pt-space-md flex flex-wrap items-center gap-space-md">
                  <div className="flex items-center gap-space-xs bg-emerald-deepest/80 px-space-md py-space-sm rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-gold-light text-xl">
                      gavel
                    </span>
                    <div className="flex flex-col text-right">
                      <span className="font-label-sm text-label-sm text-surface-container-high">
                        الإطار القانوني
                      </span>
                      <span className="font-title-md text-title-md text-surface-ivory">
                        قواعد الأونسيترال الدولية
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs bg-emerald-deepest/80 px-space-md py-space-sm rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-gold-light text-xl">
                      public
                    </span>
                    <div className="flex flex-col text-right">
                      <span className="font-label-sm text-label-sm text-surface-container-high">
                        النفاذ العالمي
                      </span>
                      <span className="font-title-md text-title-md text-surface-ivory">
                        172 دولة عضواً بنيويورك
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs bg-emerald-deepest/80 px-space-md py-space-sm rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-gold-light text-xl">
                      verified
                    </span>
                    <div className="flex flex-col text-right">
                      <span className="font-label-sm text-label-sm text-surface-container-high">
                        الامتثال القضائي
                      </span>
                      <span className="font-title-md text-title-md text-surface-ivory">
                        معايير IBA لتضارب المصالح
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="bg-surface-parchment text-on-surface rounded-xl p-space-lg shadow-xl relative overflow-hidden">
                  <div className="w-16 h-1 bg-gold-deep mb-space-sm"></div>
                  <span className="font-label-sm text-label-sm text-gold-deep uppercase tracking-wider block mb-1">
                    البيان التأسيسي والرسالة السامية
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-primary mb-space-sm">
                    العدالة الناجزة، والسيادة التعاقدية
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                    &quot;نلتزم بإرساء منصة تحكيمية ترتقي بالثقة الاستثمارية
                    العالمية وتضمن سرعة الفصل في النزاعات دون المساس بدقة الفحص
                    الفني وحصانة القرار القضائي.&quot;
                  </p>
                  <div className="flex items-center justify-between pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-status-success text-lg">
                        shield
                      </span>
                      <span className="font-legal-code text-legal-code text-primary font-bold">
                        الحصانة المؤسسية المعتمدة
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-gold-deep">
                      الميثاق 1445هـ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision, Mission & Core Values Bento Section */}
          <section className="max-w-[1360px] mx-auto px-gutter py-space-2xl w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
              <div>
                <span className="font-label-sm text-label-sm text-gold-deep tracking-widest uppercase block mb-1">
                  المرتكزات الأخلاقية والمؤسسية
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  الرؤية والرسالة والقيم الجوهرية
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                تتكامل معاييرنا الصارمة مع أفضل الممارسات الدبلوماسية والقضائية،
                لضمان إدارة جلسات النزاع بموضوعية وحياد كامل.
              </p>
            </div>
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              {/* Card 1: Vision */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-2xl text-gold-deep">
                      visibility
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-gold-deep uppercase block mb-1">
                    الرؤية الاستراتيجية
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">
                    الريادة التحكيمية الدولية
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    أن يكون المكتب الدولي المرجع الأول والأوثق لفض وتسوية
                    المنازعات في منطقة الشرق الأوسط والعالم، بدمج التقاليد
                    القضائية العريقة مع التحكيم الرقمي فائق الكفاءة.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-sm bg-surface-ivory p-space-sm rounded-lg flex items-center justify-between text-body-sm text-on-surface-variant">
                  <span>مؤشر الموثوقية الدولي</span>
                  <span className="font-bold text-primary font-legal-code">
                    AA+ Tier Ranked
                  </span>
                </div>
              </div>
              {/* Card 2: Mission */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low text-primary flex items-center justify-center mb-space-md">
                    <span className="material-symbols-outlined text-2xl text-gold-deep">
                      flag
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-gold-deep uppercase block mb-1">
                    الرسالة المؤسسية
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm">
                    سيادة القانون والحلول المبتكرة
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    توفير خدمات تسوية ودية وتحكيمية متطورة تضمن حماية
                    الاستثمارات، تقليص فترات التقاضي، وصيانة السرية التامة
                    للأطراف المتنازعة وفق أسس قانونية محكمة غير قابلة للنقض.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-sm bg-surface-ivory p-space-sm rounded-lg flex items-center justify-between text-body-sm text-on-surface-variant">
                  <span>متوسط زمن البت في النزاع</span>
                  <span className="font-bold text-primary font-legal-code">
                    180 يوماً
                  </span>
                </div>
              </div>
              {/* Card 3: Values Showcase with Mini Grid */}
              <div className="bg-primary text-surface-ivory rounded-xl p-space-lg shadow-md flex flex-col justify-between lg:row-span-1">
                <div>
                  <span className="font-label-sm text-label-sm text-gold-light uppercase block mb-1">
                    الميثاق المهني
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-surface-ivory mb-space-sm">
                    منظومة القيم القضائية
                  </h3>
                  <p className="font-body-sm text-body-sm text-surface-container leading-relaxed mb-space-md">
                    تخضع جميع هيئات التحكيم وأمانة السر لرقابة امتثال صارمة
                    لضمان نزاهة المخرجات القضائية.
                  </p>
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="bg-primary-container p-space-sm rounded-lg">
                      <span className="material-symbols-outlined text-gold-light text-base mb-1">
                        balance
                      </span>
                      <span className="font-title-md text-title-md block text-surface-ivory">
                        النزاهة والحياد
                      </span>
                      <p className="font-legal-code text-legal-code text-surface-container mt-1">
                        امتثال صارم لضوابط عدم تضارب المصالح.
                      </p>
                    </div>
                    <div className="bg-primary-container p-space-sm rounded-lg">
                      <span className="material-symbols-outlined text-gold-light text-base mb-1">
                        lock
                      </span>
                      <span className="font-title-md text-title-md block text-surface-ivory">
                        السرية التامة
                      </span>
                      <p className="font-legal-code text-legal-code text-surface-container mt-1">
                        حماية دقيقة لبيانات العقود والنزاعات.
                      </p>
                    </div>
                    <div className="bg-primary-container p-space-sm rounded-lg">
                      <span className="material-symbols-outlined text-gold-light text-base mb-1">
                        speed
                      </span>
                      <span className="font-title-md text-title-md block text-surface-ivory">
                        الكفاءة والسرعة
                      </span>
                      <p className="font-legal-code text-legal-code text-surface-container mt-1">
                        إجراءات معجلة وحوكمة زمنية صارمة.
                      </p>
                    </div>
                    <div className="bg-primary-container p-space-sm rounded-lg">
                      <span className="material-symbols-outlined text-gold-light text-base mb-1">
                        verified_user
                      </span>
                      <span className="font-title-md text-title-md block text-surface-ivory">
                        الحجية الدولية
                      </span>
                      <p className="font-legal-code text-legal-code text-surface-container mt-1">
                        أحكام ملزمة قابلة للتنفيذ المباشر عالمياً.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Governance & Organizational Structure Directory */}
          <section className="w-full bg-surface-container-low py-space-2xl">
            <div className="max-w-[1360px] mx-auto px-gutter">
              <div className="flex flex-col gap-space-xs mb-space-xl">
                <span className="font-label-sm text-label-sm text-gold-deep tracking-wider uppercase">
                  الهيكل القيادي والتنظيمي
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  الحوكمة المؤسسية واللجان الدولية
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  يعتمد المكتب هيكلية مؤسسية رفيعة تفصل بين الاختصاص القضائي
                  المستقل لهيئات التحكيم، والإشراف المؤسسي والفني، لضمان أعلى
                  درجات الشفافية والمساءلة.
                </p>
              </div>
              {/* Tab Navigation Container */}
              <div className="flex flex-col lg:flex-row gap-space-xl items-start">
                {/* Sidebar Navigation */}
                <div className="w-full lg:w-80 shrink-0 bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col gap-1">
                  <button
                    onClick={() => handleSelectTab("tab-overview")}
                    className={`gov-tab-btn w-full text-right p-space-md rounded-lg flex items-center justify-between font-title-md text-title-md transition-all duration-200 ${
                      activeTab === "tab-overview"
                        ? "active bg-primary text-surface-ivory shadow-sm"
                        : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                    }`}
                    data-target="tab-overview"
                    type="button"
                  >
                    <span className="flex items-center gap-space-sm">
                      <span
                        className={`material-symbols-outlined ${
                          activeTab === "tab-overview" ? "text-gold-light" : ""
                        }`}
                      >
                        history_edu
                      </span>
                      <span>1. نبذة ونشأة المركز</span>
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_back
                    </span>
                  </button>
                  <button
                    onClick={() => handleSelectTab("tab-adr")}
                    className={`gov-tab-btn w-full text-right p-space-md rounded-lg flex items-center justify-between font-title-md text-title-md transition-all duration-200 ${
                      activeTab === "tab-adr"
                        ? "active bg-primary text-surface-ivory shadow-sm"
                        : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                    }`}
                    data-target="tab-adr"
                    type="button"
                  >
                    <span className="flex items-center gap-space-sm">
                      <span
                        className={`material-symbols-outlined ${
                          activeTab === "tab-adr" ? "text-gold-light" : ""
                        }`}
                      >
                        balance
                      </span>
                      <span>2. بدائل تسوية المنازعات</span>
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_back
                    </span>
                  </button>
                  <button
                    onClick={() => handleSelectTab("tab-board")}
                    className={`gov-tab-btn w-full text-right p-space-md rounded-lg flex items-center justify-between font-title-md text-title-md transition-all duration-200 ${
                      activeTab === "tab-board"
                        ? "active bg-primary text-surface-ivory shadow-sm"
                        : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                    }`}
                    data-target="tab-board"
                    type="button"
                  >
                    <span className="flex items-center gap-space-sm">
                      <span
                        className={`material-symbols-outlined ${
                          activeTab === "tab-board" ? "text-gold-light" : ""
                        }`}
                      >
                        groups
                      </span>
                      <span>3. مجلس الإدارة</span>
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_back
                    </span>
                  </button>
                  <button
                    onClick={() => handleSelectTab("tab-ceo")}
                    className={`gov-tab-btn w-full text-right p-space-md rounded-lg flex items-center justify-between font-title-md text-title-md transition-all duration-200 ${
                      activeTab === "tab-ceo"
                        ? "active bg-primary text-surface-ivory shadow-sm"
                        : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                    }`}
                    data-target="tab-ceo"
                    type="button"
                  >
                    <span className="flex items-center gap-space-sm">
                      <span
                        className={`material-symbols-outlined ${
                          activeTab === "tab-ceo" ? "text-gold-light" : ""
                        }`}
                      >
                        manage_accounts
                      </span>
                      <span>4. الرئيس التنفيذي والإدارة</span>
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_back
                    </span>
                  </button>
                  <button
                    onClick={() => handleSelectTab("tab-advisory")}
                    className={`gov-tab-btn w-full text-right p-space-md rounded-lg flex items-center justify-between font-title-md text-title-md transition-all duration-200 ${
                      activeTab === "tab-advisory"
                        ? "active bg-primary text-surface-ivory shadow-sm"
                        : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                    }`}
                    data-target="tab-advisory"
                    type="button"
                  >
                    <span className="flex items-center gap-space-sm">
                      <span
                        className={`material-symbols-outlined ${
                          activeTab === "tab-advisory" ? "text-gold-light" : ""
                        }`}
                      >
                        travel_explore
                      </span>
                      <span>5. اللجنة الاستشارية الدولية</span>
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_back
                    </span>
                  </button>
                  <button
                    onClick={() => handleSelectTab("tab-technical")}
                    className={`gov-tab-btn w-full text-right p-space-md rounded-lg flex items-center justify-between font-title-md text-title-md transition-all duration-200 ${
                      activeTab === "tab-technical"
                        ? "active bg-primary text-surface-ivory shadow-sm"
                        : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                    }`}
                    data-target="tab-technical"
                    type="button"
                  >
                    <span className="flex items-center gap-space-sm">
                      <span
                        className={`material-symbols-outlined ${
                          activeTab === "tab-technical" ? "text-gold-light" : ""
                        }`}
                      >
                        task_alt
                      </span>
                      <span>6. مجلس القرارات الفنية</span>
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_back
                    </span>
                  </button>
                </div>

                {/* Content Panes Container */}
                <div className="w-full flex-1">
                  {/* TAB 1: Overview & History */}
                  <div
                    className={`gov-tab-pane ${
                      activeTab === "tab-overview" ? "block" : "hidden"
                    } bg-surface-container-lowest rounded-xl p-space-xl shadow-md`}
                    id="tab-overview"
                  >
                    <div className="flex flex-col gap-space-md">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-gold-deep uppercase">
                          السجل المؤسسي والتاريخي
                        </span>
                        <span className="font-legal-code text-legal-code text-on-surface-variant">
                          تأسس 2018م | الرياض
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary">
                        نشأة المركز ومؤشرات التميز المؤسسي
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        انطلق المكتب الدولي للتحكيم وتسوية المنازعات بمبادرة
                        قانونية ودبلوماسية استجابةً للنمو المتسارع في العقود
                        التجارية والاستثمارية الضخمة في المنطقة وحول العالم.
                        يستند المكتب إلى بنية تحتية رقمية وقضائية متكاملة أتاحت
                        إدارة دعاوى نوعية بلغت قيمتها الإجمالية مليارات
                        الدولارات مع معدل امتثال تنفيذي قياسي.
                      </p>
                      {/* Statistics & Achievement Visual Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md my-space-md">
                        <div className="bg-surface-container-low p-space-md rounded-lg text-center">
                          <span className="font-headline-lg text-headline-lg text-primary block font-bold">
                            1,480+
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            نزاع تجاري مفصول فيه
                          </span>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-lg text-center">
                          <span className="font-headline-lg text-headline-lg text-gold-deep block font-bold">
                            99.4%
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            نسبة نفاذ الأحكام دولياً
                          </span>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-lg text-center">
                          <span className="font-headline-lg text-headline-lg text-primary block font-bold">
                            48
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            جنسية للمحكمين المعتمدين
                          </span>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-lg text-center">
                          <span className="font-headline-lg text-headline-lg text-gold-deep block font-bold">
                            18B$
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            قيمة النزاعات المدارة
                          </span>
                        </div>
                      </div>
                      {/* SVG Visual Timeline Chart */}
                      <div className="bg-surface-ivory p-space-lg rounded-xl shadow-sm">
                        <div className="flex items-center justify-between mb-space-sm">
                          <span className="font-title-md text-title-md text-primary">
                            المسار الزمني لمأسسة التحكيم
                          </span>
                          <span className="font-label-sm text-label-sm text-gold-deep">
                            2018 - 2025
                          </span>
                        </div>
                        <div className="w-full overflow-x-auto">
                          <svg
                            className="w-full min-w-[500px] h-28"
                            viewBox="0 0 600 100"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line
                              stroke="currentColor"
                              strokeDasharray="4,4"
                              strokeWidth="2"
                              x1="50"
                              x2="550"
                              y1="50"
                              y2="50"
                            ></line>
                            {/* Point 1 */}
                            <circle
                              className="text-primary"
                              cx="80"
                              cy="50"
                              fill="currentColor"
                              r="8"
                            ></circle>
                            <text
                              className="font-legal-code text-legal-code text-primary"
                              fill="currentColor"
                              textAnchor="middle"
                              x="80"
                              y="30"
                            >
                              2018 التأسيس
                            </text>
                            <text
                              className="font-label-sm text-label-sm text-on-surface-variant"
                              fill="currentColor"
                              textAnchor="middle"
                              x="80"
                              y="80"
                            >
                              إطلاق اللائحة الأولى
                            </text>
                            {/* Point 2 */}
                            <circle
                              className="text-primary"
                              cx="240"
                              cy="50"
                              fill="currentColor"
                              r="8"
                            ></circle>
                            <text
                              className="font-legal-code text-legal-code text-primary"
                              fill="currentColor"
                              textAnchor="middle"
                              x="240"
                              y="30"
                            >
                              2020 الرقمنة
                            </text>
                            <text
                              className="font-label-sm text-label-sm text-on-surface-variant"
                              fill="currentColor"
                              textAnchor="middle"
                              x="240"
                              y="80"
                            >
                              منصة التحكيم عن بعد
                            </text>
                            {/* Point 3 */}
                            <circle
                              className="text-gold-deep"
                              cx="400"
                              cy="50"
                              fill="currentColor"
                              r="8"
                            ></circle>
                            <text
                              className="font-legal-code text-legal-code text-gold-deep"
                              fill="currentColor"
                              textAnchor="middle"
                              x="400"
                              y="30"
                            >
                              2023 التوسع
                            </text>
                            <text
                              className="font-label-sm text-label-sm text-on-surface-variant"
                              fill="currentColor"
                              textAnchor="middle"
                              x="400"
                              y="80"
                            >
                              افتتاح فرعي جنيف ولندن
                            </text>
                            {/* Point 4 */}
                            <circle
                              className="text-primary"
                              cx="530"
                              cy="50"
                              fill="currentColor"
                              r="10"
                            ></circle>
                            <text
                              className="font-legal-code text-legal-code text-primary font-bold"
                              fill="currentColor"
                              textAnchor="middle"
                              x="530"
                              y="30"
                            >
                              2025 الريادة
                            </text>
                            <text
                              className="font-label-sm text-label-sm text-on-surface-variant"
                              fill="currentColor"
                              textAnchor="middle"
                              x="530"
                              y="80"
                            >
                              قواعد الأونسيترال المحدثة
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TAB 2: ADR Ecosystem in Saudi Arabia */}
                  <div
                    className={`gov-tab-pane ${
                      activeTab === "tab-adr" ? "block" : "hidden"
                    } bg-surface-container-lowest rounded-xl p-space-xl shadow-md`}
                    id="tab-adr"
                  >
                    <div className="flex flex-col gap-space-md">
                      <span className="font-label-sm text-label-sm text-gold-deep uppercase">
                        البيئة النظامية والتشريعية
                      </span>
                      <h3 className="font-headline-md text-headline-md text-primary">
                        بدائل تسوية المنازعات في المملكة العربية السعودية
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        تشهد المملكة نقلة نوعية وتاريخية في تعزيز البيئة
                        الاستثمارية تماشياً مع مستهدفات رؤية 2030، حيث تم إصدار
                        نظام تحكيم ونظام تنفيذ من أحدث الأنظمة العالمية
                        المتوافقة كلياً مع قانون الأونسيترال النموذجي للتحكيم
                        التجاري الدولي.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-sm">
                        <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-primary font-title-md text-title-md">
                            <span className="material-symbols-outlined text-gold-deep">
                              gavel
                            </span>
                            <span>قضاء التنفيذ السعودي الصارم</span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            تتمتع أحكام المحكمين الصادرة عن المركز والمصدقة
                            بصيغة التنفيذ بقوة السند التنفيذي الجبري الفوري دون
                            إعادة النظر في موضوع النزاع، وفقاً للمادة التاسعة من
                            نظام التنفيذ السعودي.
                          </p>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-primary font-title-md text-title-md">
                            <span className="material-symbols-outlined text-gold-deep">
                              handshake
                            </span>
                            <span>اتفاقية سنغافورة للوساطة</span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            تتيح تسويات الوساطة المبرمة تحت مظلة المركز إنفاذاً
                            دولياً مباشراً استناداً إلى تصديق المملكة على
                            اتفاقية سنغافورة، مما يعزز الثقة في الاتفاقات الودية
                            الموثقة.
                          </p>
                        </div>
                      </div>
                      <div className="bg-surface-parchment p-space-md rounded-lg flex items-center gap-space-md">
                        <span className="material-symbols-outlined text-gold-deep text-3xl">
                          verified
                        </span>
                        <div>
                          <span className="font-title-md text-title-md text-primary block">
                            التوافق مع النظام القضائي
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            يتمتع المحكمون بالحصانة القضائية والاستقلالية التامة
                            وفق النظام الملكي رقم م/34.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TAB 3: Board of Directors */}
                  <div
                    className={`gov-tab-pane ${
                      activeTab === "tab-board" ? "block" : "hidden"
                    } bg-surface-container-lowest rounded-xl p-space-xl shadow-md`}
                    id="tab-board"
                  >
                    <div className="flex flex-col gap-space-md">
                      <span className="font-label-sm text-label-sm text-gold-deep uppercase">
                        القيادة الإشرافية العليا
                      </span>
                      <h3 className="font-headline-md text-headline-md text-primary">
                        مجلس الإدارة
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        يضم مجلس الإدارة كوكبة من قامات الفقه القانوني، وقضاة
                        استئناف سابقين، وخبراء بارزين في التحكيم التجاري وعقود
                        الطاقة والإنشاءات والتمويل السيادي.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg pt-space-sm">
                        {/* Member 1 */}
                        <div className="bg-surface-container-low rounded-xl p-space-md flex gap-space-md items-center">
                          <img
                            alt="د. عبد الرحمن بن صالح التميمي"
                            className="w-20 h-20 rounded-xl object-cover shadow-sm shrink-0"
                            data-alt="Portrait of a distinguished senior Middle Eastern legal scholar and chairman of the arbitration board, wearing formal diplomatic attire in an ambient wood-paneled library with gold lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxA-24T--xkoZC7WNLpPrc_vw8IaQBGTrdArE3yYwTiRq8a_uwbQLkj8i1R4YrBfb9L1dXqpXDDsf-_EaKAiu-Kt9L12ua3f1jjYcPbvsnBewHRar3GrWPcNjjJfkzXtJ2agxeYAq5LNbt-8wjOHdvUcugr7-hLxVkVX_CgZ9lt8tEQvgm6vH3StBe3zQemJm0g7kGImFK-ZcDfdsGh464yHjv9CxOqPie49MWIXcY"
                          />
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-headline-sm text-primary">
                              د. عبد الرحمن بن صالح التميمي
                            </span>
                            <span className="font-label-sm text-label-sm text-gold-deep">
                              رئيس مجلس الإدارة
                            </span>
                            <p className="font-legal-code text-legal-code text-on-surface-variant mt-1">
                              رئيس محكمة استئناف تجارية سابق، محكم دولي معتمد
                              لدى محكمة التحكيم الدائمة في لاهاي.
                            </p>
                          </div>
                        </div>
                        {/* Member 2 */}
                        <div className="bg-surface-container-low rounded-xl p-space-md flex gap-space-md items-center">
                          <img
                            alt="البارونة هيلين فاندربيلت"
                            className="w-20 h-20 rounded-xl object-cover shadow-sm shrink-0"
                            data-alt="Portrait of a dignified European international arbitrator and vice-chairwoman wearing tailored corporate suit, sophisticated neutral studio lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk-RvpeSGjeF5pYeu65gGnSy2fFOVqJBjELEBDDA-X1TQHx5sb17RWQxpFO0Td8Rgp6sQWK5dkxvVne25m0ubiwxsZYrGPUvPqQtJB9Tw9tLLXSp8KJvc8czrymtuRNfo84mIqJKEDqi1imUEZyP4Xed3YHgM-p5lFLcy5lQBRONem0UJcbefYdBh95l_AtJRk6qEsDprPgbnYhEsgnsXMhrm9GjW8fKyC-iw5fVZT"
                          />
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-headline-sm text-primary">
                              البارونة هيلين فاندربيلت
                            </span>
                            <span className="font-label-sm text-label-sm text-gold-deep">
                              نائب رئيس مجلس الإدارة (لندن)
                            </span>
                            <p className="font-legal-code text-legal-code text-on-surface-variant mt-1">
                              مستشارة الملكة السابقة (KC)، رئيسة سابقة لغرفة
                              التحكيم البحري والتجاري بلندن.
                            </p>
                          </div>
                        </div>
                        {/* Member 3 */}
                        <div className="bg-surface-container-low rounded-xl p-space-md flex gap-space-md items-center">
                          <img
                            alt="المستشار فهد بن خالد السديري"
                            className="w-20 h-20 rounded-xl object-cover shadow-sm shrink-0"
                            data-alt="Portrait of an experienced Arab legal advisor and member of the arbitration board, wearing formal bisht and eyeglasses with warm emerald tone backdrop"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1aV8K_nQxSSZLgHXBE98RlPS-WEG8Er_Rrsf_E2xoRV8N3f0ODbvZs3ynTQ0zftS9eqU7-Gx0tUiOm21Ps8AExSOE1bYsBBeXAItDDz1VMryiYodgAkz2iDccW1ZAbints-U7P7qHh3A_gYjkvMCANRU29NtDTLixJrW6MZF0v9cfAoNiB-Trdg2degdE-G0AWuwMYlHn_WCruQa6i7rhn7zKTdX7xUZoVCQ1H4ub"
                          />
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-headline-sm text-primary">
                              المستشار فهد بن خالد السديري
                            </span>
                            <span className="font-label-sm text-label-sm text-gold-deep">
                              عضو المجلس - رئيس لجنة الحوكمة
                            </span>
                            <p className="font-legal-code text-legal-code text-on-surface-variant mt-1">
                              خبير تسوية منازعات عقود النفط والاستثمار الأجنبي،
                              عضو نقابة المحامين الدولية (IBA).
                            </p>
                          </div>
                        </div>
                        {/* Member 4 */}
                        <div className="bg-surface-container-low rounded-xl p-space-md flex gap-space-md items-center">
                          <img
                            alt="البروفيسور جون مارك دوبوا"
                            className="w-20 h-20 rounded-xl object-cover shadow-sm shrink-0"
                            data-alt="Portrait of a distinguished Swiss corporate legal expert and dispute arbitrator in Geneva, dressed in dark formal suit with subtle golden lapel pin"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfA62mEuxLr16QCjK1oocVIvH4L3RFNB6w6J4-qzaHEoUgIwN0lLs6Gi17xKGipNEX_8Bj7ACN8WyiSSqQJJ03wYPKH8CF6DZ3thBBQwtCETaaRGTEjwR2PNgW6_XKUJX9S0PM_KDvtHjo1kRSEtVW2btduZ5gA3uSrSeL-qhFDGltpibAEiCEklpOCg-bVn_coSyw0csqTNXgbe6ln9EuY1E50AKvW9o_220oEjTn"
                          />
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-headline-sm text-primary">
                              البروفيسور جون مارك دوبوا
                            </span>
                            <span className="font-label-sm text-label-sm text-gold-deep">
                              عضو المجلس (جنيف)
                            </span>
                            <p className="font-legal-code text-legal-code text-on-surface-variant mt-1">
                              أستاذ القانون المقارن بجامعة جنيف، عضو مجلس إدارة
                              معهد التحكيم السويسري.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TAB 4: CEO & Executive Administration */}
                  <div
                    className={`gov-tab-pane ${
                      activeTab === "tab-ceo" ? "block" : "hidden"
                    } bg-surface-container-lowest rounded-xl p-space-xl shadow-md`}
                    id="tab-ceo"
                  >
                    <div className="flex flex-col gap-space-md">
                      <span className="font-label-sm text-label-sm text-gold-deep uppercase">
                        الجهاز التنفيذي وأمانة السر
                      </span>
                      <h3 className="font-headline-md text-headline-md text-primary">
                        الرئيس التنفيذي والإدارة العامة
                      </h3>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                        <div className="lg:col-span-4">
                          <img
                            alt="معالي المهندس القانوني ناصر بن ماجد القحطاني"
                            className="w-full h-80 rounded-xl object-cover shadow-md"
                            data-alt="Official executive portrait of the Chief Executive Officer of the International Arbitration Office, an influential Saudi executive in traditional shemagh and formal black bisht standing in an architectural office"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe7TgQ3M2JbZ7tr1sqSSbLsZcdacy9U9KmRYKUFAjxioEcfiUjH3DG-wuLajEkYNaPBSXTno1HqLFQ-xD-X9ZXdTh1RSrtk7lwJiQifHo2Ni62mYDy8dnGWy700QVZHWpBUStPVRA_Fj81IHP5yQ4I3Mmqy_NAfUK7F-gd1JjYbwSWhjFJUvY-WAIdZ9_T0HkYKoFBUe_AmLVgiJwWt-Wnxl2c8ukIXUPKECinmHV0"
                          />
                        </div>
                        <div className="lg:col-span-8 flex flex-col gap-space-sm">
                          <span className="font-label-sm text-label-sm text-gold-deep">
                            الرئيس التنفيذي وأمين عام المركز
                          </span>
                          <h4 className="font-headline-md text-headline-md text-primary">
                            معالي المهندس القانوني ناصر بن ماجد القحطاني
                          </h4>
                          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                            يتولى قيادة الأمانة العامة وإدارة قضايا التحكيم
                            والوساطة وتطوير المنظومة الإجرائية. يمتلك خبرة
                            تتجاوز 22 عاماً في إدارة مشاريع العقود الكبرى
                            (FIDIC) وحل المنازعات الهندسية والمصرفية.
                          </p>
                          <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1">
                            <span className="font-title-md text-title-md text-primary">
                              اختصاصات مكتب الرئيس التنفيذي:
                            </span>
                            <ul className="list-disc list-inside font-body-sm text-body-sm text-on-surface-variant space-y-1">
                              <li>
                                الإشراف الإداري على قلم كتاب المركز وقيد الدعاوى
                                وإيداع الطلبات.
                              </li>
                              <li>
                                التنسيق مع هيئات التحكيم وتسهيل إخطار الخصوم
                                وتبادل المذكرات.
                              </li>
                              <li>
                                تأكيد استقلالية المحكمين وفحص نماذج الإفصاح
                                المسبق.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TAB 5: International Advisory Committee */}
                  <div
                    className={`gov-tab-pane ${
                      activeTab === "tab-advisory" ? "block" : "hidden"
                    } bg-surface-container-lowest rounded-xl p-space-xl shadow-md`}
                    id="tab-advisory"
                  >
                    <div className="flex flex-col gap-space-md">
                      <span className="font-label-sm text-label-sm text-gold-deep uppercase">
                        الخبرة العالمية وشبكة العواصم
                      </span>
                      <h3 className="font-headline-md text-headline-md text-primary">
                        اللجنة الاستشارية الدولية
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        هيئة استشارية مستقلة تضم ألمع فقهاء التحكيم التجاري
                        الدولي في المراكز القضائية العالمية الأربعة (باريس، لندن،
                        جنيف، والرياض) لضمان اتساق لوائح المركز مع أحدث
                        التطورات القضائية الدولية.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mt-space-sm">
                        <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col items-center text-center">
                          <div className="w-10 h-10 rounded-full bg-primary text-gold-light flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined text-base">
                              location_city
                            </span>
                          </div>
                          <span className="font-title-md text-title-md text-primary">
                            وفد باريس
                          </span>
                          <span className="font-label-sm text-label-sm text-gold-deep mb-2">
                            غرفة التجارة الدولية السابقة
                          </span>
                          <p className="font-legal-code text-legal-code text-on-surface-variant">
                            تحديث قواعد التحكيم التجاري وقوانين الاستثمار الأجنبي
                            المباشر.
                          </p>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col items-center text-center">
                          <div className="w-10 h-10 rounded-full bg-primary text-gold-light flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined text-base">
                              gavel
                            </span>
                          </div>
                          <span className="font-title-md text-title-md text-primary">
                            وفد لندن
                          </span>
                          <span className="font-label-sm text-label-sm text-gold-deep mb-2">
                            محكمة لندن للتحكيم الدولي
                          </span>
                          <p className="font-legal-code text-legal-code text-on-surface-variant">
                            صياغة المعايير المشتركة للعقود المالية وتمويل التقاضي
                            (Third-party funding).
                          </p>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col items-center text-center">
                          <div className="w-10 h-10 rounded-full bg-primary text-gold-light flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined text-base">
                              domain
                            </span>
                          </div>
                          <span className="font-title-md text-title-md text-primary">
                            وفد جنيف
                          </span>
                          <span className="font-label-sm text-label-sm text-gold-deep mb-2">
                            المنظمة العالمية للملكية الفكرية
                          </span>
                          <p className="font-legal-code text-legal-code text-on-surface-variant">
                            تسوية نزاعات التكنولوجيا المتقدمة وبراءات الاختراع
                            الرقمية.
                          </p>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col items-center text-center">
                          <div className="w-10 h-10 rounded-full bg-primary text-gold-light flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined text-base">
                              flag
                            </span>
                          </div>
                          <span className="font-title-md text-title-md text-primary">
                            وفد الرياض
                          </span>
                          <span className="font-label-sm text-label-sm text-gold-deep mb-2">
                            مجلس القضاء التجاري الخليجي
                          </span>
                          <p className="font-legal-code text-legal-code text-on-surface-variant">
                            التوافق مع أحكام الشريعة الإسلامية والأنظمة التجارية
                            المحدثة بالمملكة.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TAB 6: Technical Decisions & Award Scrutiny Council */}
                  <div
                    className={`gov-tab-pane ${
                      activeTab === "tab-technical" ? "block" : "hidden"
                    } bg-surface-container-lowest rounded-xl p-space-xl shadow-md`}
                    id="tab-technical"
                  >
                    <div className="flex flex-col gap-space-md">
                      <span className="font-label-sm text-label-sm text-gold-deep uppercase">
                        الجودة والرقابة الشكلية الإلزامية
                      </span>
                      <h3 className="font-headline-md text-headline-md text-primary">
                        مجلس القرارات الفنية وتدقيق مسودات الأحكام
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        ميزة مؤسسية حصرية ينفرد بها المركز، حيث تخضع جميع مسودات
                        الأحكام الصادرة عن هيئات التحكيم لمراجعة فنية وشكلية
                        دقيقة قبل التوقيع النهائي، بهدف تلافي أي عيوب إجرائية قد
                        تعرض الحكم لدعوى البطلان أمام محاكم الاستئناف.
                      </p>
                      <div className="bg-surface-parchment p-space-lg rounded-xl flex flex-col gap-space-md">
                        <div className="flex items-center gap-space-sm text-primary">
                          <span className="material-symbols-outlined text-2xl text-gold-deep">
                            verified_user
                          </span>
                          <h4 className="font-title-md text-title-md">
                            مراحل تدقيق مسودة الحكم (Award Scrutiny Workflow)
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                          <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                            <span className="font-legal-code text-legal-code text-gold-deep font-bold block mb-1">
                              المرحلة 01
                            </span>
                            <span className="font-title-md text-title-md text-primary block">
                              فحص الاختصاص والاتفاق
                            </span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                              التحقق الدقيق من مطابقة أطراف الحكم والطلبات لشرط
                              التحكيم المبرم.
                            </p>
                          </div>
                          <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                            <span className="font-legal-code text-legal-code text-gold-deep font-bold block mb-1">
                              المرحلة 02
                            </span>
                            <span className="font-title-md text-title-md text-primary block">
                              مراجعة الشكل والسببية
                            </span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                              التأكد من اكتمال تسبيب الحكم الحيثيات والبيانات
                              الإلزامية لنظام التحكيم.
                            </p>
                          </div>
                          <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                            <span className="font-legal-code text-legal-code text-gold-deep font-bold block mb-1">
                              المرحلة 03
                            </span>
                            <span className="font-title-md text-title-md text-primary block">
                              ختم الاعتماد والتوثيق
                            </span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                              إصدار الشهادة التنفيذية وبصمة التشفير الرقمية غير
                              القابلة للتزوير.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* International Compliance & Treaty Matrix */}
          <section className="max-w-[1360px] mx-auto px-gutter py-space-2xl w-full">
            <div className="text-center max-w-2xl mx-auto mb-space-xl">
              <span className="font-label-sm text-label-sm text-gold-deep tracking-widest uppercase block mb-1">
                المظلة القانونية والشرعية الدولية
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                ركائز الامتثال والاعتماد الدولي
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                نظام تحكيمي متكامل ومحكم لا يقبل الاجتهاد الإجرائي، ومبني على
                المعاهدات الموثقة لدى الأمم المتحدة.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {/* Treaty 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="material-symbols-outlined text-3xl text-gold-deep">
                      public
                    </span>
                    <span className="font-legal-code text-legal-code bg-surface-container px-2 py-1 rounded text-primary">
                      NYC-1958
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    اتفاقية نيويورك 1958
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    الاعتراف بقرارات التحكيم الأجنبية وإنفاذها دولياً. تكتسب
                    كافة الأحكام الصادرة عن المركز حجية الأمر المقضي به وتنفذ
                    دون مراجعة في أكثر من 170 دولة.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-sm bg-surface-ivory p-space-sm rounded-lg flex items-center justify-between text-body-sm">
                  <span className="text-on-surface-variant">الجهة الراعية</span>
                  <span className="text-primary font-bold">
                    الأمم المتحدة (UN)
                  </span>
                </div>
              </div>
              {/* Treaty 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="material-symbols-outlined text-3xl text-gold-deep">
                      menu_book
                    </span>
                    <span className="font-legal-code text-legal-code bg-surface-container px-2 py-1 rounded text-primary">
                      UNCITRAL
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    قواعد الأونسيترال للتحكيم
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    تمت صياغة لائحة التحكيم المؤسسي الخاصة بالمركز لتتوافق كلمة
                    بكلمة مع أحدث إصدارات قواعد لجنة الأمم المتحدة للقانون
                    التجاري الدولي لعام 2021.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-sm bg-surface-ivory p-space-sm rounded-lg flex items-center justify-between text-body-sm">
                  <span className="text-on-surface-variant">نوع التوافق</span>
                  <span className="text-status-success font-bold">
                    تطابق مؤسسي كامل 100%
                  </span>
                </div>
              </div>
              {/* Treaty 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="material-symbols-outlined text-3xl text-gold-deep">
                      policy
                    </span>
                    <span className="font-legal-code text-legal-code bg-surface-container px-2 py-1 rounded text-primary">
                      IBA GUIDELINES
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    معايير نقابة المحامين الدولية (IBA)
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    التزام حاسم بالقوائم الملونة (الحمراء، البرتقالية، الخضراء)
                    لتضارب المصالح للمحكمين وممثلي الأطراف لمنع أي شبهة انحياز
                    أو بطلان للأحكام.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-sm bg-surface-ivory p-space-sm rounded-lg flex items-center justify-between text-body-sm">
                  <span className="text-on-surface-variant">معايير الحياد</span>
                  <span className="text-primary font-bold">
                    الإفصاح الذاتي الإلزامي
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Executive Institutional CTA Section */}
          <section className="w-full bg-emerald-deepest text-surface-ivory py-space-2xl relative overflow-hidden">
            <div className="relative max-w-[1360px] mx-auto px-gutter flex flex-col lg:flex-row items-center justify-between gap-space-xl">
              <div className="flex flex-col gap-space-sm max-w-2xl text-right">
                <span className="font-label-sm text-label-sm text-gold-light uppercase tracking-wider">
                  الخطوة الإجرائية التالية
                </span>
                <h2 className="font-headline-lg text-headline-lg text-surface-ivory">
                  ابدأ إجراءات تسوية نزاعك التجاري بأعلى درجات الكفاءة والسرية
                </h2>
                <p className="font-body-md text-body-md text-surface-container-high leading-relaxed">
                  يمكنك قيد طلب تحكيم فوري عبر البوابة الإلكترونية، أو استعراض
                  جدول المحكمين المعتمدين، أو تضمين شرط التحكيم النموذجي في
                  عقودك التجارية القادمة.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0 w-full lg:w-auto">
                <Link
                  className="w-full sm:w-auto px-space-xl py-space-md bg-gold-light hover:bg-gold-deep text-primary font-bold rounded-lg shadow-lg transition-all flex items-center justify-center gap-space-xs font-title-md text-title-md"
                  href="/new-case"
                >
                  <span className="material-symbols-outlined text-xl">
                    gavel
                  </span>
                  <span>قيد طلب تحكيم إلكتروني</span>
                </Link>
                <Link
                  className="w-full sm:w-auto px-space-lg py-space-md bg-primary-container hover:bg-primary text-surface-ivory rounded-lg transition-all flex items-center justify-center gap-space-xs font-title-md text-title-md shadow-sm"
                  href="/arbitrators"
                >
                  <span className="material-symbols-outlined text-gold-light text-xl">
                    folder_shared
                  </span>
                  <span>دليل المحكمين المعتمدين</span>
                </Link>
                <Link
                  className="w-full sm:w-auto px-space-md py-space-md text-surface-container-high hover:text-gold-light transition-colors flex items-center justify-center gap-1 font-label-lg text-label-lg"
                  href="/knowledge-center"
                >
                  <span className="material-symbols-outlined text-sm">
                    download
                  </span>
                  <span>تحميل اللائحة (PDF)</span>
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

