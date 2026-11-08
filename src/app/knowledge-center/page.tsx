"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type ClauseType = "standard" | "expedited" | "medarb";

const clausesData: Record<
  ClauseType,
  {
    title: string;
    plainText: string;
  }
> = {
  standard: {
    title: "صيغة الشرط النموذجي (عادي - 3 محكمين)",
    plainText: `"أي نزاع أو خلاف أو مطالبة تنشأ عن هذا العقد أو تتعلق به، أو عن الإخلال به أو إنهائه أو بطلانه، يُسوّى نهائياً عن طريق التحكيم وفقاً للائحة وقواعد التحكيم الصادرة عن المكتب الدولي للتحكيم وتسوية المنازعات (IOADR) السارية في تاريخ بدء الإجراءات.\n\n• تتكون هيئة التحكيم من [ثلاثة محكمين / محكم فرد].\n• يكون مقر التحكيم القانوني هو [مدينة الرياض / جنيف / لندن].\n• تكون اللغة المستخدمة في إجراءات التحكيم هي [اللغة العربية / اللغة الإنجليزية].\n• القانون الحاكم لهذا العقد هو القوانين المعمول بها في [دولة مقر العقد أو الاتفاق المختار]."`
  },
  expedited: {
    title: "صيغة شرط التحكيم المعجل (محكم فرد)",
    plainText: `"أي نزاع أو خلاف ينشأ عن تنفيذ هذا العقد أو تفسيره يُفصل فيه نهائياً بالتحكيم طبقاً لـ (قواعد التحكيم المعجل) الخاصة بالمكتب الدولي للتحكيم وتسوية المنازعات (IOADR).\n\n• يُفصل في النزاع بواسطة [محكم فرد واحد] يُعيّن بالاتفاق بين الطرفين أو من قِبل المكتب الدولي.\n• تصدر هيئة التحكيم حكمها النهائي المنهي للخصومة خلال مدة لا تتجاوز [ستة أشهر] من تاريخ تسليم ملف الدعوى.\n• يكون مقر التحكيم ولغته وفق ما يتفق عليه الطرفان أو تقرره قواعد المكتب الدولي."`
  },
  medarb: {
    title: "صيغة الوساطة المتبوعة بالتحكيم (Med-Arb)",
    plainText: `"في حال حدوث أي نزاع ينشأ عن هذا العقد أو يتصل به، يتفق الطرفان أولاً على محاولة تسوية النزاع ودياً عبر الوساطة المؤسسية وفقاً لقواعد الوساطة المعتمدة لدى المكتب الدولي للتحكيم وتسوية المنازعات (IOADR).\n\n• إذا لم تتم تسوية النزاع بالكامل خلال مدة [45 يوماً] من تاريخ تقديم طلب الوساطة، يُحال النزاع نهائياً إلى التحكيم وفق قواعد التحكيم للمكتب الدولي.\n• لا يجوز لمن باشر الوساطة بصفته وسيطاً أن يتولى مهمة المحكم في النزاع ذاته ما لم يتفق الطرفان صراحة على خلاف ذلك كتابةً."`
  }
};

export default function KnowledgeCenterPage() {
  const [activeClause, setActiveClause] = useState<ClauseType>("standard");
  const [hasSwitchedStandard, setHasSwitchedStandard] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSwitchClause = (type: ClauseType) => {
    setActiveClause(type);
    if (type === "standard") {
      setHasSwitchedStandard(true);
    }
  };

  const handleCopyClause = () => {
    navigator.clipboard.writeText(clausesData[activeClause].plainText).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("تم تسجيل اشتراككم في النشرة المعرفية بنجاح.");
  };

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-surface-ivory">
        <div className="flex flex-col w-full">
          {/* 1. ترويسة رئيسية فخمة: مركز المعرفة والمكتبة القانونية الرقمية */}
          <section className="relative bg-emerald-deepest text-surface-ivory overflow-hidden py-space-2xl px-gutter">
            {/* خلفيات وأشكال هندسية زخرفية ناعمة */}
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
              <svg
                className="w-[1100px] h-[1100px] text-gold-light"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 800 800"
              >
                <circle
                  cx="400"
                  cy="400"
                  r="350"
                  strokeDasharray="6 8"
                  strokeWidth="1.5"
                ></circle>
                <circle cx="400" cy="400" r="280" strokeWidth="1"></circle>
                <polygon
                  points="400,60 740,400 400,740 60,400"
                  strokeWidth="1.5"
                ></polygon>
                <polygon
                  points="400,120 680,400 400,680 120,400"
                  strokeDasharray="4 6"
                  strokeWidth="0.75"
                ></polygon>
              </svg>
            </div>
            <div className="max-w-[1360px] mx-auto relative z-10 flex flex-col items-center text-center">
              {/* شارة الشعار والاعتماد المؤسسي */}
              <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs bg-primary-container/80 rounded-full shadow-sm mb-space-md">
                <span
                  className="material-symbols-outlined text-gold-light text-base"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  menu_book
                </span>
                <span className="font-label-sm text-label-sm text-gold-light tracking-wide">
                  المرجع الأكاديمي والتوثيقي الدولي | IOADR KNOWLEDGE CENTER
                </span>
              </div>
              <h1 className="font-display-hero text-display-hero text-surface-ivory max-w-4xl tracking-tight mb-space-sm">
                مركز المعرفة والمكتبة القانونية الرقمية
              </h1>
              <p className="font-body-lg text-body-lg text-surface-container-high max-w-3xl leading-relaxed mb-space-xl">
                المرجع العلمي والبحثي الشامل في فقه وقضاء التحكيم الدولي، وبدائل
                تسوية المنازعات التجارية والاستثمارية، والسوابق والمبادئ القضائية
                المقارنة.
              </p>
              {/* محرك البحث القانوني المتقدم */}
              <div className="w-full max-w-4xl bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-space-md shadow-xl text-right">
                <form
                  className="flex flex-col gap-space-md"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="flex flex-col md:flex-row items-center gap-space-sm">
                    <div className="relative flex-1 w-full">
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
                        search
                      </span>
                      <input
                        className="w-full pr-12 pl-4 py-3 bg-surface-ivory text-on-surface font-body-md text-body-md rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-all"
                        placeholder="ابحث بالكلمة المفتاحية، رقم المبدأ، اسم الاتفاقية، أو موضوع النزاع (مثال: فيديك، القوة القاهرة، نيويورك 1958)..."
                        type="text"
                      />
                    </div>
                    <button
                      className="w-full md:w-auto px-space-xl py-3 bg-primary text-surface-ivory rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-space-xs hover:bg-primary-container transition-colors shadow-sm"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-gold-light text-lg">
                        manage_search
                      </span>
                      <span>بحث في المكتبة</span>
                    </button>
                  </div>
                  {/* فلاتر الفهرسة المتقدمة */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs">
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
                        نوع المرجع
                      </label>
                      <select className="w-full py-2 px-3 bg-surface-ivory text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none cursor-pointer">
                        <option value="all">كافة أنواع الوثائق</option>
                        <option value="regulations">لوائح وقواعد إجرائية</option>
                        <option value="principles">مبادئ وسوابق تحكيمية</option>
                        <option value="studies">أبحاث ودراسات محكّمة</option>
                        <option value="clauses">شروط تحكيمية نموذجية</option>
                        <option value="treaties">معاهدات واتفاقيات دولية</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
                        قطاع النزاع
                      </label>
                      <select className="w-full py-2 px-3 bg-surface-ivory text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none cursor-pointer">
                        <option value="all">جميع القطاعات</option>
                        <option value="construction">المقاولات وعقود FIDIC</option>
                        <option value="energy">الطاقة والموارد والتعدين</option>
                        <option value="banking">المصارف والاستثمار والتمويل</option>
                        <option value="tech">التقنية والذكاء الاصطناعي</option>
                        <option value="maritime">الملاحة والنقل التجاري</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
                        سنة الإصدار
                      </label>
                      <select className="w-full py-2 px-3 bg-surface-ivory text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none cursor-pointer">
                        <option value="2025">2025 (الأحدث)</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="archive">أرشيف السوابق (1958 - 2022)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
                        لغة المرجع
                      </label>
                      <select className="w-full py-2 px-3 bg-surface-ivory text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none cursor-pointer">
                        <option value="ar">العربية (الأصل)</option>
                        <option value="en">الإنجليزية (English)</option>
                        <option value="bilingual">
                          نسخة ثنائية اللغة (Arabic/English)
                        </option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              {/* مقاييس الأثر والأرقام المؤسسية */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md w-full max-w-4xl mt-space-xl text-center">
                <div className="p-space-md rounded-xl bg-primary-container/40 flex flex-col items-center">
                  <span className="font-display-hero text-headline-lg text-gold-light font-bold">
                    1,500+
                  </span>
                  <span className="font-label-lg text-label-lg text-surface-container-high mt-1">
                    بحث ودراسة مُحكَّمة
                  </span>
                </div>
                <div className="p-space-md rounded-xl bg-primary-container/40 flex flex-col items-center">
                  <span className="font-display-hero text-headline-lg text-gold-light font-bold">
                    85
                  </span>
                  <span className="font-label-lg text-label-lg text-surface-container-high mt-1">
                    دليل إرشادي ولائحة نموذجية
                  </span>
                </div>
                <div className="p-space-md rounded-xl bg-primary-container/40 flex flex-col items-center">
                  <span className="font-display-hero text-headline-lg text-gold-light font-bold">
                    320
                  </span>
                  <span className="font-label-lg text-label-lg text-surface-container-high mt-1">
                    مبدأ تحكيمي مُستخلص
                  </span>
                </div>
                <div className="p-space-md rounded-xl bg-primary-container/40 flex flex-col items-center">
                  <span className="font-display-hero text-headline-lg text-gold-light font-bold">
                    45
                  </span>
                  <span className="font-label-lg text-label-lg text-surface-container-high mt-1">
                    تقريراً سنوياً ومؤشراً قضائياً
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. محاور وتصنيفات مركز المعرفة (Knowledge Categories) */}
          <section className="max-w-[1360px] mx-auto px-gutter py-space-2xl w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
              <div>
                <div className="flex items-center gap-space-xs text-gold-deep mb-space-xs">
                  <span className="material-symbols-outlined text-lg">
                    folder_special
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">
                    الفهرس الموضوعي
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  محاور المكتبة القانونية الرقمية
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-2 md:mt-0">
                أقسام مصنفة وفق المعايير الببليوغرافية الدولية لتيسير مهام هيئات
                التحكيم والمحامين والباحثين المتخصصين.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              {/* بطاقة 1: اللوائح والقواعد الإجرائية */}
              <div className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-emerald-subtle flex items-center justify-center text-status-success mb-space-md group-hover:bg-primary group-hover:text-gold-light transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      gavel
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                    اللوائح والقواعد الإجرائية
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    نصوص قواعد تحكيم IOADR المؤسسية لعام 2025، قواعد الأونسيترال
                    للتحكيم السريع، والإجراءات الطارئة للمحكم الفرد.
                  </p>
                </div>
                <div className="pt-space-md flex items-center justify-between text-gold-deep font-label-lg text-label-lg group-hover:text-primary transition-colors">
                  <span>استعراض 14 لائحة رسمية</span>
                  <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
              {/* بطاقة 2: المبادئ والسوابق التحكيمية المستخلصة */}
              <div className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-emerald-subtle flex items-center justify-center text-status-success mb-space-md group-hover:bg-primary group-hover:text-gold-light transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      account_balance
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                    المبادئ والسوابق المستخلصة
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    مجموعة المبادئ الفنية الصادرة في منازعات حُسمت نهائياً، مع تنقية
                    الأسماء والبيانات المحمية حفاظاً على السرية المصرفية والتعاقدية.
                  </p>
                </div>
                <div className="pt-space-md flex items-center justify-between text-gold-deep font-label-lg text-label-lg group-hover:text-primary transition-colors">
                  <span>تصفح 320 حكماً ومبدأ منزوع الهوية</span>
                  <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
              {/* بطاقة 3: الدراسات والأبحاث المحكمة */}
              <div className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-emerald-subtle flex items-center justify-center text-status-success mb-space-md group-hover:bg-primary group-hover:text-gold-light transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      history_edu
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                    الدراسات والأبحاث المُحكّمة
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    أبحاث أكاديمية رصينة تغطي عقود فيديك FIDIC، عقود استكشاف الغاز
                    والتعدين، ومسائل الاختصاص النوعي والدولي.
                  </p>
                </div>
                <div className="pt-space-md flex items-center justify-between text-gold-deep font-label-lg text-label-lg group-hover:text-primary transition-colors">
                  <span>دخول المستودع العلمي</span>
                  <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
              {/* بطاقة 4: الشروط التحكيمية النموذجية */}
              <div className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-emerald-subtle flex items-center justify-center text-status-success mb-space-md group-hover:bg-primary group-hover:text-gold-light transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      verified
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                    الشروط والبنود النموذجية
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    صيغ مصاغة بعناية قضائية لشرط التحكيم المعتمد وشروط الوساطة
                    المتتالية المتوافقة مع أنظمة التجارة الدولية.
                  </p>
                </div>
                <div className="pt-space-md flex items-center justify-between text-gold-deep font-label-lg text-label-lg group-hover:text-primary transition-colors">
                  <span>دليل الصياغة ونماذج العقود</span>
                  <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
              {/* بطاقة 5: المجلة الدورية للتحكيم الدولي */}
              <div className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-emerald-subtle flex items-center justify-center text-status-success mb-space-md group-hover:bg-primary group-hover:text-gold-light transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      auto_stories
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                    مجلة التحكيم الدولي (IOADR Journal)
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    دورية نصف سنوية محكمة تصدر عن اللجنة العلمية للمكتب بمشاركة كبار
                    قضاة المحاكم العليا وأساتذة القانون الدولي.
                  </p>
                </div>
                <div className="pt-space-md flex items-center justify-between text-gold-deep font-label-lg text-label-lg group-hover:text-primary transition-colors">
                  <span>أعداد المجلة والمقالات المنشورة</span>
                  <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
              {/* بطاقة 6: التشريعات والمعاهدات المقارنة */}
              <div className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-emerald-subtle flex items-center justify-center text-status-success mb-space-md group-hover:bg-primary group-hover:text-gold-light transition-colors">
                    <span className="material-symbols-outlined text-2xl">
                      public
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">
                    الاتفاقيات الدولية والدبلوماسية
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    النصوص المعتمدة لاتفاقية نيويورك 1958، اتفاقية واشنطن لتسوية
                    منازعات الاستثمار (ICSID)، واتفاقية سنغافورة 2019.
                  </p>
                </div>
                <div className="pt-space-md flex items-center justify-between text-gold-deep font-label-lg text-label-lg group-hover:text-primary transition-colors">
                  <span>قاعدة بيانات الاتفاقيات الرسمية</span>
                  <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. قسم مميز: أحدث إصدارات المركز والمجلة العلمية (Featured Publications) */}
          <section className="w-full bg-surface-parchment py-space-2xl px-gutter">
            <div className="max-w-[1360px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-lg">
                <div>
                  <span className="font-label-sm text-label-sm text-gold-deep uppercase">
                    إصدارات العام 2025
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
                    أحدث الأبحاث والدراسات المحكّمة
                  </h2>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-space-sm">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    الوثائق متوفرة للتحميل الكامل بصيغة PDF
                  </span>
                  <span className="material-symbols-outlined text-status-success text-xl">
                    picture_as_pdf
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl mt-space-md">
                {/* الإصدار الأول المميز: الذكاء الاصطناعي في التحكيم */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col md:flex-row gap-space-lg relative overflow-hidden">
                  <div className="w-full md:w-48 h-64 md:h-auto rounded-lg overflow-hidden shrink-0 relative bg-primary flex items-center justify-center p-space-md text-center text-surface-ivory shadow-sm">
                    <img
                      alt="أثر التحول الرقمي وحوكمة الذكاء الاصطناعي"
                      className="w-full h-full object-cover rounded"
                      data-alt="A formal bound academic law journal book titled AI in International Arbitration 2025 with deep emerald cover, ornate golden borders, stamped IOADR emblem, sitting on an antique mahogany law library desk."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLAOdwY-w3cXoaRiGPrXAwfFTIPLDr_r_5PHxY__qYVUWLlxDsJUErVd-lliJG_gtQdxFMXjcJZnBVWVqrBk9L5UfSzwoeJTNXeE3hTbe-Y5NfNsecV8F3cp7rwjgL-jWtnQwEWi_OpoGbanEWEzs4ozZjbLZLgfqnw7BfKvdkWitNV3L2tHfgvdTOmaFAyuL6DW2TivKwaBJLL1qTe4A8Pljed1gfHEg8qv8mvNLr"
                    />
                    <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex flex-col items-center justify-between p-3 pointer-events-none">
                      <span className="font-label-sm text-label-sm text-gold-light">
                        IOADR RESEARCH
                      </span>
                      <span className="material-symbols-outlined text-gold-light text-4xl">
                        menu_book
                      </span>
                      <span className="font-legal-code text-legal-code text-surface-ivory">
                        VOL. XII - 2025
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-subtle text-status-success">
                          بحث محكّم رائد
                        </span>
                        <span className="font-legal-code text-legal-code text-on-surface-variant">
                          ISBN: 978-0-19-923841
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                        أثر التحول الرقمي وحوكمة الذكاء الاصطناعي في إجراءات التحكيم
                        الدولي 2025
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                        دراسة مقارنة تبحث في حجية الأدلة الرقمية، حياد الخوارزميات
                        في تقييم البينات، والضمانات الإجرائية لحق الدفاع وفق قواعد
                        الأونسيترال ونظام التحكيم السعودي الجديد.
                      </p>
                      <div className="text-xs text-on-surface-variant flex flex-wrap gap-x-4 gap-y-1 mb-space-md">
                        <span>
                          <strong>الباحث الرئيسي:</strong> أ.د. عبد العزيز الشمري
                        </span>
                        <span>
                          <strong>الصفحات:</strong> 84 صفحة
                        </span>
                        <span>
                          <strong>التاريخ:</strong> يناير 2025
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm pt-space-sm">
                      <button
                        className="flex-1 py-2.5 px-4 bg-primary text-surface-ivory rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-colors flex items-center justify-center gap-2"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-gold-light text-lg">
                          download
                        </span>
                        <span>تحميل النسخة الكاملة (PDF)</span>
                      </button>
                      <button
                        className="py-2.5 px-4 bg-surface-container text-primary rounded-lg font-label-lg text-label-lg hover:bg-surface-container-high transition-colors"
                        type="button"
                      >
                        قراءة الملخص
                      </button>
                    </div>
                  </div>
                </div>
                {/* الإصدار الثاني المميز: اتفاقية نيويورك */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col md:flex-row gap-space-lg relative overflow-hidden">
                  <div className="w-full md:w-48 h-64 md:h-auto rounded-lg overflow-hidden shrink-0 relative bg-primary flex items-center justify-center p-space-md text-center text-surface-ivory shadow-sm">
                    <img
                      alt="تطبيق اتفاقية نيويورك 1958"
                      className="w-full h-full object-cover rounded"
                      data-alt="An elegant leatherbound treaty report monograph titled New York Convention 1958 Comparative Study with gilded lettering, gold leaf edges, resting in a prestigious sovereign courtroom with soft morning light."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIqcksY15uv4hB5jERupP9t1X_FFT5aroEeJ_yRTYtaghripbtXmc4-w1P2r13AQlbvmOFOQgMh04TgN2o-vFDfnS4Fzo3iFVCpKds7349pRDAVeGeRt51jJ5Z_MijgNRMIamORJT9ovUVgp8S18VFGaljU3r7oiy5XZgV-CcGqU3dDlbry-DqYzI-UMS9wbiRGgmqQzvD5FexkkFVMK2JP27qhQCik0lVnQT9shVX"
                    />
                    <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex flex-col items-center justify-between p-3 pointer-events-none">
                      <span className="font-label-sm text-label-sm text-gold-light">
                        IOADR TREATY REPORT
                      </span>
                      <span className="material-symbols-outlined text-gold-light text-4xl">
                        policy
                      </span>
                      <span className="font-legal-code text-legal-code text-surface-ivory">
                        ANNUAL REVIEW
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-xs font-semibold bg-surface-container text-gold-deep">
                          تقرير قضائي مقارن
                        </span>
                        <span className="font-legal-code text-legal-code text-on-surface-variant">
                          DOC: NYC-COMP-882
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                        تطبيق اتفاقية نيويورك 1958 أمام محاكم التنفيذ في الشرق
                        الأوسط وأوروبا
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                        مسح تحليلي لـ 140 حكماً قضائياً صادراً بشأن إبطال أو تنفيذ
                        أحكام التحكيم الأجنبية، مع التركيز على تفسير استثناء &quot;النظام
                        العام&quot; وحالات رفض النفاذ المعجل.
                      </p>
                      <div className="text-xs text-on-surface-variant flex flex-wrap gap-x-4 gap-y-1 mb-space-md">
                        <span>
                          <strong>إعداد:</strong> فريق الاستشارات القضائية والبحثية
                        </span>
                        <span>
                          <strong>الصفحات:</strong> 112 صفحة
                        </span>
                        <span>
                          <strong>التاريخ:</strong> ديسمبر 2024
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm pt-space-sm">
                      <button
                        className="flex-1 py-2.5 px-4 bg-primary text-surface-ivory rounded-lg font-label-lg text-label-lg hover:bg-primary-container transition-colors flex items-center justify-center gap-2"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-gold-light text-lg">
                          download
                        </span>
                        <span>تحميل التقرير التنفيذي (PDF)</span>
                      </button>
                      <button
                        className="py-2.5 px-4 bg-surface-container text-primary rounded-lg font-label-lg text-label-lg hover:bg-surface-container-high transition-colors"
                        type="button"
                      >
                        قراءة الملخص
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. مدونة المقالات والتحليلات القانونية التخصصية (Expert Insights) */}
          <section className="max-w-[1360px] mx-auto px-gutter py-space-2xl w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
              <div>
                <div className="flex items-center gap-space-xs text-gold-deep mb-space-xs">
                  <span className="material-symbols-outlined text-lg">draw</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">
                    رؤى الخبراء
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  المقالات والتحليلات القانونية التخصصية
                </h2>
              </div>
              <a
                className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-gold-deep transition-colors mt-2 md:mt-0"
                href="#"
              >
                <span>عرض كافة المقالات (68 مقالاً)</span>
                <span className="material-symbols-outlined text-base">
                  arrow_back
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {/* مقال 1 */}
              <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-full h-48 relative overflow-hidden bg-surface-dim">
                    <img
                      alt="مجالس فض المنازعات (DAB)"
                      className="w-full h-full object-cover"
                      data-alt="A dignified international construction arbitration hearing scene with senior engineers and legal counsel reviewing architectural blueprints across a polished boardroom table."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvmN0ahSqCFPWFZp06bGYmkURIrb-6QBVkMJb1x0NVjJDkhk8uXFGZAae6n64WWdigXUcWn9BGJO4blCt-pjvvt6f8iKB8rugLRYVFW4JHBvdGPA-EulfgHyhNHE2W_jqjEfMwqf5n4hJ7q77ZWVUClDtruNjBXjbH00QIukrK_RQZ4RCW4M1EeKSjdUoeLuvy6_TSEFxi7C0xanqgspUpk3_N3XQRNTrgbJNFdBJS"
                    />
                    <div className="absolute top-3 right-3 bg-emerald-deepest/90 text-gold-light text-xs font-semibold px-2.5 py-1 rounded">
                      عقود التشييد FIDIC
                    </div>
                  </div>
                  <div className="p-space-md">
                    <div className="flex items-center justify-between text-xs text-on-surface-variant mb-2 font-legal-code">
                      <span>قراءة: 7 دقائق</span>
                      <span>18 يناير 2025</span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-2 hover:text-gold-deep transition-colors cursor-pointer">
                      مجالس فض المنازعات (DAB) في عقود فيديك 2017: طبيعتها القانونية
                      وإلزامية قراراتها
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-space-md leading-relaxed">
                      تحليل للأثر القانوني لقرارات مجلس فض النزاع قبل اللجوء للتحكيم
                      النهائي، والتفرقة بين القرارات الملزمة مؤقتاً وتلك التي تكتسب
                      قوة الأمر المقضي به.
                    </p>
                  </div>
                </div>
                <div className="p-space-md pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-xs text-primary">
                      م.ع
                    </div>
                    <div className="text-right">
                      <span className="block font-label-sm text-label-sm text-primary font-semibold">
                        المستشار محمد العلياني
                      </span>
                      <span className="block text-xs text-on-surface-variant">
                        محكم معتمد في عقود البنية التحتية
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary hover:text-gold-deep cursor-pointer">
                    bookmark_border
                  </span>
                </div>
              </article>
              {/* مقال 2 */}
              <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-full h-48 relative overflow-hidden bg-surface-dim">
                    <img
                      alt="شرط الثبات التشريعي"
                      className="w-full h-full object-cover"
                      data-alt="A distinguished international commercial lawyer examining banking financial charts and energy concession documents under warm executive desk lighting."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2sb8LTxvzkFqXCTYyJynDyLw8uLOCzniWhUc4Ytpe6Z8NcFbtVyDt8pzvMheBbnClT4FNrfV7s1ffJdwDkdT6Yld445KF5rf091i-cHJzFi08TV0GLfnh3McXKAVR6feMIjbB3gQyK8KCjY-tGTiOARLbPp-AWj8UK1_jFmFS27EMv4NhFaZabUICKkhKc7CNAUgD__wIRjwnk-IKiiO30kPdw_6j0TDYhLX3OgZn"
                    />
                    <div className="absolute top-3 right-3 bg-emerald-deepest/90 text-gold-light text-xs font-semibold px-2.5 py-1 rounded">
                      نزاعات الطاقة والتعدين
                    </div>
                  </div>
                  <div className="p-space-md">
                    <div className="flex items-center justify-between text-xs text-on-surface-variant mb-2 font-legal-code">
                      <span>قراءة: 10 دقائق</span>
                      <span>12 يناير 2025</span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-2 hover:text-gold-deep transition-colors cursor-pointer">
                      شرط الثبات التشريعي في عقود امتياز النفط والطاقة النظيفة
                      وتطبيقاته التحكيمية
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-space-md leading-relaxed">
                      توازن المصالح بين سيادة الدولة المضيفة للاستثمار في تعديل
                      تشريعات البيئة والتعدين وحق المستثمر الأجنبي في التعويض العادل
                      بموجب معاهدات الاستثمار الثنائية.
                    </p>
                  </div>
                </div>
                <div className="p-space-md pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-xs text-primary">
                      د.س
                    </div>
                    <div className="text-right">
                      <span className="block font-label-sm text-label-sm text-primary font-semibold">
                        د. سارة المنصور
                      </span>
                      <span className="block text-xs text-on-surface-variant">
                        أستاذة القانون الاقتصادي الدولي
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary hover:text-gold-deep cursor-pointer">
                    bookmark_border
                  </span>
                </div>
              </article>
              {/* مقال 3 */}
              <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-full h-48 relative overflow-hidden bg-surface-dim">
                    <img
                      alt="تفعيل اتفاقية سنغافورة للوساطة 2019"
                      className="w-full h-full object-cover"
                      data-alt="A modern diplomatic meeting room with delegates from various countries resolving commercial disputes calmly under classical architectural moldings and flags."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuArqixrdgH3h-hTfh_PZKSxxMTxNFR6Zh6uN2vahGBeb3-ErhA-_OEPeexe2LGHAGxQ8lEbwc7T6nRz-vHH7OTCXuMewn_iJHeI2e3AodBrPfrds4MHapaG0xarX9TfSlPxWoa3GdCalDCHvZmdEp5oHbCdSrNNp3YST3s7b364KRMjimVzIg7VmsRrIxsfrnOFEIWv6s0gDY1Gflu03u0N4gW8ZH0QybA5nMyZ1WlA"
                    />
                    <div className="absolute top-3 right-3 bg-emerald-deepest/90 text-gold-light text-xs font-semibold px-2.5 py-1 rounded">
                      الوساطة الدولية
                    </div>
                  </div>
                  <div className="p-space-md">
                    <div className="flex items-center justify-between text-xs text-on-surface-variant mb-2 font-legal-code">
                      <span>قراءة: 6 دقائق</span>
                      <span>05 يناير 2025</span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-2 hover:text-gold-deep transition-colors cursor-pointer">
                      تفعيل اتفاقية سنغافورة للوساطة 2019: نحو بيئة تنفيذ ميسرة
                      للتسويات التجارية
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-space-md leading-relaxed">
                      كيف استطاعت اتفاقية سنغافورة منح اتفاقيات التسوية الناتجة عن
                      الوساطة صفة السند التنفيذي المباشر أمام المحاكم دون الحاجة
                      لرفع دعوى مستقلة.
                    </p>
                  </div>
                </div>
                <div className="p-space-md pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-xs text-primary">
                      ق.ط
                    </div>
                    <div className="text-right">
                      <span className="block font-label-sm text-label-sm text-primary font-semibold">
                        القاضي السابق طارق فهمي
                      </span>
                      <span className="block text-xs text-on-surface-variant">
                        عضو المجلس الاستشاري للوساطة
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary hover:text-gold-deep cursor-pointer">
                    bookmark_border
                  </span>
                </div>
              </article>
            </div>
          </section>

          {/* 5. دليل صياغة شروط ومشارطات التحكيم التفاعلي (Arbitration Clause Drafting Guide) */}
          <section className="max-w-[1360px] mx-auto px-gutter py-space-2xl w-full">
            <div className="bg-surface-container-low rounded-2xl p-space-xl">
              <div className="flex flex-col lg:flex-row gap-space-xl items-start">
                <div className="w-full lg:w-5/12">
                  <div className="flex items-center gap-space-xs text-gold-deep mb-2">
                    <span className="material-symbols-outlined text-lg">
                      edit_note
                    </span>
                    <span className="font-label-sm text-label-sm uppercase">
                      أداة الممارس القانوني
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-space-sm">
                    دليل صياغة شرط التحكيم المؤسسي المعتمد
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                    يُوصى بإدراج هذا الشرط النموذجي في كافة العقود التجارية
                    والاتفاقيات الاستثمارية عبر الحدود لتفادي المنازعات القضائية
                    المعقدة وضمان سرعة الفصل وسرية الإجراءات وفق قواعد المكتب الدولي
                    (IOADR).
                  </p>
                  <div className="flex flex-col gap-space-xs text-body-sm text-on-surface">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-status-success text-base">
                        check_circle
                      </span>
                      <span>يمنع الدفع بعدم الاختصاص أو غموض مقر التحكيم.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-status-success text-base">
                        check_circle
                      </span>
                      <span>يحدد بدقة القانون الواجب التطبيق ولغة التداول.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-status-success text-base">
                        check_circle
                      </span>
                      <span>
                        متوافق كلياً مع متطلبات اتفاقية نيويورك 1958 للتنفيذ الدولي.
                      </span>
                    </div>
                  </div>
                  {/* تبديل نوع الشرط */}
                  <div className="flex gap-2 mt-space-lg" id="clause-tabs">
                    <button
                      className={`px-4 py-2 rounded font-label-sm text-label-sm transition-colors ${
                        activeClause === "standard"
                          ? "bg-primary text-surface-ivory"
                          : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                      }`}
                      id="btn-standard"
                      onClick={() => handleSwitchClause("standard")}
                      type="button"
                    >
                      الشرط القياسي الثلاثي
                    </button>
                    <button
                      className={`px-4 py-2 rounded font-label-sm text-label-sm transition-colors ${
                        activeClause === "expedited"
                          ? "bg-primary text-surface-ivory"
                          : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                      }`}
                      id="btn-expedited"
                      onClick={() => handleSwitchClause("expedited")}
                      type="button"
                    >
                      التحكيم المعجل (محكم فرد)
                    </button>
                    <button
                      className={`px-4 py-2 rounded font-label-sm text-label-sm transition-colors ${
                        activeClause === "medarb"
                          ? "bg-primary text-surface-ivory"
                          : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                      }`}
                      id="btn-medarb"
                      onClick={() => handleSwitchClause("medarb")}
                      type="button"
                    >
                      الوساطة المتبوعة بالتحكيم
                    </button>
                  </div>
                </div>
                {/* صندوق عرض الشرط ونسخه */}
                <div className="w-full lg:w-7/12 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                  <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gold-light"></span>
                      <span
                        className="font-headline-sm text-headline-sm text-primary"
                        id="clause-title"
                      >
                        {clausesData[activeClause].title}
                      </span>
                    </div>
                    <button
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-subtle text-status-success rounded text-xs font-semibold hover:bg-primary hover:text-surface-ivory transition-colors"
                      onClick={handleCopyClause}
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined text-sm"
                        id="copy-icon"
                      >
                        {copied ? "done" : "content_copy"}
                      </span>
                      <span id="copy-text">
                        {copied ? "تم النسخ بنجاح!" : "نسخ النص التعاقدي"}
                      </span>
                    </button>
                  </div>
                  {/* نص الشرط التعاقدي القانوني */}
                  <div
                    className="p-space-md bg-surface-ivory rounded-lg text-primary font-body-md text-body-md leading-loose mb-space-md"
                    id="clause-content"
                  >
                    {activeClause === "standard" && (
                      <>
                        &quot;أي نزاع أو خلاف أو مطالبة تنشأ عن هذا العقد أو تتعلق به، أو
                        عن الإخلال به أو إنهائه أو بطلانه، يُسوّى نهائياً عن طريق
                        التحكيم وفقاً للائحة وقواعد التحكيم الصادرة عن المكتب الدولي
                        للتحكيم وتسوية المنازعات (IOADR) السارية في تاريخ بدء
                        الإجراءات.
                        <br />
                        <br />
                        • تتكون هيئة التحكيم من{" "}
                        {hasSwitchedStandard
                          ? "[ثلاثة محكمين]."
                          : "[ثلاثة محكمين / محكم فرد]."}
                        <br />
                        • يكون مقر التحكيم القانوني هو [مدينة الرياض / جنيف / لندن].
                        <br />
                        • تكون اللغة المستخدمة في إجراءات التحكيم هي [اللغة العربية /
                        اللغة الإنجليزية].
                        <br />
                        • القانون الحاكم لهذا العقد هو القوانين المعمول بها في [دولة
                        مقر العقد أو الاتفاق المختار].&quot;
                      </>
                    )}
                    {activeClause === "expedited" && (
                      <>
                        &quot;أي نزاع أو خلاف ينشأ عن تنفيذ هذا العقد أو تفسيره يُفصل فيه
                        نهائياً بالتحكيم طبقاً لـ (قواعد التحكيم المعجل) الخاصة
                        بالمكتب الدولي للتحكيم وتسوية المنازعات (IOADR).
                        <br />
                        <br />
                        • يُفصل في النزاع بواسطة [محكم فرد واحد] يُعيّن بالاتفاق بين
                        الطرفين أو من قِبل المكتب الدولي.
                        <br />
                        • تصدر هيئة التحكيم حكمها النهائي المنهي للخصومة خلال مدة لا
                        تتجاوز [ستة أشهر] من تاريخ تسليم ملف الدعوى.
                        <br />
                        • يكون مقر التحكيم ولغته وفق ما يتفق عليه الطرفان أو تقرره
                        قواعد المكتب الدولي.&quot;
                      </>
                    )}
                    {activeClause === "medarb" && (
                      <>
                        &quot;في حال حدوث أي نزاع ينشأ عن هذا العقد أو يتصل به، يتفق
                        الطرفان أولاً على محاولة تسوية النزاع ودياً عبر الوساطة
                        المؤسسية وفقاً لقواعد الوساطة المعتمدة لدى المكتب الدولي
                        للتحكيم وتسوية المنازعات (IOADR).
                        <br />
                        <br />
                        • إذا لم تتم تسوية النزاع بالكامل خلال مدة [45 يوماً] من تاريخ
                        تقديم طلب الوساطة، يُحال النزاع نهائياً إلى التحكيم وفق قواعد
                        التحكيم للمكتب الدولي.
                        <br />
                        • لا يجوز لمن باشر الوساطة بصفته وسيطاً أن يتولى مهمة المحكم في
                        النزاع ذاته ما لم يتفق الطرفان صراحة على خلاف ذلك كتابةً.&quot;
                      </>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm text-xs text-on-surface-variant font-legal-code">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-gold-deep text-sm">
                        verified_user
                      </span>
                      معتمد ومُراجع من قِبل اللجنة الفنية الدائمة
                    </span>
                    <a className="text-gold-deep hover:underline" href="#">
                      تحميل ملحق إرشادات التخصيص والصياغة (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. ركن التشريعات والاتفاقيات الدولية (International Conventions & Treaties) */}
          <section className="max-w-[1360px] mx-auto px-gutter py-space-2xl w-full">
            <div className="text-center max-w-2xl mx-auto mb-space-xl">
              <span className="font-label-sm text-label-sm text-gold-deep uppercase">
                المصادر الرسمية العالمية
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
                ركن الاتفاقيات والأنظمة الدولية
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                النصوص الرسمية المعتمدة للاتفاقيات الدولية المنظمة للتحكيم التجاري،
                والوساطة، وتنفيذ أحكام المحكمين الأجنبية.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {/* اتفاقية نيويورك */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="material-symbols-outlined text-3xl text-gold-deep">
                      public
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-subtle text-status-success font-legal-code">
                      172 دولة مصادقة
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary mb-2">
                    اتفاقية نيويورك لعام 1958
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                    اتفاقية الاعتراف بقرارات التحكيم الأجنبية وتنفيذها، الركيزة
                    الأساسية لنفاذ أحكام المحكمين عبر الحدود دون إعادة فحص النزاع
                    موضوعياً.
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-space-sm">
                  <a
                    className="flex-1 text-center py-2 px-3 bg-surface-container hover:bg-primary hover:text-surface-ivory rounded font-label-sm text-label-sm text-primary transition-colors flex items-center justify-center gap-1"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-sm">
                      download
                    </span>
                    <span>النص العربي الرسمي</span>
                  </a>
                  <a
                    className="text-center py-2 px-3 bg-surface-container-low hover:bg-surface-container-high rounded font-label-sm text-label-sm text-on-surface transition-colors"
                    href="#"
                  >
                    EN
                  </a>
                </div>
              </div>
              {/* قانون الأونسيترال النموذجي */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="material-symbols-outlined text-3xl text-gold-deep">
                      gavel
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-subtle text-status-success font-legal-code">
                      UNCITRAL 2006
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary mb-2">
                    قانون الأونسيترال النموذجي
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                    قانون التحكيم التجاري الدولي النموذجي الصادر عن لجنة الأمم
                    المتحدة للقانون التجاري الدولي بصيغته المعدلة، والمعتمد في
                    الأنظمة الوطنية.
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-space-sm">
                  <a
                    className="flex-1 text-center py-2 px-3 bg-surface-container hover:bg-primary hover:text-surface-ivory rounded font-label-sm text-label-sm text-primary transition-colors flex items-center justify-center gap-1"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-sm">
                      download
                    </span>
                    <span>النص العربي الرسمي</span>
                  </a>
                  <a
                    className="text-center py-2 px-3 bg-surface-container-low hover:bg-surface-container-high rounded font-label-sm text-label-sm text-on-surface transition-colors"
                    href="#"
                  >
                    EN
                  </a>
                </div>
              </div>
              {/* اتفاقية سنغافورة للوساطة */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="material-symbols-outlined text-3xl text-gold-deep">
                      handshake
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-subtle text-status-success font-legal-code">
                      Singapore 2019
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary mb-2">
                    اتفاقية سنغافورة بشأن الوساطة
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                    اتفاقية الأمم المتحدة بشأن اتفاقات التسوية الدولية المنبثقة من
                    الوساطة، وتمنح اتفاقات الصلح التجارية قوة السندات القضائية
                    التنفيذية.
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-space-sm">
                  <a
                    className="flex-1 text-center py-2 px-3 bg-surface-container hover:bg-primary hover:text-surface-ivory rounded font-label-sm text-label-sm text-primary transition-colors flex items-center justify-center gap-1"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-sm">
                      download
                    </span>
                    <span>النص العربي الرسمي</span>
                  </a>
                  <a
                    className="text-center py-2 px-3 bg-surface-container-low hover:bg-surface-container-high rounded font-label-sm text-label-sm text-on-surface transition-colors"
                    href="#"
                  >
                    EN
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 7. النشرة البريدية البحثية وطلب الانضمام للهيئة التحريرية (Newsletter & Call for Papers) */}
          <section className="max-w-[1360px] mx-auto px-gutter pb-space-2xl w-full">
            <div className="bg-emerald-deepest rounded-2xl p-space-xl text-surface-ivory shadow-xl relative overflow-hidden">
              {/* عناصر ديكور ذهبية خفيفة */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gold-light/5 pointer-events-none"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl relative z-10 items-center">
                {/* قسم النشرة البريدية */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-gold-light mb-2">
                    <span className="material-symbols-outlined text-lg">
                      mark_email_read
                    </span>
                    <span className="font-label-sm text-label-sm tracking-wider uppercase">
                      النشرة المعرفية المتخصصة
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-surface-ivory mb-2">
                    ابقَ على اطلاع بأحدث السوابق والتحليلات القضائية
                  </h3>
                  <p className="font-body-md text-body-md text-surface-container-high mb-space-lg leading-relaxed max-w-xl">
                    اشترك في النشرة الشهرية الصادرة عن المكتب الدولي للتحكيم (IOADR)
                    لتلقي ملخصات المبادئ التحكيمية الجديدة، تقارير النزاعات
                    المقارنة، والفعاليات والمحاضرات القانونية المعتمدة.
                  </p>
                  <form
                    className="flex flex-col sm:flex-row items-center gap-space-sm max-w-lg"
                    onSubmit={handleNewsletterSubmit}
                  >
                    <input
                      className="w-full px-4 py-3 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none"
                      placeholder="أدخل بريدك الإلكتروني المؤسسي..."
                      required
                      type="email"
                    />
                    <button
                      className="w-full sm:w-auto px-6 py-3 bg-gold-deep text-surface-ivory hover:bg-gold-light hover:text-emerald-deepest rounded-lg font-label-lg text-label-lg whitespace-nowrap transition-colors shadow-sm"
                      type="submit"
                    >
                      اشتراك فوري
                    </button>
                  </form>
                  <span className="text-xs text-surface-container-high mt-2 font-legal-code">
                    نلتزم بالسرية التامة وعدم إرسال أي رسائل ترويجية غير قانونية.
                  </span>
                </div>
                {/* قسم دعوة الباحثين لنشر الأوراق العلمية (Call for Papers) */}
                <div className="lg:col-span-5 bg-primary-container p-space-lg rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded text-xs font-semibold bg-emerald-subtle text-status-success font-label-sm">
                        دعوة لتقديم الأوراق العلمية 2025
                      </span>
                      <span className="material-symbols-outlined text-gold-light text-2xl">
                        campaign
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-surface-ivory mb-2">
                      انشر بحثك في مجلة التحكيم الدولي
                    </h4>
                    <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed mb-space-md">
                      تدعو الهيئة التحريرية الباحثين والمحكمين وأساتذة كليات الحقوق
                      لتقديم أوراقهم العلمية الأصيلة ومراجعاتهم القضائية للنشر في
                      العدد القادم لعام 2025.
                    </p>
                    <ul className="text-xs text-surface-container flex flex-col gap-1.5 mb-space-md">
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-gold-light text-sm">
                          check
                        </span>
                        <span>
                          تحكيم علمي مزدوج ومعتمد من كبار الخبراء الدوليين.
                        </span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-gold-light text-sm">
                          check
                        </span>
                        <span>
                          فهرسة دولية وإيداع في قواعد البيانات الحقوقية.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="w-full py-2.5 px-4 bg-surface-container-lowest text-primary hover:bg-gold-light hover:text-emerald-deepest rounded-lg font-label-lg text-label-lg text-center transition-colors shadow-sm"
                    href="#"
                  >
                    تقديم مقترح ورقة بحثية
                  </a>
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

