"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ServicesPage() {
  const router = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [copyBtnText, setCopyBtnText] = useState("نسخ نص الشرط التعاقدي");

  const modelClauseText =
    "«كل نزاع أو خلاف أو مطالبة تنشأ عن هذا العقد أو ترتبط به، أو بشأن الإخلال به أو إنهائه أو بطلانه، يُسوّى نهائياً عن طريق التحكيم وفقاً للائحة تحكيم المكتب الدولي للتحكيم وتسوية المنازعات (IOADR) المعمول بها وقت رفع الدعوى. يكون مقر التحكيم مدينة الرياض، وتتكون هيئة التحكيم من [محكم فرد / ثلاثة محكمين]، وتكون اللغة المستخدمة في إجراءات التحكيم هي [اللغة العربية / اللغة الإنجليزية]، ويكون القانون الواجب التطبيق هو [تحديد القانون].»";

  const handleCopyClause = () => {
    navigator.clipboard.writeText(modelClauseText).then(() => {
      setCopyBtnText("تم نسخ الشرط بنجاح!");
      setTimeout(() => {
        setCopyBtnText("نسخ نص الشرط التعاقدي");
      }, 3000);
    });
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-surface-ivory">
        <div className="flex flex-col w-full">
          {/* Breadcrumbs & Status Bar */}
          <section className="w-full bg-surface-container-low py-space-sm px-gutter">
            <div className="max-w-[1360px] mx-auto flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <nav
                aria-label="مسار التنقل"
                className="flex items-center gap-space-xs"
              >
                <Link className="hover:text-primary transition-colors" href="/">
                  الرئيسية
                </Link>
                <span className="material-symbols-outlined text-xs">
                  chevron_left
                </span>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/services"
                >
                  خدماتنا
                </Link>
                <span className="material-symbols-outlined text-xs">
                  chevron_left
                </span>
                <span className="text-primary font-bold">
                  خدمات التحكيم الدولي والمؤسسي
                </span>
              </nav>
              <div className="hidden md:flex items-center gap-space-sm bg-surface-ivory px-space-sm py-1 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
                <span className="text-primary font-legal-code text-legal-code">
                  نظام التحكيم المؤسسي نشط | لائحة 2025 المتوافقة مع أونسيترال
                </span>
              </div>
            </div>
          </section>

          {/* Banner & Prestige Positioning */}
          <section className="w-full bg-surface-ivory py-space-xl px-gutter relative overflow-hidden">
            <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              <div className="lg:col-span-7 flex flex-col gap-space-md text-right">
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 bg-surface-container rounded-full w-max text-gold-deep">
                  <span className="material-symbols-outlined text-base">
                    balance
                  </span>
                  <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    سلطة قضائية تحكيمية دولية مستقلة
                  </span>
                </div>
                <h1 className="font-display-hero text-display-hero text-primary tracking-tight">
                  منظومة التحكيم التجاري <br />
                  <span className="text-gold-deep font-display-hero italic">
                    وحماية الاستثمارات العابرة للحدود
                  </span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  يوفر المكتب الدولي (IOADR) بيئة تحكيمية سيادية متكاملة لفض
                  النزاعات التجارية، وعقود التشييد والإنشاءات (FIDIC)، والمشاريع
                  العملاقة، وحماية تدفقات رؤوس الأموال وفق أحدث قواعد التحكيم
                  الدولية، مع أحكام نهائية ملزمة تتمتع بالنفاذ في 172 دولة بموجب
                  اتفاقية نيويورك 1958.
                </p>
                {/* Quick Key Metrics Bar */}
                <div className="grid grid-cols-3 gap-space-md pt-space-sm max-w-xl">
                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
                    <span className="block font-headline-md text-headline-md text-primary font-bold">
                      172
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      دولة ذات نفاذ قضائي ملزم
                    </span>
                  </div>
                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
                    <span className="block font-headline-md text-headline-md text-gold-deep font-bold">
                      48-72
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      ساعة لإجراءات الطوارئ
                    </span>
                  </div>
                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
                    <span className="block font-headline-md text-headline-md text-primary font-bold">
                      100%
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      سرية مشفرة بمستوى سيادي
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                  <a
                    className="inline-flex items-center gap-space-xs px-space-xl py-space-sm bg-primary-container text-surface-ivory hover:bg-emerald-deepest rounded-lg font-label-lg text-label-lg transition-all shadow-md"
                    href="#quick-toolkit"
                  >
                    <span className="material-symbols-outlined text-gold-light text-xl">
                      gavel
                    </span>
                    <span>قيد طلب تحكيم إلكتروني</span>
                  </a>
                  <a
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-surface-container text-primary hover:bg-surface-variant rounded-lg font-label-lg text-label-lg transition-colors"
                    href="#arbitration-routes"
                  >
                    <span>استعراض المسارات واللوائح</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_downward
                    </span>
                  </a>
                </div>
              </div>
              {/* Hero Visual Dossier Frame */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl bg-surface-container-lowest p-space-md shadow-xl overflow-hidden">
                  <img
                    alt="قاعة التحكيم الدولي"
                    className="w-full h-[430px] object-cover rounded-xl"
                    data-alt="A dignified international arbitration hearing chamber with polished walnut conference table, sovereign emblem, leather judicial chairs, warm low-key brass lighting, dark emerald accents, and formal legal documents bound in gold seals."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzA-d1rvqAhpZvMorB5TTMplXltiQJAtcHXbrDoBD10wdmh1Bxwad3p17Y0I2ikiHFMGMDcS3N_3PMkpcPoL9XG_Ml7X5WicPHgXIEgXGZY4FXKMd1Uj6Xz1k3MbK7L1pwe1Iz2CrVyDaNWIKIkavRjQIU4PKZygL23LC5B89lD-FzFkIAbdX5MBKCJmdoXmbgAm8ahtLauzKH_ImkJY80FaPjegdIrmnoDGGV0PKa"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-space-md bg-primary/95 backdrop-blur-md rounded-xl text-surface-ivory shadow-lg flex items-center justify-between">
                    <div className="flex flex-col text-right">
                      <span className="font-label-sm text-label-sm text-gold-light font-bold">
                        معيار الجدارة المؤسسية
                      </span>
                      <span className="font-title-md text-title-md">
                        نطاق ولاية تشمل 5 قطاعات استراتيجية
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gold-deep flex items-center justify-center text-surface-ivory shadow-md">
                      <span className="material-symbols-outlined text-xl">
                        verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Sectors Banner Cards */}
          <section className="w-full bg-surface-container-low py-space-xl px-gutter">
            <div className="max-w-[1360px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm text-right">
                <div>
                  <span className="font-label-sm text-label-sm text-gold-deep uppercase font-bold tracking-wider">
                    نطاق التخصص المؤسسي
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary">
                    قطاعات النزاعات الكبرى المشمولة
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                  محكمون متخصصون ذوو كفاءات قضائية وتقنية رفيعة مكرسون لفض
                  النزاعات الاستثمارية والصناعية المعقدة.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      apartment
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    المشاريع العملاقة
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    نزاعات مشاريع البنية التحتية، عقود الامتياز (BOT)، وتطوير
                    المدن الذكية.
                  </p>
                </div>
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-gold-deep">
                    <span className="material-symbols-outlined text-2xl">
                      engineering
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    عقود فيديك (FIDIC)
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    مطالبات الإنشاءات الهندسية، أوامر التغيير، مجالس فض الخلافات
                    (DAB/DAAB).
                  </p>
                </div>
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      account_balance
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    الاستثمار الأجنبي
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    اتفاقيات حماية الاستثمار الثنائية (BITs)، الشراكات عبر
                    الحدود، وتخارج المستثمرين.
                  </p>
                </div>
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-gold-deep">
                    <span className="material-symbols-outlined text-2xl">
                      payments
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    التمويل والمصرفية
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    نزاعات الصكوك المالية، قروض التجمع البنكي (Syndicated
                    Loans)، والتأمين وإعادة التأمين.
                  </p>
                </div>
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      memory
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    التقنية والسيبرانية
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    عقود الحوسبة، نزاعات الذكاء الاصطناعي، تراخيص البرمجيات،
                    وحقوق الملكية الفكرية.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Arbitration Tracks (مسارات وأنواع التحكيم) */}
          <section
            className="w-full bg-surface-ivory py-space-2xl px-gutter"
            id="arbitration-routes"
          >
            <div className="max-w-[1360px] mx-auto flex flex-col gap-space-xl">
              <div className="text-right max-w-2xl">
                <span className="font-label-sm text-label-sm text-gold-deep uppercase font-bold tracking-wider">
                  المسارات الإجرائية المعتمدة
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary pt-space-xs">
                  أنواع ومسارات التحكيم المؤسسي لدى IOADR
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">
                  مسارات مرنة ومصممة بدقة لتتناسب مع القيمة المالية، الطبيعة
                  الاستعجالية، وخصوصية المعاملات التجارية.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
                {/* Track 1: Standard Arbitration */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-primary"></div>
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-space-md py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">
                        المسار الشامل الأصيل
                      </span>
                      <span className="font-legal-code text-legal-code text-gold-deep font-bold">
                        ARB-TRK-STD
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs">
                      1. التحكيم التجاري المعتاد
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                      المسار القياسي للنزاعات الكبرى بموجب قواعد الأونسيترال
                      (UNCITRAL) ولائحة تحكيم المركز المحدثة 2025. يتضمن هيئات
                      تحكيم ثلاثية أو فردية، جولات تبادل مذكرات ومستندات كاملة،
                      وجلسات مرافعة شفهية وسماع شهود وخبراء.
                    </p>
                    <div className="bg-surface-container-low p-space-md rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-body-sm font-body-sm">
                        <span className="text-on-surface-variant">
                          المدى الزمني المتوسط:
                        </span>
                        <span className="text-primary font-bold font-legal-code">
                          9 إلى 12 شهراً
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm">
                        <span className="text-on-surface-variant">
                          تشكيل الهيئة:
                        </span>
                        <span className="text-primary font-bold">
                          محكم فرد أو هيئة ثلاثية
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm">
                        <span className="text-on-surface-variant">
                          نصاب المطالبة:
                        </span>
                        <span className="text-primary font-bold">
                          المطالبات الاستثمارية والتجارية المفتوحة
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <Link
                      className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary font-bold hover:text-gold-deep transition-colors"
                      href="/knowledge-center"
                    >
                      <span>تفاصيل القواعد التنظيمية للمسار</span>
                      <span className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </Link>
                    <span className="material-symbols-outlined text-gold-deep text-2xl">
                      corporate_fare
                    </span>
                  </div>
                </div>
                {/* Track 2: Expedited Procedure */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-gold-deep"></div>
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-space-md py-1 bg-surface-container text-gold-deep rounded-full font-label-sm text-label-sm font-semibold">
                        إجراءات موجزة وسريعة
                      </span>
                      <span className="font-legal-code text-legal-code text-gold-deep font-bold">
                        ARB-TRK-FAST
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs">
                      2. التحكيم المعجل (Expedited Procedure)
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                      مسار مُصمم للمطالبات ذات القيمة المالية المحددة أو عندما
                      يتفق الأطراف على سرعة البت. يتولاه محكم فرد، مع تقليص
                      المذكرات القانونية والاكتفاء بالوثائق المكتوبة ما لم تقرر
                      الهيئة غير ذلك لحسم النزاع دون إبطاء.
                    </p>
                    <div className="bg-surface-container-low p-space-md rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-body-sm font-body-sm">
                        <span className="text-on-surface-variant">
                          المدى الزمني الإلزامي:
                        </span>
                        <span className="text-gold-deep font-bold font-legal-code">
                          إصدار الحكم خلال 6 أشهر كحد أقصى
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm">
                        <span className="text-on-surface-variant">
                          تشكيل الهيئة:
                        </span>
                        <span className="text-primary font-bold">
                          محكم فرد معتمد
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm">
                        <span className="text-on-surface-variant">
                          نصاب التطبيق التلقائي:
                        </span>
                        <span className="text-primary font-bold">
                          المنازعات دون 10 ملايين ريال (أو باتفاق الأطراف)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <Link
                      className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary font-bold hover:text-gold-deep transition-colors"
                      href="/calculator"
                    >
                      <span>جدول الرسوم المخفض للتحكيم المعجل</span>
                      <span className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </Link>
                    <span className="material-symbols-outlined text-gold-deep text-2xl">
                      speed
                    </span>
                  </div>
                </div>
                {/* Track 3: Emergency Arbitrator */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-status-error"></div>
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-space-md py-1 bg-surface-container text-status-error rounded-full font-label-sm text-label-sm font-semibold">
                        حماية فورية وتدابير تحفظية
                      </span>
                      <span className="font-legal-code text-legal-code text-gold-deep font-bold">
                        ARB-TRK-EMRG
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs">
                      3. تحكيم الطوارئ والتدابير الوقتية
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                      إجراء استعجالي يوفر الحماية القضائية قبل تشكيل هيئة
                      التحكيم الموضوعية، لمنع إتلاف الأصول، أو تسييل خطابات
                      الضمان المصرفية تعسفياً، أو الحجز التحفظي على الشحنات
                      المنقولة عبر الحدود.
                    </p>
                    <div className="bg-surface-container-low p-space-md rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-body-sm font-body-sm">
                        <span className="text-on-surface-variant">
                          تعيين محكم الطوارئ:
                        </span>
                        <span className="text-status-error font-bold font-legal-code">
                          خلال 24 ساعة من القيد
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm">
                        <span className="text-on-surface-variant">
                          صدور القرار التحفظي:
                        </span>
                        <span className="text-status-error font-bold font-legal-code">
                          خلال 48 - 72 ساعة
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm">
                        <span className="text-on-surface-variant">
                          الأثر القضائي:
                        </span>
                        <span className="text-primary font-bold">
                          أمر وقتي ملزم فوراً للأطراف
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <Link
                      className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary font-bold hover:text-gold-deep transition-colors"
                      href="/new-case"
                    >
                      <span>دليل طلب التدابير الوقتية العاجلة</span>
                      <span className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </Link>
                    <span className="material-symbols-outlined text-status-error text-2xl">
                      alarm_on
                    </span>
                  </div>
                </div>
                {/* Track 4: ODR Digital Cloud */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-status-success"></div>
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="px-space-md py-1 bg-surface-container text-status-success rounded-full font-label-sm text-label-sm font-semibold">
                        بوابة إلكترونية سحابية مشفرة
                      </span>
                      <span className="font-legal-code text-legal-code text-gold-deep font-bold">
                        ARB-TRK-ODR
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-space-xs">
                      4. التقاضي والتحكيم الإلكتروني السحابي (ODR)
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                      إدارة النزاع بالكامل عبر منصة إلكترونية رقمية آمنة ذات
                      اعتماد أمني رفيع: إيداع إلكتروني للدعاوى، تبادل الحوافظ
                      الرقمية والمستندات، جلسات استماع مرئية مشفرة متعددة
                      النطاقات، والتوقيع الرقمي للأحكام.
                    </p>
                    <div className="bg-surface-container-low p-space-md rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-body-sm font-body-sm">
                        <span className="text-on-surface-variant">
                          البيئة التقنية:
                        </span>
                        <span className="text-status-success font-bold">
                          تشفير سيادي بدرجة AES-256
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm">
                        <span className="text-on-surface-variant">
                          الحضور والمرافعة:
                        </span>
                        <span className="text-primary font-bold">
                          جلسات افتراضية معتمدة دولياً
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm">
                        <span className="text-on-surface-variant">
                          التكلفة والوقت:
                        </span>
                        <span className="text-primary font-bold">
                          تقليل المصاريف اللوجستية بنسبة تصل إلى 45%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <Link
                      className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary font-bold hover:text-gold-deep transition-colors"
                      href="/new-case"
                    >
                      <span>دخول بوابة التحكيم الإلكتروني</span>
                      <span className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </Link>
                    <span className="material-symbols-outlined text-status-success text-2xl">
                      cloud_sync
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Comparison: Institutional Arbitration vs Traditional Litigation */}
          <section className="w-full bg-surface-container-low py-space-2xl px-gutter">
            <div className="max-w-[1360px] mx-auto flex flex-col gap-space-xl">
              <div className="text-center max-w-3xl mx-auto flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm text-gold-deep uppercase font-bold tracking-wider">
                  مقارنة المعايير الجوهرية
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  لماذا تختار التحكيم المؤسسي لدى IOADR بدلاً من القضاء
                  التقليدي؟
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  تحليل مقارن يوضح المزايا الحاسمة لحماية صفقاتكم ومشاريعكم
                  التجارية عبر الحدود.
                </p>
              </div>
              {/* Comparison Matrix Table */}
              <div className="bg-surface-container-lowest rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-12 bg-primary text-surface-ivory p-space-md text-right font-title-md text-title-md">
                  <div className="col-span-4 pr-space-md">
                    المعيار القضائي والتجاري
                  </div>
                  <div className="col-span-4 pr-space-md text-gold-light flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">
                      verified
                    </span>
                    <span>التحكيم المؤسسي (IOADR)</span>
                  </div>
                  <div className="col-span-4 pr-space-md text-surface-container-high">
                    المحاكم والقضاء التقليدي
                  </div>
                </div>
                <div className="divide-y divide-surface-container">
                  {/* Row 1: Speed */}
                  <div className="grid grid-cols-12 p-space-lg items-center text-right hover:bg-surface-container-low/50 transition-colors">
                    <div className="col-span-4 flex items-center gap-space-sm pr-space-md">
                      <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-xl">
                          schedule
                        </span>
                      </span>
                      <div>
                        <span className="font-title-md text-title-md text-primary block">
                          السرعة والحسم الزمني
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          الجدول الزمني للوصول إلى حكم بات
                        </span>
                      </div>
                    </div>
                    <div className="col-span-4 pr-space-md">
                      <span className="font-title-md text-title-md text-primary font-bold block">
                        محدد وحاسم (6 - 12 شهراً)
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        أحكام نهائية باتة تنهي الخصومة دون تعدد درجات التقاضي
                        المطولة.
                      </span>
                    </div>
                    <div className="col-span-4 pr-space-md">
                      <span className="font-title-md text-title-md text-outline block">
                        مفتوح (3 إلى 6 سنوات غالباً)
                      </span>
                      <span className="font-body-sm text-body-sm text-outline">
                        استئناف وتنقيب ونقض وإعادة مرافعة، مما يعطل سيولة
                        المشاريع.
                      </span>
                    </div>
                  </div>
                  {/* Row 2: Specialization */}
                  <div className="grid grid-cols-12 p-space-lg items-center text-right hover:bg-surface-container-low/50 transition-colors">
                    <div className="col-span-4 flex items-center gap-space-sm pr-space-md">
                      <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-xl">
                          psychology
                        </span>
                      </span>
                      <div>
                        <span className="font-title-md text-title-md text-primary block">
                          التخصص القضائي والفني
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          خبرة هيئة الحكم بطبيعة النزاع الدقيق
                        </span>
                      </div>
                    </div>
                    <div className="col-span-4 pr-space-md">
                      <span className="font-title-md text-title-md text-primary font-bold block">
                        حرية اختيار محكمين متخصصين
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        اختيار خبراء وقضاة متمرسين في عقود FIDIC، المصرفية،
                        والذكاء الاصطناعي.
                      </span>
                    </div>
                    <div className="col-span-4 pr-space-md">
                      <span className="font-title-md text-title-md text-outline block">
                        قضاة عامون وإحالة للخبراء
                      </span>
                      <span className="font-body-sm text-body-sm text-outline">
                        توزيع عشوائي للدوائر القضائية مع إحالات طويلة ومكلفة
                        للخبراء المنتدبين.
                      </span>
                    </div>
                  </div>
                  {/* Row 3: Confidentiality */}
                  <div className="grid grid-cols-12 p-space-lg items-center text-right hover:bg-surface-container-low/50 transition-colors">
                    <div className="col-span-4 flex items-center gap-space-sm pr-space-md">
                      <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-xl">
                          lock
                        </span>
                      </span>
                      <div>
                        <span className="font-title-md text-title-md text-primary block">
                          السرية المصونة وحماية السمعة
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          حفظ الأسرار التجارية والبيانات المالية
                        </span>
                      </div>
                    </div>
                    <div className="col-span-4 pr-space-md">
                      <span className="font-title-md text-title-md text-primary font-bold block">
                        سرية مطلقة وملزمة قانوناً
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        جلسات مغلقة، ملفات مشفرة، والتزام صارم بعدم الإفصاح عن
                        وقائع النزاع.
                      </span>
                    </div>
                    <div className="col-span-4 pr-space-md">
                      <span className="font-title-md text-title-md text-outline block">
                        علانية الجلسات والأحكام
                      </span>
                      <span className="font-body-sm text-body-sm text-outline">
                        جلسات مفتوحة وقيد سجلات قضائية معلنة قد تضر بسمعة
                        الشركات التجارية وأسهمها.
                      </span>
                    </div>
                  </div>
                  {/* Row 4: Global Enforcement */}
                  <div className="grid grid-cols-12 p-space-lg items-center text-right hover:bg-surface-container-low/50 transition-colors">
                    <div className="col-span-4 flex items-center gap-space-sm pr-space-md">
                      <span className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-xl">
                          public
                        </span>
                      </span>
                      <div>
                        <span className="font-title-md text-title-md text-primary block">
                          نفاذ الأحكام دولياً
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          التنفيذ عبر الحدود ومصادرة الأصول
                        </span>
                      </div>
                    </div>
                    <div className="col-span-4 pr-space-md">
                      <span className="font-title-md text-title-md text-gold-deep font-bold block">
                        ملزم في 172 دولة حول العالم
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        تنفيذ فوري بموجب اتفاقية نيويورك 1958 دون إعادة فحص
                        موضوع النزاع.
                      </span>
                    </div>
                    <div className="col-span-4 pr-space-md">
                      <span className="font-title-md text-title-md text-outline block">
                        معقد ومشروط بالمعاملة بالمثل
                      </span>
                      <span className="font-body-sm text-body-sm text-outline">
                        صعوبة بالغة في تنفيذ الأحكام الوطنية في الخارج ما لم
                        توجد اتفاقيات ثنائية نادرة.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5-Stage Arbitration Roadmap (خطوات وإجراءات التحكيم) */}
          <section className="w-full bg-surface-ivory py-space-2xl px-gutter">
            <div className="max-w-[1360px] mx-auto flex flex-col gap-space-xl">
              <div className="text-right max-w-2xl">
                <span className="font-label-sm text-label-sm text-gold-deep uppercase font-bold tracking-wider">
                  خارطة الطريق المؤسسية
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary pt-space-xs">
                  مراحل الخصومة التحكيمية من القيد حتى النفاذ
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">
                  إجراءات شفافة ومرنة ومحكومة بمدد نظامية صارمة تكفل النزاهة
                  وسرعة الفصل.
                </p>
              </div>
              {/* 5 Stages Grid Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
                {/* Stage 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-8 h-8 rounded-full bg-primary text-surface-ivory flex items-center justify-center font-bold text-sm">
                      1
                    </span>
                    <span className="font-legal-code text-legal-code text-gold-deep font-bold">
                      1 - 14 يوماً
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                      قيد طلب التحكيم
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      إيداع الطلب رسمياً عبر البوابة الرقمية، وسداد الرسوم
                      الإدارية الأولية، وإخطار الطرف المدعى عليه بصورة رسمية
                      موثقة.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-xs rounded-lg text-center">
                    <span className="font-label-sm text-label-sm text-primary font-semibold">
                      مراجعة أمانة المركز وقيد الملف
                    </span>
                  </div>
                </div>
                {/* Stage 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-8 h-8 rounded-full bg-primary text-surface-ivory flex items-center justify-center font-bold text-sm">
                      2
                    </span>
                    <span className="font-legal-code text-legal-code text-gold-deep font-bold">
                      15 - 30 يوماً
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                      تشكيل هيئة التحكيم
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      تسمية المحكمين، وتوقيع إقرارات الاستقلال والحيدة، واعتماد
                      أمانة المركز لملف تشكيل الهيئة وإحالة القضية إليها.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-xs rounded-lg text-center">
                    <span className="font-label-sm text-label-sm text-primary font-semibold">
                      إعلان ولاية الهيئة القضائية
                    </span>
                  </div>
                </div>
                {/* Stage 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-8 h-8 rounded-full bg-primary text-surface-ivory flex items-center justify-center font-bold text-sm">
                      3
                    </span>
                    <span className="font-legal-code text-legal-code text-gold-deep font-bold">
                      30 - 45 يوماً
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                      إدارة القضية والجدول
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      عقد مؤتمر إدارة الدعوى التمهيدي (CMC)، وتحديد الجدول
                      الزمني لتبادل المذكرات، وتحديد نقاط النزاع الجوهرية.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-xs rounded-lg text-center">
                    <span className="font-label-sm text-label-sm text-primary font-semibold">
                      صدور الأمر الإجرائي رقم (1)
                    </span>
                  </div>
                </div>
                {/* Stage 4 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-8 h-8 rounded-full bg-primary text-surface-ivory flex items-center justify-center font-bold text-sm">
                      4
                    </span>
                    <span className="font-legal-code text-legal-code text-gold-deep font-bold">
                      الشهر 2 إلى 8
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                      المرافعات والشهود
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      تبادل لوائح الدعوى والدفاع، استجواب الخبراء الفنيين
                      والشهود، وانعقاد جلسات المرافعة الختامية (حضورياً أو
                      افتراضياً).
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-xs rounded-lg text-center">
                    <span className="font-label-sm text-label-sm text-primary font-semibold">
                      قفل باب المرافعة الرسمية
                    </span>
                  </div>
                </div>
                {/* Stage 5 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-8 h-8 rounded-full bg-gold-deep text-surface-ivory flex items-center justify-center font-bold text-sm">
                      5
                    </span>
                    <span className="font-legal-code text-legal-code text-gold-deep font-bold">
                      خلال 60 يوماً
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                      صدور الحكم النهائي والتنفيذ
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      مداولة الهيئة، التدقيق الفني الشكلي للحكم من مجلس قرارات
                      المركز، إصدار الحكم النهائي وتسليم النسخ التنفيذية
                      المعتمدة.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-xs rounded-lg text-center">
                    <span className="font-label-sm text-label-sm text-gold-deep font-semibold">
                      نفاذ إلزامي سنداً تنفيذياً
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Toolkit for Beneficiaries (مربع أدوات المستفيد السريعة) */}
          <section
            className="w-full bg-emerald-deepest text-surface-ivory py-space-2xl px-gutter relative"
            id="quick-toolkit"
          >
            <div className="max-w-[1360px] mx-auto flex flex-col gap-space-xl">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md text-right">
                <div>
                  <span className="font-label-sm text-label-sm text-gold-light uppercase font-bold tracking-wider">
                    حقيبة المستشار والمتقاضي
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-surface-ivory pt-space-xs">
                    أدوات التحكيم السريعة
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-surface-container-high max-w-lg">
                  خدمات تفاعلية رقمية مصممة للشركات والمكاتب القانونية لحساب
                  المصاريف فورياً وإدارة الإجراءات دون تأخير.
                </p>
              </div>
              {/* 4 Action Toolkit Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
                {/* Tool 1: Cost Calculator */}
                <div className="bg-primary-container p-space-xl rounded-2xl flex flex-col justify-between gap-space-md shadow-lg hover:-translate-y-1 transition-transform">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-surface-ivory/10 flex items-center justify-center text-gold-light mb-space-md">
                      <span className="material-symbols-outlined text-3xl">
                        calculate
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-surface-ivory mb-space-xs">
                      حاسبة الرسوم التقديرية
                    </h3>
                    <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                      احسب التكاليف الإدارية وأتعاب هيئة التحكيم التقديرية
                      فورياً وفقاً لقيمة المطالبة وعدد أعضاء الهيئة.
                    </p>
                  </div>
                  <button
                    onClick={() => router.push("/calculator")}
                    className="w-full py-space-sm px-space-md bg-gold-deep hover:bg-gold-light hover:text-primary text-surface-ivory rounded-lg font-label-lg text-label-lg transition-colors flex items-center justify-center gap-space-xs shadow-sm"
                    type="button"
                  >
                    <span>فتح حاسبة الأتعاب</span>
                    <span className="material-symbols-outlined text-base">
                      arrow_back
                    </span>
                  </button>
                </div>
                {/* Tool 2: Electronic Filing Portal */}
                <div className="bg-primary-container p-space-xl rounded-2xl flex flex-col justify-between gap-space-md shadow-lg hover:-translate-y-1 transition-transform">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-surface-ivory/10 flex items-center justify-center text-gold-light mb-space-md">
                      <span className="material-symbols-outlined text-3xl">
                        post_add
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-surface-ivory mb-space-xs">
                      بوابة قيد طلب تحكيم
                    </h3>
                    <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                      نموذج إيداع رقمي متكامل لرفع صحيفة الدعوى، إرفاق شرط
                      التحكيم، وإصدار رقم القضية المؤسسي فورياً.
                    </p>
                  </div>
                  <button
                    onClick={() => router.push("/new-case")}
                    className="w-full py-space-sm px-space-md bg-gold-deep hover:bg-gold-light hover:text-primary text-surface-ivory rounded-lg font-label-lg text-label-lg transition-colors flex items-center justify-center gap-space-xs shadow-sm"
                    type="button"
                  >
                    <span>بدء قيد الدعوى الآن</span>
                    <span className="material-symbols-outlined text-base">
                      arrow_back
                    </span>
                  </button>
                </div>
                {/* Tool 3: Model Arbitration Clause */}
                <div className="bg-primary-container p-space-xl rounded-2xl flex flex-col justify-between gap-space-md shadow-lg hover:-translate-y-1 transition-transform">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-surface-ivory/10 flex items-center justify-center text-gold-light mb-space-md">
                      <span className="material-symbols-outlined text-3xl">
                        download_for_offline
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-surface-ivory mb-space-xs">
                      شرط التحكيم النموذجي
                    </h3>
                    <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                      تحميل الصياغة النموذجية المعتمدة لشرط تحكيم IOADR باللغتين
                      العربية والإنجليزية لإدراجها في عقودكم التجارية.
                    </p>
                  </div>
                  <button
                    onClick={() => router.push("/knowledge-center")}
                    className="w-full py-space-sm px-space-md bg-surface-ivory/15 hover:bg-surface-ivory/25 text-surface-ivory rounded-lg font-label-lg text-label-lg transition-colors flex items-center justify-center gap-space-xs"
                    type="button"
                  >
                    <span>تحميل الصيغة (PDF/DOC)</span>
                    <span className="material-symbols-outlined text-base">
                      download
                    </span>
                  </button>
                </div>
                {/* Tool 4: Arbitrators Roster */}
                <div className="bg-primary-container p-space-xl rounded-2xl flex flex-col justify-between gap-space-md shadow-lg hover:-translate-y-1 transition-transform">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-surface-ivory/10 flex items-center justify-center text-gold-light mb-space-md">
                      <span className="material-symbols-outlined text-3xl">
                        badge
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-surface-ivory mb-space-xs">
                      جدول المحكمين المعتمدين
                    </h3>
                    <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                      استعراض قائمة المحكمين الدوليين، قضاة الاستئناف السابقين،
                      والخبراء الفنيين المصنفين حسب التخصص واللغات.
                    </p>
                  </div>
                  <button
                    onClick={() => router.push("/arbitrators")}
                    className="w-full py-space-sm px-space-md bg-surface-ivory/15 hover:bg-surface-ivory/25 text-surface-ivory rounded-lg font-label-lg text-label-lg transition-colors flex items-center justify-center gap-space-xs"
                    type="button"
                  >
                    <span>استعراض سجل المحكمين</span>
                    <span className="material-symbols-outlined text-base">
                      manage_search
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Model Clause Preview Box */}
          <section
            id="model-clauses"
            className="w-full bg-surface-ivory py-space-xl px-gutter"
          >
            <div className="max-w-[1360px] mx-auto bg-surface-parchment p-space-xl rounded-2xl shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-5 text-right flex flex-col gap-space-xs">
                  <div className="inline-flex items-center gap-1 text-gold-deep font-label-sm text-label-sm font-bold">
                    <span className="material-symbols-outlined text-base">
                      verified_user
                    </span>
                    <span>الصيغة التعاقدية القياسية الموصى بها</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    شرط التحكيم النموذجي لعقود 2025
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    يُوصى بإدراج هذا النص حرفياً في كافة العقود التجارية المحلية
                    والدولية لضمان اختصاص المركز وتفادي أي دفوع بعدم الاختصاص.
                  </p>
                  <div className="pt-space-sm">
                    <button
                      onClick={handleCopyClause}
                      className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-primary text-surface-ivory hover:bg-emerald-deepest rounded-lg font-label-lg text-label-lg transition-colors"
                      id="copy-clause-btn"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-base">
                        content_copy
                      </span>
                      <span id="copy-btn-text">{copyBtnText}</span>
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-inner text-right">
                  <p
                    className="font-body-md text-body-md text-on-surface leading-loose font-serif"
                    id="model-clause-text"
                  >
                    {modelClauseText}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section (قسم الأسئلة الشائعة بتصميم أكورديون) */}
          <section className="w-full bg-surface-container-low py-space-2xl px-gutter">
            <div className="max-w-[1000px] mx-auto flex flex-col gap-space-xl">
              <div className="text-center flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm text-gold-deep uppercase font-bold tracking-wider">
                  الإيضاحات النظامية والإجرائية
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  الأسئلة الشائعة حول خدمات التحكيم
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  إجابات شاملة ومباشرة على استفسارات المستشارين القانونيين
                  والشركات.
                </p>
              </div>
              {/* Accordion Container */}
              <div className="flex flex-col gap-space-sm" id="arbitration-faq">
                {/* FAQ Item 1 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all faq-item">
                  <button
                    onClick={() => toggleFaq(0)}
                    className="w-full p-space-lg flex items-center justify-between text-right text-primary font-headline-sm text-headline-sm gap-space-md faq-trigger"
                    type="button"
                  >
                    <span>
                      ما هو الأساس القانوني لنفاذ أحكام المركز في الدول الأخرى؟
                    </span>
                    <span
                      className={`material-symbols-outlined text-gold-deep transition-transform duration-200 faq-icon ${
                        openFaqIndex === 0 ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openFaqIndex === 0 ? "400px" : "0px",
                    }}
                    className="faq-content max-h-0 overflow-hidden transition-all duration-300 px-space-lg"
                  >
                    <p className="pb-space-lg font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      تتمتع الأحكام الصادرة تحت مظلة IOADR بنفاذ إلزامي دولي
                      بموجب اتفاقية نيويورك لعام 1958 بشأن الاعتراف بقرارات
                      التحكيم الأجنبية وتنفيذها، والمصادق عليها من قِبل أكثر من
                      172 دولة. تلتزم محاكم الدول الأعضاء بتنفيذ الحكم التحكيمي
                      كسند تنفيذي قضائي دون إعادة النظر في موضوع النزاع.
                    </p>
                  </div>
                </div>
                {/* FAQ Item 2 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all faq-item">
                  <button
                    onClick={() => toggleFaq(1)}
                    className="w-full p-space-lg flex items-center justify-between text-right text-primary font-headline-sm text-headline-sm gap-space-md faq-trigger"
                    type="button"
                  >
                    <span>
                      هل يمكن اللجوء إلى المركز إذا لم يتضمن العقد الأصلي شرط
                      التحكيم؟
                    </span>
                    <span
                      className={`material-symbols-outlined text-gold-deep transition-transform duration-200 faq-icon ${
                        openFaqIndex === 1 ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openFaqIndex === 1 ? "400px" : "0px",
                    }}
                    className="faq-content max-h-0 overflow-hidden transition-all duration-300 px-space-lg"
                  >
                    <p className="pb-space-lg font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      نعم، يمكن للأطراف بعد نشوء الخلاف توقيع «مشارطة تحكيم»
                      (Submission Agreement) مستقلة تُحيل النزاع صراحةً إلى
                      ولاية المكتب الدولي للتحكيم وقواعده الإجرائية، ويوفر
                      المركز نموذجاً قانونياً معتمداً لمشارطة التحكيم لخدمة
                      الأطراف وتوثيق الاتفاق رسمياً.
                    </p>
                  </div>
                </div>
                {/* FAQ Item 3 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all faq-item">
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full p-space-lg flex items-center justify-between text-right text-primary font-headline-sm text-headline-sm gap-space-md faq-trigger"
                    type="button"
                  >
                    <span>
                      كيف تضمن قواعد المركز حياد واستقلال أعضاء هيئة التحكيم؟
                    </span>
                    <span
                      className={`material-symbols-outlined text-gold-deep transition-transform duration-200 faq-icon ${
                        openFaqIndex === 2 ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openFaqIndex === 2 ? "400px" : "0px",
                    }}
                    className="faq-content max-h-0 overflow-hidden transition-all duration-300 px-space-lg"
                  >
                    <p className="pb-space-lg font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      يُلزم كل محكم قبل قبول مهمته بتوقيع إقرار خطي صارم
                      بالإفصاح عن أي علاقة تجارية أو شخصية أو تضارب مصالح سابق
                      أو حالي مع أي من الخصوم، وتطبق أمانة المركز معايير رابطة
                      المحامين الدولية (IBA Guidelines on Conflicts of
                      Interest). ويحق لأي طرف تقديم طلب رد مسبب خلال 14 يوماً من
                      علمه بأي واقعة تخل بالحياد.
                    </p>
                  </div>
                </div>
                {/* FAQ Item 4 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all faq-item">
                  <button
                    onClick={() => toggleFaq(3)}
                    className="w-full p-space-lg flex items-center justify-between text-right text-primary font-headline-sm text-headline-sm gap-space-md faq-trigger"
                    type="button"
                  >
                    <span>
                      ما هي التدابير المتخذة لضمان السرية التامة للمستندات
                      والوقائع؟
                    </span>
                    <span
                      className={`material-symbols-outlined text-gold-deep transition-transform duration-200 faq-icon ${
                        openFaqIndex === 3 ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openFaqIndex === 3 ? "400px" : "0px",
                    }}
                    className="faq-content max-h-0 overflow-hidden transition-all duration-300 px-space-lg"
                  >
                    <p className="pb-space-lg font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      تنص المادة (39) من لائحة المركز على حظر إفشاء أي معلومات
                      أو مذكرات أو جلسات استماع، كما أن كافة الملفات المتبادلة
                      عبر البوابة الرقمية مشفرة ببروتوكولات بنكية معتمدة
                      (End-to-End Encryption). ويوقع كافة الموظفين والمحكمين
                      والخبراء ملحقات سرية صارمة ترتب مسؤولية قانونية مباشرة حال
                      الإخلال.
                    </p>
                  </div>
                </div>
                {/* FAQ Item 5 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all faq-item">
                  <button
                    onClick={() => toggleFaq(4)}
                    className="w-full p-space-lg flex items-center justify-between text-right text-primary font-headline-sm text-headline-sm gap-space-md faq-trigger"
                    type="button"
                  >
                    <span>كيف يتم احتساب أتعاب التحكيم والمصاريف الإدارية؟</span>
                    <span
                      className={`material-symbols-outlined text-gold-deep transition-transform duration-200 faq-icon ${
                        openFaqIndex === 4 ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openFaqIndex === 4 ? "400px" : "0px",
                    }}
                    className="faq-content max-h-0 overflow-hidden transition-all duration-300 px-space-lg"
                  >
                    <p className="pb-space-lg font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      تُحسب التكاليف وفق جدول تصاعدي شفاف ومعلن مبني على قيمة
                      المبلغ محل النزاع وتشكيل الهيئة (محكم فرد أم ثلاثة)، دون
                      مفاجآت أو تقديرات جزافية. كما يمكن للأطراف الاطلاع على
                      الجدول التقديري المسبق واستخدام الحاسبة الإلكترونية قبل
                      إيداع الطلب.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Institutional Assistance Banner */}
          <section className="w-full bg-surface-ivory py-space-xl px-gutter">
            <div className="max-w-[1360px] mx-auto bg-primary text-surface-ivory p-space-xl rounded-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-xl">
              <div className="text-right">
                <h3 className="font-headline-md text-headline-md text-surface-ivory mb-space-xs">
                  هل ترغب في استشارة الأمانة العامة بشأن صياغة شرط التحكيم؟
                </h3>
                <p className="font-body-md text-body-md text-surface-container-high">
                  فريق المستشارين القانونيين بالمركز جاهز لتقديم الدعم الإجرائي
                  والرد على استفساراتكم.
                </p>
              </div>
              <div className="flex items-center gap-space-sm shrink-0">
                <Link
                  className="px-space-xl py-space-sm bg-gold-deep hover:bg-gold-light hover:text-primary text-surface-ivory rounded-lg font-label-lg text-label-lg transition-colors shadow-md"
                  href="/contact"
                >
                  التواصل مع الأمانة العامة
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
                  <a
                    className="hover:text-gold-light transition-colors"
                    data-path="namathij-shorout-al-tahkeem"
                    href="#model-clauses"
                  >
                    النماذج القياسية لشرط التحكيم التعاقدي
                  </a>
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

